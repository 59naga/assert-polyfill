var assert = require('power-assert')

it('test', function () {
  assert.deepStrictEqual({foo: 1}, {foo: 1})
  assert.notDeepStrictEqual({foo: 1}, {bar: 1})
})
