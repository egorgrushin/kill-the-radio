import { ActivityLogsService } from './activity-logs.service';
import { Entity } from 'mts-store';

export const ActivityLogs = new Entity({
	name: 'activityLogs',
	url: 'activityLog',
	service: new ActivityLogsService(),
});
