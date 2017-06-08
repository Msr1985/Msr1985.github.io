var arrNums = [1, 2, 3, 4, 5, 6]
/**
 * reduce 循环数组中的每一项，生成一个合并计算之后的值
 * 参数一   回调函数
 *      参数一  上一次的返回值
 *      参数二  当前值
 *      参数三  当前索引
 *      参数四  原数组
 * 参数二   第一个循环进入时候的初始值
 * 
 * 如果参数二不存在的时候那么循环从数组的第二个元素开始，
 *      数组的第一个元素作为第一次循环的preVal值
 *      循环次数减少一次
 */
var sum = arrNums.reduce(function (preVal, item, index, tem) {
    console.count('循环次数')
    console.group('当前循环')
    console.log('preVal:' + preVal)
    console.log('currentVal:' + item)
    console.log('index:' + index)
    console.log('tem:' + tem)
    console.groupEnd()
    return preVal+Math.pow(item,2)
}, 0)
console.log(sum)

var arrStr = ['a','b','c','d']
var str = arrStr.reduce(function(pre,cur){
    return pre+'-'+cur
})
console.log(str)//a-b-c-d
// arrStr.join('-')