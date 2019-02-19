const path = require('path')

const ignore = require('ignore')
const globby = require('globby')
const fs = require('fs-extra')

const readIgnoreFile = cwd => fs.readFile(cwd)
.catch(() => '')

module.exports = async (cwd, {
  'list-node-modules': list_node_modules
} = {}) => {

  const options = {
    onlyFiles: true,
    cwd
  }

  if (!list_node_modules) {
    options.ignore = ['node_modules']
  }

  const [files, ignoreRules] = await Promise.all([
    globby('**', options),

    readIgnoreFile(path.join(cwd, '.gitignore'))
  ])

  const ig = ignore()
  .add('/.git')
  .add(String(ignoreRules))

  return files.filter(f => ig.ignores(f))
}
