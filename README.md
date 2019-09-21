# WEB 应用专业团队-前端小组周末分享会

##  分享会摘要
### 2019-9-22
+ [简单脚手架搭建](https://github.com/PzhuWebTeam/WEB-Front-Share/blob/master/2019-9-11/%E5%8D%83%E5%91%B3/%E8%84%9A%E6%89%8B%E6%9E%B6%E5%AD%A6%E4%B9%A0.md) 罗文

### 2019-9-11

+ [前端学习思维导图](https://www.processon.com/view/link/5d428272e4b065dc42ba52e9)  罗文、任云宏

##  分享会规则 

1. 每周分享会时间：**周日晚上8点开始**（时间可以根据实际情况调整）

2. 分享的内容需要分享者在**周日中午12点**之前，将内容上传到 GitHub 仓库中，如果逾期，请自觉在会议开始时，发 10 元红包，以示惩罚，具体上传流程和上传文件内容规范请参考下面。

3. 分享会将在**钉钉**中以直播的方式开始，每一次会议都需要在**每周日12点之前**进行会议通知。

4. 参会人员如果有事请记得提前告知分享人。

5. 分享会内容不限，如若没有分享的主题，可以参考上面的前端学习思维导图。


##  GitHub 代码提交流程

1. 拉去远程仓库到本地，并建立联系。

+ 在远程GitHub仓库中先建立自己的分支，分支命名统一为 **feature/姓名字母小写**

+ 拉取远程仓库

  ```javascript
  git clone [ssh/http]
  ```

+ 在本地新建属于自己的分支

  ```
  git checkout -b [feature/姓名字母小写]
  ```

+ 在本地新建的分支下关联远程自己新建的分支。

  ```javascript
  git branch -u origin/[远程新建的分支名：feature/姓名字母小写]
  ```

  ⚠️：该命令的执行一定需要在你本地新建的分支下执行，切勿关联他人分支和**master**主分支

2. 执行到这一步，本地仓库就和远程仓库关联了起来，之后你就能愉快的在本地编辑分享内容了。下面简单说明下，后续代码提交时的注意事项

+ 每一次分享会之后，远程仓库的`maser`主分支的内容都会是最新的，因此需要拉取下远程仓库中中`master`分支的内容

  ```
  git pull origin master
  ```

+ 此时本地的 master 主分支就是最新的内容，你需要将主分支合并到你本地新建的分支中

  ```javascript
  git checkout [feature/花名字母小写]//如果你已经在当前分支就可以不用执行该命令
  
  git merge master // 将主分支的内容合并到你本地新建的分支
  ```

+ 当你编辑好自己的分享内容后，开始提交

  ```javascript
  git add . 
  
  git commit -m '[fix/feature.. : 填写分享主题名称]' 
  
  git push
  ```

  ⚠️： 第一个命令和第三个命令，不了解的请自行百度下，这里简单说明下，第二个命令提交的说明规范，也就是 -m 后面的文字描述。 

  fix ：表示你修改了之前提交内容

  feature：表示你新添加的功能，这里也就是指你编辑了新的文件内容

  对于分享会来说，这两个字段应该是最常用的了，有兴趣的同学可以自行百度下git 的提交内容规范。

3. **当代码提交到远程仓库后需要 review 下，向主分支master 提交合并请求。**



 

