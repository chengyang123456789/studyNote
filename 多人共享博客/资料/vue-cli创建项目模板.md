# 操作流程

打开终端

```
cd ~/Desktop
npm install -g vue-cli
vue init webpack blog-client




cd blog-client

npm run dev


此时，会启动一个 server，浏览器打开 http://localhsot:8080即可看到模板项目的效果
```

##使用命令

* npm install --save node-less 安装less-loader
* npm start / npm run dev   重启服务器
* 删除 node_modules  | npm install  重新加载node_modules
* 如果是因为新版本的webpack-dev-server错了：
```
npm remove webpack-dev-server
npm install webpack-dev-server@2.9.1
npm run dev

```
* 引进已有的UI：在Ｇｏｏｇｌｅ官网上搜索elementUI 然后进入官网　点击组件。。。
    * 加载ElementUI：npm install --save element-ui element-ui/lib/theme-chalk/index.css