#DOM元素选取和创建

##DOM

文档对象模型（DOM）是HTML和XML文档的编程接口。它给文档（结构树）提供了一个结构化的表述并且定义了一种方式——程序可以对结构树进行访问，以改变文档的结构，样式和内容。

##document对象常用属性

```js
    document.doctype
    document.title
    document.characterSet
    document.head
    document.body
    document.images

    /* 了解
    readyState属性返回当前文档的状态，共有三种可能的值
    1. loading:加载HTML代码阶段，尚未完成解析
    2. interactive: 加载外部资源阶段
    3. complete: 全部加载完成 
    */
    document.readyState


    /*了解
    compatMode 属性返回浏览器处理文档的模式，可能值为
    1. BackCompat：向后兼容模式，也就是没有添加DOCTYPE
    2. CSS1compat: 严格模式，添加了DOCTYPE
    */
```

## document.location

document.location也可直接使用location
```js
document.loaction === location  //true
document.location === wimdow.location //true
```
location属性返回一个只读对象，提供了当前文档的URL信息
```js
    //  假定当前网址为http://user:passwd@ww.example.com:4097/path/a.html?x=111#part1
    document.location.href          //"http://user:passwd@ww.example.com:4097/path/a.html?x=111#part1"
    document.location.protocol      //"http:"
    document.location.host          //"ww.example.com:4097"
    document.location.hostname      //"ww.example.com"
    document.location.port          //"4097"
    document.location.pathname      //"path/a.html"
    document.location.search        //"?x=111"
    document.location.hash          //"part1"
    document.location.user          //"user"
    document.location.passed        //"passed"


    //跳转到另一个网址
    document.location.assign('http://www.google.com')
    //优先从服务器重新下载
    document.location.reload(true)
    //优先从本地缓存重新加载（默认值）
    document.location.reload(false)
    //跳转到另一个网址，但当前文档不保留在history对象中，即跳转后无法用后退按钮回到当前页面
    document.location.assign('http://www.google.com')
    //将location对象转换为字符串，等价于document.location.href
    document.location.toString()

```

## document.open()、document.close()

* document.open()用于新建一个文档，共write方法写入内容。它实际上等于清除当前文档，重新写入内容
* document.close()用于关闭open方法所新建的文档。一旦关闭，write方法就无法写入内容了。

## document.write()

document.write()方法用于向当前文档写入内容。只要当前文档还没有用close方法关闭，它所写入的内容就会追加在已有内容的后面

```js
    document.open();
    document.write('hello');
    document.write('world');
    document.close();
```

1. 如果页面已经渲染完成再调用write方法，它会首先调用open方法，擦除当前文档所有内容，然后再写入
2. 如果在页面渲染过程中调用write方法，并不会调用open方法。





## Element


除了document对象，在DOM中最常用的就是Element对象了，Element对象表示HTML元素

Element对象可以拥有类型为元素节点、文本节点、注释节点的子节点，DOM提供了一系列的方法可以进行元素的增、删改、查操作

Element有几个重要的属性

1. nodeName: 元素标签名，还有个类似tagName
2. nodeType: 元素类型
3. className: 类名
4. id: 元素id
5. children: 子元素列表（HTMLCollection）
6. childNodes: 子元素列表（NodeList）
7. firstchild:第一个子元素
8. lastChild:最后一个子元素
9. nextSibling: 下一个兄弟元素
10. previousSibling: 上一个兄弟元素
11. parentNode、parentElement:父元素


## 查询元素

**getElementById()**

getElementById()方法返回匹配指定ID属性的元素节点。如果没有发现匹配的节点，则返回null。这也是获取一个元素最快的方法

```js
var elem = document.getElementById('test');
```

**getElementsByClassName()**

getElementsByClassName()返回一个类似数组的对象（HTMLCollection类型的对象），包括了所有class名字符合指定条件的元素（搜索范围包括本身），元素的变化实时反映在返回结果中。这个方法不仅可以在document对象上调用，也可以在任何元素节点上调用

```js
    var elements = document.getElementsByCLassName('tab');

    //获取子元素
    <p id='target'>jirengu</p>
    <div class="box">1
        <div class= "child">child</div>
    </div>
    <div class='box'>2</div>
    //ES3写法
    document.getElementsByClassName('box')[0].getElementsByClassName('child')
    //ES5方法
    document.querySelector('.box .child')
    document.querySelector('#target')
    //选择多个div
    document.querySelectorAll('div')
```

**getElementsByName()**

    getElementsByName()方法用于选择拥有name属性的HTML元素，比如form、img、frame、embed和object，返回一个NodeList格式的对象，不会实时反映元素的变化。


**getElementsByTagName()**

getElementsByTagName()反方返回所有指定标签的元素（搜索范围包括本身）。返回值是一个HTMLCollection对象，也就是说，搜索结果是一个动态集合，任何元素的变化都会实时反映在返回的集合中。这个方法不仅可以在document对象上调用。也可以在任何元素节点上调用。

