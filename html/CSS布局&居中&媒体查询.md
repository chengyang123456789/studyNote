# CSS布局
## 什么是布局
现有样式不能满足人们的需求
* 文档流
* 浮动
* 定位
人们需要：
* 导航栏+内容
* 导航栏+内容+广告栏
* 从上到下、从左到右、定宽、自适应

## 单列布局

## 双列布局
* 一列固定宽度，另一列自适应宽度
* 实现：浮动元素+普通元素margin



## 圣杯布局
1. 是三列布局，两边固定宽度，中间自适应
2. 中间内容元素在dom元素次序中优先位置

## 双飞翼布局

## 流式布局
* bootstrap实现简单的栅格系统

## 弹性布局flex

## grid

## 移动端布局
1. 设置meta，如
`<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no;"/>`
2. 适配
媒体查询 or 动态rem


# 元素居中
## 水平居中
## text-align （行内元素居中）
在父元素上设置`text-align:center`使文字\图片水平居中
```css 
    .container{
        text-align:center;
    }
```
## margin （块级元素居中）
```css
    .container{
        width:80%;
        margin-left:auto;
        margin-right:auto;
    }
```

## 垂直居中
* 居中VS不居中 （上下padding相等）
* 绝对定位实现居中
    * transform - 指定要应用于元素的变换。transform-origin - 指定原点的位置。默认情况下，它在元素的中心。
    * translate()方法 可以使用translate()方法从当前位置移动元素。
```css
    .dialog{
        position:absolute;
        left:50%;
        top:50%;
         margin-left:-200px;/*自身宽度的一半 */
         margin-top:-150px;/*自身高度的一半*/
         /*
       transform:translate(-50%,-50%);
       */
    }
```
* vertical-align实现居中
```css
    /*实现图片在box里面居中*/
    .box::before{
        content:'';
        display:inline-block;
        height:100%;
        vertical-align:middle;
    }
    .box img{
        vertical-align:middle;
        background:blue;
    }
```
* table-cell实现居中
```css
    .box{
        width:300px;
        height:200px;
        border:1px solid;
        display:table-cell;
        vertical-align:middle;
        text-align:center;
    }
```
* display:flex
```html
    <div class="space">
        <div class="earth"></div>
    </div>
```
```css
    .space{
        width:100px;
        height:100px;  /* 设置宽高以显示居中效果*/
        display:flex;   /* 弹性布局*/
        align-items:center; /* 垂直居中*/
        justify-content:center;  /*水平居中*/
    }
    body{
        margin:0;
        background:rgba(0,0,0,.95);
    }
    .earth::after{
        content:'earth';
        font-size:85px;
    }
```



#  媒体查询
## 自适应阶段
自从有了不同屏幕的尺寸，我们就开始尝试自适应了
##居中
虽然不能让所有屏幕都自适应，但是可以利用居中让元素看起来在同一位置
## 百分比
同样可以利用百分比让DOM结构适应屏幕
## 响应式
终于等来了CSS3的Media Queries，可以让我们针对不同的设备场景使用不同的CSS

### CSS2
页面有某些部分需要在打印的时候隐藏或者变大，这时候可以使用media使某些style只在打印的时候生效
```css
    @media print{
        /* 适用于印刷的样式 */
    }
```
常用的媒体类型有：
1. all(所有)，适用于于所有设备
2. handle（手持），用于手持设备
3. print（印刷），用于分页材料以及打印预览模式下在屏幕上的文档视图
4. projection（投影），用于投影演示文稿，例如投影仪
5. screen（屏幕 ），主要用于计算机屏幕

### CSS3
css2的媒体类型应用场景极为有限，css3大大拓展了这一能力
```css
    @media screen and (max-width:990px){
        .container{
            background:orange;
        }
    }
```
### media feature
1. width: 浏览器宽度
2. height: 浏览器高度
3. device-width: 设备屏幕分辨率的宽度值 
4. device-height: 设备屏幕分辨率的高度值
5. orientation: 浏览器窗口的方向纵向还是横向，当窗口的高度值大于等于宽度值时该特性值为portrait，否则为landscape
6. aspect-tatio: 比例值，浏览器的纵横比
7. device-aspect-ratio: 比例值，屏幕的纵横比
8. color:设备使用多少位的颜色值，如果不是彩色设备，值为0
9. color-index: 色彩表的色彩数
10. monochrome: 单色帧缓冲器每个像素的字节
11. resolution：分辨率值，设备分辨率值
12. scan： 电视机类型设备扫描方式，progressive或interlace
13. grid： 只能指定两个值0或1 ，是否基于栅格的设备

### 如何引入media
1. link方法引入
```css
    <link rel="stylesheet" type="text/css" href="style.css" media="screen and (min-width:60px)>
```

2. @media引入
```css
    @media screen and (min-width:60px) and (max-width:800px){
        .box{
            font-size:16px;
        }
    }
```



# css reset 是什么？css 预编译器是什么？ 后编译器(post css)是什么？
* css reset : 是重置浏览器的 CSS 默认属性。HTML标签在浏览器中都有默认的样式，不同的浏览器的默认样式之间存在差别。开发时浏览器的默认样式可能会给我们带来多浏览器兼容性问题，影响开发效率。现在很流行的解决方法是一开始就将浏览器的默认样式全部覆盖掉，这就是CSS reset。
* CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题
* PostCSS 本身是一个功能比较单一的工具。它提供了一种方式用 JavaScript 代码来处理 CSS。它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。插件基于 CSS 代码的 AST 所能进行的操作是多种多样的，比如可以支持变量和混入（mixin），增加浏览器相关的声明前缀，或是把使用将来的 CSS 规范的样式规则转译（transpile）成当前的 CSS 规范支持的格式。PostCSS 的主要功能只有两个：第一个就是前面提到的把 CSS 解析成 JavaScript 可以操作的 AST，第二个就是调用插件来处理 AST 并得到结果。