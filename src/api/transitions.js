import resource from 'resource-router-middleware';
import transitions from '../models/transitions';

export default ({config, db}) => resource({

	/** Property name to store preloaded entity on `request`. */
	id: 'transition',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		const transition = transitions.find(transition => transition.Id.toString() === id),
			err = transition ? null : 'Not found';
		callback(err, transition);
	},

	/** GET / - List all entities */
	index({params}, res) {
		res.json(transitions);
	},

	/** POST / - Create a new entity */
	create({body}, res) {
		body.Id = transitions.length.toString(36);
		transitions.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({transition}, res) {
		res.json(transition);
	},

	/** PUT /:id - Update a given entity */
	update({transition, body}, res) {
		for (let key in body) {
			if (key !== 'Id') {
				transition[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({transition}, res) {
		transitions.splice(transitions.indexOf(transition), 1);
		res.sendStatus(204);
	}
});
