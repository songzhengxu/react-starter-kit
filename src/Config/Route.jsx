/* eslint-disable */
// 语法验证忽略当前文件，这文件故意留了两个语法错误，开发中请删除这三行
// 语法验证报错，会导致打包失败和热更新失败，所以我打包时先注释掉
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



// 路由配置
const RouteConfig = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/from" component={From} />
        <Route path="/comment" component={Comment} />
        <Route path="/like" component={Like} />
        <Route path="/list" component={TodoList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

// 导出
export default RouteConfig;
