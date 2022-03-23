
import React from 'react';
class CustomTextInput extends React.Component {
  constructor() {
    super()
    this.state = {
      school: ''
    }
    this.textInput = React.createRef()

  }
  focusTextInput() {
    // console.log('focusTextInput',this.textInput)
    this.textInput.current.focus()
  }
  handleChange(e) {
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="custom_textinput">
        <label>
          学校：
          <input type="text" ref={this.textInput} placeholder="请输入学校" name="school" value={this.state.school} onChange={this.handleChange.bind(this)} ></input>

          <input
            type="button"
            value="Focus the school input"
            onClick={this.focusTextInput.bind(this)}
          />
        </label>
      </div>
    );
  }
}

export default CustomTextInput;