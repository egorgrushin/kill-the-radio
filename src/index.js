import http from 'http';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { createSimpleLogger } from 'simple-node-logger';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';
import socket from './socket';


let logger;

const log = (type, ...what) => {
	if (logger) {
		logger.log(type, ...what);
	} else {
		console.log(...what);
	}
};

try {
	// logger = createSimpleLogger('c:\\SmartEducationLogs\\run.log');
}
catch (err) {
	// log(err);
}


const app = express();
app.server = http.createServer(app);
// const io = socket(app.server);


// Listen Service Fabric events
if (process.platform === "win32") {
	const rl = require("readline").createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.on("SIGINT", () => {
		process.emit("SIGINT");
	});
}

process.on("SIGINT", () => {
	log('info', 'Caught SIGINT event');
	const address = app.server.address();
	const port = address ? address.port : null;
	const msg = `Stopped listen port ${port}`;
	app.server.close(() => {
		log('info', msg);
		setTimeout(() => {
			process.exit(0);
		});
	});
});

process.on('uncaughtException', (e) => {
	log('error', e);
	throw e;
});

// http logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit: config.bodyLimit
}));

// Storage folder
app.use('/files', express.static(path.join(__dirname, 'storage')));

// connect to db
initializeDb(db => {

	// internal middleware
	app.use(middleware({config, db}));


	// api router
	app.use('/api', api({config, db}));
	app.use((err, req, res, next) => {
		console.log('err', err);
		next(err);
	});

	app.server.listen(process.env.PORT || config.port, () => {
		const logMsg = `Started on port ${app.server.address().port}`;
		log('info', logMsg);
	});
});

export default app;
