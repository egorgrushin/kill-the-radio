import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { EditorComponent, EditorContext } from '../../tree/editor/editor.component';
import { Subscription } from 'rxjs/Subscription';
import { ModalService } from '../../core/modal.service';
import { ILoadingState } from 'mts-store';
import { Transitions } from '../../core/domain/entities/transitions';
import { States } from '../../core/domain/entities/states/states';
import { Scenarios } from '../../core/domain/entities/scenarios';
import { ScenarioView } from '../../core/domain/views/scenario-view';
import { DialogTypes } from '../../core/domain/entities/dialog-types';
import { BaseComponent } from '../../core/base.component';

@Component({
	selector: 'scenarios-details',
	templateUrl: './scenarios-details.component.html',
	styleUrls: ['./scenarios-details.component.scss'],
})
export class ScenariosDetailsComponent extends BaseComponent implements OnInit, OnDestroy {
	dialogTypes: any;
	scenarioLs: any;
	rootState: any;
	states: any;
	transitions: any;
	scenario: any;
	scenarioCopy: any;
	editMode: boolean;
	loadingState: ILoadingState = {};

	constructor(
		public modalService: ModalService,
		private route: ActivatedRoute) { super(); }

	add($event) {
		// case of an transition adding from state (node)
		let entity;
		let entityType;
		if ($event.node) {
			entityType = Transitions;
			entity = {
				fromStateId: $event.node.id,
				scenarioId: this.scenario.id,
				message: '',
				priority: 50,
				transitionRequirements: '',
				transitionDataJson: '{}',
			};
		}
		// case of an state adding as toStateId to transition (edge)
		if ($event.edge) {
			entityType = States;
			entity = {
				fromTransitionId: $event.edge.id,
				scenarioId: this.scenario.id,
				dialogDataJson: '{}',
			};
		}
		const context = this.createContext(entity, entityType);
		this.open(context);
	}

	edit($event) {
		const entityType = this.getEntityType($event);
		const entity = $event.node || $event.edge;
		const context = this.createContext(entity, entityType);
		this.open(context);
	}

	remove($event) {
		this.modalService.confirm('Удаление', 'Вы уверены, что хотите удалить?')
			.then(() => {
				const entityType = this.getEntityType($event);
				const entity = $event.node || $event.edge;
				let obs = entityType.remove(entity.id);
				if (entityType === States) {
					// update relative transitions without push
					obs = obs.switchMap(() => {
						const relativeTransitions = this.transitions
							.filter(t => t.fromStateId === entity.id || t.toStateId === entity.id);
						return Observable.merge(
							relativeTransitions.map(transition =>
								Transitions.update(transition.id, {
									toStateId: this.rootState.id,
								}, { local: true })));
					});
				}
				obs.subscribe();
			})
			.catch(() => { });

	}

	ngOnInit(): void {
		this.loadingState = { isLoading: true };
		const sub = this.route.paramMap.map(p => p.get('id'))
			.switchMap((id: string) => {
				const filter = { scenarioId: +id };
				// Silent loading of entities
				ScenarioView.get({ id }).subscribe(() => {
					this.loadingState.isLoading = false;
				});
				return Observable.combineLatest(
					// scenario
					Scenarios.getById(id),
					// transitions
					Transitions.find(filter),
					// states
					Observable.combineLatest(
						// states for this scenario
						States.find(filter),
						States.find({ dialogType: 9 }),
						(states: any[], initialStates: any[]) =>
							states.concat(initialStates),
						// states for initial scenario
						// Observable.combineLatest(
						// 	// request all scenarios to find initial
						// 	// make change in scenario to not update states reference
						// 	// Scenarios.find({ title: 'Initial' })
						// 	// 	.map(scenarios => scenarios[0])
						// 	// 	.distinctUntilChanged(),
						// 	States.find({}),
						// 	(initialScenario: any, states: any[]) => {
						// 		if (!initialScenario) return [];
						// 		return states.filter(state => state.scenarioId === initialScenario.id);
						// 	},
						// ),
						// concat scenario's states and initial states for using one array in subscribe
						// (states: any[], initialStates: any[]) => states.concat(initialStates),
					),
					// scenarioLs
					Scenarios.getStateById(id),
					DialogTypes.find({}),
				);
			})
			.subscribe(([scenario, transitions, states, scenarioLs, dialogTypes]: any) => {
				this.scenario = scenario;
				this.scenarioLs = scenarioLs;
				this.transitions = transitions;
				this.states = states;
				this.dialogTypes = dialogTypes;
				this.rootState = states.find(state => state.title === 'InitialState');
			});
		this.subscriptions.push(sub);
	}

	toggleEditMode(toEnable: boolean) {
		this.scenarioCopy = toEnable ? { ...this.scenario } : null;
		this.editMode = toEnable;
	}

	updateScenario() {
		Scenarios.update(this.scenario.id, { ...this.scenarioCopy });
		this.toggleEditMode(false);
	}

	private getEntityType(event) {
		return event.node ? States : event.edge ? Transitions : null;
	}

	private createContext(entity, entityType) {
		return {
			size: 'lg',
			entityType,
			entity,
			backpack: {
				states: this.states.map(state => ({ id: state.id, text: state.title })),
				dialogTypes: this.dialogTypes,
			},
		};
	}

	private open(context) {
		return this.modalService.open(EditorComponent, context, EditorContext)
			.then(dialogRef => dialogRef.result)
			.catch(() => { });
	}
}
