# mo39-json

Mogic of Ingresss player [**39M**](https://github.com/39M) returns "膜39" JSON string.

`mo39.js` contains NO Numbers, NO Letters and just Mogic. Excited!

## Install

``` shell
npm i mo39-json -S
# or
npm install --save mo39-json
```

## Use

``` node 
const mo39 = require('mo39-json');
const http = require('http');

const mo = (_, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(mo39);
};
const server = http.createServer(mo);
server.listen(3939, '127.0.0.39');
```

## Test 

``` shell
npm test
```

## Theory

``` javascript
alert(eval('"\\u819c39"')) // "膜39"
```

The parts:

``` javascript
"\\" === "\\"
 "u" === "function"[1]
  81 === 9 * 9
   9 === 10 - 1  === '1' + 0 - 1 
 "c" === "function"[3]
   3 === 1 + 1 + 1 === 4 - 1
```

The Basics: 

``` javascript
     false === ![]
      true === !''
         1 === -~[] === +!![]
        -1 === ~[]
         0 === ~~[] === [] ^ [] === [] | [] === [] >>> []
"function" === /@/.test + ''
```

Assembly: 

``` javascript
         3 === !''+!!{}-~[] === -~-~-~[]
         4 === !''-~``<<!!{}
         9 === -~{}+[''^/@/]- -~''
    "test" === 'true'[0] + 'false'[4] + 'false'[3] + 'true'[0] === ((t,f)=>t[0]+f[4]+f[3]+t[0])('true','false')
"function" === ''+/@/[(($,_)=>$[''^'']+_[!''-~``<<!!{}]+_[!''+!!{}-~[]]+$[~~{}])(`${!''}`,''+!~[])]
```

## Host List

`mo39-json` is hosted by many volunteers. Here is an incomplete list:

- [mo39.ylxdzsw.com:3939](http://mo39.ylxdzsw.com:3939) By ylxdzsw
- [zunsthy.39m.moe/mo39](http://zunsthy.39m.moe/mo39) By zunsthy

## License

MIT License

