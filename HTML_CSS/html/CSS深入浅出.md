#CSS深入浅出
##  css为什么难学（不正交+属性多+性价比低）
1. 各属性之间互相影响
    * margin V.S. border
    * 小圆点 V.S. display
    * position: absolute V.S. display: inline
2.  各元素之间互相影响
    * position: fixed V.S. transform
    * float 影响 inline 元素

## CSS 学习的易点
* 背套路即可应付日常工作
    * 水平居中
    * 垂直居中
* 巧用工具
    * CSS 3 Generator
* 记住几个常见的写法即可：两种水平居中、三种垂直居中、两种左右结、两种左中右结构、一行省略、多行省略


# 宽度与高度
## 核心知识
1. 文档流（Normal flow）
    1. 内联元素的宽高
    2. 块级元素的宽高
    3. 水平居中
    4. 垂直居中
    5. 文字溢出省略（多行）

2. 盒模型
    1. 一比一的div
    2. outline
    3. border调试大法

## div的高度
* div的高度是由它内部文档流中元素的高度的总和决定的

## 内联元素的padding和margin是会影响宽度的，不会影响高度，它的高度是由line-height决定的
* 内联元素的高度是由line-height决定的，宽度是由内容、padding、margin和border决定的

## 堆叠上下文
* 什么是堆叠顺序？
    1. background
    2. border
    3. 块级
    4. 浮动
    5. 内联
    6. z-index:0
    7. z-index:+
    * 如果是兄弟元素重叠，那么后面的盖在前面的身上。

* 什么是堆叠上下文？
    * 可以理解为堆叠作用域。跟BFC一样，我们只知道一些属性会触发堆叠上下文，但并不知道堆叠上下文是什么。
    * 跟元素（HTML）
    * z-index 值不为"auto"的绝对/相对定位，
    * 一个z-index值不为"auto"的flex的项目（flex item），即父元素 display：flex|inline-flex,
    * opacity属性值小于1的元素（参考 the specification opacity）,
    * transform属性值不为"none"的元素，
    * mix-blend-mode属性值不为"normal"的元素，
    * filter值不为"none"的元素，
    * perspective值不为"none"的元素，
    * isolation属性被设置为"isolute"的元素，
    * position:fixed
    * 在will-change中指定了任意css属性，即便你没有直接指定这些属性的值
    * -webkit-overflow-scrolling属性被设置"touch"的元素


## icon 的各种做法
1. img法
2. background法
3. background合一法（精灵图法）
4. font法
5. SVG法
6. 新手慎用：[CSS就是干]法


## 移动端页面（响应式）
* 手机端页面的做法
    1. 学会media query
    2. 学会要设计图
    3. 学会隐藏元素
    4. 手机端要加一个meta
    ```css
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
    ```
    5. 手机端的交互方式不一样
        * 没有hover
        * 有touch事件
        * 没有resize
        * 没有滚动条
    
* 一个元素有两种状态，用@media来实现；如果是在一个页面有两种状态就用js来实现。

* meta viewport
```css
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
```


## flex 布局
* flex之前
    * normal flow（正常流，也叫文档流）
    * float + clear
    * position relative + absolute
    * display inline-block
    * 负margin
* flex布局
    1. 块级布局侧重垂直方向，行内布局侧重水平方向，flex布局是与方向无关的。
    2. flex布局可以实现空间自动分配、自动对齐（flexible：弹性、灵活）
    3. flex适用于简单的线性布局，更复杂的布局要交给grid布局（还没发布）
* 基本概念
* flex container 的六个属性
    1. flex-dirction  方向
    2. flex-wrap  换行
    3. flex-flow  上面两个的简写
    4. justify-content 主轴方向对齐方式
    5. align-items 侧轴对齐方式
    6. align-content  多行/列内容对齐方式（用得较少）
* flex item 的六个属性
    1. flex-grow 增长比列（空间过多时）
    2. flex-shrink 收缩比列（空间不够用时）
    3. flex-basis  默认大小（一般不用）
    4. flex 上面三个的缩写
    5. order 顺序（代替双飞翼）
    6. align-self  自身的对齐方式


