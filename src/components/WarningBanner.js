
import React from 'react';
class WarningBanner extends React.Component {
  
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