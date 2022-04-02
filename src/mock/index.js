import Mock from 'mockjs'
// const data = Mock.mock({
//     "string|4": "yx！"
// })
// console.log('Mockdata',data)
// let dataSource = Mock.mock({
//     /**
//      * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
//      */
//     'dataSource|5':[{
//         'key|+1': 1,
//         'mockTitle|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
//         'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
//         'mockAction|1': ['下载', '试听', '喜欢']
//     }]
// })
// console.log('dataSource',dataSource)

Mock.mock('/api/get/student?ID=12345','get',()=>{
    return {
        success:true,
        message: '获取学生列表数据成功'
    }
})
Mock.mock('/api/get/user','post',()=>{
    return {
        success:true,
        message: '获取用户列表数据成功'
    }
})
// export {
//     data,
//     dataSource
// }
