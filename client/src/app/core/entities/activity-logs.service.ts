import { Injectable } from '@angular/core';
import { BaseEntityService } from './base-entity.service';

@Injectable()
export class ActivityLogsService extends BaseEntityService {

	constructor() { super(); }

	format(activityLog) {
		return {
			...activityLog,
			activity: JSON.parse(activityLog.activity),
			isBot: activityLog.fromId.includes('MTSBot'),
		};
	}
}
