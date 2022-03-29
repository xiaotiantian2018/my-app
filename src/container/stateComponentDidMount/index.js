import React from 'react'
import StateMsg from '../../components/StateMsg';

class StateDidMount extends React.Component {
  constructor() {
    // super关键字，它指代父类的实例（即父类的this对象）。
    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    // 这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
    // 如果不调用super方法，子类就得不到this对象。
    super()
    this.state = {
      x: 0,
      y: 0,
      msg: '你好',
      date: new Date()
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
  render() {
    let { x, y, msg, date } = this.state

    return (
      <div>
        <h1> State & 生命周期---计时器开始 </h1>
        <div>
          <p>It is {date.toLocaleTimeString()}</p>
        </div>
        <h1>props 父传子通信方式，欢迎您开始 </h1>
        <div className='welcome'>
          {/* 组件可以选择把它的 state 作为 props 向下传递到它的子组件中 */}
          <StateMsg msg={msg}></StateMsg>
        </div>
        <h1>setState示例开始,点击onMouseMove此按钮setState修改x，y的值 </h1>
        <div>
          {x}<br />
          {y}
          <p style={{ height: "100px" }} >
            <button type='button' onMouseMove={this.handleMouseMove.bind(this)}>click me</button>
          </p>
        </div>
      </div>
    )
  }
}

export default StateDidMount
