/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// bundle模型用来异步加载组件
import Bundle from '../Bundle';
// 导入各种组件
// // 同步加载
import Home from '../Component/App'; // 首页组件
import NotFoundPage from '../Component/NotFoundPage'; // NotFoundPage

// 异步加载
import loadFrom from 'bundle-loader?lazy!../Component/From'; // 表单组件
import loadComment from 'bundle-loader?lazy!../Component/Comment'; // 评论组件
import loadLike from 'bundle-loader?lazy!../Containers/LikeContainer'; // 状态 Like组件
import loadTodoList from 'bundle-loader?lazy!../Containers/TodoListContainer'; // TodoList组件
import loadIntl from 'bundle-loader?lazy!../Component/Intl';
// components load their module for initial visit
// //这里只是给this.props.child传一个方法，最后在Bundle的render里面调用
const From = props => (
  <Bundle load={loadFrom}>
    {From => <From {...props} />}
  </Bundle>
);
const Comment = props => (
  <Bundle load={loadComment}>
    {Comment => <Comment {...props} />}
  </Bundle>
);
const Like = props => (
  <Bundle load={loadLike}>
    {Like => <Like {...props} />}
  </Bundle>
);

const TodoList = props => (
  <Bundle load={loadTodoList}>
    {TodoList => <TodoList {...props} />}
  </Bundle>
);
const Intl = props => (
  <Bundle load={loadIntl}>
    {Intl => <Intl {...props} />}
  </Bundle>
);


// 路由配置
const RouteConfig = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/from" component={From} />
        <Route path="/comment" component={Comment} />
        <Route path="/like" component={Like} />
        <Route path="/intl" component={Intl} />
        <Route path="/list" component={TodoList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

// 导出
export default RouteConfig;
