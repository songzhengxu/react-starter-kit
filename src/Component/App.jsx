import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'antd';
//
// import logo from '~/assets/yay.jpg';

class App extends Component {
  render() {
    return (
      <div className="">
        <h1>这是个标题</h1>
        <i className="icon-shuaxin icon" />
        <br />
        <br />
        {/*
            <img src={logo} width="200" className="App-logo" alt="logo" />
          */}
        <br />
        <br />
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">TodoList</Link></li>
          <li><Link to="/like">like</Link></li>
          <li><Link to="/from">from</Link></li>
          <li><Link to="/comment">comment</Link></li>
        </ul>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
