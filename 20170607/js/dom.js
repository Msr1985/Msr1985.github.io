/**
 * document.getElementById          //根据id选择
 * document.getElementByClassName   //根据class属性值
 * document.getElementByTagName     //根据标签名
 * document.getElementByName        //根据name属性,常用于表单
 * document.quertSelector           //类似css元素选择，返回单个
 * document.querySelectorAll        //类似css元素选择，返回多个
 * querySelector...是新增的查找方式(参考jQuery的实现)
 */
/**
 * document.getElementById
 * 根据id获取一个元素(标签)
 */
var div1 = document.getElementById('app1')
console.log(div1)

/**
 * document.getElementByTagName
 * 根据标签名字获取所有的标签
 * 
 */
var allDiv = document.getElementsByTagName('div')
console.log(allDiv)

/**
 * document.getElementByClassName
 * 根据class属性值获取所有的标签
 */
var tags = document.getElementsByClassName('list')
console.log(tags)
for(var i = 0; i<tags.length;i++){
    console.log(tags[i])
}

/**
 * document.getElementBuName
 * 根据name属性的值获取标签
 */
var inputUser = document.getElementsByName('userName')
console.log(inputUser)
var allBooks