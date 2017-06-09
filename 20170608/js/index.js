//getElementsBy  获取的是一个集合,
//如果我要获取第一个标签需要使用类似于数组取值的方式
var m = document.getElementsByClassName('container')[0]
//element.children//获取子节点
console.log(m.children)
//获取.container内部的所有li
var addLi = m.getElementsByTagName('li')
console.log(allLi)
var allUls = document.getElementsByName('ul')
var lastUl = allUls[allUls.length-1]//通过长度减一取最后一个
console.log(lastUl)
console.log(lastUl.children)//获取所有子节点(标签)
console.log(lastUl.firstElementChild)//获取第一个子标签
console.log(lastUl.lastElementChild)//获取最后一个子标签
