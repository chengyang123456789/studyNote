# BFC
* Box: CSS布局的基本单位
    * Box 是 CSS 布局的对象和基本单位， 也就是说，一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染。
* Formatting context
    * Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting         context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。CSS2.1 中只有 BFC 和 IFC, CSS3 中还增加了 GFC 和 FFC。
* BFC
    * 它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用
      当涉及到可视化布局的时候，Block Formatting Context提供了一个环境，HTML元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。这里有点类似一个BFC就是一个独立的行政单位的意思。也可以说BFC就是一个作用范围。可以把它理解成是一个独立的容器，并且这个容器的里box的布局，与这个容器外的毫不相干



* 概念
    * BFC全称Block Formatting Context.
    * 每个渲染区域用formatting context表示，它决定了其子元素如何定位，以及和其他元素的关系和相互作用
    * 在正常流中的盒子要么 属于块级格式化上下文，要么属于内联格式化上下文
## BFC的产生
1. 根元素；
2. float属性不为none；
3. position为absolute或fixed；
4. display为inline-block，flex，或者inline-flex；
5. overflow不为visible；
## 特性
* 内部的Box会在垂直方向，一个接一个地放置。
*  Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠每个元素的margin box的左边，与包含块border box的左边相接触（对于从左往右的格式化，否则相反）。即使存在浮动也是如此。
* BFC的区域不会与float box重叠。
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也是如此。
* 计算BFC的高度时，浮动元素也参与计算。
## 作用
1. margin 合并
2. contain float

# 边距合并
## 合并场景
1. 相邻元素合并 ： 合并大小是两个margin值中的最大值；
2. 父子合并     ：
3. 自己合并
## 取消合并
1. 边框、padding
2. BFC

# 浏览器兼容
## 什么是浏览器兼容问题
* 同一份代码，有的浏览器效果正常，有的不正常
## 不正常的原因
## 如何让它展示正常

## 为什么会有浏览器兼容问题
* 同一产品，版本越老 bug越多
* 同一产品，版本越新 功能越多
* 不同产品，不同标准 不同实现方式

## 用到的网站
* 浏览器市场份额
* caniuse.com 查CSS属性兼容
* browserhacks 查Hack的写法

## 处理兼容问题的思路
* 要不要做
    * 产品的角度（产品的受众、受众的浏览器比列、效果优先还是基本功能优先）
    * 成本的角度（有无必要做某件事）
* 做到什么程度
    * 让哪些浏览器支持哪些效果
* 如何做
    * 根据兼容需求选择技术框架/库（jquery）
    * 根据兼容需求选择兼容工具（html5shiv.js 、 respond.js 、  css reset 、 normalize.css 、 Modernizr）
    * postCSS
    * 条件注释、CSS Hack、js能力检测做一些修补

## 渐进增强和优雅降级
    * 渐进增强（progressive enhancement）：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
    * 优雅降级（graceful degradation）:一开始就构建完整的功能，然后再针对低版本浏览器进行兼容

## 处理兼容的手段
### 用到的网站
* 浏览器市场份额  查看浏览器市场使用情况
* caniuse.com   查看CSS属性兼容
* browserhacks  查Hack 的写法
### 合适的框架
1. Bootstrap(>=ie8)
2. jQuery 1.~(>=ie6),jQuery 2.~(>=ie9)
3. Vue(>=ie9)
4. ....

## 条件注释
* 条件注释是于HTML源码中被IE有条件解释的语句。条件注释可被用来向IE提供及隐藏代码。

## CSS hack
* 由于不同厂商的浏览器，比如Internet Explorer,Safari,Mozilla Firfox,Chrome等，或者是同一厂商的浏览器的不同版本，如IE6盒IE7，对CSS的解析认识不完全一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。
这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能在不同的浏览器中也能得到我们想要的页面效果。
* CSS hack大致有三种表现形式，css属性前缀法、选择器前缀法 以及 IE条件注释法（即HTML头部引用if IE）hack，实际项目中CSS Hack大部分是针对IE浏览器不同版本之间的表现差异而引入的。
    1. 属性前缀法（即类内部Hack）：例如IE6能识别下划线和星号，IE7能识别*号但不能识别下划线，IE6~IE10都能识别"\9"，但Firefox前述三个都不能认识。
    2. 选择器前缀法：
    3. IE条件注释法（即HTML条件注释hack）：针对所有IE（注：IE10+已经不再支持条件注释）：<!--[if IE]>IE浏览器显示的内容<![end if]-->,针对IE6及以下版本：<!--[if lt IE 6]>只在IE6显示的内容<![end if]-->，这类hack不仅对css生效，对写在判断语句里面的所有代码都会生效

