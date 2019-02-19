const test = require('ava')
const log = require('util').debuglog('ignored-cli')
const ignored_cli = require('../src')

test('description', t => {
  t.is(true, true)
})
