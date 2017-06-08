var  arrData = [1,2,3,4,5,6,7]
/**
 * forEach遍历数组中的每一项内容,不返回值
 * callback回调函数接收三个参数
 *      item[只是变量名而已]    当前遍历到的项目(元素)
 *      index[只是变量名而已]   当前项目的索引值(下标)
 *      tem[只是变量名而已]     原数组本身
 * 形参(形式上的参数)
 */
arrData.forEach(function(item,index,tem){
    console.count('循环的次数')
    console.group('当前所有内容')
    console.log('参数一:'+item)
    console.log('参数二:'+index)
    console.log('参数三:'+tem)
    console.groupEnd()
})

var arrPerson = [
    {name:'Tom',age:18},
    {name:'Jerry',age:20}
]
arrPerson.forEach(function(i){
    console.log(i)
})
// console.clear
// function demo(a,b,c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }