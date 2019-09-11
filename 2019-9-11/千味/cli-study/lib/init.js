#!/usr/bin/env node
const inquirer = require('inquirer')
const fs = require('fs-extra')// 文件目录操作包
const{log} = require('./untils')
const scaffold = require('./scaffold')
const ora = require('ora')
const choices = [
  {name:'react-template',value:'react-template'},
  {name:'vue-template',value:'vue-template'}
]
let spinner=''
const checkDirectory = async(filepath,fn)=>{
  let cover = false
  fs.readdir(filepath,(err,files)=>{
    if (err && err.code !== 'ENOENT') {
      log.error('无法读取文件', true)
      process.exit(1)
    }
    if(!(!files || !files.length)){
      inquirer.prompt({
        type:'confirm',
        message:'检查到该文件下有文件，是否需要清空',
        name:'status',
        default:false
      }).then(answer=>{
        cover = answer.status
        if (cover) {
          spinner = ora('正在清理中').start()
          fs.emptyDirSync(process.cwd())
        }
        if (fn) {
          spinner.text="清理完成"
          spinner.succeed()
          fn()
        }
      })
    }else if(fn) {
      fn()
    }
  })
}

module.exports = (args,options)=>{
  inquirer.prompt({
    type:'list',
    name:'projectName',
    message:'选择项目框架类型',
    choices,
  }).then(answer=>{
    checkDirectory(process.cwd(),()=>{
      scaffold(answer)
    })
  })
}