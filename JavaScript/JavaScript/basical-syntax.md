# 基本语法

## 调试
```javascript
    var str = 'hello'
    console.log(str)
```

* 语句
    * JavaScript程序的执行单位为行（line），也就是一行一行地执行。一般情况下，每一行就是一个语句（statement）。语句是为了完成某种任务而进行的操作
    * 语句以分号“；”结尾，一个分号就表示一个语句结束。多个语句可以写在一行内。
    * 分号前面可以没有任何内容，JavaScript引擎将其视为空语句。

*  表达式
    * 指为了得到返回值的计算式。语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；后者是为了得到返回值，一定会返回一个值。
    * 表达式不需要分号结尾。一旦在表达式后面添加分号，则JavaScript引擎就将表达式视为语句，这样会产生一些没有任何意义的语句。

* 变量
    * 变量是对“值”的引用，使用变量等同于引用一个值。每一个变量都有一个变量名。

* 标识符
    * JavaScript的标识符大小写敏感，A和a是两个不同的标识符。
    * 第一个字符可以是任意Unicode字母（包括英文字母和其他语言的字母），以及美元符号$和下划线_
    * 第二个字符及后面的字符，除了Unicode 字母，美元符号$和下划线_，还可以用数字



# 数据类型
## 概述
* JavaScript语言的每一个值，都属于某一种数据类型。JavaScript的数据类型共有六种。（ES6又新增了第七种Symbol类型的值）
    * 数值：整数和小数
    * 字符串：字符组成的文本
    * 布尔值： true或false
    * undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
    * null：表示无值
    * 对象（object）：各种值组成的集合

* 对象又可以分成三个子类型
    * 狭义的对象（object）
    * 数组（array）
    * 函数（function）

## typeof运算符
* JavaScript又三种方法，可以确定一个值到底是什么类型。
    * typeof 运算符
    * instanceof 运算符
    * Object.prototype.toString 方法

* typeof运算符可以返回一个值的数据类型

## 布尔值
* 下列运算符会返回布尔值
    * 两元逻辑运算符： `&&（And）`，`||（Or）`
    * 前置逻辑运算符：`!(Not)`
    * 相等运算符：`===` ，` !==` , `==` , `!=`
    * 比较运算符：`>` ,`>=` , `<` , `<=`

## 运算符
* 算数表达式
* 比较表达式
* 逻辑表达式
* 赋值表达式
* 单目运算符
* 关键字运算符
    * typeof
    * delete
    * instanceof


## 算数表达式
* 有些操作符对不用的数据类型有不同的含义，比如`+`
    * 在两个操作数都是数字的时候，会做加法运算
    * 两个参数都是字符串或在有一个参数是字符串的情况下会把另外一个参数转换为字符串做字符串拼接
    * 在参数有对象的情况下会调用其valueOf或toString
    * 在只有一个字符串参数的时候回尝试将其转换为数字
    * 在只有一个数字参数的时候返回其正数值

* 比较运算符
    * `==` 相等
    * `===` 严格相等
    * `!=` 不相等
    * `!==` 严格不相等
    * `<` 小于
    * `>` 大于
    * `<=` 小于或等于
    * `>=` 大于或等于

* 布尔运算符
    * `!` 取反运算符
    * `&&` 且运算符
    * `||` 或运算符
    * `condition ? true case:false case` 三元条件运算符 

* 位运算符
    * `|` 或运算，表示两个二进制位有一个为1，结果为1，否则为0
    * `&` 与运算，表示两个二进制位都为1，结果为1，否则为0
    * `~` 否运算，表示将一个二进制位变成反值
    * `^` 异或运算，表示两个二进制位中有且仅有一个位1时，结果为1，否则为0
    * `<<` 左移运算
    * `>>` 右移运算
    * `>>>` 带符号位的右移运算


## 运算符优先级
* 搜索 MDN运算符优先级
    1. 自增、自减
    2. typeof
    3. 加减乘除
    4. 与或非
    5. 等号、赋值 
    6. 逗号 （忽略第一个操作数，返回第二个操作数）


## JS类型转换
* 对于if语句括号里的表达式，会被强制转换为布尔类型

**原理**

|类型|结果|
|---|---|
|Undifined|false|
|Null|false|
|Boolean|直接判断|
|String|空字符串为false，其他都为true|
|Number|+0，-0，或者NaN为false，其他为true|
|Object|true|

* == 的判断

|x|y|结果|
|---|---|---|
|null|undefined|true|
|number|string|x==toNumber(y)|
|boolean|(any)|toNumber(x)==y|
|object|string or number|toPrimitive(x)==y|
|othherwise|otherwise|false|

**toNumber**

|type|result|
|---|---|
|undefined|NaN|
|null|0|
|boolean|true ->1,false ->0|
|string|"abc" ->NaN,"123" ->123|


**toPrimitive**

对于Object类型，先尝试调用.valueOf()方法获取结果。如果没有定义，再尝试调用.toString()获取结果



## 流程控制语句

**if** 

**switch**

```js

    switch(expression){
        case value1:
            statement;
            break;
        
        case value2:
            statement;
            break;
        default:
            statement;
    } 

```

**while和do-while**

```js
    while(expression){
        statement;
    }
```

```js
    do{
        statement;
    }while(expression);
```

**for**

```js
    for(var i=10;i>0;i--){
        statement;
    }
```

**for-in**

for-in是一种迭代语句，用于枚举对象的属性

```js
    for(property in object){
        statement;
    }
```


* break 用于强制退出循环体，执行循环后面的语句
* continue 用于退出本次循环执行下次循环



## 函数和作用域

JavaScript函数是指一个特定代码块，可能包含多条语句，可以通过名字来供其他语句调用以执行函数包含的代码语句

**函数的声明** 

```js
    function doSomething(){
        statement1;
        statement2;
        statement3;
    }
```

**函数的调用**

```js
    doSomething();
```

**函数表达式**

```js
    var printName = function(){
        console.log('Byron');
    };

    printName();
```



* 返回值
    * 调用return后，函数立即中断并返回结果，即使后面还有语句也不再执行


* 声明提前
   * 和变量的声明一样，函数声明同样会前置，如果我们使用函数表达式name规则和变量一样
   * 如果我们使用函数声明的方式，那么即使函数写在最后也可以在前面语句调用，前提是函数声明部分已经下载到本地

**函数立即执行表达式是一个在定义时就会立即执行的  JavaScript 函数**

```js
    (function(){
        console.log('jirengu')
    }()
```

## JS作用域链
1. 函数在执行的过程中，先从自己内部找变量
2. 如果找不到，再从创建当前函数所在的作用域去找，依次往上


## JS引用类型

**基本类型**    **引用类型**

* 基本类型值（数值、布尔值、null和undefined）：指的是保存在栈内存中的简单数据段；
* 引用类型（对象、数组、函数、正则）：指的是那些保存在堆内存中的对象，变量中保存的实际上只是一个指针，这个指针执行内存中的另一个位置，由该位置保存对象  

*浅拷贝*

```js
    function shallowCopy(oldObj){
        var newObj = {};
        for(var i in oldObj){
            newObj[i] = oldObj[i];
        }
        return newObj;
    }

```
*深拷贝
```js
    function deepCopy(oldObj){
        var newObj ={}
        for(var key in oldObj){
            if(typeof oldObj[key]==='object'){
                newObj[key] = deepCopy(oldObj[key]);
            }else{
                newObj[key] = oldObj[key];
            }
        }
        return newObj;
    }
```