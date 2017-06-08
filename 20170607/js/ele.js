//
var img = document.getElementById('pic')
/**
 * img是和一和图片标签，但是它具有标签的所有属性和方法
 * src //表示图片的路径
 */
console.dir(img)
//在js中我们可以直接通过 .属性名 的方式设置属性值
// img.src = '../image/1.jpg'
/**
 * 常见的属性以及意义
 * 标签属性可以和对象属性的用法类似(用等号(=)赋值)
 * src          资源的路径
 * innerHTML    标签内部的html内容
 * innerText    标签内部的文本内容
 * dataset      数据集
 * href         链接地址
 * target       a标签的打开方式
 * style        样式信息
 * on...        事件监听
 */
var div = document.querySelector('#main')
div.innerHTML = '<a href = "#" style="color:#fff;"> 百度一下</a>'
var divTxt = document.getElementById('mainTxt')
divTxt.innerText = '<a href = "#" style="color:red;"> 百度一下</a>'

var link = document.querySelector('.text')//获取第一个符合条件的标签
console.log(link.href)
/**
 * 在通过style属性设置样式的时候
 * 可以每一个样式单独进行设置，样式的名字使用驼峰方式写
 * 也可以直接把样式内容拼接成字符串进行赋值
 */
div.style.width = "200px"
div.style.height = "200px"
div.style.backgroundColor = 'red'
divTxt.style = "width:100px;height:100px; background-color:red;"

console.log('传统方式获取a标签')
console.log(document.getElementsByTagName('a'))
console.log('querySelectorAll方式获取a标签')
console.log(document.querySelectorAll('a'))
console.log('直接获取链接形式')
//document.links可以直接获取页面中的所有链接
console.log(document.links)
/**
 * dataset获取的是页面标签中的所有以data-开始的属性
 * 通常用于存储一些自定义数据时使用
 * 
 */

console.log(link.dataset)


