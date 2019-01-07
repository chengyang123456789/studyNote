# ajax的使用和原理


##如何和后端交互

1. form表单提交
2. ajax
3. websocket


##什么是ajax


ajax是一种技术方案但并不是一种新技术。它依赖的是现有的CSS/HTML/JavaScript，而其中最核心的依赖是浏览器提供的XMLHttpRequest对象，是这个对象使得浏览器可以发出HTTP请求与接收HTTP响应。实现在页面不刷新的情况下和服务端进行数据交互


##怎么实现

* XMLHttpRequest对象
* fetch （ 兼容性 ）


##范例

写一个ajax

```js
 var xhr =new XMLHttpRequest()
 xhr.open('GET','http://api.jirengu.com/weather.php'，true)
 xhr.onreadystatechange = function(){
     if(xhr.readyState ===4){
         if((xhr.status >=200 && xhr.status <300) || xhr.status==304)
         //成功了
         console.log(xhr.responseText)
     }else{
         console.log('服务器异常')
     }
 }


//ajax
var xhr = new XMLHttpRequest()
xhr.open('GET','/hello.json',ture)  //设置参数
xhr.send()  //发送请求

xhr.addEventListener('readystatechange',function(){
    console.log(xhr.readyState)
})

xhr.addEventListener('load',function(){
    console.log(xhr.status)
    if((xhr.status >=200 && xhr.status <300) || xhr.status ===304 ){
        var data = xhr.responseText
        console.log(data)
    }else{
        console.log('error') 
    }
    
})
xhr.onerror = function{
    console.log('error')
}
xhr.ontimeout = function (){

}
```
```js
//使用post方法
var xhr = new XMLHttpRequest();
xhr.timeout = 3000; // 可选设置xhr请求的超时时间
xhr.open('open','/register',true)

xhr.onload = function(e){
    if((xhr.status >=200 && xhr.status <300) || xhr.status ===304){
        console.log(this.responseText)
    }
}

xhr.ontimeout = function(e){
    console.log('请求超时')
}
xhr.send(username=jirengu&password=123456)
```

封装一个ajax
```js
function ajax(opts){
    var url = opts.url
    var type = opts.type || 'GET'
    var dataType = opts.dataType ||'json'
    var onsuccess = opts.success || function(){}
    var onerror = opts.onerror || function(){}
    var data = opts.data || {}

    var dataStr = []
    for(var key in data){
        dataStr.push(key + '=' + data[key])
    }
    dataStr = dataStr.join('&')
    if(type === 'GET'){
        url += '?' +dataStr
    }

    var xhr = new XMLHttpRequest()
    xhr.open(type,url,true)
    xhr.onload = function(){
        if((xhr.status >=200 && xhr.status <300) || xhr.status ===304){
            if(dateType === 'json'){
                onsuccess(JSON.parse(xhr.responseText))
            }else{
                onsuccess(xhr.responseText)
            }
        }else{
            onerror()
        }
    }
    xhr.onerror = onerror
    if(type === 'POST'){
        xhr.send(dataStr)
    }else{
        xhr.send()
    }
}


ajax({
    url:'http://api.jirengu.com/weather.php',
    data: {
        city: '北京'
    },
    onsuccess:function(ret){
        console.log(ret)
    },
    onerror:function(){
        console.log('服务器异常')
    }
})

```





# 使用githubpagesmock数据


## 搭建服务器

**http=server**

使用http-server node工具启动一个静态服务器


**server-mock**

使用server-mock node工具启动一个能处理静态文件和动态路由的服务器


**手写一个服务器**

https://guthub.com/jirengu/node-server



**线上mock数据**

1. 使用http://easy-mock.com/
2. 使用http://rapapi.org/org/index.do
3. 使用server-mock




# 使用easymock来mock数据