**querySelector()**

querySelector()方法返回匹配指定的CSS选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回null。

```js
    var el1 = document.querySelector('.myclass')
    var el2 = document.querySelector('#myParent > [ng-click]')
```
querySelector方法中无法选择CSS伪元素。


**querySelectorAll()**

querySelectorAll()返回匹配指定的CSS选择器的所有节点，返回的是NodeList类型的对象。NodeList对象不是动态集合，所以元素节点的变化无法实时反映在返回结果中。

```js
    elementList = document.querySelectorAll(selectors);

    //querySelectorAll方法的参数，可以是逗号分隔的多个CSS选择器，返回所有匹配其中一个选择器的元素
    var matches = document.querySelectorAll("div.note,div.alert");

```

## HTMLCollection 与 NodeList区别：（基本相似）

* 相同点：都是类数组对象，节点的变化都会实时反映在集合中
* 不同点：少部分方法不一样，比如NodeList有forEach方法，而HTMLCollection没有


## 创建元素

**createElement()**

createElement方法用来生成HTML元素节点

```js
    var newDiv = document.createElement("div");
```

**createTextNode()**

createTextNode()方法用来生成文本节点，参数为所要生成的文本节点内容

```js
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("hello");

```

**createDocumentFragment()**

createDocumentFragment()方法生成一个DocumentFragment对象。

```js
    var docFragment = document.createDocumentFragment();

```
DocumentFragment对象是一个存在于内存的DOM片段，但是不属于当前文档，常常用来生成比较复杂的DOM结，然后插入当前文档。这样做的好处在于，因为DocumentFragment不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的DOM有更好的性能表现。



## 修改元素

**appendChild()**

在末尾添加元素

```js
    var newDiv = document.createElement("div");
    var newContent=document.createTextNode("hello");
    newDiv.appendChild(newContent);
```

**insertBefore()**

在某个元素之前插入元素

```js
    var newDiv = document.createElement("div");
    var newContent = cdocument.createTextNode("hello");
    newDiv.insertBefore(newContent,newDiv.firstCHild);
```

## 删除元素

删除元素用removeChild()方法即可

```js
    parentNode.removeChild(childNode);
```

## clone元素

cloneNode()方法用于克隆元素，方法有一个布尔值参数，传入true的时候会深复制，也就是会复制元素及其子元素，false的时候只复制元素本身
```js
    clone.cloneNode(true);
```





##  属性操作

**getAttribute()**

getAttribute()用于获取元素的attribute值

```js
node.getAttyribute('id');
```

**createAttribute()**

createAttribute()方法生成一个新的属性对象节点，并返回它

```js
attribute = document.createAttribute(name);
```

**setAttribute()**

setAtttribute()方法用于设置元素属性

```js
    var node = document.getElementById("div1")
    node.setAttribute("my-attribute","newVal")

```

**removeAttribute()**

removeAttribute()用于删除元素属性

```js
    node.removeAttribute('id');
```

**element.attributes**

上面的方法做的事情也可以通过类操作数组属性element.attributes来实现

**innerHTML、outerHTML**

innerHTML属性作用和innerText类似，但是不是返回元素的文本内容，而是返回元素的HTML结构，在写入的时候也会自动构建DOM


**element.nodeValue**

nodeValue方法设置或返回指定节点的节点值

```html
<p id='demo'>请点击按钮来获得button元素的节点值</p>'
<button onclick='myFunction()'>试一下</button>
<script>
    function myFunction(){
        var c=document.getElementsByTagName('Buttom');
        var x=document.getElementById('demo');
        x.innerHtml=c.childNodes[0].nodeValue;
    }
</script>

```


## 常见使用方式

**修改样式**

可修改元素的style属性，修改结果直接反映到页面元素

```js
    document.querySelector('p').style.color = 'red';
    document.querySelector('.box').style.backgroundColor = '#ccc'
```

**获取样式getComputedStyle**

使用getComputedStyle获取元素计算后的样式，不要通过node.style.属性 获取

```js
    var node = document.querySelector('p')
    var color = window.getComputedStyle(node).color

    getComputedStyle(node)['font-size']

```

**class操作**

```js
    var nodeBox = document.querySelector('.box')
    console.log(nodeBox.classList)
    nodeBox.classList.add('active')  //新增class
    nodeBox.classList.remove('active')  //删除class
    nodeBox.classList.toggle('active')  //新增/删除切换
    nodeBox.classList.contains('active')  //判断是否拥有class
```




## 页面宽高

**element.clientHeight**


**element.offsetHeight**

**element.scrollHeight**

* 元素滚动内容的总长度。如果元素没出现滚动条，scrollHeight=clientHeight


**element.scrollTop**

* 滚动的高度

**window.innerHeight**

* 窗口的高度


## 如何判断一个元素是否出现在窗口视野中？

* 


## 如何判断页面滚动到底部？

*