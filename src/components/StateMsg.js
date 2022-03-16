
import React from 'react';
class StateMsg extends React.Component {

    render() {
      let { msg } = this.props

      return (
        <div className="state_name">
          {msg}
        </div>
      );
    }
  }
  
  export default StateMsg;