# 对象

*所谓对象，就是一种无序的数据集合，由若干个“键值对”（key-value）构成*

```js
    var obj = {
        p: 'Hello World'
    };
```

*获取对象里的值*

```js
    var company = {
        name: 'stoopid',
        age: 0,
        sayHello: function(){
            console.log('hello!')
        }
    } 
    console.log(company.name)
    console.log(company['name'])
    company.sayhello()
    company.addr = 'beijing'        /* 添加键值对*/
    company['job'] = 'foolpeople'   /* 添加键值对*/
    for(var key in company){
        console.log(key)                 /* 遍历对象*/
        console.log(company[key])
    }

```


* 键名 
    * 对象的所有键名都是字符串，所以加不加引号都可以。
    * 如果键名是数值，会被自动转换为字符串
    * 如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），也不是数字则必须加上引号，否则报错


* 属性
    * 对象的每一个“键名”又称为属性，它的键值可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。
    * 对象的属性要用“，”逗号隔开。
    * 属性可以动态创建，不必在对象声明时就指定 

* 对象的引用

    如果不同的变量名指向同一个对象，那么他们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。

```js
    var o1 = {};
    var o2 = o1;
    o1.a = 1;
    o2.a //1
```

**检测变量是否声明**

*如果读取一个不存在的键，会返回undefined，而不是报错。可以利用这点来检查一个全局变量是否被声明*

```js
    if(a){...}  // 报错
    if(window.a){...} //不报错。因为在浏览器环境，所有全局变量都是window对象的属性。window.a的含义就是读取window对象的a属性，如果该属性不存在，就返回undefined，并不会报错。
    if(window['a']){...} //不报错。 这种写法有漏洞，如果a属性是一个空字符串（或其他对应的布尔值为false的情况），则无法起到检查变量是否声明的作用。正确的写法可以采用下面的做法
    
    if('a' in window){
        //变量a声明过
    }else{
        //变量a未声明
    }
```

* 查看所有的属性
    * 查看一个对象的本身的所有属性，可以使用Object.keys方法

```js
    var 0 = {
        key1:1,
        key2:2
    };

    Object.keys(o);//['key1','key2']
```

* delete命令
    * delete命令用于删除对象的属性，删除成功后返回true

```js
    var o =  {p:1}
    Object,keys(o);
    delete o.p // true
    o.p //undefined
    Object.keys(o) //[]
```




#JSON

**JSON格式**

JSON格式（JavaScript Object Notation）是一种用于数据交换的*文本格式*，JSON对值的类型和格式有严格的规定：

1. 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
2. 简单类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN,Infinity,-infinity和undefined）。
3. 字符串必须使用双引号表示，不能使用单引号。
4. 对象的键名必须放在双引号里面。

空数组和空对象都是合格的JSON值，null本身也是一个合格的JSON值。
ES5新增了JSON对象，用来处理JSON格式数据。它有两个方法：JSON.stringify() 和 JSON.parse().

### JSON.stringify()

*基本用法*

JSON.stringify()方法用于将一个值转为字符串。该字符串符合JSON格式
，并且可以被JSON.parse还原。


* 深拷贝的另一种写法
```js
    var obj = {
        name: 'hunger',
        age:3,
        friends:['aa','bb','cc']
    }

    var obj2 = JSON.parse(JSON.stringify(obj))
    obj.age = 4
    console.log(obj2.age) 
```


* JavaScript对象和JSON的关系
    * JavaScript对象的字面量写法只是长得像JSON格式数据，二者属于不同的范畴，JavaScript对象中很多类型（函数、正则、Date）JSON格式的规范并不支持，JavaScript对象的字面量写法更宽松



## JS数组操作
### 数组
*基本使用*
```js
    var arr = [2,3,4]
    var arr = new Array(2,3,4)
    var arr = new Array(3) //数组是空的，长度为3
    arr.length //3
    arr[0] //2
    arr[2] = 100;
    arr[3] //undefined
    arr[3] = 10 // arr.length = 4
    arr[100] = 99 // arr.length=101; arr=[2,3,100,10,undefinedx96,99]
    arr.length = 0 //清空数组

    arr.push('jirengu') // 在数组后面增加一个元素，数组长度加1
    arr.pop() // 取出数组最后一个 元素，数组长度减1
    arr.unshift('lala') //在数组第一位新增
    arr.shift()   //移除数组第一位
```
  
