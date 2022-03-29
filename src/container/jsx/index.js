import React from 'react'


class Jsx extends React.Component {
    getGreeting (user) {
        // 在 if 语句和 for 循环的代码块中使用 JSX，
        // 将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX
        if (user) {
            return <h1>Hello, {user.firstName + user.lastName}</h1>
        } else {
            return <h1>Hello, Stranger</h1>
        }
    
    }
    render() {
        const user = {
            firstName: 'zhang',
            lastName: 'san',
            avatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F1099645%2F201702%2F1099645-20170205173633964-1039992391.png&refer=http%3A%2F%2Fimages2015.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649557595&t=ce2f1f50eaed33c5dd369807dab13ed6'
        }
        return (
            <div>
                <h1>jsx学习</h1>
                {this.getGreeting(user)}
                <img src={user.avatarUrl} width="100" height="50" alt=""></img>
            </div>
        )
    }
}

export default Jsx
