import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import { Provider } from 'react-redux';

import App from './Config/Route'; // 路由配置
import store from './Config/Store'; // 引入Store

// eslint-disable-next-line
console.log(`当前环境为:${process.env.NODE_ENV}`);

// 订阅state改变
store.subscribe(() => {
  // console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
