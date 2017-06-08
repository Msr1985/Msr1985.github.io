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
var content = document.getElementById('content')
var txtName = document.getElementById('txtName')
function txtChanged() {
    var keyWord = txtName.value
    content.innerHTML = '<p>' + arrPerson.filter(function (name) {
        if(p.name.indexOf(keyWord)>-1){
            console.log(name)
            return true;
        }
    }) + '</p>'

}

