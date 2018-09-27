# BFC
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
### 合适的框架
1. Bootstrap(>=ie8)
2. jQuery 1.~(>=ie6),jQuery 2.~(>=ie9)
3. Vue(>=ie9)
4. ....

## 条件注释
* 条件注释是于HTML源码中被IE有条件解释的语句。条件注释可被用来向IE提供及隐藏代码。

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


## 常见兼容处理范例
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