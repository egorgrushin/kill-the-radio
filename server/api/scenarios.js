import resource from 'resource-router-middleware';
import scenarios from '../models/scenarios';

export default ({config, db}) => resource({

	/** Property name to store preloaded entity on `request`. */
	id: 'scenario',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		const scenario = scenarios.find(scenario => scenario.Id.toString() === id),
			err = scenario ? null : 'Not found';
		callback(err, scenario);
	},

	/** GET / - List all entities */
	index({params}, res) {
		res.json(scenarios);
	},

	/** POST / - Create a new entity */
	create({body}, res) {
		body.Id = scenarios.length.toString(36);
		scenarios.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({scenario}, res) {
		res.json(scenario);
	},

	/** PUT /:id - Update a given entity */
	update({scenario, body}, res) {
		for (let key in body) {
			if (key !== 'Id') {
				scenario[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({scenario}, res) {
		scenarios.splice(scenarios.indexOf(scenario), 1);
		res.sendStatus(204);
	}
});
