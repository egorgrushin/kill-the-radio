import { Component } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { ILoadingState } from 'mts-store';
import { Observable } from 'rxjs/Observable';
import { SessionsView } from '../core/domain/views/sessions-view';
import { ActivityLogs } from '../core/domain/entities/activity-logs/activity-logs';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent {
	loadingState: ILoadingState = {};
	sessions: any;

	constructor() { super(); }

	ngOnInit(): void {
		// FIXME it is bad idea to use `res.data` because it is strongly connected to server response
		const sub = SessionsView.get().switchMap((res) => Observable.combineLatest(
			...res.data.map(conversation => ActivityLogs.getById(conversation.id, { local: true })),
		)).subscribe((sessions) => {
			this.sessions = sessions;
		});
		const loadingStateSub = SessionsView.getState()
			.subscribe((loadingState) => {
				this.loadingState = loadingState;
			});
		this.subscriptions.push(sub, loadingStateSub);
	}

}
