var person = {}//创建一个对象
/**
 * 属性赋值方式有多种
 * 1.直接写属性名
 * 2.类似数组下标的方式经行赋值
 */

person.name = 'Tom'
person['age'] = 18
person.gender = '男'
person.fav = 'Play with Jerry'
person['fav.detail'] = 'Tom and Jerry是一部动画片.....'
console.log(person)
//通过for in 获取对象中的属性名字段
//对象是键值对(k-v)的形式存在的
for(var k in person){
    console.log('当前的属性名为:'+k+',属性值为:'+person[k])
}
// delete person.name//删除属性
// console.dir(person)

//Object.keys返回的是一个数组
console.log(Object.keys(person))//Object.keys获取所有的key值

//person.say对应一个function
//return表示function的返回值
person.say = function(){
    //此处的this表示当前person对象
    return '我的名字是：'+this.name 
}
console.log(person.say())//调用person上的say方法

var people = []
 people.push(person)
 var p2 = {}
 p2.name = 'Jerry'
 p2.age = 21
 p2.fav = 'play with Tom'

 var p3 = {}
 p3.name = '樱木花道'
 p3.age = 17
 p3.fav = '赤木晴子'

//push 操作之后返回值为数组的长度
console.log(people.push(p2,p3))//3
var strHtml = ''
var tb = document.getElementById('tb')
people.forEach(function(p){
    strHtml += `<tr><td>${p.name}</td><td>${p.age}</td><td>${p.fav}</td></tr>`
    // strHtml += '<tr><td>'+p.name+'</td><td>'+p.age+'</td><td>'+p.fav+'</td></tr>'
})
tb.innerHTML = strHtml






