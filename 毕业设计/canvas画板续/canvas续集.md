##　添加viewport

* meta标签


    快捷键:meta:vp

    `<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>`移动端加上这个标签才是真正的自适应，不加的话，加入你把一个９８０ｐｘ宽度（手机端常规是９８０）的ＰＣ网页放在手机上显示，倒也能正常显示不出现滚动条，不过移动设备对页面做了缩小优化，所以字体等都相应缩小了


##　touch事件

* `'ontouchstart' in document.body `  //true or false
* `document.body.ontouchstart === undefined` //true or fasle