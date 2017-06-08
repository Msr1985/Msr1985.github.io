var tag = document.getElementById('sH3')
/**
 * setTimeout
 *      参数一   回调函数
 *      参数二   延迟时间(毫秒单位)
 */
// setTimeout(function(){
//     tag.innerText = '5秒钟已结束'
// },5000)
// setTimeout(function(){
//     console.log('aaa')
// },0)
// console.log('bbb')
// console.log('ccc')

// var i = 0
/**
 * 每隔一定时间之后重复执行某一个方法
 * 每一个setInterval调用返回一个number值表示当前计时器
 * 可以通过调用clearInterval清除计时器
 */
// var timer = setInterval(function(){
//     tag.innerText = '当前的i值为:'+i
//     i++
// },2000)
// //10秒钟以后清除计时器
// setTimeout(function() {
//     clearInterval(timer)
// }, 10000);
//clearTimeout  可以清除延迟
// var arr = ['yellow','red','blue','green']
var max = 600//最大计时时间
function startTimer() {
   var t = setInterval(function () {
       if (max<0){
           clearInterval(t)
           return//此处执行return后面的代码不在执行
       }
        tag.innerText = max
        max--
    }, 1000)
}

setTimeout(function () {
    startTimer()//自动计时器的调用
}, 1000)//延迟15秒之后执行一个方法
//hsl
setInterval(function(){
    var rc = Math.random()*360
    document.body.style.backgroundColor = 'hsl('+rc+',70%,50%)'
},500)
