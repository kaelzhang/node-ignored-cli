[![Build Status](https://travis-ci.org/kaelzhang/node-ignored-cli.svg?branch=master)](https://travis-ci.org/kaelzhang/node-ignored-cli)
[![Coverage](https://codecov.io/gh/kaelzhang/node-ignored-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/node-ignored-cli)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-ignored-cli?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/node-ignored-cli)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/ignored-cli.svg)](http://badge.fury.io/js/ignored-cli)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/ignored-cli.svg)](https://www.npmjs.org/package/ignored-cli)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-ignored-cli.svg)](https://david-dm.org/kaelzhang/node-ignored-cli)
-->

# ignored-cli

List all files that is ignored by .gitignore

## Install

```sh
$ npm i -g ignored-cli
```

## Usage

```sh
ignored
```

Include `node_modules` directory and subdirectories if ignored:

```sh
ignored --list-node-modules
```

Show help

```sh
ignored -h
```

## License

MIT
