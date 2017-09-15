import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// bundle模型用来异步加载组件
import Bundle from '../Bundle';

// 导入各种组件
// // 同步加载
import Home from '../Component/App'; // 首页组件
import NotFoundPage from '../Component/NotFoundPage'; // NotFoundPage

// 异步加载
/*eslint-disable*/
import loadFrom from 'bundle-loader?lazy!../Component/From'; // 表单组件
import loadComment from 'bundle-loader?lazy!../Component/Comment'; // 评论组件
import loadLike from 'bundle-loader?lazy!../Containers/LikeContainer'; // 状态 Like组件
import loadTodoList from 'bundle-loader?lazy!../Containers/TodoListContainer'; // TodoList组件
/* eslint-enable */

// components load their module for initial visit
// //这里只是给this.props.child传一个方法，最后在Bundle的render里面调用
const createComponent = component => props => (
  <Bundle load={component}>
    {Component => <Component {...props} />}
  </Bundle>
);

// 路由配置
const RouteConfig = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/from" component={createComponent(loadFrom)} />
        <Route path="/comment" component={createComponent(loadComment)} />
        <Route path="/like" component={createComponent(loadLike)} />
        <Route path="/list" component={createComponent(loadTodoList)} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

// 导出
export default RouteConfig;
