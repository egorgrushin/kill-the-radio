import { View } from 'mts-store';
import { Scenarios } from '../entities/scenarios';
import { States } from '../entities/states/states';
import { Transitions } from '../entities/transitions';
import { TransitionExamples } from '../entities/transition-examples';
import { TransitionKeywords } from '../entities/transition-keywords';

export const ScenarioView = new View({
	name: 'scenario',
	urlTemplate: 'scenarios/{id}',
	mappings: [
		{ from: 'scenario', to: Scenarios },
		Transitions,
		States,
		TransitionExamples,
		TransitionKeywords,
	],
});
