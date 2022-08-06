import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/take';
import { BaseComponent } from '../../core/base.component';
import { ILoadingState } from 'mts-store';
import { ActivityLogs } from '../../core/domain/entities/activity-logs/activity-logs';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'sessions-details',
	templateUrl: './sessions-details.component.html',
	styleUrls: ['./sessions-details.component.scss'],
})
export class SessionsDetailsComponent extends BaseComponent {
	activities: any[];
	session: any;
	loadingState: ILoadingState = {};

	constructor(
		private route: ActivatedRoute) { super(); }

	ngOnInit(): void {
		const subs = this.route.paramMap.map(p => p.get('id'))
			.switchMap((id) => ActivityLogs.find({ conversationId: id }, { local: false }))
			.subscribe((activities: any[]) => {
				this.session = activities[0];
				this.activities = activities;
			});
		const loadSubs = ActivityLogs.getState().subscribe((ls) => {
			this.loadingState = ls;
		});
		this.subscriptions.push(subs, loadSubs);
	}

}
