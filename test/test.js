'use strict'
const mo39 = require('../index');
const assert = require('assert');
const http = require('http');

assert.ok('"\\u819c39"' === mo39, '"\\u819c39" is a "膜39" JSON string.');
assert.ok('\u819c39' === eval(mo39), '"\u819c39" is `eval()` "mo39".');
assert.ok('膜39' === JSON.parse(mo39), '"膜39" is `JSON.parse()` "mo39".');


const srv = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(mo39);
});

srv.listen(3939, '127.0.0.1', () => {
	let req = http.request({
		port: 3939,
		host: '127.0.0.1',
	}, res => {
		let data = '';
		res.on('data', chunk => {
			data += chunk;
		});

		res.on('end', () => {
			let result = JSON.parse(data);
			assert.ok('膜39' === result, 'return "膜39" string from server');
			srv.close();
		});
	});

	req.end();
});

