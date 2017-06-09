/**
 * 方法中的参数e表示点击事件的参数(可以叫任何名字)
 * 方法中的参数叫形参(形式上的参数)
 *  形参的值只有在方法调用的时候才被处理,没调用之前没有意义
 * 参数只在方法内部使用
 */
function clickHandle(e){
    //e.target //表示事件的触发者
    //e.currentTarget //表示绑定事件的标签
    //两者在大部分时候是指向同一个值的
    //在实践开发的时候建议使用currentTarget获取绑定事件的标签
    console.log(e.target)
    console.log(e.currentTarget)
}
/**
 * 通过onclick属性对标签进行事件赋值操作的时候
 * 最后一次赋值的事件会覆盖前面的效果
 * 因为:on...为标签的属性,赋值相当于修改属性值
 */
var btn = document.getElementById('btn')
btn.onclick = function(e){
    console.log('AaaaaaaaA')
}
bth = onclick = function(e){
    console.log('BbbbbbbbB')
}
/**
 * 通过addEventListener添加事件
 * 添加多个的时候不会覆盖以前的，点击之后多个效果会同时触发
 * 参数一  事件类型
 * 参数二  事件处理函数
 */
btn .addEventListener('click',function(e){
    console.log('CcccccccC')
})
var btnClickHandle = function(e){
    console.log(e)//MouseEvent //鼠标事件
    console.log('DdddddddD')
}
btn.addEventListener('click',btnClickHandle)

/**
 * keyboardEvent
 * altkey       是否按下Alt键    bool值
 * ctrlkey      是否按下ctrl键   bool值
 * shiftkey     是否按下shift键  bool值
 */
var txt = document.getElementById('txt')
txt.onkeydown = function(i){
    console.log('keyDown')
    console.log(i.currentTarget.value)
}
txt.onkeypress = function(i){
    console.log('keyPress')
    console.log(i.currentTarget.value)
}
txt.onkeyup = function(i){
    console.log('keyUp')
    console.log(i.currentTarget.value)    
    console.log(i)//key
    console.log(i.key)
    console.log(i.keyCode)
    if(i.ctrlKey && i.key == 'a'){
        console.log('________________________')
    }
    if(i.keyCode == 13){
        alert(i.currentTarget.value)
    }
}