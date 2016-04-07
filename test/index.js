import test from 'ava'
import '../lib'
import assert from 'assert'

test('assert-polyfill', (t) => {
  t.truthy(assert.deepStrictEqual)
  t.truthy(assert.notDeepStrictEqual)
})
