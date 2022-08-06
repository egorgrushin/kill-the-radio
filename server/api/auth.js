import { Router } from 'express';
import { sha1 } from 'object-hash';
import { sign, verify } from 'jsonwebtoken';
import parse from 'parse-bearer-token';

import users from '../models/users';

export default ({config, db}) => {
	const api = Router();
	const secretKey = 'super-secret-string';
	api.post('/login', (req, res) => {
		const body = req.body;
		const passwordHash = sha1(body.password);
		const user = users.find(user => user.username === body.login && user.passwordHash === passwordHash);
		if (user) {
			const token = sign({id: user.id}, secretKey);
			db.sessions[token] = user.id;
			return res.json({token, user});
		}

		return res.status(401).json({errors: ['There is no users with this username and password']});
	});

	api.get('/me', (req, res) => {
		const token = parse(req);
		console.log(token);
		if (!token) {
			return res.status(401).json({errors: ['There is no valid token']});
		}
		verify(token, secretKey, (err, decoded) => {
			if (err) {
				return res.status(401).json({errors: ['There is no valid token']});
			}
			const user = users.find(user => user.id === decoded.id);
			return res.json({user});
		});
	});

	return api;
}
