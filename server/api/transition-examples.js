import resource from 'resource-router-middleware';
import transitionExamples from '../models/transition-examples';

export default ({config, db}) => resource({

	/** Property name to store preloaded entity on `request`. */
	id: 'transition-example',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		const transitionExample = transitionExamples.find(transitionExample => transitionExample.Id.toString() === id),
			err = transitionExample ? null : 'Not found';
		callback(err, transitionExample);
	},

	/** GET / - List all entities */
	index({params}, res) {
		res.json(transitionExamples);
	},

	/** POST / - Create a new entity */
	create({body}, res) {
		body.Id = transitionExamples.length.toString(36);
		transitionExamples.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({transitionExample}, res) {
		res.json(transitionExample);
	},

	/** PUT /:id - Update a given entity */
	update({transitionExample, body}, res) {
		for (let key in body) {
			if (key !== 'Id') {
				transitionExample[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({transitionExample}, res) {
		transitionExamples.splice(transitionExamples.indexOf(transitionExample), 1);
		res.sendStatus(204);
	}
});
