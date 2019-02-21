# jQuery DOM 操作

## 创建元素

只需要把DOM字符串传入$方法即可返回一个jQuery对象

`var obj = $('<div class="test"><p><span>Done</span></p></div>')`;

## 添加元素

* .append(content[,content]) /  .append(function(index,html))

1. 可以一次添加多个内容，内容可以是DOM对象、HTML string、jQuery对象
2. 如果参数是function，function可以返回DOM对象、HTML string、jQuery对象，参数是集合中的元素位置原来的HTML值

```js
$(".inner").append("<p>Test</p>");
$("body").append($newdiv1,[newdiv2,existingdiv1]);
$("p").append("<strong>hello</strong>");
$("p").append($("strong"));
$("p").append(document.createTextNode("hello"));

```

* .appendTo(target)

把对象插入到目标元素尾部，目标元素可以是selector，DOM对象，HTML string，元素集合，jQuery对象；

```js
$("h2").appendTo($(".container"));
$("<p>Test</p>").appendTo(".inner");

```


* .prepend(content[,content]) / .prepend(function(index,html))

向对象头部追加内容，用法和append类似，内容添加到最开始


* .prependTo

把对象插入到目标元素头部，用法和prepend类似

```js
$("<p>Test</p>").prependTo(".inner")

```

* .before([content][,content])/.before(function)

在对象前面（不是头部，而是外面，和对象并列同级）插入内容，参数和append类似

```js
$(".inner").before("<p>Test</p>");
$(".container").before($("h2"));
$("p").first().before(newdiv1,[newdiv2,existingdiv1]);
$("p").before("<b>Hello</b>");
$("p").before(document.createTextNode("hello"));
```


* .insertBefore(target)

把对象插入到target之前（同样不是头部，是同级）

```js
$("h2").insertBefore(".inner")

```

* .after([content][,content])

和before相反，在对象后

* .insertAfter()

和insertBefore()相反



##删除元素

* .remove([selector])

删除被选元素（及其子元素）
```js
$("#div1").remove();

//也可以添加一个可选的选择器参数来过来匹配的元素
$('div').remove('.test')
```

* .empty()

 清空被选择元素内所有子元素

```js
$('body').empty();
```

* .detach()

detach()方法和remove（）一样，除了detach（）保存所有jQuery数据和被移走的元素相关联。当需要移走一个元素，不就又将该元素插入DOM时，这种方法很有用



##包裹元素

* .wrap(wrappingElement)/.wrap(function(index))

为每个对象包裹一层HTML结构，可以是selector，element，HTMLstring,jQuery object

```js
<div class="container">
    <div class="inner">Hello</div>
    <div class="inner">Goodbye</div>
</div>

//包裹元素
$(".inner").wrap("<div class="new"></div>")

//最终结果
<div class="container">
    <div class="new">
        <div class="inner">Hello</div>
    </div>
    <div class="new">
        <div class="inner">Goodbye</div>
    </div>
</div>

```

* .wrapAll(wrappingElement)

把所有匹配对象包裹在同一个HTML结构中

```js

<div class="container">
    <div class="inner">Hello</div>
    <div class="inner">Goodbye</div>
</div>

//包裹元素
$(".inner").wrapAll("<div class="new"></div>")

//最终结果
<div class="container">
    <div class="new">
        <div class="inner">Hello</div>
        <div class="inner">Goodbye</div>
    </div>
</div>

```

* wrapInner(wrappingElement)/.wrapInner(function(index))

包裹匹配元素内容

```js

<div class="container">
    <div class="inner">Hello</div>
    <div class="inner">Goodbye</div>
</div>

//包裹元素
$(".inner").wrapInner("<div class="new"></div>")

//最终结果
<div class="container">
    <div class="inner">
        <div class="new">Hello</div>
    </div>
    <div class="inner">
        <div class="new">GoodbyeGoodbye</div>
    </div>
</div>

```

* .unwrap()

把DOM元素的parent移除


* html([string])

这是一个读写两用的方法，用于获取/修改元素的innerHTML
1. 当没有传递参数的时候，返回元素的innerHTML
2. 当传递了一个string参数的时候，修改元素的innerHTML为参数值

```js

$('div').html()
$('div').html('123')

```
后续这种读写两用的方法很多，原理都类似
1. 如果结果是多个进行复制操作的时候会给每个结果都赋值
2. 如果结果多个，获取值的时候，返回结果集中的第一个对象的相应值

* text()

和html方法类似，操作的DOM的innerText值








# 属性&CSS操作

## 属性相关

* .val([value])

读写双用的方法，用来处理ｉｎｐｕｔ的ｖａｌｕｅ，当方法没有参数的时候返回ｉｎｐｕｔ的ｖａｌｕｅ值，当传递了一个参数的时候，方法修改ｉｎｐｕｔ的ｖａｌｕｅ值为参数值

```js
$('input').val()

$('input').val('newValue');
```

* .attr()

* .attr(attributeName)

获取元素特定属性的值

```js
var title = $('em').attr("title")

```

* .attr(attributeName,value) / .attr(attributesJson) / .attr(attributeName,function(index,attr))

为元素属性赋值
```js
$("#greatphoto").attr("alt","beijing brush seller")


$("#greatphoto").attr({"alt":"beijing brush seller",
“title”:"photo by betty"
})


$("#greatphoto").attr('title',function(i,val){
    return val + "-photo by betty"
})
```

* removeAttr()

为匹配到的元素集合中的每个元素中移除一个属性（ａｔｔｒｉｂｕｔｅ）


* prop()/.removePop()

