import React from 'react'
import { Link } from 'react-router-dom'


class JumpPage extends React.Component {
    jump() {
        let { history } = this.props
        history.push('/form?id=1')
    }

    render() {
        const { location } = this.props
        console.log('location', location)
        return (
            <div>
                <h2>react路由跳转、传参3中方式及区别
                    https://blog.csdn.net/weixin_44999830/article/details/106074436
{/* 
                    1.路由表配置：参数地址栏显示
                    <Route path="/list/:id" component={List} />
                    html：<Link to='/list/2' >跳转列表页面</Link>
                    Js: this.props.history.push('/list/2');
                    List页面接收：
                    console.log(this.props.match.params.id)//传递过来的所有参数

                    2.query方法：参数地址栏不显示，刷新地址栏，参数丢失
                    html:
                    <Link to={{ pathname: '/list', query: { name: 'xlf' } }}>跳转列表页面</Link>
                    Js方式：this.props.history.push({pathname: '/list', query: {name: ' sunny' } })
                    List页面接收：
                    console.log(this.props.location.query.name)//传递过来的所有参数

                    3.state方法：参数地址栏不显示，刷新地址栏，参数不丢失，但是该方法只支持BrowerRouter，不支持HashRouter
                    Html： <Link to={{ pathname: '/list', state: { name: 'xlf' } }}>跳转列表页面</Link>
                    js：this.props.history.push({pathname: '/list', state: {name: 'sunny' } })
                    List页面接收
                    console.log(this.props.location.state.name)//传递过来的所有参数 */}


                </h2>
                <Link to="/form">FORM</Link>
                <button onClick={this.jump.bind(this)} >FORM</button>

                <div>
                    react如何获取当前的路由地址呢？
                    方法一：react-router-dom，低于5.1（不含）的版本，
                    先使用withRouter对组件进行装饰，
                    然后就可以使用this.props.location.pathname获取到了，代码如下：
                    {/* import React from 'react';
                    import {withRouter} from 'react-router-dom';

                    @withRouter
                    export default class App extends React.Component {
                        //...
                        getPathname = () => {
                            console.log(this.props.location.pathname);
                        }
                        //...
                    } */}
                    使用@withRouter语法不支持的话使用export default withRouter(App)；
                    方法二:react-router-dom，5.1至6.0版本，直接从this.props.location中取，也可以通过Hook可以获得pathname
                    方法三：react-router-dom,6.0以上版本，v6没withRouter了，v6只有hooks方法了,在5.3.0以上版本中，通过Hook可以获得pathname.

                    <h1>注意：react-router-dom 的版本介绍</h1>

                    v5文档： https://v5.reactrouter.com/web/guides/quick-start

                    本文使用的两个版本： v5(5.3.0) 和 v6(6.1.1)
                    其中：
                    v5版本既兼容了 class component（react v16.8前），又兼容了function component(v16.8及以后，即hook)
                    v6版本，若仍然使用this.props.history.push()，此时props会提示是空值，v6文档里把路由组件默认接受的三个属性给移除了，官网文档里给出的解决方案是使用useNavigate()这个hook，但是hook只能存在于无状态组件（function component），无法用在类组件中（class component）

                    所以，仍然使用class commponent（类组件）进行项目开发的，建议react-router-dom 使用v5及以前的版本（最新的v5版本是 v5.3.0）
                    如果使用 function component（函数组件）进行项目开发的，建议使用最新的v6版本（v5版本虽然兼容了hook用法，但是相比v6还是有点区别）
                    参考：https://www.cnblogs.com/nangezi/p/15733562.html

                </div>
                <div>
                    pathname:
                    {location.pathname}
                    <br />
                    query:
                    {location.query}
                </div>
            </div>
        )
    }
}
export default JumpPage
