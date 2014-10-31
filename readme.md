# promistein [![NPM version][npmjs-shields]][npmjs-url] [![Build Status][travis-img]][travis-url]
> [bramstein/promis][promistein] (minified version) for nodejs and browser. Packaged for benchmarks. Very pretty and tiny but one of the slowest in Bluebird's benchmarks. **It supports the full Promise API specification.**

## Install [![Nodei.co stats][npmjs-install]][npmjs-url]
> Install with [npm](https://npmjs.org)

```
$ npm install promistein
```

## [Promises/A+ 1.1](https://promisesaplus.com)
> Run to be sure

```
$ npm test
```


## API

The constructor is called with a single function argument.

```javascript
var promise = new Promise(function (resolve, reject) {
  resolve('hello');
});
```

Instances of a Promise have two methods available: `then` and `catch`. The `then` method is used to add callbacks for when the promise is resolved or rejected.

```javascript
promise.then(function (x) {
  console.log('value is', x);
}, function (r) {
  console.log('reason is', r);
});
```

The `catch` method is used the catch rejected promises in a more convenient way.

```javascript
promise.catch(function (r) {
  console.log('reason is', r);
});
```

Both methods return a new Promise that can be used for chaining.

The Promise class also has four class methods: `resolve`, `reject`, `race` and `all`. The `resolve` and `reject` methods are a convenient way of creating already settled promises:

```javascript
var resolved = Promise.resolve('hello');
var rejected = Promise.reject('bye');
```

The `race` method can be used to "race" two or more promises against each other. The returned promises is settled with the result of the first promise that settles.

```javascript
// first will be resolved with 'hello'
var first = Promise.race([new Promise(function (resolve) {
  setTimeout(function () {
    resolve('world');
  }, 1000);
}), Promise.resolve('hello')]);
```

The `all` method waits for all promises given to it to resolve and then resolves the promise with the result of all of them.

```javascript
// all is settles with ['hello', 'world']
var all = Promise.all([Promise.resolve('hello'), Promise.resolve('world')]);
```

## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]

**Charlike Mike Reagent**
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/promistein/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[promistein]: https://github.com/bramstein/promis
[npmjs-url]: http://npm.im/promistein
[npmjs-shields]: http://img.shields.io/npm/v/promistein.svg
[npmjs-install]: https://nodei.co/npm/promistein.svg?mini=true

[coveralls-url]: https://coveralls.io/r/tunnckoCore/promistein?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/tunnckoCore/promistein.svg

[license-url]: https://github.com/tunnckoCore/promistein/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/promistein
[travis-img]: https://travis-ci.org/tunnckoCore/promistein.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/promistein
[depstat-img]: https://david-dm.org/tunnckoCore/promistein.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore

[cobody-url]: https://github.com/tj/co-body
[mocha-url]: https://github.com/tj/mocha
[rawbody-url]: https://github.com/stream-utils/raw-body
[multer-url]: https://github.com/expressjs/multer
[express-url]: https://github.com/strongloop/express
[formidable-url]: https://github.com/felixge/node-formidable
[co-url]: https://github.com/tj/co
[extend-url]: https://github.com/justmoon/node-extend
[csp-report]: https://mathiasbynens.be/notes/csp-reports
