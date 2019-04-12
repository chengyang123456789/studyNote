#非父子组件的通信

```js
var bus = new Vue()

//触发组件A中的事件
bus.$emit('id-selected',1)

//在组件B创建的钩子中监听事件
bus.$on('in-selected',function(id){
    //...
})


```

# Vuex是什么？

Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex也集成到Vuex的官方调试工具 devtools extension,提供了诸如零配置的timetravel调试、状态快照导入导出等高级调试功能


## 安装

* 直接下载/CDN引用
    * https://unpkg.com/vuex
        * Unpkg.com提供了基于NPM的CDN链接。以上的链接会一直指向npm上发布的最新版本。

    ```js
    //在vue之后引入vuex会进行自动安装
    <script src="/path/to/vue.js"></script>
    <script src="/path/to/vuex.js"></script>

    ```
    * NPM
        * `npm install vuex --save`


##Mutation需要遵守Vue的响应式规则

1. 最好提前在你的store中初始化好所有需要的属性
2. 当需要在对象上添加新属性时，你应该
    * 使用`Vue.set(obj,'newProp',123)`,或者
    * 以新对象替换老对象。

##Mutation必须是同步函数

##Action

Action 类似于mutation，不同在于：

* Action提交的是mutation，而不是直接变更状态。
* Action可以包含任意异步操作。