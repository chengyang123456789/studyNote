# CSS基础
## CSS定义
- CSS (Cascading Style Sheets) 层叠样式表
## CSS应用方式
### 外部样式表（推荐）
* 通过<link>引入CSS
    ```html
    <link rel="stylesheet" href="style.css">
    ```
* 通过@import 引入样，放入css中
## 内部样式表
* 将CSS放入页面的`<style>`元素中
## 内联标签
* 不推荐，但某些情况下很有用
 ```html
 <p style="background-color:red; font-size:24px;"></p>
 ```
## 选择器类型
### 基础选择器
* \* 通用元素选择器，匹配页面任何元素（很少使用）
* \#id id选择器，匹配特定id的元素 
* .class 类选择器，匹配class包含（不是等于)特定类的元素
* element 标签选择器

### 组合选择器
* E,F 多元素选择器，用`,`分隔，同时匹配元素E或元素F
* E F 后代选择器，用空格分隔，匹配E元素所有的后代（不只是子元素、子元 素向下递归）元素F
* E>F 子元素选择器，用```>```符号分隔，匹配E元素的所有直接子元素
* E+F  直接相邻选择器，匹配E 元素之后的相邻的同级元素F
* E~F 普通相邻选择器（弟弟选择器），匹配E元素之后的同级元素F（无论直接相邻与否）
* .class1.class2 id和class选择器和选择器连写的时候中间没有分隔符，`.`和`#`本身充当分隔符的元素
* element#id id和class选择器和选择器连写的时候中间没有分隔符，`.`和`#`本身充当分隔符的元素
### 属性选择器
* E[attr] 匹配所有具有属性attr的元素，div[id]就能取到所有 有id属性的div

### 伪类选择器
* E：first-child 匹配元素的第一个子元素
* E: link 匹配所有未被点击的链接                   ` <!--a类选择器，多用于<a>标签 -->`
* E：visited 匹配所有已被点击的链接                 `<!--a类选择器，多用于<a>标签 -->`
* E：active 匹配鼠标已经其上按下、还没有释放的E元素   `<!--a类选择器，多用于<a>标签 -->`
* E：hover 匹配鼠标悬停其上的E元素                   `<!--a类选择器，多用于<a>标签 -->`
* E：focus 匹配获得当前焦点E的元素
* E:lang(c)	匹配lang属性等于c的E元素
* E:enabled	匹配表单中可用的元素
* E:disabled	匹配表单中禁用的元素
* E:checked	匹配表单中被选中的radio或checkbox元素
* E::selection	匹配用户当前选中的元素
### 伪元素选择器
* E:root	匹配文档的根元素，对于HTML文档，就是HTML元素
* E:nth-child(n)	匹配其父元素的第n个子元素，第一个编号为1
* E:nth-last-child(n)	匹配其父元素的倒数第n个子元素，第一个编号为1
* E:nth-of-type(n)	与:nth-child()作用类似，但是仅匹配使用同种标签的元素
* E:nth-last-of-type(n)	与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素
* E:last-child	匹配父元素的最后一个子元素，等同于:nth-last-child(1)
* E:first-of-type	匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)
* E:last-of-type	匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1)
* E:only-child	匹配父元素下仅有的一个子元素，等同于:first-child:last-child或 :nth-child(1):nth-last-child(1)
* E:only-of-type	匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1)
* E:empty	匹配一个不包含任何子元素的元素，文本节点也被看作子元素
* E:not(selector)	匹配不符合当前选择器的任何元素N的取值
    * n的取值
        * 1，2，3，4，5    
        * 2n+1, 2n, 4n-1 
        * odd, even
### 伪元素选择器
* 选择器	含义
    * E::first-line	 匹配E元素内容的第一行
    * E::first-letter	 匹配E元素内容的第一个字母
    * E::before	 在E元素之前插入生成的内容
    * E::after	在E元素之后插入生成的内容
* 选择器优先级
    * 如果多条规则作用于同一个元素上，且定义的相同属性的不同值，比如
        ```html
        <style>
            #test {color: #666;}
            p {color: #333;}
        </style>

        <p id="text">Text</p>
        <!-- 这种场景下，p元素文本颜色应该是哪个呢？-->
        ```

