
import React from 'react'
import './index.css'
import CustomTextInput from './components/customTextInput'


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            tVal: '',
            fruitVal: 'mango',
            isGoing: true,
            numberOfGuests: 2,
            xingming: ''
        }
        // 创建一个 ref 来存储 inputXmRef 的 DOM 元素
        this.inputXmRef = React.createRef()
        this.inputShoolRef= React.createRef()

    }
    focusInputXm() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：我们通过 "current" 来访问 DOM 节点
        this.inputXmRef.current.focus()
    }
    componentDidMount() {
        this.focusInputXm()
        this.inputShoolRef.current.focusTextInput()
        const arr = ['a', 'b']
        arr.push('c')
        arr[1] = 'd'
        console.log('arr',arr)
        let obj = {a:1,b:2}
        obj.b=3
        console.log('obj',obj)
    }
    handleSubmit(e) {
        alert('撰写文章内容是：' + this.state.tVal)
        alert('你喜欢的风味是：' + this.state.fruitVal)
        alert('是否参与：' + this.state.isGoing)
        alert('来宾人数：' + this.state.numberOfGuests)
        alert('姓名：' + this.state.xingming)

        e.preventDefault()
    }
    handleChange(e) {
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        // 告诉 React 我们想把 <input> ref 关联到
        // 构造器里创建的 `inputXmRef` 上
        return (
            <form className="p_form" onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    文章：<br />
                    <textarea name="tVal" value={this.state.tVal} placeholder="请您撰写一篇文章" onChange={this.handleChange.bind(this)} className="text_area" />
                </label>
                <br />
                {/* select示例，在 HTML 中，<select> 创建下拉列表标签。例如，如下 HTML 创建了水果相关的下拉列表，由于 selected 属性的缘故，椰子选项默认被选中。
                React 并不会使用 selected 属性，而是在根 select 标签上使用 value 属性。 */}
                <label>
                    选择你喜欢的风味:
                    <select name="fruitVal" value={this.state.fruitVal} onChange={this.handleChange.bind(this)}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <br />
                <label>
                    参与:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange.bind(this)} />
                </label>
                <br />
                <label>
                    来宾人数:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleChange.bind(this)} />
                </label>
                <br />
                <input type="file" />
                <br />
                {/* 一、为 DOM 元素添加 ref
                    以下代码使用 ref 去存储 DOM 节点的引用： */}
                <label>
                    姓名：
                    <input type="text" ref={this.inputXmRef} placeholder="请输入姓名" name="xingming" value={this.state.xingming} onChange={this.handleChange.bind(this)} ></input>

                    <input
                        type="button"
                        value="Focus the text input"
                        onClick={this.focusInputXm.bind(this)}
                    />
                </label>
                <br />

                {/*二、 为 class 组件添加 Ref,
                        如果我们想包装上面的 CustomTextInput，来模拟它挂载之后立即被点击的操作，
                        我们可以使用 ref 来获取这个自定义的 input 组件并手动调用它的 focusTextInput 方法： */}
                <CustomTextInput  ref={this.inputShoolRef}/>
                <button type="submit">提交 </button>

            </form>
        )
    }
}

export default Form;