
import React from 'react';
class WarningBanner extends React.Component {
  componentDidMount(){
    const arr = [1,2,3,4,5]
    arr.forEach((item,index,input)=>input[index]=item*2)
    console.log('arr',arr)
  }
  componentDidUpdate(){
    // console.log('componentDidUpdate')
  }
  render() {
    let { isShow } = this.props

    return (
      <div className="warning_banner">
        {isShow
          ? <div>
            warning_banner
            </div>
          : null
        }
      </div>
    );
  }
}

export default WarningBanner;