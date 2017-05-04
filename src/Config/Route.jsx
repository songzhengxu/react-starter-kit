import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 导入各种组件
import Home from '../Component/App'; // 首页组件
import From from '../Component/From'; // 表单组件
import Comment from '../Component/Comment'; // 评论组件
import Like from '../Component/Like'; // 状态 Like组件
import TodoList from '../Component/TodoList'; // TodoList组件
import NotFoundPage from '../Component/NotFoundPage'; // NotFoundPage


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