**.splice()**

* JavaScript提供了一个splice方法用于一次性解决数组添加、删除（这两种方法一结合就可以达到替换效果），方法有三个参数
    1. 开始索引
    2. 删除元素的位移
    3. 插入的新元素，也可以写多个
* splice 方法返回一个由删除元素组成的新数组，没有删除则返回空数组

```js
    var arr = [4,5,6,8,9,10]
    arr.splice(2,2)  //得到新数组arrguo，splice第一个参数是起始下标，第二个参数是表示要对其下标开始的几个数进行操作，第三个参数是进行怎样的操作
    arr //arr[4,5,9,10]
    arr.splice(2,0,1,2,3) //arr[4,5,1,2,3,9,10]
```

**.slice()**

```js
    var arr = [3,8,9,6,'hello']
    var arr1 = arr.slice(2,3)  // 从arr下标为2开始，到下标为3结束（不包含下标为3的数据） 
    console.log(arr1)  //[9]
    console.log(arr)  // [3,4,9,'hello']
```

**.join()**

 join()方法用于把数组中的所有元素转换一个字符串。元素是通过指定的分隔符进行分隔的。
```js
    var arr = [3,8,9,6,'hello']
    var str = arr.join('-')
    console.log(str) //"3-8-9-6-hello"
    var str1 = arr.join('')
    console.log(str1)  // "3896hello"
```

**.reverse()**

```js
    var arr = [3,5,-1,18,9,27]
    arr.reverse()   //倒序，本身发生变化
    arr.sort(function(v1,v2){  //排序，本身发生变化
        return v1-v2;  // v2-v1
    })
```


**.sort()**

* sort 方法用于对数组进行排序，当没有参数的时候会按照字母表升序排序，如果含有undefined会被排到最后面，对象元素则会调用其toString方法，如果想按照自己定义方式排序，可以传一个排序方法进去，很典型的策略模式，同样sort会改变原数组

* sort 内部使用快速排序，每次比较两个元素大小的时候如果没有参数，则直接判断字母表，如果有参数，则把正在比较的两个参数传入自定义方法并调用（正在比较的两个数会传给自定义方法的v1,v2）,如果返回值大于0表示v1>v2,如果等于0，


```js
     var friends = [{age:3,name:'dog'},{age:2,name:'cat'},{age:4,name:'bird'}]
     friends.sort(function(v1,v2){
         return v1.age - v2.age
     })    //以age排序

     friends.sort(function(v1,v2){
         return v1.name > v2.name
     })   //以name排序
```




## JS ES5数组

**Array.isArray(obj)**

这是Array对象的一个静态函数，用来判断一个对象是不是数组

```js
    var a = []
    var b= new Date();
    console.log(Array.isArray(a));  //true
    console.log(Array.isArray(b));  //false
```

**.indexOf(element)/.lastIndexOf(element)**

这连个方法用于查找数组内指定元素位置，查找到第一个后返回其索引，没有查找到返回-1，indexOf从头至尾 搜索，lastIndexOf反向搜索。

```js
    var a = [1,2,3,3,2,1]
    console.log(a.indexOf(2));  //1
    console.log((a.lastIndexOf(2));  //4
```


**.forEach(element,index,array)**

遍历数组，参数为一个回调函数，回调函数有三个参数：
1. 当前元素
2. 当前元素索引值
3. 整个数组

```js
    var a = new Array(1,2,3,4,5,6)
    a. forEach(function(e,i,array){
        array[i]=e+1;
    });
    console.log(a);    //[2,3,4,5,6,7]
```
```js
    //把数组里的每一项都重复一遍
    var arr= [2,4,6,'lala','miaomiao']
    arr.forEach(function(e,i,arr){
        arr[i]= ''+e+e;
    })   
```

