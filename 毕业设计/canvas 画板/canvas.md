# canvas 画板



## 做一个画板

1. 查看canvas MDN文档https://developer.mozilla,org/zh-CN/docs/Web/API/Canvas-API
2. 做一个demo理解mouse事件
3. 再做一个demo理解event对象
4. 再做一个demo...
5. 做到你全都理解为止


## mouse事件

## canvas画圈


**绘制路径**

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径都是闭合的。使用路径绘制图形需要一些额外的步骤。

1. 首先你需要创建路径的起始点
    * beginPath()新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径
2. 然后你使用画图命令去画出路径
    * stroke()通过线条来绘制图形轮廓
3. 之后你把路径封闭
    * closePath()闭合路径之后图形绘制命令又重新指向到上下文中。
4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形
    * fill()通过填充路径的内容区域生成实心的图形



```js

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');//二次元上下文

//填充一个正方形
context.fillStyle = 'black';
context.fillRect(10,10,100,100);

//描边出一个正方形
context.strokeStyle = 'yellow'
context.strokeRect(10,10,100,100)

//清除正方形
context.clearRect(50,50,10,10)

//绘制一个三角形
context.beginPath();
context.moveTo(240,240)
context.lineTo(2400,300);
context.lineTo(300,300);
context.fill();
//moveTo(x,y)将笔触移动到指定的坐标x以及y上；当canvas初始化或者beginPath()调用后，你通常或使用moveTo()函数设置起点。


//画一个圆弧
//arc(x,y,radius,startAngle,endAngle,anticlockwise)画一个以(x,y)为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
//arcTo(x1,y1,x2,y2,radius)根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点
context.beginPath();
context.arc(150,150,20,0,Math.PI*2)
context.fill()
context.stroke()


```


## 全屏canvas