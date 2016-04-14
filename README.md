# mo39-json

Mogic of Ingresss player **39M** returns "膜39" JSON string.

`mo39.js` includes NO number or NO letter.

## Install

``` shell
npm install mo39-json
```

## Use

``` node 
const mo39 = require('mo39');
const http = require('http');

const srv = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(mo39);
});

srv.listen(3939, '127.0.0.39');
```

## Test 

``` shell
npm test
```

## HostList

`mo39.js` is hosted by many volunteers. Here is an incomplete list:

- [mo39.ylxdzsw.com:3939](http://mo39.ylxdzsw.com:3939) By ylxdzsw

## License

MIT License

