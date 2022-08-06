import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { values } from 'lodash';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/forkJoin';
import { ModalService } from '../../core/modal.service';
import { BaseComponent } from '../../core/base.component';
import { ILoadingState } from 'mts-store';
import { Scenarios } from '../../core/domain/entities/scenarios';

@Component({
	selector: 'scenarios',
	templateUrl: './scenarios.component.html',
	styleUrls: ['./scenarios.component.scss'],
})
export class ScenariosComponent extends BaseComponent {
	loadingState: ILoadingState = {};
	scenarios: any[];

	constructor(
		private route: ActivatedRoute,
		private modalService: ModalService,
		private router: Router) { super(); }

	add() {
		Scenarios.create({ title: 'Новый сценарий' }, { isOptimistic: false })
			.subscribe((res) => {
				this.router.navigate([res.data.id], { relativeTo: this.route });
			});
	}

	edit(scenario) {
		this.router.navigate([scenario.id], { relativeTo: this.route });
	}

	delete(scenario) {
		this.modalService.confirm('Удаление', 'Вы уверены, что хотите удалить?')
			.then(() => {
				Scenarios.remove(scenario.id);
			})
			.catch(() => {});
	}

	ngOnInit(): void {
		const scenariosSubs = Scenarios.find({}, { local: false })
			.subscribe((scenarios) => {
				this.scenarios = scenarios;
			});
		const loadsSubs = Scenarios.getState()
			.subscribe((loadingState) => {
				this.loadingState = loadingState;
			});
		this.subscriptions.push(scenariosSubs, loadsSubs);
	}

}
