# DOCTYPE
* `<! DOCTYPE html>`  文档声明
# 标签
# 属性
# 注释
* `<!-- sssssss -->`
# 空格  空白
1. "tab"(U+0009),"LF"(U+000A),"FF"(U+000C),and"CR"(U+000D)都是空白。
2. 所有空白都会缩成一个空格
3. 保留HTML代码中的空白：
* 使用HTML实体，如`&nbsp;`
* 使用 `<pre>` 标签
* 在父元素使用CSS `white-space：pre`
    

# 实体 
1. 有名字的实体，用&名字:
    * `&copy;` 
    * `&apos;` .
    * `&nbsp;` 空格
    * `&amp;`  &符号
    * `&quot;` "
2. 没有名字的实体,用&#十进制:
    * `&#20320;`    汉字
3. 没有名字的实体,&#x十六进制:
    * `&#x4f60;`
* `![](C:\Users\74196\Desktop\htmlentity.png)`
* `![](http://pic20.nipic.com/20120426/6363440_112640660397_2.jpg)`

# HTML 超文本标记语言（Hypertext Markup Language）,是一个可以用来结构化Web内容并给予其含义和目标的编码语言
* VScode 快捷键：
* p + tab => `<p></p>`
* nav>ul>li =>  ```<nav>
                    <ul>
                        <li></li>
                    </ul>
                </nav>```

* h1+p+div =>   ```<h1></h1>
                <p></p>
                <div></div>```  
* ul>li*3
* div.item
* #header.itermactive
* ul>(li>{iterm $})*3  =>   ```<ul>
                                <li>iterm 1</li>
                                <li>iterm 2</li>
                                <li>iterm 3</li>
                            </ul>```

# HTML 标签
* 标题
    * <h1>一级标签</h1>
    * <h2>二级标签</h2>
    * <h3>三级标签</h3>
    * <h4>四级标签</h4>
    * <h5>五级标签</h5>
    * <h6>六级标签</h6>
* 列表
    * 无序列表
        * ```<ul>
            <li></li>
            </ul>```

        * ```<nav>
            <ul>
            <li></li>
            </ul>
            </nav>```
    * 有序列表
        * ```<ol>
            <li></li>
            </ol>```
* 强调,加粗
    * `<em></em>`
    * `<strong></strong>`
* 自定义列表
    * ```<dl>
        <dt></dt>
        <dd></dd>
        </dl>```
* 图片带描述
    ```<figure>
        <img src="..url" alt="描述" >
        <figcaption>图片的描述</figcaption>
    </figure>```
* 返回顶部链接
    `<a href="#">返回页面顶部</a>`
* 文档内部链接
    用于定位到文档的一部分，<a>的href要对应文档内某个元素的id（id值要唯一）
    `<a href="#email链接">Email链接</a>`
    `<a href="url" > 表单相关标签</a>`

* 表 
```html
<table>
        <thead>
            <tr>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
        <table>
                <!-- <th>
                    <tr>
                        <td>球员</td>
                        <td>身高</td>
                        <td>年龄</td>
                        <td>爱好</td>
                    </tr>
                </th> -->
                <tr>
                    <th>球员</th>
                    <th>身高</th>
                    <th>年龄</th>
                    <th>爱好</th>
                </tr>
                <tr>
                    <td>张三</td>
                    <td>177</td>
                    <td>23</td>
                    <td>唱歌</td>
                </tr>
                <tr>
                    <td>李四</td>
                    <td>156</td>
                    <td>14</td>
                    <td>听歌</td>
                </tr>
                <tr>
                    <td>王五</td>
                    <td>178</td>
                    <td>18</td>
                    <td>跳舞</td>
                </tr>
            </table>
        </table>格结构
<table>
        <thead>
            <tr>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
        <table>
                <!-- <th>
                    <tr>
                        <td>球员</td>
                        <td>身高</td>
                        <td>年龄</td>
                        <td>爱好</td>
                    </tr>
                </th> -->
                <tr>
                    <th>球员</th>
                    <th>身高</th>
                    <th>年龄</th>
                    <th>爱好</th>
                </tr>
                <tr>
                    <td>张三</td>
                    <td>177</td>
                    <td>23</td>
                    <td>唱歌</td>
                </tr>
                <tr>
                    <td>李四</td>
                    <td>156</td>
                    <td>14</td>
                    <td>听歌</td>
                </tr>
                <tr>
                    <td>王五</td>
                    <td>178</td>
                    <td>18</td>
                    <td>跳舞</td>
                </tr>
            </table>
        </table>
```
* 视频音频`<video>`、`<audio>`
    
        ```html
        <video controls>
            <source src="url" type="video/mp4">
            <source src="url" type="video/webm">
        </video controls>
        <audio controls>
            <source src="url" type="audio/mp3">
            <source src="url" type="audio/ogg">
        </audio controls>       
        ```

# HTML 须知
* `<html lang="zh-CN">`
* 设定部分页面内容语言
* SEO（搜索引擎优化）
* 有助于视觉障碍人士通过读屏器阅读页面
* 块级元素和内联元素
* 属性
    * 布尔属性，eg.   `<input>`被添加disable属性后，就接收不到用户输入了
        `<input type= "text disable>`
    * 全局属性,eg.    id,class,style,title都是全局属性，可以被任何HTML元素使用
        hidden 可用于隐藏某个页面元素
        contenteditable 全局属性可以使元素内容变成可编辑
         
