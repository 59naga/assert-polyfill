var polyfill = require('core-assert')
var assert = require('assert')

if (assert.deepStrictEqual === undefined) {
  assert.deepStrictEqual = polyfill.deepStrictEqual
}

if (assert.notDeepStrictEqual === undefined) {
  assert.notDeepStrictEqual = polyfill.notDeepStrictEqual
}
