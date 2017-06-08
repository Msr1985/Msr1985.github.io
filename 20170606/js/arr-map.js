var arrNums = [1,2,3,4,5,6,7,8,9]
/**
 * map 遍历数组中的每一项，根据每一次循环的返回值生成一个新的数组
 * 新生成的数组和原数组长度一致
 * 
 */
var newArr = arrNums.map(function(item,indes,tem){
    return Math.pow(item,2)
})
console.log(newArr)
var arrPerson = [
    {name:'Tom',age:18},
    {name:'Jerry',age:20}
]
var people = arrPerson.map(function(i){
    return i.age+1
})
console.log(people)