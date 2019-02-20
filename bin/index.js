#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const ignored = require('..')

if (argv.h || argv.help) {
  console.log(`List all files that is ignored by .gitignore rules:

Usage:
  ignored [options]

Available options:
  -h, --help                help for ignored
      --list-node-modules   list files inside node_modules directory if ignored
`)
  process.exit(0)
}

ignored(process.cwd(), argv)
.then(files => {
  files.forEach(f => console.log(f))
})
