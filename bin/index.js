#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const ignored = require('..')

ignored(process.cwd(), argv)
.then(files => {
  files.forEach(f => console.log(f))
})
