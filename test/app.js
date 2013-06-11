var backlog = require('../index.js')
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
//
backlog.settings({
	backup: true,
	logFileName: 'jared',
	message: 'This is my code that has this thing in it...'
});

backlog.init();
//backlog.retrieve(6, 'jared.log')