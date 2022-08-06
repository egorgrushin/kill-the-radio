import { Entity } from 'mts-store';
import { Observable } from 'rxjs/Observable';
import { TransitionExamples } from './transition-examples';
import { TransitionKeywords } from './transition-keywords';
import { ValidationsService } from './validation.service';

class TransitionsEntity extends Entity {
	constructor(schema) { super(schema);}

	find(filter, options = {}) {
		return Observable.combineLatest(
			super.find(filter, options),
			TransitionExamples.find({}),
			TransitionKeywords.find({}),
		).map(([transitions, examples, keywords]: any) => transitions.map(transition => ({
			...transition,
			examples: examples.filter(example => example.transitionId === transition.id),
			keywords: keywords.filter(keyword => keyword.transitionId === transition.id),
		})));
	}
}

export const Transitions = new TransitionsEntity({
	name: 'transitions',
	url: 'transitions',
	validationRulesUrl: 'metadata?name=Transition',
	validationRulesService: new ValidationsService(),
});
