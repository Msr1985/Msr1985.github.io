/**
    * 要求实现 asdw移动
    * w 向上移动
    * s 向下移动
    * a 向左移动
    * d 向右移动
    */
var ball = document.getElementById('ball')
function keyUpHandle(e) {
    var rc = Math.random() * 360
    if (e.key == 'a' || e.key == '4' || e.keyCode == '37') {
        ball.style.left = (ball.offsetLeft - 5) + 'px'
        ball.style.backgroundColor = 'hsl(' + rc + ',70%,50%)'
    }
    if (e.key == 'd' || e.key == '6' || e.keyCode == '39') {
        ball.style.left = (ball.offsetLeft + 5) + 'px'
        ball.style.backgroundColor = 'hsl(' + rc + ',70%,50%)'e
    }
    if (e.key == 'w' || e.key == '8' || e.keyCode == '38') {
        ball.style.top = (ball.offsetTop - 5) + 'px'
        ball.style.backgroundColor = 'hsl(' + rc + ',70%,50%)'
    }
    if (e.key == 's' || e.key == '5' || e.keyCode == '40') {
        ball.style.top = (ball.offsetTop + 5) + 'px'
        ball.style.backgroundColor = 'hsl(' + rc + ',70%,50%)'
    }
    if (e.key == 'a' && e.key == 's') {
        ball.style.left = (ball.offsetLeft - 5) + 'px'
        ball.style.top = (ball.offsetTop + 5) + 'px'
    }
}