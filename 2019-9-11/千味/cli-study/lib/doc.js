#!/usr/bin/env node

const inquirer = require('inquirer')
const os = require('os')
const open = require('open')
const choices = [
  {
    name: 'react官网',
    value: 'https://react.docschina.org/'
  },
  {
    name: 'Vue官网',
    value: 'https://cn.vuejs.org'
  }
]
module.exports = (args,options,logger) => {
  inquirer.prompt({
    type: 'list',
    name: 'docName',
    message: '选择你要查看的文档',
    choices
  }).then((answer) => {
    open(answer.docName)
    process.exit()
  })
}