#BOM对象

BOM（Browser Object Model）是指浏览器对象模型，是用于描述这种对象与对象之间层次关系的模型，浏览器对象模型提供了独立于内容的、可与浏览器窗口互动的对象结构。BOM由多个对象组成，其中代表浏览器窗口的Window对象是BOM的顶层对象，其他对象都是该对象的子对象。



##Window

BOM的核心是window对象，它表示浏览器的一个实例。在浏览器中，即是JavaScript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象，这就意味着在网页中定义的任意变量、函数、对象都是以window作为Global对象。

所有在全局作用域中声明的变量、函数、对象都会作为window的属性和方法


## window对象属性

**window.innerHeight属性，window.innerWidth属性**

这两个属性返回网页的CSS布局占据的浏览器窗口的高度和宽度，单位为像素。很显然，当用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性值会变小。

注意，这两个属性值包括滚动条的高度和宽度。

**scrollX、scrollY**

1. scrollX:滚动条横向偏移
2. scrollY:滚动条纵向偏移

这个值随着滚动的位置变化而变化


**scrollTo、scrollBy、scroll**

可以通过方法scrollTo或者scroll方法改变滚动条位置到指定坐标

```js
    window.scrollTo(0,300); //滚动条移动到300px处
```

两个参数分别是水平、垂直方向偏移

scrollBy可以相对当前位置移动滚动条，而不是移动到绝对位置

```js
    scrollBy(0,100);  // 滚动条下移100px
```

##window.frames

window.frames返回一个类似数组的对象，成员为页面内的所有框架，包括frame元素和iframe元素。需要注意的是，window.frames的每个成员对应的框架内的窗口（即框架的window对象），获取每个框架的DOM树，需要使用window.frames[0].document。

```js
var iframe = window.getElementsByTagName("iframe")[0];
var iframe_title = iframe.contentWindow.title;
```
iframe元素遵守同源政策，只有当父页面与框架页面来自同一个域名，两者之间才可以用脚本通信 ，否则只有使用window.postMessage方法。

在iframe框架内部，使用window.parent指向父页面。


##navigator

Window对象的navigator属性，指向一个包含浏览器相关信息的对象。

navigator.userAgent属性返回浏览器的`User-Agent`字符串，用来标示浏览器的种类。下面是Chrome浏览器的User-Agent.

```js
navigator.userAgent //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36"
```
通过userAgent属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且无法保证未来的适用性，更何况各种上网设备层出不穷，难以穷尽。所以，现在一般不再识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的JavaScript功能。

##screen

screen对象包含了显示设备的信息

```js
//显示设备的高度，单位为像素
screen.height

//显示设备的宽度，单位为像素
screen.width
```
一般使用以上两个属性，了解设备的分辨率，除非调整显示器的分辨率，否则这两个值可以看做常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。


##window.getComputedStyle

getComputedStyle是一个可以获取当前元素所有最终使用的css属性值。返回的是一个css样式声明对象


##URL的编码/解码

JavaScript提供四个URL的编码、解码方法。

1. decodeURI()
2. decodeURIComponent()
3. encodeURI()
4. encodeURIComponent()

区别

encodeURI()不会对下列字符编码
```js
1. ASCII字母
2. 数字
3. ~!@#$&*()=:/,;?+'
```
encodeURIComponent()不会对下列字符编码
```js
1. ASCII字母
2. 数字
3.~!*()'
```


##alert(),prompt(),confirm()(不常用)




#cookie&session&localStorage

##一、 cookie

1. cookie是存储在浏览器上的一小段数据，用来记录某些当页面关闭或者刷新后仍然需要记录的信息。在控制台用document.cookie查看你当前正在浏览的网站的cookie。
2. cookie可以使用js在浏览器直接设置（用于记录不敏感信息，如用户名），也可以在服务端通使用HTTP协议规定的set-cookie来让浏览器种下cookie，这是最常见的做法。
3. 每次网络请求Request headers中都会带上cookie。所以如果cookie太多太大对传输效率会有影响。
4. 一般浏览器存储cookie最大容量为4k，所以大量数据不要存到cookie。
5. 设置cookie时的参数：
    * path：表示cookie影响到的路径，匹配该路径才发送这个cookie。expires和maxAge：告诉浏览器cookie什么时候过期，maxAge是cookie多久后过期的相对时间。不设置这两个选项是会产生session cookie，session cookie是transient的，当用户关闭浏览器时，就被清除。一般用来保存session的session_id
    * secure:当secure值为true时，cookie在HTTP中是无效，在HTTPS中才有效
    * httpOnly：浏览器不允许脚本操作document.cookie去更改cookie。一般情况下都应该设置这个为true，避免被xss攻击拿到cookie。

##二、session
 
当一个用户打开淘宝登录后，刷新浏览器仍然展示登录状态。服务器如何分辨这次发起请求的用户是刚才登录过的用户呢？这里就使用了session保存状态。用户在输入用户名密码提交给服务端，服务端验证通过后会创建一个session拥有记录用户的相关信息，这个session可保存在服务器内存中，也可保存在数据库中。

* 创建session后，会把关联的session_id通过setCookie添加到http相应头部中。
* 浏览器在加载页面时发现响应头部有set-cookie字段，就把这个cookie种到浏览器指定域名下。
* 当下次刷新页面时，发送的请求会带上这条cookie，服务端在接收到后根据这session_id来识别用户

cookie是存储在浏览器里的一小段数据，而session是一种让服务器能识别某个用户的“机制”，
session在实现的过程中需要使用cookie。二者是不同维度的东西。

##、localStorage

1. localStorage HTML5本地存储web storage特性的API之一，用于将大量数据（最大5M）保存在浏览器中，保存后数据永远在，不会失效过期，除非ijs手动清除
2. 不参与网络传输
3. 一般用于性能优化，可以保存图片、js、css、html模板、大量数据。
```js
//使用localStorage封装一个Storage对象，达到如下效果
Storage.set('name','饥人谷')
Storage.set('age',2,30)
Storage.set('teachers',['ruoyu','fangfang','tom'],60)

Storage.get('name')
Storage.get('age')  //如果不超过30秒，返回数字类型2；如果超过30秒，返回undefined，并且localStorage
Storage.get('teachers')  //如果不超过60秒，返回数组，否则返回undefined
```
```js
//答案
var Storage = (function(){
    return {
        set:function(key,value,expireSeconds){
            localStorage[key] = JSON.stringify({
                value:value,
                expirexd:expireSeconds===undefined?undefined:Date.now()+1000*expireSeconds
            })
        },
        get:function(key){
            if(localStorage[key]===undefined){
                return
            }
            var o = JSON.parse(localStorage[key])
            if(o.expired === undefined ||Date.now()<o.expired){
                return o.value
            }else{
                delete localStorage[key]
            }
        }
    }
})
```