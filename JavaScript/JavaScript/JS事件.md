##事件

JavaScript和HTML的交互是通过事件实现的。JavaScript采用异步时间驱动变成模型，当文档、浏览器、元素或与之相关对象发生特定事情时，那么它可以注册当这类事件发生时要调用的句柄

* 时间是某个行为或者触发，比如鼠标移动
* 当用户点击鼠标时
* 当网页已加载时
* 当图像已经加载时
* 当鼠标移动到元素上时
* 当用户触发按键时

##事件流

事件流描述的是从页面中接收事件的顺序，比如有两个嵌套的div，点击了内层的div，这时候是内层的div先触发click事件还是外层先触发？目前有三种模型

1. IE的事件冒泡：事情开始由最具体的元素接收，然后逐级向上传播到较为不具体的元素
2. Netscape的事件捕获：不太具体的节点更早接收事件 ，而最具体的元素最后接收事件，和事件冒泡相反
3. DOM事件流：DOM2级事件规定事件流包括三个阶段，事件捕获阶段，处于目标阶段，事件冒泡阶段，首先发生的是事件捕获，为截取事件提供机会，然后是实际目标接收事件，最后是冒泡阶段。

##事件处理程序

也称之为事件侦听器（listener），事件就是用户或浏览器自身执行的某种动作。比如click、load、mouseover等，都是事件类型（俗称事件名称），而响应某个事件的方法就叫做事件处理程序或者事件监听器。

以下是如何给元素添加事件处理程序

###HTML内联方式

元素支持的每个事件都可以使用一个相应的事件处理程序同名的HTML属性指定。这个属性的值应该是可以执行的JavaScript代码，我们可以为一个button添加click事件处理程序

```js
<input type ="button" value="click here" onclick="alert('Clicked!');">
```

###JavaScript指定事件处理程序

```js
<script type="text/javascript">
    var btnClick =document.getElementById('btnClick');
    btnClick.onclick= function showMessage(){
        alert(this.id);     //this代表当前元素，就是btnClick这个按钮
    }
</script>

```

###DOM2事件处理程序

DOM2级事件定义了两个方法用于处理指定和删除事件处理程序的操作：

1. addEventListener
2. removeEventListener

所有的DOM节点都包含这两个方法，并且他们都接收三个参数：

1. 事件类型
2. 事件处理方法
3. 布尔参数。如果是true表示在捕获阶段调用事件处理程序，如果是false，则是在事件冒泡阶段处理









# 事件冒泡捕获阻止默认代理

##removeEventListener

通过addEventListener添加的事件处理程序只能通过removeEventListener移除，移除时参数与添加的时候相同，也就意味着添加的匿名函数无法移除




##事件对象

在触发DOM上的某个事件的时候会产生一个事件对象event，这个对象包含着所有与事件有关的信息，包括产生事件的元素、事件类型等相关信息。所有浏览器都支持event对象，但支持方式不同。

##DOM中的事件对象
 
兼容DOM的浏览器会产生一个event对象传入事件处理程序中。

```js
    var btnClick = document.getElementById('btnClick');
    addEvent(btnClick,'click',handler);

```

event对象包含与创建它的特定事件有关的属性和方法，触发事件的类型不同，可用的属性和方法也不同，但是所有事件都会包含

* 在事件处理程序内部，this始终等同于currentTarget，而target是事件的实际目标。
* 要阻止事件的默认行为，可以使用preventDefault()方法，前提是cancelable值为true比如我们可以阻止链接导航这一默认行为


##常见HTML事件

1. load: 当页面完全加载后在window上触发，当图像加载完成后在img元素上触发，或当嵌入内容加载完成时，在object元素上触发
2. unload： 页面完全卸载后在window上触发，或嵌入内容卸载后在object元素触发
3. select：用户选择文本框中的字符时触发
4. change：文本框焦点变化后其值改变时触发
5. submit：用户提交表单的时候触发
6. resize：窗口或框架大小变化时候在window上触发
7. scroll：用户滚动带滚动条的元素时，在该元素上触发
8. focus：页面或元素获得焦点时在window及相应元素上触发
9. blur：页面或元素失去焦点时在window及相应元素上触发
10. beforeunload：页面卸载前在window上触发
11. mousewheel：不算HTML的，当用户通过鼠标滚轮与页面交互，在垂直方向滚动页面时触发





##常见事件使用介绍自定义事件

