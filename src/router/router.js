import React from 'react';
import Home from '../container/home';
import {
  BrowserRouter, // 路由使用 history模式
  Routes,
  Route
} from 'react-router-dom';
const Test = ()=>{
  return (
    <div>
      fjkdsljfldsjalfjdlsj
    </div>
  )
}
class Router extends React.Component {
  render() {
    return (
      <div className="Router">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='me' element={<Test />} />

          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