**.every(function(element,index,array))/.some(function(element,index,array))**

这两个函数类似于离散数学中的逻辑判定，回调函数返回一个*布尔值*
1. every是*所有*函数的每个回调函数都返回true的时候才会返回true，当遇到false的时候终止执行，返回false
2. some函数是在*存在*有一个回调函数返回true的时候终止执行并返回true，否则返回false

在空数组上调用every返回true，some返回false
```js
    [2,3,5,-3,4].every(function(val){
        return val>0?true:false    //fasle
    })

    [2,3,5,-3,4].some(function(val){
        return val>0?true:false    //true
    })

```

**.map(function(element))**

与forEach类似，遍历数组，回调函数返回值组成一个新数组返回，新数组索引结构和原数组一致，原数组不变

```js
    var arr2 = [1,2,3,4,5].map(function(val){
        return val*val
    })
    console.log(arr2);   //[1,4,9,16,25]
```

**.filter(function(element))**

 返回数组的一个子集，回调函数用于逻辑判断是否返回，返回true则把当前元素加入到返回数组中，false则不加。
 新数组值包含返回true的值，索引缺失的不包括，原数组保持不变

 ```js
    var students = [
        {name:'ad',age:10},
        {name:'bb',age:20},
        {name:'ca',age:8},
        {name:'ce',age:5}
    ]
    var age18 = students.filter(function(obj){
        return obj.age >18
    })
    console.log(age18);

    var namehasc = students.filter(function(obj){
        return obj.name.indexOf('c') >-1
    })
    console.log(namehasc);
 ```


**.reduce(function(v1,v2),value)/.reduceRight(function(v1,v2),value)**

遍历数组，调用回调函数，将数组元素组合成一个值，reduce从索引最小值开始，reduceRight反向，方法有两个参数
1. 回调函数：把两个值合为一个，返回结果
2. value，一个初始值，可选

```js 
    var a = [1,3,5,7]
    var b = a.reduce(function(v1,v2){
        return v1+v2
    })
    console.log(b) //16
```
```js
    //手动实现reduce方法
    var arr = [2,3,4,5];
    function reduce(arr,fn,iniValue){
        var arr2 = arr.concat([]);
        if(iniValue !== undefined){
            arr2.unshift(iniValue)
        }
        while(arr.length>1){
            console.log(arr2);
            arr2.splice(0,2,fn(arr2[0],arr2[1]))
        }
        return arr2[0];
    }
    var result = reduce(arr,function(v1,v2){
            return v1 + v2
        })
    console.log(result);
```
```js
    //拷贝一个数组
    var arr = [1,2,3]
    var arr2 = arr.concat([])   //[1,2,3]
```

```js
    var arr = [3,['4,5',7,[1]],[2,10]]
    function flat(){
        var arr2 = []
        arr.forEach(function(val){
            if(Array.isArray(val)){
                arr2 = arr2.contact(flat(val))
            }else{
                arr2.push(val)
            }
        })
        return arr2
    }
    var arr2 = flat(arr)
    console.log(arr2)  //[3,'4,5',7,1,2,10] 

    function flat2(arr){
        return arr.reduce(function(initArr,currentArr){
            return initArr.concat(Array.isArray(currentArr)?fatten2(currentArr):currentArr)
        },[])
    }
``` 


**课后练习**
*用 splice函数分别实现 push、pop、shift、unshift方法。*

```js
    function push(arr, value){
    arr.splice(arr.length, 0, value)
    return arr.length
    }
    var arr = [3, 4, 5]
    arr.push(10) // arr 变成[3,4,5,10]，返回4

    //改进版
    function push(arr){
    for(var i=1; i<arguments.length;i++){
        arr.splice(arr.length, 0, arguments[i])
    }
    return arr.length
    }
    //下面的写法有兴趣的同学可自行了解 //http://es6.ruanyifeng.com/#docs/array
    function push(arr, ...args){
        arr.splice(arr.length, 0, ...args)
        return arr.length
    }


```