import { Entity } from 'mts-store';
import { StatesService } from './states.service';
import { ValidationsService } from '../validation.service';

export const States = new Entity({
	name: 'states',
	url: 'states',
	service: new StatesService(),
	validationRulesUrl: 'metadata?name=State',
	validationRulesService: new ValidationsService(),
});
