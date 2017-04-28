import React from 'react';
import { expect } from 'chai';
import { BrowserRouter as Router, Route, MemoryRouter } from 'react-router-dom';
// TestUtils have been moved to react-dom/test-utils  react 15.5
import TestUtils from 'react-dom/test-utils';


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


describe('DOM Rendering', () => {
  it('App\'s tag should be h1', () => {
    const app = TestUtils.renderIntoDocument(<RouteConfig />);
    console.log(app);
  });
});