## 常见hack写法
```css
    .box{
        color:red;
        -color:blue;/* ie6 */
        *color:pink;/* ie67 */
        color:yellow\9;/*ie/edge 6-8 */
    }
```
```html
    <!--[if IE 7]>
    <link rel="stylesheet" href="ie7.css" type="text/css"/>
    <![end if]-->
```

## 常见属性的兼容情况
* inline-block : >=ie8
* min-width/min-height : >=ie8
* :before,:after : >=ie8
* div:hover ： >=ie7
* inline-block : >=ie8
* background-size : >=ie9
* 圆角 : >= ie9
* 阴影 : >= ie9
* 动画/渐变 : >=ie10


## 常见兼容处理范例1
```css
    .clearfix:after{
        content:' ';
        display:inline-block;
        clear:both;
    }
    .clearfix{
        *zoom: 1; /* 仅对ie67 有效   */
    }
```

```css
    .target{
        display:inline-block;
        *display:inline;
        *zoom:1;
    }
```
## 常见兼容处理范例2
```html
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
   <![end if]-->
```

```html
    <!doctype html>
    <!--[if IEMobile 7]><html dir="ltr" lang="en-US" class="no-js iem7"> <![end if]-->
    <!--[if lt IE 7]><html dir="ltr" lang="en-US" class="no-js ie6 oldie"> <![end if]-->
    <!--[if IE 7]><html dir="ltr" lang="en-US" class="no-js ie7 oldie" > <![end if]-->
    <!--[if IE 8]><html dir="ltr" lang="en-US" class="no-js ie8 oldie" > <![end if]-->
    <!--[if (gt IE 9)|(gt IEMobile 7)|(!IEMobile)|(!IE)]><html dir="ltr" lang="en-US" class="no-js ie7 oldie" > <![end if]-->
```


* ie6、7的 hack 写法是？
* IE Hack
* js 能力检测
* html5shiv.js  (让页面上写的html5能够生效,)
* respond.js （实现媒体查寻，在ie8以下都没有这个功能）
* css reset  (可以把标签的默认样式去掉)
* normalize.css ：Normalize.css 是一个可以定制的CSS文件，它让不同的浏览器在渲染网页元素的时候形式更统一。
保留有用的默认值，不同于许多 CSS 的重置
标准化的样式，适用范围广的元素。
纠正错误和常见的浏览器的不一致性。
一些细微的改进，提高了易用性。
<!-- 使用详细的注释来解释代码。 （把标签的部分默认样式去掉，保留部分样式，再修复浏览器不同的细微bug，让页面展示更统一） -->
* Modernizr   （Modernizr是一个开源的JS库，它使得那些基于访客浏览器的不同（指对新标准支持性的差异）而开发不同级别体验的设计师的工作变得更为简单。它使得设计师可以在支持HTML5和CSS3的浏览器中充分利用HTML5和CSS3的特性进行开发，同时又不会牺牲其他不支持这些新技术的浏览器的控制。

当你在网页中嵌入Modernizr的脚本时，它会检测当前浏览器是否支持CSS3的特性，比如 @font-face、border-radius、 border-image、box-shadow、rgba() 等，同时也会检测是否支持HTML5的 特性——比如audio、video、本地储存、和新的 <input>标签的类型和属性等。在获取到这些信息的基础上，你可以在那些支持这些功能的浏览器上使用它们，来决定是否创建一个基于JS的 fallback，或者对那些不支持的浏览器进行简单的优雅降级。另外，Modernizr还可以令IE支持对HTML5的元素应用CSS样式，这样开发者就可以立即使用这些更富有语义化的标签了。）
* postCSS    （PostCss是一个Node.js的module，将css解析成一个 AST(abstract syntax tree抽象语法树)，通过任意插件解析AST并转换成string输出到一个文件中。）

尽可能多的列举浏览器兼容的处理范例
