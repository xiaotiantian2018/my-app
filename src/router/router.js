import React from 'react';
import Home from '../container/home/';
import Form from '../container/form/';
import UserInfo from '../container/userinfo/';
import Counter from '../container/counter/';
import JumpPage from '../container/jumpPage';

import {  Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

class Router extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/userinfo" component={UserInfo} />
            <Route path="/counter" component={Counter} />
            <Route path='/jumpPage' component={JumpPage} />
            {/* 其他匹配重定向,不可放在首行 */}
            <Redirect path="*" to="/" />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default Router;
