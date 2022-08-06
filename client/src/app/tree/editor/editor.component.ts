import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/take';
import { isNil } from 'lodash';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { BaseComponent } from '../../core/base.component';
import { Entity, ILoadingState } from 'mts-store';
import { States } from '../../core/domain/entities/states/states';
import { Transitions } from '../../core/domain/entities/transitions';
import { TransitionExamples } from '../../core/domain/entities/transition-examples';
import { TransitionKeywords } from '../../core/domain/entities/transition-keywords';
import { ModalService } from '../../core/modal.service';

export class EditorContext extends BSModalContext {
	constructor(public entity: any, public entityType: Entity, public backpack: any) {
		super();
	}
}

@Component({
	selector: 'editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
})

export class EditorComponent extends BaseComponent implements OnInit, OnDestroy, ModalComponent<EditorContext> {
	@ViewChild('thisForm') thisForm: NgForm;
	form: FormGroup;
	rules: any;
	transitionExamples: any[];
	transitionKeywords: any[];
	entity: any;
	node: any;
	edge: any;
	loadingState: ILoadingState = {};
	context: EditorContext;
	states: any[];
	dialogTypes: any[];
	private entityType: Entity;
	private newExample: any = {};
	private newKeyword: any = {};

	constructor(
		public dialog: DialogRef<EditorContext>,
		public modalService: ModalService,
		private fb: FormBuilder) {
		super();
		this.context = dialog.context;
		this.entity = { ...this.context.entity };
		this.entityType = this.context.entityType;
		this.states = this.context.backpack.states;
		this.states.push({ text: 'Создать новое...' });
		this.dialogTypes = this.context.backpack.dialogTypes;
		if (this.entity.toStateId && this.states) {
			this.entity.toStates = this.states
				.filter(state => state.id === this.entity.toStateId);
		}
		if (this.entity.dialogType) {
			const dialogType = this.dialogTypes.find(d => d.id === this.entity.dialogType);
			this.entity.dialogTypes = [dialogType];
		}
		this.createForm(this.entity);
	}

	createForm(entity) {
		if (this.entityType === Transitions) {
			this.form = this.fb.group({
				priority: [entity.priority],
				title: [entity.title],
				transitionRequirements: [entity.transitionRequirements],
				transitionDataJson: [entity.transitionDataJson],
				message: [entity.message],
				fromStateId: [entity.fromStateId],
				toStateId: [entity.toStateId],
				scenarioId: [entity.scenarioId],
			});
		}
		if (this.entityType === States) {
			this.form = this.fb.group({
				title: [entity.title, Validators.required],
				message: [entity.message],
				dialogType: [entity.dialogType],
				dialogDataJson: [entity.dialogDataJson],
				scenarioId: [entity.scenarioId],
				fromTransitionId: [entity.fromTransitionId],
			});
		}
	}

	onDialogTypeSelect($event) {
		this.form.controls.dialogType.setValue($event.item.id);
		this.entity.dialogTypes = [$event.item];
	}

	onToStateSelect($event) {
		let toState = $event.item;
		if (isNil(toState.id)) {
			return this.openStateCreating().then((response) => {
				toState = { id: response.data.id, text: response.data.title };
				this.states = [toState].concat(this.states);
				this.setState(toState);
			}).catch(() => {
				const lastState = this.entity.toStates ? this.entity.toStates[0] : null;
				this.setState(lastState);
			});
		}
		this.setState(toState);
	}

	cancel() {
		this.dialog.dismiss();
	}

	submit() {
		this.validateAndSubmit(this.form).then(() => {
			this.ok();
		});
	}

	ok() {
		let obs;
		const entityToSend = this.form.value;
		entityToSend.id = this.entity.id;
		if (!isNil(entityToSend.id)) {
			obs = this.entityType.update(entityToSend.id, entityToSend, { isOptimistic: false });
		} else {
			obs = this.entityType.create(entityToSend, { isOptimistic: false });
			if (this.entityType === States && !isNil(entityToSend.fromTransitionId)) {
				obs = obs.switchMap(response =>
					Transitions.update(entityToSend.fromTransitionId, {
						toStateId: response.data.id,
					}, { local: true }));
			}
		}
		obs.subscribe((response) => {
			this.dialog.close(response);
		});
	}

	deleteExample(example) {
		TransitionExamples.remove(example.id);
	}

	addExample(newExample) {
		if (!newExample.example) return;
		TransitionExamples.create(newExample);
		newExample.example = null;
	}

	addKeyword(newKeyword) {
		if (!newKeyword.keyword) return;
		TransitionKeywords.create(newKeyword);
		newKeyword.keyword = null;
	}

	deleteKeyword(keyword) {
		TransitionKeywords.remove(keyword.id);
	}

	ngOnInit() {
		if (this.entityType === Transitions) {
			this.newExample = { transitionId: this.entity.id };
			this.newKeyword = { transitionId: this.entity.id };
			const examplesSubs = TransitionExamples.find({ transitionId: this.entity.id })
				.subscribe((examples: any[]) => {
					this.transitionExamples = examples;
				});
			const keywordsSubs = TransitionKeywords.find({ transitionId: this.entity.id })
				.subscribe((keywords: any[]) => {
					this.transitionKeywords = keywords;
				});
			this.subscriptions.push(keywordsSubs, examplesSubs);
		}
		const loadingStateObs = this.entity.id
			? this.entityType.getStateById(this.entity.id)
			: this.entityType.getState();
		const validationRulesSubs = this.entityType.getValidationRules()
			.subscribe(rules => {
				this.setValidationRules(this.form, rules.rules);
			});
		const loadingStateSubs = loadingStateObs.subscribe(loadingState => {
			this.loadingState = loadingState;
		});
		this.subscriptions.push(loadingStateSubs, validationRulesSubs);
	}

	private setState(state) {
		if (state) {
			this.form.controls.toStateId.setValue(state.id);
			this.entity.toStates = [state];
		} else {
			this.form.controls.toStateId.setValue(null);
			this.entity.toStates = [];
		}
	}

	private openStateCreating() {
		const entityType = States;
		const entity = {
			scenarioId: this.entity.scenarioId,
			dialogDataJson: '{}',
		};
		const context = this.createContext(entity, entityType);
		return this.open(context);
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
			.then(dialogRef => dialogRef.result);
	}

}
