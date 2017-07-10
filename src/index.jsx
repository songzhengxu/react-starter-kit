import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// 国际化需求
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
// antd 国际化
import { LocaleProvider } from 'antd';
import antdUS from 'antd/lib/locale-provider/en_US';

import { AppContainer } from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

import App from './Config/Route'; // 路由配置
import store from './Config/Store'; // 引入Store

// 导入 i18n 配置文件

/* eslint-disable */
import zhCN from './Locale/zh';
import enUS from './Locale/en';
/* eslint-disable */

import './Style/style.less';

// 国际化
addLocaleData([...en, ...zh]);

// 订阅state改变
store.subscribe(() => {
    // console.log(store.getState());
});


const render = (Component) => {
  ReactDOM.render(
    <AppContainer locale={antdUS}>
      <LocaleProvider>
        <IntlProvider locale="en" messages={enUS}>
          <Provider store={store}>
            <Component />
          </Provider>
        </IntlProvider>
      </LocaleProvider>
    </AppContainer>, document.getElementById('root'));
};

render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./Config/Route', () => {
    render(App);
  });
}
