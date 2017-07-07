import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Pagination } from 'antd';
import { FormattedMessage } from 'react-intl';

import logo from '~/assets/yay.jpg';

// class App extends Component {
function App() {
  const name = 'youcai';
  return (
    <div className="">
      <h1>this is a title</h1>
      <Button>button</Button>
      <br />
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
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
      <br />
      <br />
      <FormattedMessage
        id="intl.hello"
        defaultMessage={'hello'}
      />
      <br />
      <FormattedMessage
        id="intl.name"
        values={{ name: <b>{name}</b> }}
      />
    </div>
  );
}

export default App;
