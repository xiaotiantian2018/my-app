import './index.scss';
import React from 'react';
import Logined from '../../components/Logined';
import EventBind from '../../components/EventBind';
import WarningBanner from '../../components/WarningBanner';
import ListItems from '../../components/ListItems/ListItems';
import List from '../../components/ListItems/List';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    // super关键字，它指代父类的实例（即父类的this对象）。
    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    // 这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
    // 如果不调用super方法，子类就得不到this对象。
    super()
    this.state = {
      isShowBann: false,
      posts: [
        { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
        { id: 2, title: 'Installation', content: 'You can install React from npm.' }
      ]
    }
  }
  handleToggleBan() {
    this.setState(prevState => ({
      isShowBann: !prevState.isShowBann
    }))
  }
  render() {
    let { isShowBann, posts } = this.state
    return (
      <div className="p_index">
        <header className="index_header">
          <Link to="jsx">jsx</Link>
          <br /><br />
          <Link to={{ pathname: '/form', state: { id: '2' } }}>form</Link>
          <br /><br />
          <Link to="userinfo">userInfo</Link>
          <br /><br />
          <Link to="counter">counter</Link>
          <br /><br />
          <Link to="jumpPage">jumpPage</Link>
          <br /><br />
          <Link to="stateDidMount">stateDidMount</Link>
          <br /><br />
          <Link to="axiosStudy">axiosStudy</Link>
          <br /><br />
        </header>
        <main>
          <div tabIndex="0" >
            tabIndex0
            <h2>一、事件处理函数示例开始</h2>
            <EventBind />

            <h2>二、条件渲染示例开始</h2>
            <div>
              <Logined isLoggedIn={true} />
              <WarningBanner isShow={isShowBann} />
              <button onClick={this.handleToggleBan.bind(this)}>{isShowBann ? 'hide' : 'show'}</button>
            </div>
            <h2>三、列表渲染示例开始</h2>
            <div>
              <List />
              <ul>
                {posts.map((post) =>
                  <ListItems key={post.id} post={post} />
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
