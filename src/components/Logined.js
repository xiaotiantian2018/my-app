
import React from 'react';
class Logined extends React.Component {
    render() {
      let { isLoggedIn } = this.props
      // console.log('isLoggedIn',isLoggedIn)
      return (
        <div className="logined">
          {isLoggedIn  
            ? <h1>welcome back! </h1>
            : <h1>please sign up!</h1>
          }
        </div>
      );
    }
  }
  
  export default Logined;