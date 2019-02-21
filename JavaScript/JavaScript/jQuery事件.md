# 事件

## .on(event[,selector][,data],handler(eventObject))

1. events:一个或多个空格分隔的时间类型和可选的命名空间，或仅仅是命名空间，比如“click”，“keydown.myPlugin”,或者“.myPlugin”
2. selector:一个选择器字符串，用于过滤出被选中的元素中能触发时间的后代元素。如果选择器是null或者忽略了该选择器，那么被选中的元素总是能触发事件
3. data:当一个事件被触发时，要传递给时间处理函数的event.data
4. handler(eventOjbect):事件被触发时，执行的函数。若该函数只要执行return false的话，那么该参数位置可以简写成false

```js
<div class="box">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</div>
<input id="ipt" type="text" ><button id="btn"></button>
<div id="wrap"></div>

<script>
$('.box li').on('click',function(){
    console.log(1)
    var str = $(this).text()
    $('.wrap').text(str)
})
//等同yu
$('.box>ul>li').click(function(){
    console.log(2)
    var str = $(this).text()
    $('.wrap').text(str)
})

//也可以这样xie
$('.box li').on('click.hello',function(){
    console.log(1)
     var str = $(this).text()
    $('.wrap').text(str)
})
//命名空间没什么特别的作用，只不过在解绑事件时便于区分绑定的事件
$('.box li').off('click.hello')


//可是用如下方法新增的元素是没有绑定事件的
$('#btn').on('click',function(){
    bar value = $('#ip').val()
    $('.box>ul').append('<li>'+ value+'</li>')
})

//我们可以用事件代理
$('.box ul').on('click','li',function(){
    var str = $(this).text()
    $('#wrap').text(str)
})
//上面代码相当于原生js的
document.querySelector('.box ul').addEventListener('click',function(e){
    if(e.target.tagName.toLowerCase() === 'li'){
        // do something
    }
})


//绑定事件的时候我们也可以给事件附带些数据，只不过这种用法很少见
$('.box').on('click',{name:'bob'},function(e){
    console.log(e.data)
})
</script>
```


## .one(event[,selector][,data],handler(eventObject))

同on，绑定事件，但只执行一次


## .off(events[,selector][,handler])

移除一个事件处理函数

```js
$('.box li').off('click')

```

## .trigger(eventType[,extraParameters])

根绑定到匹配元素的给定的事件类型执行所有的处理程序和行为
```js
$('#foo').on('click',function(){
    console.log($(this).text())
});
$('#foo').trigger('click')


```

## 表单事件

* .blur()
* .change()
* .focus()
* .select()
* .submit()



## 键盘事件

* .keydown()
* .keyup()
* .keypress()

## 鼠标事件

* .click()
* .contextmenu()
* .dblclick()
* .focusin()
* .focusout()
* .hover()
* .mousedown()
* .mouseenter()
* .mouseleave()
* .mousemove()
* .mouseout()
* .mouseover()
* .mouseup()


## 浏览器事件

* .resize()
* .scroll()



## 文档加载事件

* .holdReady()
* .ready()




# jQuery 效果


**基础**

* .hide([duration][,easing][,complete])

用于隐藏元素，没有参数的时候等同于直接设置ｄｉｓｐｌａｙ属性

```js
$('.box').hide(300,function(){
    alert("completed")
})

```

* .show([duration][,easing][,complete])

用于显示元素，用法和ｈｉｄｅ类似

* .toggle([duration][,easing][,complete])

用于切换元素的隐藏，显示，类似于toggleClass



**渐变**

* .fadeIn([duration][,easing][,complete])

通过淡入的方式显示匹配元素，参数含义和上面相同

* .fadeOut([duration][,easing][,complete])

淡出的方式隐藏元素

* .fadeTo(duration,opacity[,easing][,complete])

调整匹配元素的透明度，方法通过匹配元素的不透明度做动画效果

* .fadeToggle([duration][,easing][,complete])

通过匹配的元素的不透明度动画，来显示或隐藏它们，方法执行匹配元素的不透明度动画，当做课件元素调用，元素不透明度一旦达到0. display样式属性设置为none，所以元素不再影响页面的布局。


**滑动**

* .slideDown([duration][,easing][,complete])

滑动动画显示一个匹配元素，方法将给匹配元素的高度的动画，这会导致页面的下面部分滑下去，弥补了显示的方式

* .slideUp([duration][,easing][,complete])

* .slideToggle([duration][,easing][,complete])

## jQuery 动画


**自定义动画**

* .animate(properties[,duration][,easing][,complete])'

properties是一个css属性和值的对象，动画将根据这组对象移动。

```js

$('#clickme').click(function(){
    $('#book').animate({
        opacity:0.25,
        left:'+=50',
        height:'toggle'
    },5000,function(){
        //Animation complete
    });
});

```

* .clearQueue

清除动画队列中未执行的动画

* .finish

停止当前动画，并清除动画队列中所有未完成的动画，最终展示动画队列最后一帧的最终状态

* .stop([clearQueue][,jumpToEnd])

停止当前正在运行的动画

* clearQueue(default:false)
* jumpToEnd(default:fasle)



## jQueryajax&jsonp

**Ajax**

* jQuery.ajax([settings])

```js
$.ajax({
    url:'xxx.php',
    method:'get', //type:'get/post'
    data:{
        name:'Betty',
        age:24,
        sex:'female'
    }
},dataType:'json').done(function(result){
    console.log(result);
}).fail(function(jqXHR,textStatus){
    console.log(textStatus);
}).always(function(){
    
})

```