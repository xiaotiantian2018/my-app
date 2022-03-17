
import React from 'react';
class EventBind extends React.Component {
  constructor() {
    super()
    this.state = {
      isToggleOn: true,
      id: 1,
      value: ''
    }
  }
  handleSubmitBtn(event) {
    console.log('this', this)
    // 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。
    // 你必须显式的使用 preventDefault。
    // 例如，传统的 HTML 中阻止表单的默认提交行为，你可以这样写：return false
    alert('提交的名字: ' + this.state.value)
    event.preventDefault()

  }
  handleClick(id, event) {
    // 向事件处理程序传递参数
    console.log('id', id, 'event', event)
    // 可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    let { isToggleOn, id } = this.state
    return (
      <div className="eventbind">
        {/* 事件处理示例form开始 */}
        <form onSubmit={this.handleSubmitBtn.bind(this)}>
          <div>
            <div>
              <label>
                名字：
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
              </label>
            </div>
            {/* 向事件处理程序传递参数 */}
            {/* 在循环中，通常我们会为事件处理函数传递额外的参数。
            例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：
            <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
            <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
            上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。

            在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。
            如果通过箭头函数的方式，事件对象必须显式的进行传递，
            而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。 */}
            <button type='button' onClick={(e) => this.handleClick(id, e)}>{isToggleOn ? 'ON' : 'OFF'}</button>
          </div>
          <button type='submit' className='mt20'>submit</button>
        </form>
      </div>
    );
  }
}

export default EventBind;