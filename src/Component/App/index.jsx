import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Pagination, Cascader } from 'antd';

import style from './index.less';

/* eslint-disable */
import logo from '~/assets/yay.jpg';
/* eslint-disable */

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

// class App extends Component {
function App() {
  const name = 'youcai';
  return (
    <div className={style.app}>
      <h1>this is a title</h1>
      <Button>button</Button>
      <br />
      <Cascader options={options}   onChange={onChange} placeholder="Please select" />
      <br />
      <img src={logo} width="200" className="App-logo" alt="logo" />
      <br />
      <br />
      <ul>
        <li><Link to="/">index</Link></li>
        <li><Link to="/list">TodoList</Link></li>
        <li><Link to="/like">like</Link></li>
        <li><Link to="/from">from</Link></li>
        <li><Link to="/comment">comment</Link></li>
        <li><Link to="/intl">intl</Link></li>
      </ul>
      <br />
      <Pagination defaultCurrent={1}  total={50} showSizeChanger />
      <br />
      <br />

  </div>
  );
}

export default App;
