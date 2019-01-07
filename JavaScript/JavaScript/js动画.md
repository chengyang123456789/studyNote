#JS动画


## 使用**setTimeout**实现（不推荐使用JS实现动画，更推荐使用CSS3的动画）

```js
<div id="ball"></div>
<script>
    var offsetX = 500   //水平要移动的距离
    var moveOffset = 0  //当前已经移动的距离
    var step = 5  //每次移动的距离
    function move(){
        if(moveOffset < offSetX){
            ball.style.left = parseInt(getCOmputedStyle(ball).left) + step + 'px'
            moveOffset += step
            setTimeout(move,5)
        }
    }
    move()
</script>

```


## requestAnimationFrame (推荐)

```js
<div id= "ball"></div>
<script>
    var offsetX = 500  //水平要移动的距离
    var moveOffset = 0  //当前已经移动的距离
    var step = 5  //每次移动的距离
    function move(){
        if(moveOffset < offsetX){
            ball.style.left = parseInt(getComputedStyle(ball).left) + step +'px'
            moveOffset += step
            requestAnimationFrame(move)
        }
    }
    move
</script>
```