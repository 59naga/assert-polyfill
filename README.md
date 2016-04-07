Assert polyfill
---

<p align="right">
  <a href="https://npmjs.org/package/assert-polyfill">
    <img src="https://img.shields.io/npm/v/assert-polyfill.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/assert-polyfill">
    <img src="http://img.shields.io/travis/59naga/assert-polyfill.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/assert-polyfill/coverage">
    <img src="https://img.shields.io/codeclimate/github/59naga/assert-polyfill.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/assert-polyfill">
    <img src="https://img.shields.io/codeclimate/coverage/github/59naga/assert-polyfill.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/assert-polyfill">
    <img src="https://img.shields.io/gemnasium/59naga/assert-polyfill.svg?style=flat-square">
  </a>
</p>

Installation
---
```bash
npm install assert-polyfill --save
```

Why?
---
NodeJS v0 `deepStrictEqual`/`notDeepStrictEqual` is unavailable.

```js
var assert = require('power-assert');
assert.deepStrictEqual(['foo'], ['foo'])
// TypeError: undefined is not a function

assert.notDeepStrictEqual(['foo'], ['bar'])
// TypeError: undefined is not a function
```

if above function is `undefined`, `assert-polyfill` defines the polyfill functions.

```js
require('assert-polyfill');
var assert = require('power-assert');
assert.deepStrictEqual(['foo'], ['foo']) // pass
assert.notDeepStrictEqual(['foo'], ['bar']) // pass
```

even if `--require` in [mocha](https://mochajs.org/), it is similar.

```bash
mocha --require assert-polyfill
```

Development
---
Requirement global
* NodeJS v0.12.13
* Npm v2.15.0

```bash
git clone https://github.com/59naga/assert-polyfill
cd assert-polyfill
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
