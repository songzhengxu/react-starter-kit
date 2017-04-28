import React from 'react';
import { expect } from 'chai';
import { BrowserRouter as Router, Route, MemoryRouter } from 'react-router-dom';
// TestUtils have been moved to react-dom/test-utils  react 15.5
import ReactTestUtils from 'react-dom/test-utils'; // ES6


import App from '../../src/Component/App'; // 导入测试组件

const RouteConfig = () => (
  <Router>
    <div className="app">
      <MemoryRouter>
        <Route path="/" component={App} />
      </MemoryRouter>
    </div>
  </Router>
);

const Testdemo = () => (
  <div>
    <h2>首页</h2>
  </div>
);

describe('DOM Rendering', () => {
  it('App\'s tag should be h1', () => {
    // const app = ReactTestUtils.renderIntoDocument(<Testdemo />);
    // console.log(app);
    // const todoItems = TestUtils.scryRenderedDOMComponentsWithTag(app, 'div');
    // const todoLength = todoItems.length;
    // console.log(todoLength);
  });
});
