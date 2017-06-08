var arr = [1, 2, 3, 4, 5, 76, 16, 21, 35, 9]//原始数组
console.log(arr.reverse())//反转数组中的元素
//console.group 可以对输出的内容经行分组
//      需要对应一个groupEnd方法的调用
//      终端分组输出是为了增加数组输出的可读性
console.group('数组反正操作')
console.log('反转之后的原数组')
console.groupEnd()
var arrPerson = [
    { name: 'Tom', age: 18 },
    { name: 'Jetty', age: 20 },
    { name: 'Polly', age: 5 },
    { name: 'HanMeiMei', age: 16 }
]
console.dir(arrPerson.reverse())//
//sort接收一个排序函数。需要两个参数 用于比较
console.log(arr.sort(function (a, b) {
    console.count('执行排序操作')//记录操作的次数
    console.group('排序操作')
    console.log('a:' + a)
    console.log('b:' + b)
    console.groupEnd()
    return a - b //排序函数的返回值[a-b使数组内容按照从小到大排]
}))//数组排序
console.group('排序之后的原数组')
console.log('数组排序之后')
console.log(arr)
console.groupEnd()

arrPerson.sort(function (a, b) {
    return a.age - b.age
})
console.log(arrPerson)
console.clear()//清空输出
var arrStudent = ['付', '毕', '游', '王', '催', '李', '卫', '刘', '韩']
arrStudent.sort(function (a, b) {
    return 0.5 - Math.random()//随机排序
})
console.log(arrStudent) 
var str = "abcdefghijk"//字符串反转
console.log(str.split('').reverse('').join(''))
