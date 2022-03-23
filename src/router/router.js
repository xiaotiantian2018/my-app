import React from 'react';
import Home from '../container/home/';
import Form from '../container/form/';
import UserInfo from '../container/userinfo/';
import Counter from '../container/counter/';

import {
  BrowserRouter, // 路由使用 history模式
  Routes,
  Route
} from 'react-router-dom';

class Router extends React.Component {
  render() {
    return (
      <div className="Router">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='form' element={<Form />} />
            <Route path='userinfo' element={<UserInfo />} />
            <Route path='counter' element={<Counter />} />

            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
