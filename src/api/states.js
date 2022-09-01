import resource from 'resource-router-middleware';
import states from '../models/states';

export default ({config, db}) => resource({

	/** Property name to store preloaded entity on `request`. */
	id: 'state',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		const state = states.find(state => state.Id.toString() === id),
			err = state ? null : 'Not found';
		callback(err, state);
	},

	/** GET / - List all entities */
	index({params}, res) {
		res.json(states);
	},

	/** POST / - Create a new entity */
	create({body}, res) {
		body.Id = states.length.toString(36);
		states.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({state}, res) {
		res.json(state);
	},

	/** PUT /:id - Update a given entity */
	update({state, body}, res) {
		for (let key in body) {
			if (key !== 'Id') {
				state[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({state}, res) {
		states.splice(states.indexOf(state), 1);
		res.sendStatus(204);
	}
});
