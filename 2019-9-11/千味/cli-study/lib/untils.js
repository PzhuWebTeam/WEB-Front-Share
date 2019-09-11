const chalk = require('chalk')
const download = require('download-git-repo')
const path = require('path')

const logType ={
  1:'Usage',//用途，
  2:'Configuration item',// 结构配置
  3:'Step',// 步骤
  4:'Copied',// 复制
}

/**
 * magenta: 洋红
 * cyan: 蓝绿色
 *  */ 
const log = {
  info:(text,type = 1 ,only=false)=>{
    const key = typeof type ==='number'?logType[type]:type
    console.log(`\n${chalk.magenta(`${key}: `)}${chalk.cyan(text)}${only?'\n':''}`)
  },
  ok:(text,only=false)=>{
    console.log(`\n${chalk.green('Success: ')}${chalk.cyan(text)}${only?'\n':''}`)
  },
  err:(text,only=false)=>{
    console.log(`\n${chalk.red(`Error:${text}`)}${only?'\n':''}`)
  },
  todo: (action, detail, only = false) => {
    console.log(`\n${chalk.magenta(`${action}`)} ${chalk.cyan(detail)}${only ? '\n' : ''}`)
  },
}


const shell = (target,url)=>{
  target = path.join(target||'.','.download-temp')
  return new Promise((resolve,reject)=>{
    download(url,target,{clone:true},(err)=>{
      if(err){
        reject(err)
      }else{
        resolve(target)
      }
    })
  })
}

module.exports={
  log,
  shell
}