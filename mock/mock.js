import Mock from 'mockjs'


Mock.mock('/mock/login',function(option){
    // console.log(option)
    return option
})


// crm页面数据
let crmData = {
    payMoney: '6800',
    clientInfo: 'sanqi',
    payOrder: '1234567890'
}
Mock.mock('/mock/crmpage',function(option){
    // console.log(option)
    return crmData
})



// crmPages页面数据
let crmpageinfo = {
    payMoney: '6800',
    noteNumber: '76854',
}
