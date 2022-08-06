import { View } from 'mts-store';
import { ActivityLogs } from '../entities/activity-logs/activity-logs';

export const SessionsView = new View({
	name: 'sessions',
	urlTemplate: 'activitylog',
	mappings: ActivityLogs,
});
