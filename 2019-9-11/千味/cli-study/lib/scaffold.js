const fs = require('fs-extra')
const inquirer = require('inquirer')
const sh = require('shelljs')
const ora = require('ora')
const {shell, log } = require('./untils')
const chalk = require('chalk')
const jsonfile = require('jsonfile')
const { execSync } = require('child_process')

// 脚手架仓库地址
const GIT_ADDRESS = {
  react: 'https://github.com/PzhuWebTeam/WEB-Website-Template.git'
}

const promptList = [
  {
    type: 'input',
    name: 'name',
    default: 'web',
    message: '请输入开发者的姓名：'
  }, {
    type: 'input',
    name: 'version',
    default: '1.0.0',
    message: '请输入项目版本号：'
  }, {
    type: 'input',
    name: 'description',
    default: 'description',
    message: '请输入项目描述'
  }
]

module.exports = (answer) => {
  if (answer.projectName === 'react-template') {
    const url = GIT_ADDRESS.react
    const folder = url.split('/').pop().slice(0, -4)
    inquirer.prompt(promptList).then(answer => {
      const name = answer.name
      const version = answer.version
      const description = answer.description
      try {
        const spinner =  ora(`正在下载项目模板，源地址：${url}\n`).start()
        sh.exec(`git clone ${url}`)
        // 删除文件中的.git文件
        execSync(`rm -rf ${folder}/.git`)
        // 复制到当前的文件中
        fs.copySync(folder, process.cwd())
        execSync(`rm -rf ${folder}`)
        spinner.text='开始更新package.json'
        const config = jsonfile.readFileSync(`${process.cwd()}/package.json`)
        config.name = name
        config.version = version
        config.description = description
        jsonfile.writeFileSync(`${process.cwd()}/package.json`, config, { spaces: 2 })
        spinner.text="初始完成"
        spinner.succeed()
        log.info('项目启动流程',3)
        log.todo('cd client','进入客户端开发目录')
        log.todo('npm install','安装依赖包')
        log.todo('npm run start','启动项目服务')
      } catch (err) {
        ora().fail()
        console.log(`\n${chalk.red(err)}\n`)
      }
    })
  }
}
