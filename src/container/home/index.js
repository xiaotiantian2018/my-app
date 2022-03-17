import './index.css';
import React from 'react';
import StateMsg from '../../components/StateMsg';
import Logined from '../../components/Logined';
import EventBind from '../../components/EventBind';
import WarningBanner from '../../components/WarningBanner';
import ListItems from '../../components/ListItems/ListItems';
import List from '../../components/ListItems/List';
import {Link} from 'react-router-dom'
const user = {
  firstName: 'zhang',
  lastName: 'san',
  avatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F1099645%2F201702%2F1099645-20170205173633964-1039992391.png&refer=http%3A%2F%2Fimages2015.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649557595&t=ce2f1f50eaed33c5dd369807dab13ed6'
}
const getGreeting = (user) => {
  // 在 if 语句和 for 循环的代码块中使用 JSX，
  // 将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX
  if (user) {
    return <h1>Hello, {user.firstName + user.lastName}</h1>
  } else {
    return <h1>Hello, Stranger</h1>
  }

}
class Home extends React.Component {
  constructor() {
    // super关键字，它指代父类的实例（即父类的this对象）。
    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    // 这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
    // 如果不调用super方法，子类就得不到this对象。
    super()
    this.state = {
      x: 0,
      y: 0,
      date: new Date(),
      msg: '你好',
      isShowBann: false,
      posts: [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
      ]
    }
  }
  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timeId)
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  handleMouseMove(event) {
    // console.log('event', event)
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  handleToggleBan() {
    this.setState(prevState => ({
      isShowBann: !prevState.isShowBann
    }))
  }
  render() {
    let { x, y, date, msg, isShowBann,posts } = this.state
    return (
      <div className="p_index">
        <header className="index-header">
          <Link to="me" >test</Link>
          {getGreeting(user)}
          <img src={user.avatarUrl} width="100" height="50" alt=""></img>
        </header>
        <main>
          <div tabIndex="0" >
            tabIndex0
            {/* State & 生命周期---计时器开始 */}
            <div id="timeID">
              <h1>It is {date.toLocaleTimeString()}</h1>
            </div>
            {/* props 父传子通信方式，欢迎您开始 */}
            <div className='welcome'>
              {/* 组件可以选择把它的 state 作为 props 向下传递到它的子组件中 */}
              <StateMsg msg={msg}></StateMsg>
            </div>

            {/* setState开始 */}
            <div>
              {x}<br />
              {y}
              <p style={{ height: "100px" }} onMouseMove={this.handleMouseMove.bind(this)}>
                onMouseMove
              </p>
            </div>

            {/* 事件处理函数示例开始 */}
            <EventBind />

            {/* 条件渲染示例开始 */}
            <div>
              <Logined isLoggedIn={true} />
              <WarningBanner isShow={isShowBann} />
              <button onClick={this.handleToggleBan.bind(this)}>{isShowBann ? 'hide' : 'show'}</button>
            </div>

            <div>
            <List />
            <ul>
            { posts.map((post)=>
              <ListItems key={post.id} post={post}/>
            )}
            </ul>
            </div>


          </div>
        </main>
      </div>
    );
  }
}

export default Home;
