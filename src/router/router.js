import React from 'react';
import Home from '../container/home/';
import Form from '../container/form/';
import UserInfo from '../container/userinfo/';
import Counter from '../container/counter/';
import JumpPage from '../container/jumpPage/';
import Jsx from '../container/jsx/';
import StateDidMount from '../container/stateComponentDidMount';
import AxiosStudy from '../container/axiosStudy';

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
            <Route path='/jsx' component={Jsx} />
            <Route path='/stateDidMount' component={StateDidMount} />
            <Route path='/axiosStudy' component={AxiosStudy} />
            
            {/* 其他匹配重定向,不可放在首行 */}
            <Redirect path="*" to="/" />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default Router;
