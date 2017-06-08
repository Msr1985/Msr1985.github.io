//var arr = ['123',123,{name:"tom"}]
//push  pop  shift  unshift
//队列:类似于排队效果(先进先出)
//栈  类似于子弹夹；
var arr = []//[1,2,3,4,5,6,7]
for (var i = 0; i < 10; i++) {
    arr.push(i)
}
//arr = [0,1,2....9]
console.log(arr)
//当不需要关系循环对象的长度时可以使用while循环


// while(arr.length>0){
//     console.log(arr.shift())//shift删除数组开始位置的元素
// }

// while(arr.length>0){
//     console.log(arr.pop())//pop删除数组结尾位置的元素
// }

var arr2 = [1, 2, 3, 4, 5, 6, 7, 9, 1, 3, 5, 7,]
//indexOf(x)//获取知道元素在数组中的索引位置
//如果元素不存在那么返回-1
console.log(arr2.indexOf(1))//
//数组去重
// for (var m = 0; m < arr2.length; m++){
//     for(var n = 0; n < arr2.length; n++){

//     }
// }
var arrEnd = [] //去重之后的结果
for (var i = 0; i < arr2.length; i++) {
    if (arrEnd.indexOf(arr2[i]) < 0) {//如果不包含当前项
        arrEnd.push(arr2[i])
    }
}
console.log(arrEnd)

// find查找数组中符合条件的数据（第一条结果）
//接受一个function函数，参数为当前循环到的项
//当符合条件的时候直接返回true即可
//
var findResult = arrEnd.find(function (item) {
    // console.log(item)
    return item > 5
})
console.log(findResult)//
var arr3 = [{ name: 'Tom', age: 18 }, { name: 'Jerry', age: 19 }]
var findR3 = arr3.find(function (i) {
    // return i.name == 'Tom'
    if(i.name == 'Tom'){
        return true 
    }
})
console.log(findR3)

//findIndex 返回符合条件的第一项的索引值
var findRI = arr2.findIndex(function (i) {
    return i > 5
})
console.log(findRI)

console.clear()//清空当前控制台输出的内容
var arrFindData = ['Tom', 'Jerry', '小爱', '酷飞', '乐迪']
var content = document.getElementById('content')//根据id选择
for (var i = 0; i < arrFindData.length; i++) {
    content.innerHTML += '<p>' + arrFindData[i] + '</p>'
}
var txtName = document.getElementById('txtName')
function txtChanged() {
    var keyWord = txtName.value//获取输入框中的输入内容
    content.innerHTML = '<p>' + arrFindData.find(function (name) {
        console.log(name)
        if(name.indexOf(keyWord)>-1){//条件处理
            return true;
        }
    }) + '</p>'

}

//filter 查找符合条件的所有数据，返回一个数组
//function 函数中的参数为每一项数据 
//var arrFindData = ['Tom', 'Jerry', '小爱', '酷飞', '乐迪']
var filterResult = arrFindData.filter(function(n){
    return n.length>2
})
console.log(filterResult)


var arrPerson = [{
    name:'小明',
    enName:'xiaoming'
},{
    name:'小红',
    enName:'xiaohong'
},{
    name:'小刚',
    enName:'xiaogang'
}]