import { ActivityLogsService } from './activity-logs.service';
import { Blend, Barrel } from 'distillerx';

export const Scenarios = new Barrel({
	name: 'scenarios',
	url: 'scenarios',
});

export const Transitions = new Barrel({
	name: 'transitions',
	url: 'transitions',
});

export const States = new Barrel({
	name: 'states',
	url: 'states',
});

export const TransitionExamples = new Barrel({
	name: 'transitionExamples',
	url: 'transitionExamples',
});

export const ActivityLogs = new Barrel({
	name: 'activityLogs',
	url: 'activityLog',
	service: new ActivityLogsService(),
});

export const ScenarioBlend = new Blend({
	name: 'scenario',
	urlTemplate: 'scenarios/{id}',
	mappings: [
		{ from: 'scenario', to: Scenarios },
		Transitions,
		States,
		TransitionExamples,
	],
});

export const SessionsBlend = new Blend({
	name: 'sessions',
	urlTemplate: 'activitylog',
	mappings: ActivityLogs,
});
