var txt = document.getElementById('txtMsg')//获取页面中的输入框
var contains = document.getElementById('answers')//获取容器
function ask() {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            var msg = JSON.parse(xhr.response)//数据转为对象
            if (msg.code == 200000) {
                contains.innerHTML += '<p>问:' + txt.value + '</p>'
                    + '<a target="_blank" href=' + msg.url + ' style="color:red;">答:' + msg.text + '</a>'
            }
            else {
                contains.innerHTML += '<p>问:' + txt.value + '</p>'
                    + '<p style="color:red;">答:' + msg.text + '</p>'
            }
            txt.value = ''
        }
    }
    xhr.open('get', 'http://www.tuling123.com/openapi/api?key=77f6213f6cbf4ac9ad75d93333f92569&info=' + txt.value)
    xhr.send()
}