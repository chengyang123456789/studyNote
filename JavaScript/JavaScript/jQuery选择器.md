#jQuery选择器

* jquery.com   (jQuery官网)

* jQuery is a fast,small,and feature-rich JavaScript library.

* jQuery能做什么？
    * 选择网页元素
    * 改变结果集
    * 元素的操作：取值和赋值
    * 元素的操作：移动
    * 元素的操作：复制、删除和创建
    * 工具方法
    * 事件操作
    * 特殊效果
    * AJAX
    * http://devdocs.io/jquery/

* jQuery的两种API

    ```js
    $.noConflict()
    $('ul').addClass()
    ```

* 国内jQuery地址：输入bootcss->Bootstrap->BootCDN->jquery
* UNPKG

## 选择器

|基本选择器||
|--|--|
|$('\*')|匹配页面所有元素|
|$('#id')|id选择器|
|$('.class')|类选择器|
|$('element')|标签选择器|


|组合/层次选择器||
|--|--|
|$('E,F')|多元素选择器，用，分隔，同事匹配元素E或元素F|
|$('E F')|后代选择器，用空格分隔，匹配E元素所有的后代(不只是子元素、子元素向下递归)元素F|
|$('E>F')|子元素选择器，用>分隔，匹配E元素的所有直接子元素|
|$('E+F')|直接相邻选择器，匹配E元素之后的相邻的同级元素F|
|$('E~F')|普通相邻选择器（弟弟选择器），匹配E元素之后的同级元素F（无论直接相邻与否）|
|$('.class1.class2')|匹配类名中既包含class1又包含class2的元素|



## .eq(index),.get([index])

对于一个特定结果集，我们想获取到指定index的jQuery对象，可以使用eq方法
```js
$('div').eq(3);  //获取结果集中的第四个jQuery对象
```

我们可以通过类数组下标的获取方式或者get方法获取指定index的DOM对象，也就是我们说的jQuery对象转DOM对象

```js
$('div')[2];
$('div').eq(2);
```
get()不写参数把所有对象转为DOM对象返回


## .next([selector]),.prev([selector])

next取得匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。如果提供一个选择器，那么只有紧跟这的兄弟元素满足选择器时，才会返回此元素。prev正好相反，获取元素之前的同辈元素

```js
$('.test').next()
$('.test').prev('li')
``

* .nextAll() , .prevAll()

* .siblings([selectors]) 获取匹配元素集合中每个元素的兄弟元素，可以提供一个可选的选择器

```js
$('li.third-item').siblings()
```

##父子元素获取

* .parent([selector])    取得匹配元素集合中，每个元素的父元素，可以提供一个可选的选择器
* .parents([selector])   得到所有祖先
* .children([selector])  获得匹配元素集合中每个元素的子元素，选择器选择性筛选
* .find([selector])   查找符合选择器的后代元素
* .first()   获取当前结果集中的第一个对象
* .last()    获取当前结果集中的最后一个对象
* .filter(selector),.filter(function(index))  筛选当前结果集中符合条件的对象，参数可以是一个选择器或者一个函数

```js
$('li').filter(':even')
$('li').filter(function(index){
    return index % 3 == 2;
 })
```
* .not(selector),not(function(index))  从匹配的元素集合中移除指定的元素，和filter相反
* .is(selector),.is(unction(index)),is(dom/jqObj)   判断当前匹配的元素集合中的元素，是否为一个选择器，DOM元素或者jQuery对象，如果这些元素至少一个匹配给定的参数那么返回true
* .has(selector),.has(dom)   筛选匹配元素集合中规定那些有相匹配的选择器或DOM元素的后代元素