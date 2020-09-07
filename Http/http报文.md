# HTTP（HyperText Transfer Protocol） 

## URL

## 报文

    HTTP报文是简单的格式化数据块，每个报文都包含一条来自客户端的请求或者来自服务器的响应，由3部分组成

    1. 对报文进行描述的起始行--start line
    2. 包含属性的首部块--header
    3. 可选的包含数据的主题部分--body

## 方法

## 状态码

    1. 100-199 用于指定客户端响应的某些动作
    2. 200-299 用于表示请求成功
    3. 300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息
    4. 400-499 用于指出客户端的错误
    5. 500-599 用于支持服务器错误

    |状态码|状态信息|含义|
    |100|Continue|初始的请求已经接受，客户应当继续发送请求的其余部分|
    |101|Switching Protocols|服务器降遵从客户的请求转换到另一种协议|
    |200|ok|一切正常，对get和post请求的应答文档跟在后面|
    |201|Created|服务器已经创建了文档，Location头给出了它的URL|
## 缓存

* Cache-Control: max-age=300;
浏览器把文件和附带信息保存起来。当再次需要a.jpg时，如果是300秒以内发起的请求则直接使用缓存（200，from xx cache），否则重新发起网络请求（200）。下面是Cache-Control常见的几个值：
    * Public表示响应可被任何中间节点缓存，如Browser<--proxy1<--proxy2<--Server,中间的proxy可以缓存资源，比如下次再请求同一资源proxy1直接把自己缓存的东西给Browser而不再向proxy2要。
    * Private表示中间节点不允许缓存，对Browser<--proxy1<--proxy2<--Server，proxy会老老实实把Server返回的数据发送给proxy1，自己不缓存任何数据，当下次Browser再次请求时，proxy会做好请求转发而不是给自己缓存的数据。
    * no-cache表示不使用Cache-Control的缓存控制方式做前置验证，而是使用Etag或者Last-Modified字段来控制缓存
    * no-store，真正的不缓存任何东西。浏览器会直接向服务器请求原始文件，并且请求中不附带Etag参数（服务器认为是新请求）。
    * max-age，表示当前资源的有效时间，单位为秒。

优点：缓存控制功能更强大
缺点： 假如浏览器再次请求资源a.jpg的时间间隔超过了max-age，这时候向服务器发送请求服务器应该会重新返回a.jpg的完整文件，但如果a.jpg在服务器上未做任何修改，发送a.jpg的完整的文件就太浪费带宽了，其实只要发送一个[a.jpg未被更改]的短消息表示就好了。



* 缓存+更新机制终极版

比如：浏览器第一次请求a.jpg时，服务器会发送完整的文件并附带额外信息。，其中Etag是对a.jpg文件的编码，如果a.jpg在服务端未被修改，这个值就不会变

```js
Cache-Control: max-age=300;
ETag: W/"e-cbxLFQW5zapn79tQwb/g6Q"
```