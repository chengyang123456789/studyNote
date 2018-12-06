# 字符串
* 字符串就是零个或多个排在一起的字符，放在单引号或双引号之中
* 单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号

## 多行转义
* 如果要在单引号字符串的内部，使用单引号（或者在双引号字符串的内部，使用双引号），就必须在内部的单引号（或者双引号）前面加上反斜杠，用来转义。
```js
    'Did you say \'hello\'?'
    //"Did you say 'hello' ?"

    "\\ddd"
    // "\ddd"


    "\\\\ddd"
    // "\\ddd"

```

* 如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠
```js
    var longString = "Long \
    long\
    long\
    string";
    // "Long long long string"
    //上面代码表示，加了反斜杠以后，原来写在一行的字符串，可以分写成多行，效果与写在一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错
```

* 连接运算符（`+`）可以连接多个单行字符串，用来模拟多行字符串


## 常见的字符创方法
1. 长度计算，连接 
```js
    var str = 'hello';
    console.log(str.length);
    console.log(str[0]);
    console.log(str[str.length -1]);
    console.log(str.charAt(0);  //得到字符串的第一个字符
    console.log(str.charCodeAt(0)); //获得这个字符所对应的ASCII

    var str2 = 'world';
    var str3 = str1 + str2 ;
    console.log(str3);

    var str4 = 'red'
    var str5 = '衣服的颜色是${color}'  // "衣服的颜色是red"
```

2. 字符串截取
```js
    var str = "hello world";
    var sub1 = str.substr(1,3); //第一个是开始位置，第二个是长度 ell
    var sub2 = str.substring(1,3); // 第一个是开始位置，第二个是结束位置，长度为
    var sub3 = str.slice(1,3); //同上，允许负参
```

3. 查找
```js
    var str = "hello my world";
    var s1 = str.search('my');  //6 找不到-1
    var s2 = str.replace('my','your');  //
    var s3 = str.match('my')   //返回匹配的数组
```

4. 大小写
```js
    var str = "hello";
    str.toUpperCase();
    str.toLowerCase();
```










# JS Math

## Math

Math对象是JavaScript的内置对象，提供一系列数学常熟和数学方法。Math对象只提供了静态的属性和方法，所以使用时不用实例化

**属性**

Math对象提供以下一些只读的数学常数

**方法**

*round*

* round方法用于四舍五入
```js
    Math.round(0.1)  //0
    Math.round(0.5)  //1
```
* 它对于负值的运算结果与正值略有不同，主要体现在对.5的处理
```js
    Math.round(-1.1)   //-1
    Math.round(-1.5)  //-1
```


*abs,max,min*

abs方法返回参数值的绝对值

```js
    Math.abs(1)   //1
    Math.abs(-1)  //1
```

max 方法返回最大的参数，min方法返回最小的参数

```js
    Math.max(2,-1,5)  //5
    Math.min(2,-1,5)   //-1
    Math.max(4,-1,'aa')  //NAN

    //用Math找数组的最大、最小值
    Math.max.apply(null,[3,-4,2,6])   //6
    Math.min.apply(null,[3,-4,2,6])   //-4
```


*floor.ceil*

floor方法返回小于参数值的最大整数

```js
    Math.floor(3.2)   //3
    Math.floor(-3.2)   //-4
```

ceil方法返回大于参数值的最小整数

```js
    Math.ceil(3.2)  //4
    Math.ceil(-3.2)   //-3
```


*pow,sqrt*

pow 方法返回以第一个参数为底数、第二个参数为幂的指数值

```js
    Math.pow( 2,3)  //8
```

sqrt 方法返回参数值的平方根。如果参数是一个负值，则返回NAN

```js
    Math.sqrt(4)  //2
    Math.sqrt(-4)   //NAN
```

*log,exp*

log方法返回以e为底的自然对数值

```js
    Math.log(Math.E)   //1
    Math.log(10)    //2.302585092994046
```

求以10为底的对数，可以除以Math.LN10;求以2为底的对数，可以除以Math.LN2。

```js
    Math.log(100)/Math.LN10    //2
    Math.log(8)/Math.LN2   //3
```
exp方法返回常数e的参数次方

```js
    Math.exp(1)   //2.718281828459045
    Math.exp(3)   //20.085536923187668
```  

*random*

该方法返回0到1之间的一个伪随机数，可能等于0，但是一定小于1.`Math.random()`

```js
    //返回给定返回内的随机数
    function getRandonArbitrary(min,max){
        return Math.random() * (max-min) + min;
    }

    //返回给定范围内的随机整数
    function getRandomInt(min,max){
        return Math.floor(Math.random() * (max - min +1) + min)
    }
```
```js
    //获取一个随机字符串
    function randomStr(len){
        var str = ''
        var dict = '0123456789abcdefghighlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_'
        for(var i=0;i<len;i++){
            var index = Math.floor(Math.random()*dict.length)
            str += dict[index]
        }
        return str
    }
    var str = randomStr(32)
    console.log(str)
```
*三角函数*




# JS Date

# Date对象是JavaScript提供的日期和时间的操作接口。Date对象有几个静态方法

**Date.now()**

now方法返回当前距离1970年1月1日00:00:00的毫秒数

```js
    Date.now();
```

**Date.parse()**

parse方法用来解析日期字符串，返回距离1970年1月1日00：00:00的毫秒数

日期字符串的格式应该完全或者部分符合YYYY-MM-DDTHH:mm:ss.sssZ格式，Z表示时区，是可选的

如果解析失败，返回NaN

```js
    Date.parse("January 26,2011 13:51:50")
    Date.parse("2011-10-10")  //1318204800000
```

**new Date()**

使用Date构造函数创建一个Date的实例
```js
new Date();
```
实例时间为当前时间，同时实例有些方法

*get*

* Date.prototype.getTime():返回实例对象距离1970年1月1日00:00:00对应的毫秒数，等同于valueOf方法
* Date.prototype.getDate():返回实例对象对应每个月几号（从1开始）
* Date.prototype.getDay():返回星期，星期日为0，星期一为1
* Date.prototype.getFullYear():返回四位年份
* Date.prototype.getMonth():返回月份（0表示1月，11表示12月）
* Date.prototype.getHours():返回时间（0-23）

*set*

* Date.prototype.setDate(date):设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间数
* .setFullYear(year[,month.date]): 设置四位年份
* .setMilliseconds()：设置毫秒（0-999）
* ...


## 日期运算

类型转换时，Date对象的实例如果转换为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期对象进行减法运算，返回的就是他们间隔的毫秒数。进行减法运算，返回的就是连接后的两个字符串。

```js
    var then = new Date(2013,2,1);
    var now = new Date(2013,3,1);
    now - then
```
```js
    //300天以前是几月几号
    var curTime = Date.now()
    var d = new Date(curTime-100*24*60*60*1000)  //100天的毫秒数
    var Month = new Date(d).getMonth()  // 实际日期等于得到日期数加1
    var Day = new Date(d).getDate() 
```