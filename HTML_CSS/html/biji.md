# jirengu study
## Linux命令
* cd /home/xxx 进入目录
* mkdir /home/dsf创建目录
* rm -rf 删除目录
* ls 查看当前目录有哪些文件和目录
* pwd查看当前路径
* cat 查看文件内容
* vim
    * esc 进入命令模式
        * :w 保存
        * :q 退出
    * i 进入编辑模式
* history 查看历史输入的命令
* 按上键可以查看上一次输入的命令
* cd .. 返回上一层
* npm i -g http-server
* http-server -c-1
* 代补充
## git 命令
* git clone 下载
* git add . 存入缓存t add . 存入缓存
* git commit -am "" 提交到本地库
* git branch 查看分支
* git branch dev 创建本地仓库分支dev
* git checkout 切换分支
* git pull   更新本地合并文件  
* git init 初始化仓库(空文件夹才能执行的仓库)
* git remote add origin git@github.com:chengyang123456789/blog.git 把远程仓库的路径设置为origin
* git push origin master 提交到远程库
* git push -f origin master 强制推送，覆盖别人的代码
* git remote add gitlab git@github.com:chengyang123456789/blog.git 再添加一个远程仓库
* git remote remove abc 删除远程仓库"abc"
* git remote -v 查看当前远程仓库
* git remote set-url origin git@github.com:chengyang123456789/blog.git 修改origin的远程路径
* git remote rename gitlab coding 把gitlab标签改名为coding

* 生成ssh key：
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com" 引号里面填写自己的邮箱
    cat ~/.ssh/id_rsa.pub  读取公钥
* 在第一次commit时，必须先设置你的用户名和邮箱：
     git config --global user.email "你的邮箱"
     git config --global user.name "你的姓名"


## 上传代码报错（可能性一）
1、在使用git 对源代码进行push到gitHub时可能会出错

2、出现错误的主要原因是github中的README.md文件不在本地代码目录中

3、可以通过如下命令进行代码合并【注：pull=fetch+merge]

git pull --rebase origin master

4、执行上面代码后可以看到本地代码库中多了README.md文件

5、此时再执行语句 git push 即可完成代码上传到github


## 安装browser-sync

1. BrowserSync是一个npm包，所以在安装前他需要先装上Node.js
2. npm install -g browser-sync          -g 表示全局安装

* browser-sync     启动browser-sync
* browser-sync start --server --files="**/*"