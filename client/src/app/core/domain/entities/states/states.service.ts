import { BaseEntityService } from '../base-entity.service';

export class StatesService extends BaseEntityService {

	constructor() { super(); }

	format(state) {
		return {
			...state,
			// Operator or InitialState
			isSystem: state.dialogType === 8 || state.dialogType === 9,
		};
	}
}
