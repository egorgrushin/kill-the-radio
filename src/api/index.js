import { version } from '../../package.json';
import { Router } from 'express';
import scenarios from './scenarios';
import transitions from './transitions';
import states from './states';
import transitionExamples from './transition-examples';
import auth from './auth';

export default ({config, db}) => {
	let api = Router();

	api.use((req, res, next) => {
		const oldSend = res.json;

		res.json = (...args) => {
			args[0] = {
				data: args[0],
				errors: [],
				metadata: {},
			};
			oldSend.apply(res, args);
		};
		next();
	});

	// mount resources
	api.use('/scenarios', scenarios({config, db}));
	api.use('/transitions', transitions({config, db}));
	api.use('/states', states({config, db}));
	api.use('/transitionExamples', transitionExamples({config, db}));

	api.use('/auth', auth({config, db}));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({version});
	});



	return api;
}
