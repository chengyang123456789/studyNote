# let var const



# 解构赋值

1. 数组的解构

```js
let [a,b,c] = [1,2,3]
console.log(a,b,c)

let [a,[b],c] = [2,[3],4]
a //2
b //3
c //4
let [a] = 1 //报错
```

2. 默认值

```js
let [a, b = 2] = [3]
a // 3
b // 2

let [a, b = 2] = [3, 4]
a //3
b //4

数组对应对值有没有？如果没有（数组对没有指undefined）就使用默认值，如果有就使用对应值

let [a=2, b=3] = [undefined, null]
a //2
b //null
let [a=1, b=a] = [2]
a //2
b //2
```

3. 对象的解构赋值

```js
前置知识

let [name, age] = ['hunger', 3]
let p1 = {name, age}
//等同于
let p2 = {name: name, age: age}
解构范例

let {name, age} = {name: 'jirengu', age: 4}
name //‘jirengu’
age //4
以上代码等同于

let name
let age
({name: name, age: age} = {name: 'jirengu', age: 4})

```

4. 函数解构

```js
function add([x=1, y=2]){
  return x+y
}
add() //Error
add([2]) //4
add([3,4]) //7

function sum({x, y}={x:0, y:0}, {a=1, b=1}){
    return [x+a, y+b]
}
sum({x:1, y:2}, {a:2}) //[3, 3]
```

# 字符串

1. 多行字符串

```js
let str =`
Hi,
This is jirengu.com.
You can study frontend here.
`

```

2. 字符串模板

```js
let website = 'jirengucom'
let who = 'You'
let str = `Hi
This is ${website}.
${who} can study frontend here
`
```

# 数组

1. 扩展

```js

var a = [1, 2]
console.log(...a)  // 1, 2
var b = [...a, 3]
b // [1, 2, 3]

var c = b.concat([4, 5])
var d = [...b, 4, 5]
```

2. 函数参数的扩展

```js
function sort(...arr){
  console.log(arr.sort())
}
sort(3, 1, 5)  //[1, 3, 5]
function max(arr){
  return Math.max(...arr)
}
max([3, 4, 1])  // 4
```

3. 类数组对象转数组

```js
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(p=> {
  console.log(p.innerText);
});
[...ps].forEach(p=>{console.log(p.innerText)});

```