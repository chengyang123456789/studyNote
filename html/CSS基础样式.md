# 块级元素行内元素
* 块级（block-level）;行内（内联、inline-level）
* 块级可以包含块级和行内，行内只能包含文本和行内
* 块级占据一整行空间，行内占据自身宽度空间
* 宽高设置、内外边距的差异
## block-level
* div h1-h6 p hr form ul dl ol pre table li dd dt tr td th
## inline-level
* em strong span a br img button input label select textarea code script
## 宽高
* 只对块级元素设置的宽高生效，对行内元素设置无效
* width：
* height：
## 边框
* border-width
* border-color
* border-style
* border-bottom
```css
   .box{
       border-width:1px;
       border-color:red;
       border-style:solid;/*dotted  dash*/
       border-bottom: none;
       border-bottom: 1px black dotted;

   }
   /*简写：*/
   .box2{
       border: 1px dotted #ccc;
   }

```
* 使用边框做一个三角形
```css
    .to{
        height:20px;
        width:20px;
        border-top:solid 20px red;
        border-left:solid 20px green;
        border-right:solid 20px orange;
        border-bottom:solid 20px blue;
    }
```
* border-radius:
## 边距
* padding
    * padding代表内边距，有四个方向的值，可以合写，值可以是数值也可以是百分比（相对于父容器、不是自身） 
    * padding-top
    * padding-right
    * padding-bottom
    * padding-left
* margin
    * margin代表外边距，有四个方向的值，可以合写，值可以是数值也可以是百分比（相对于父容器、不是本身）。还可以是负数
    * 外边距合并问题
        * maigin-top
        * margin-right
        * margin-bottom
        * margin-left
    * margin: 0 auto  (对于块级元素 设置margin：0 auto 可以达到居中目的)
```css
    .box{
        /* margin:0 auto;实际上是下面两个起作用*/
        margin-left:auto;
        margin-right:auto;
    }

```
        * 去除所有元素默认margin、padding:
```css
    *{
        margin:0;
        padding:0;
    }
```
* display
    * 块级：block,list-item,table
    * 行内： inline,inline-table,inline-block
* font
    * font-size: 字体大小（12px比较小  14px普通的 16px浏览器默认大小 20px标题）
    * font-family: 字体，宋体、微软雅黑、Arial
        *  在CSS中设置字体时，直接写字体中文或英文名称浏览器都能识别，直接写中文情况下编码（GB2312、UTF-8等）不匹配时会产生乱码。保险 nm  的方式是将字体名称用Unicode来表示
        * 宋体|SimSum|\5B8B\4F53 黑体|SimHei|\9ED1\4F53 微软雅黑|Microsoft YaHei|\5FAE\8F6F\96C5\9ED1
        * 打开控制台escape('微软雅黑'),把%u替换成\
    * font-weight: 文字粗度，常用的就是默认值regular和粗体bold
    * line-height: 行高 。可以用百分比、倍数或者固定尺寸
    * 以上属性均可继承成给子元素
```css
    body{
        font:12px/1.5 tohoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
    }
    p{
        line-height: 1.5;
        font-size: 14px;
        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
        font-weight: bold;
    }
```
* font-family:使用浏览器打开页面时，浏览器会读取HTML文进行解析渲染。当读到文字时会转换成对应的Unicode码（可以认为是世界上任意一种文字的特定编号）。再根据HTML里设置的font-family（如果没有设置则使用浏览器默认设置）去查找电脑里（如果有自定义字体@font-face，则加载对应字体文件）对应字体文件。找到文件后根据Unicode码去查找绘制外形，找到后绘制到页面上
    * Chrome 最小字体
    * chrome默认字体大小是16px，最小是12px，解决方案：
```css
    .chrome_adjust{
        font-size:9px;
        -webkit-transform:scale(0.75);
    }
```
* 文本
    * text-align: 文本对其方式left、center、right、justify（两端对齐）
    * text-indent: 文案第一行缩进距离
    * text-decoration：none、underline、line-through、overline
    * color： 文字颜色
    * text-transform： 可以改变字体（单词）之间的标准间隔   
```css
    text-transform:capitalize; /* 首字母大写*/
    text-transform:upper;/* 字母转换成大写*/
    word-spacing: 30px;
```
* letter-space：字母间隔修改的是字符或字母之间的间隔
* 单行文本溢出加减
```css
    .card > h3{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
```
* 颜色
    *  单词： red,blue,pink,yellow,white,black
    *  十六进制： #000000,#fff（白色）,#eee（淡灰色）,#ccc（灰色）,#666（深灰色）,#333(深黑色),#f00（红色）,#0f0（绿色）,#00f（蓝色）
    *  rgb:rgb(255,255,255),rgb(0, 255,0)
    *  rgba:rgba(0,0,0,0.5) 透明度，数字越小，透明度越大

* 单位
    * px：固定单位
    * 百分比（宽高？文字大小？line-height?position？）
    * em：相对单位，相对于父元素字体大小
    * rem：相对单位，相对于根元素（html）字体大小
    * vw vh：相对单位，1vw为屏幕宽度的1%兼容性不好

* a链接设置颜色
    * a有默认颜色和样式，会覆盖继承的样式
```css
    a{
        color:red;
        text-decoration:none;
    }
```

* 列表去掉点
```css
ul{
    list-style:none;
}
    /*也可以这样*/
    li{
        list-style:none;
    }
```

* 隐藏or透明
    * opacity： 0； 透明度为0，整体透明
    * visibility：hidden；和opacity：0；类似
    * display：none；消失，不占用位置
    * background-color：rgba(0,0,0,0.2)只是背景色透明

* 查找页面颜色rgb
    * 打开选色器
```css
    color:aliceblue;
```