这两个方法是用来操作元素的ｐｒｏｐｅｒｔｙ的，设置或返回被选元素的属性和值，ｐｒｏｐｅｒｔｙ和ａｔｔｒｉｂｕｔｅ是非常相似的概念
当该方法用于返回属性值时，则返回第一个匹配元素的值。
当该方法用于设置属性值时，则为匹配元素集合设置一个或多个属性/值对。

```js
$(selector).prop(property)
```



## CSS相关

* .css()

和ａｔｔｒ非常相似，用来处理元素的ｃｓｓ

* .css(propertyName) / .css(propertyNames)

获取元素ｓｔｙｌｅ特定ｐｒｏｐｅｒｔｙ的值

```js
var color = $(this).css("background-color");

var styleProps = $(this).css([
    "width",
    "height",
    "color",
    "background-color"
]);

```
```js
$("div.example").css("width",function(index){
    return index * 50;
});

$(this).css("width","+=200");

$("this").css("bakcground-color","yellow");

$(this).css({
    "background-color":"yellow",
    "font-weight":"bolder"
});

```

* .addClass(className) / .removeClass(className)
* .addClass(className) / .addClass(function(index,currentClass))

为元素添加ｃｌａｓｓ，不是覆盖是追加，也不会检查重复

```js
$("p").addClass("myClass")

$("ul li").addCLass(function(index){
    retrun "item-" + index;
})

```

* .removeClass(className) / .removeClass(function(index,class))

 移除元素单个、多个、所有ｃｌａｓｓ

 ```js
$("p").removeCLass("myCLass yourClass")

$("li:last").removeCLass(function(){
    return $(this).pre().attr("class");
});

 ```

 * .hasClass(className)

 检查元素是否包含某个ｃｌａｓｓ，返回ｔｒｕｅ/ｆａｌｓｅ

```js
$("#mydiv").hasCLass("foo")

```

* .toggleClass(className)

toggle是切换的意思，方法用于切换，ｓｗｉｔｃｈ是个ｂｏｏｌ类型值

```js
<div class="tumble">Some Text</div>
```


## 核心方法

* .each(function(index,Element))

遍历一个ｊＱｕｅｒｙ对象，为每个匹配元素执行一个函数
```js
$("li").each(function(index){
    console.log(index+":"+$(this).text());
});
```

* jQuery.each(collection,callback(indexInArray,valueOfElement))

一个通用的迭代函数，它可以用来无缝迭代对象和数组。数组和类似数组的对象通过一个长度属性（如一个函数的参数对象）来迭代数字索引，从０到ｌｅｎｇｔｈ－１．其他对象通过其属性名进行迭代。

```js
var obj={
    "flammable":"inflammable",
    "duh":"no duh"
};

$.each(obj,function(key,value){
    alert(key+":"+value);
});

```

* .map(callback(index,domElement))

通过一个函数匹配当前集合中的每个元素，产生一个包含新的ｊＱｕｅｒｙ对象

```js
$("div").map(function(i,ele){
    return this.id;
});

```

* jQuery.extend([deep,]target[,object1][,objectN])

1. 当我们提供两个或多个对象给$.extend(),对象的所有属性都添加到目标对象（target参数）。
2. 如果只有一个参数提供给$.extend(),这意味着参数被省略。在这种情况下，jQuery对象本身被默认为目标对象。这样，我们可以在ｊＱｕｅｒｙ的命名空间下添加新的功能。这对于插件开发者希望向ｊＱｕｅｒｙ中添加新函数时是很有用的

目标对象（第一个参数）将被修改，并且将通过$.extend()返回。然而，如果我们想保留原对象，我们可以通过传递一个空对象作为目标对象：

```js
var object = $.extend({},obj1,obj2);
```

默认情况下，通过$.extend()合并操作不是递归的；

如果第一个对象的属性本身是一个对象或者数组，那么它将完全用第二个对象相同的ｋｅｙ重写一个属性。这些值不会被合并。如果将ｔｒｕｅ作为该函数的第一个参数，那么会在对象上进行递归的合并。

```js
var object1 = {
    apple:0,
    banana:{weight:52,price:100},
    cherry:97
};
var object2 = {
    banana:{price:200},
    duration:100
}

```


* .clone([withDataAndEvents])

.clone()方法深度复制所有匹配的元素集合，包括所有匹配元素、匹配元素的下级元素、文字节点

通常我们将页面上一个元素插入到ＤＯＭ里另一个地方，它会被从老地方移走，类似剪切的效果

```js
$('.hello').appendTo('.goodbye');

<div class="container">
    <div class="goodbye">
        goodbye
        <div class="hello">hello</div>
    </div>
</div>

```

但是我们如果需要的是复制而不是剪切，我们可以像下面这样些代码：

```js
$(".hello").clone.appendTO('.goodbye');
```

* .index() / .index(selector) / .index(element)

从给定集合中查找特定元素ｉｎｄｅｘ

1. 没参数返回第一个元素ｉｎｄｅｘ
2. 如果参数是ＤＯＭ对象或者ｊＱｕｅｒｙ对象，则返回参数在集合中的ｉｎｄｅｘ
3. 如果参数是选择器，返回第一个匹配元素ｉｎｄｅｘ，没有找到返回－１

```js
var listItem = $("#bar");
alert('Index:'+ $("li").index(listIem));

```


* .ready(handler)

当ＤＯＭ准备就绪时，指定一个函数来执行。
虽然ＪａｖａＳｃｒｉｐｔ提供了ｌｏａｄ事件，当页面呈现时用来执行这个事件，直到所有的东西，如图像已被完全接收前，此事件不会再被触发