# setTimeout

##定时器

JavaScript提供定时执行代码的功能，叫做定时器（timer）,主要由setTimeout()和setInterval()这两个函数来完成

##setTimeout()

setTimeout函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器

```js
var timeId = setTimeout(func|code,delay)
//setTimeout函数接收两个参数，第一个参数func|code是将要推迟执行的函数名或者一段代码，第二个参数delay是推迟执行的毫秒数。

console.log(1);
setTimeout('console.log(2)',10000);
console.log(3);

var timer= setTimeout(function (){console.log(2)},10000);
console.log(3);
//取消定时器
clearTimeout(timer)
```


##setInterval()

setInterval函数的用法与setTimeout完全一致，区别仅仅在于setInterval指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行

```js
    var i=1;
    var timer = setInterval(function(){
        console.log(i++);
    },1000);

    var timer = setInterval(function(){
        console.log(new Date());
    },1000);

    //停掉定时器
    clearInterval(timer)
```

* clearTimeout() 和 clearInterval() 函数都返回一个表示计数器编号的整数值，将该证书传入clearTimeout和clearInterval函数，就可以取消对应的定时器 




##单线程模式

```js
var i = 0;
for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i)
    },1000)
}

//输出10个10
```

```js
var t = true;
setTimeout(function(){
    t=false;
},1000);
while(t){
    console.log('2')
}

//输出： 无限循环输出2，报错
```



## 异步与回调

```js
    function f1(callback){
        setTimeout(function(){
            console.log('别急，开始执行f1')
            for(var i=0;i<10000;i++){

            }
            console.log('f1执行完了')

            callback()
        },0);
    }

    function f2(){
        console.log('执行f2')
    }
    function f3(){
        console.log('执行f3')
    }

    f1(f2)  //当f1执行完之后再执行 f2
    f3()
```

## 函数节流

```js
    var timer
    function hiFrequency(){
        if(timer){
            clearTimer(timer)
        }
        timer = setTimeout(function(){
            console.log('do something')
        },300)
    }
    hiFrequency()
    hiFrequency()
    hiFrequency()
```
```js
//改造
    function throttle(fn,delay){
        var timer = null;
        return function(){
            clearTimeout(timer)
            timer=setTimeout(function(){
                fn(arguments)
            },delay)
        }
    }

    function fn(){
        console.log('hello')
    }
    var fn2=throttle(fn,1000)
    fn2()
    fn2()
    fn2()

```

```js
//节流throttle代码：
function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
         // 在函数开头判断标记是否为true，不为true则return
        if (!canRun) return;
         // 立即设置为false
        canRun = false;
        // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => { 
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
        // 当定时器没有执行的时候标记永远是false，在开头被return掉
            fn.apply(this, arguments);
            canRun = true;
        }, 500);
    };
}

function sayHi(e) {
    console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));
```

```js
//防抖debounce代码：
function debounce(fn) {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
        // 每当用户输入的时候把前一个 setTimeout clear 掉
        clearTimeout(timeout); 
        // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, 500);
    };
}
// 处理函数
function handle() {
    console.log(Math.random());
}
// 滚动事件
window.addEventListener('scroll', debounce(handle));
```