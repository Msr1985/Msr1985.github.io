var bok = ''
var tb = document.getElementById('tb')
var cound = 1
books.data.forEach(function (album) {
    var subStr = album.descriptions.substr(0,19)
    bok += '<tr>'
        +   '<td>' + cound++ + '</td>'
        +   '<td>' + album.title + '</td>'
        +   '<td title='+album.descriptions+'>' + subStr + '...</td>'
        +   '<td>' + album.created_at + '</td>'
        +  '</tr>'
        
})
tb.innerHTML = bok


/**
 * 三元运算符
 * bool?true:false
 * 2>1?'2大于1':'2小于1'
 * 如果bool表达式的机选结果为true
 *      那么计算的结果为:前面的值
 */