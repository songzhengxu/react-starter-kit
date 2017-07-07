import { style as _style } from 'antd/lib/locale-provider/style';
import _default from 'antd/lib/locale-provider';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// 国际化需求
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
// antd 国际化

import antdUS from 'antd/lib/locale-provider/en_US';

import { AppContainer } from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

import App from './Config/Route'; // 路由配置
import store from './Config/Store'; // 引入Store

// 导入 i18n 配置文件
import zhCN from './locale/zh';
import enUS from './locale/en';

// 国际化
addLocaleData([].concat(_toConsumableArray(en), _toConsumableArray(zh)));

// 订阅state改变
store.subscribe(function () {
  // console.log(store.getState());
});

var render = function render(Component) {
  ReactDOM.render(React.createElement(
    AppContainer,
    { locale: antdUS },
    React.createElement(
      _default,
      null,
      React.createElement(
        IntlProvider,
        { locale: 'en', messages: enUS },
        React.createElement(
          Provider,
          { store: store },
          React.createElement(Component, null)
        )
      )
    )
  ), document.getElementById('root'));
};

render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./Config/Route', function () {
    render(App);
  });
}
//# sourceMappingURL=E:\study\react-starter-kit\src\index.js.map