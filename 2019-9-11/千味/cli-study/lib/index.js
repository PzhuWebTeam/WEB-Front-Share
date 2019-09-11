#!/usr/bin/env node
const pkg = require('../package.json')
const program = require('caporal')
const doc = require('./doc')
const init =require('./init')

program.version(pkg.version)

program
  .command('init')
  .description('初始化项目模板')
  .action(init)
program
  .command('doc')
  .description('查看文档')
  .action(doc)

program.parse(process.argv)
