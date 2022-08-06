const ioFactory = require('socket.io');

export default (httpServer) => {
	const io = ioFactory(httpServer);
	io.on('connection', (socket) => {
		console.log(`${socket.id} connected`);
		socket.on('data', (data) => {
		    socket.broadcast.emit('data', data);
		});
		socket.on('sendMessage', (data, cb) => {
			console.log('sendMessage', data.body);
			// Imitation of request time to web api
			setTimeout(() => {
				socket.broadcast.emit('sendMessage', data);
			    cb();
			}, 100);
		});
		socket.on('readAll', (data, cb) => {
			// Imitation of request time to web api
			setTimeout(() => {
				socket.broadcast.emit('readAll', data);
			    cb();
			}, 100);
		});
	});
	io.on('disconnect', (socket) => {
		console.log(`${socket.id} disconnected`);
	});


	return io;
}
