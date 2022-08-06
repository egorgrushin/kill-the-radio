import { camelCase } from 'lodash';

export class ValidationsService {
	private typeIdsToRule = {
		'System.ComponentModel.DataAnnotations.RequiredAttribute': { required: true },
	};

	constructor() { }

	format(data): any[] {
		return data.properties.map(property => ({
			name: camelCase(property.name),
			type: property.typeDescription.name,
			rules: property.annotations.map(annotation => {
				const typeId = annotation.annotationAttribute.typeId.split(', ')[0];
				const ruleBase = this.typeIdsToRule[typeId];
				if (ruleBase) {
					return { ...ruleBase };
				}
			}),
		}));
	}
}