# HTML 头部 
* `<head></head>`的内容不会在浏览器中显示，它的作用是包含一些页面的元数据
* 元数据（Metadata）：描述数据的数据：
    * `<meta charset="utf-8">`   指定文档编码
    * `<meta name="viewport" content="width=device-width.initial-scale=1.0">`  适配移动页面
    * `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" >`  制定页面图标
    * `<meta name="referrer" content="never">`  设置referer
    * `<meta name="description" content="......">`  添加页面描述
    * 应用CSS、JS
    * 外部链接：将target设置成_blank 时，点击链接浏览器会新开一个Tab打开该网页




# 常见浏览器有哪些？哪些内核？
* IE浏览器（Internet explorer）：
* Safari浏览器：
* Firefox浏览器：
* Google浏览器：



```html
<!-- title:图片正常加载鼠标划上去显示的值
alt:图片无法加载的时候才会显示的其值

&lt;div&gt;&lt;/div&gt;

<!--    -->

<!-- <p></p> 段落标签
<hr>水平线标签
<ul></ul>无序列表
<div></div>块标签

<meta name="description" content="......">  添加页面描述
<meta charset="utf-8">   指定文档编码
<meta name="referrer" content="never">  设置referer

造成html网页乱码原因主要是html源代码内中文字内容与html编码不同造成。
需要设置网页编码，用<meta/>标签设置<meta charset="uft-8"/>指定文档编码

doctype标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档
<! DOCTYPE html>  

IE浏览器，Safari浏览器，Firefox浏览器，Google浏览器；
Trident内核：IE最先开发或使用的，也称IE内核，360浏览器使用的也是IE内核；
Webkit内核：谷歌chrome浏览器最先开发或使用，也叫谷歌内核
Gecko内核： Netscape6开始采用的内核，后来的Mozilla FireFox (火狐浏览器) 也采用了该内核，K-Meleon浏览器也是使用这种内核； --> 
```

* HTML 表单
    * 向服务器提交数据的方式：
        * post方式：数据会传送到服务器，但不会显示在地址栏上，数据内容相对安全；向后台传输数据用post方式
        * get方式： 会把提交内容拼接成k=y的形式以url形式显示在地址栏上；当需要向后台要数据的时候可以用get方式
    * get和post的主要区别
        * get方式： 会把提交内容拼接成k=y的形式以url形式显示在地址栏上；当需要向后台要数据的时候可以用get方式；GET请求能够被缓存。GET请求会保存在浏览器的浏览记录中。以GET请求的URL能够保存为浏览器书签。
        * post方式：数据会传送到服务器，但不会显示在地址栏上，数据内容相对安全；向后台传输数据用post方式
    * form标签主要的四个属性
        1. action ：表单提交的地址
        2. method ：提交表单的方法
        3. target ：在何处打开action
        4. enctype : 
            - application/x-www-form-urlencoded :在发送前编码所有字符（默认）
            - text/plain :空格转化为“+”加号，但不对特殊字符编码
            - multipart/form-data :使用包含文件上传控件的表单时，必须使用该值
            `<!-- < form action="url" method="post/get"> -->`
    * 主要标签
        * `<label for="id"></label>`
        * `<input type="text" name="username">`
        * `<input type="checkbox" name="hobby" value="music">`   多选复选框
        * `<input type="password" name="password" placeholder="请输入密码">`
        * `<input type="radio" name="sex" value="male"> `   单选框，相同name为一组            所有的input和复选框都要有name属性，name 属性用于对提交到服务器后的表单数据进行标识，在提交表单时传递它们的值
        * `<input typr="radio" name="sex" value="female">`
        * `<input typr="file" name="" accept="image/png">`   accept="image/gif/jepg"
        * `<br/><br/>`
        ```html
        <select>
            <option value="beijing" selected>北京</option>    默认选中“北京”
            <option value="shanghai">上海</option>    下拉复选框
            <option value="hangzhou">杭州</option>
          </select>
        ```
        * `<textarea name="article">    多行输入文本 </textarea>`
        * `<input type="hidden" name="abcd" value="12345"> ` 
        * `<input type="button" value="Button">` 
        * `<input type="submit" value="Submit">` 
        * `<input type="Reset"  value="Reset"> `
    * CSRF攻击是：跨站请求伪造。其原理是攻击者构造网站后台某个功能接口的请求地址，诱导用户去点击或者用特殊方法让该请求地址自动加载。用户在登录状态下这个请求被服务端接收后会被误以为是用户合法的   操作。对于 GET 形式的接口地址可轻易被攻击，对于 POST 形式的接口地址也不是百分百安全，攻击者可诱导用户进入带 Form 表单可用POST方式提交参数的页面。
      解决方案：
    1. 服务端在收到路由请求时，生成一个随机数，在渲染请求页面时把随机数埋入页面（一般埋入 form 表单内，`<input type="hidden" name="_csrf_token" value="xxxx">`）
    2. 服务端设置setCookie，把该随机数作为cookie或者session种入用户浏览器
    3. 当用户发送 GET 或者 POST 请求时带上_csrf_token参数（对于 Form 表单直接提交即可，因为会自动把当前表单内所有的 input 提交给后台，包括_csrf_token）
    4. 后台在接受到请求后解析请求的cookie获取_csrf_token的值，然后和用户请求提交的_csrf_token做个比较，如果相等表示请求是合法的。