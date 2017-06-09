function save(){
    var userName = document.querySelector('#txtName').value
    console.log(userName)

    //在querySelector的时候可以根据属性名字进行选择
    //使用[]包括起来
    // console.log(document.querySelectorAll('input[name="gender"][checked]'))
    var gender = ''
    var allGender = document.querySelectorAll('input[name="gender"]')
    allGender.forEach(function(item){
        //fadio标签有一个checked属性,当被选中的时候checked=true
        if(item.checked){
            gender = item.value
            console.log(item.value)
        }
    })
    //checkbox是多选框
    //在提交服务器的时候一般name相同的值用,进行分割
    //form对象对自动的继续数据组织,不需要人为干预
    var allColors = document.getElementsByName('color')
    allColors.forEach(function(i){
        if(i.checked){
            console.log(i.value)
        }
    })
    //获取下拉框的值
    var mobileType = document.getElementById('sel')
    console.log(mobileType.value)
}