## 使用flex布局
1. 手机页面布局（top+main+tabs）
2. 产品列表（ul>li*9）
3. PC页面布局
4. 完美居中


## 布局套路
* 布局流程图
    * ![](//c/Users/74196/Desktop/studyNotes/img/布局流程图.png)
* 原则
    1. 不到万不得已，不要写死width和height
    2. 尽量用高级语法，如calc、flex
    3. 如果是IE，就全部写死
1. 浮动布局
    * 子元素浮动
    * 父元素加clearfix
2. 用float做平均布局
    * 超出部分可以用负margin
3. flex布局
    * 给父元素加display：flex;    justify-content:center;     align-items:center;    
    


## BFC
* CSS规范中对BFC的描述
    浮动，绝对定位元素，非块盒的容器（例如，inline-blocks，table-cells和table-captions) 和'overflow'不为'visible'的块盒会为他们的内容建立一个新的块格式化上下文

    在一个块格式化上下文中，盒在竖直方向一个接一个地放置，从包含块的顶部开始。兄弟盒之间的竖直距离由'margin'属性决定。同一个块格式化上下文中的响铃块级盒之间的竖直margin会合并

    在一个块格式化上下稳重，每个盒的left外边挨着包含块的left边。即使存在浮动（尽管一个盒的行盒可能会因为浮动收缩），这也成立。除非该盒建立了一个新的格式化上下文（这种情况下，该盒自身可能会因为浮动变窄）
* MDN 对BFC的描述
    一个块格式化上下文是web页面的可视化css渲染出的一部分。它是块级盒布局出现的区域，也是浮动层元素进行交互的区域。

    一个块格式化上下文由一下之一创建：
    * 跟元素或其他包含它的元素
    * 浮动元素（元素的float不是none）
    * 绝对定位元素（元素具有position为absolute或fixed）
    * 内联块（元素具有display：inline-block）
    * 表格单元格（元素具有display:table-cell，HTML表格单元格默认属性）
    * 表格标题（元素具有display：table-caption，HTML表格标题默认属性）
    * 具有overflow且值不是visible的块
    * column-span：all应当总是会创建一个新的格式化上下文，即便具有column-span：all的元素并不被包裹在一个多列容器中。

    一个块格式化上下文包括创建它的元素内部所有内容，除了被包含于创建新的块级格式化上下文的后代元素内的元素。

    块格式化上下文对于定位与清除浮动很重要，定位和清除浮动的样式规则值适用于处于同一块格式化上下文内的元素。浮动不会影响其他块格式化上下文中元素的布局，并且清除浮动只能清除同一块格式化上下文中在它前面的元素的浮动。

* `display:flow-root;`  触发 BFC
### 功能1
* 用BFC包住浮动元素。（不是清除浮动，.clearfix才是清除浮动）

###  功能2  BFC之间划清界限
* 用 float+ div做左右自适应布局


## 动态 **REM**
### 手机专用的自适应方案
1. 什么是REM
2. REM和EM的区别是什么
3. 手机端方案的特点 
    * 百分比布局
    * 缩放
    ```css
        <script>
            var pageWidth = winddow.innerWidth
            document.write('<style>html{font-size:' + pageWidth + 'px;}</style>')
        </script>
    ```
4. 使用js动态调整REM
5. REM可以与其他单位同时存在
6. 在SCSS里使用PX2REM



##  表单美化
1. 一个好看的图片上传器
2. 一个好看的下拉框
3. 百度搜素框 + suggestion
4. 一个好看的按钮

## Bootstrap的使用
1. Bootstrap 引入
    * Bootstrap 的安装

2. 网格\栅栏系统
3. 响应式怎么用
4. Bootstrap  CSS组件怎么用
5. Bootstrap jQuery 组件怎么用


## IFC (inline formatting context)

* line-height  实际占地高度
* font-size  em-square
* 100px 100px -> 103px
* vertical top middle bottom text-top text-bottom 
* 图片下面有空隙
    1. vertical-align:top
    2. img{display:block;}
    3. font-size:0; 不能用
* inline-block 元素对不齐——无解（用flex或float）
* inline-block 有空隙—— 用flex或float