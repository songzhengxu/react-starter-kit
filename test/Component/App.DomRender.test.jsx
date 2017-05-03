import React from 'react';
import { expect } from 'chai';
import { BrowserRouter as Router, Route, MemoryRouter } from 'react-router-dom';
// TestUtils have been moved to react-dom/test-utils  react 15.5
import TestUtils from 'react-dom/test-utils';


import App from '../../src/Component/App'; // 导入测试组件

// you shuoldn't write MemoryRouter in a class
// if you render this component into dom, it returns null.
const RouteConfig = () => (
  <Router>
    <div className="app">
      <MemoryRouter>
        <Route path="/" component={App} />
      </MemoryRouter>
    </div>
  </Router>
);

describe('render int dom without wrapper', () => {
  it('there should be only one h1 tag', () => {
    const wrapper = TestUtils.renderIntoDocument(
      <MemoryRouter ><Route path="/" component={App} /></MemoryRouter>,
        // returns null, you shouldn't write like below.
      // <RouteConfig />,
      );
    const head = TestUtils.scryRenderedDOMComponentsWithTag(wrapper, 'h1');
    expect(head.length).to.equal(1);
  });
});

describe('render into dom with a div wrapper', () => {
  it('wrapper\'s className should be app', () => {
    const wrapper = TestUtils.renderIntoDocument(
      // Disallow passing a DOM component to findAllInRenderedTree, so that
      // you need a Router wrap the division to make it as a react elment
      <Router>
        <div className="app">
          <MemoryRouter initialEntries={['/']} initialIndex={0} >
            <Route path="/" component={App} />
          </MemoryRouter>
        </div>
      </Router>,
        // return null shouldn't write like below.
      // <RouteConfig />,
      );
    const app = TestUtils.findRenderedDOMComponentWithClass(wrapper, 'app');
    expect(app.className).to.equal('app');
  });
});

const WithoutRouter = () => (
  <div className="app">
    <MemoryRouter>
      <Route path="/" component={App} />
    </MemoryRouter>
  </div>
);

describe('render WithoutRouter', () => {
  it('wrapp is null', () => {
    // although you make WithoutRouter as a react element, i can be rendered into
    // document, but you shouldn't write <MemoryRouter> in a component
    const wrapper = TestUtils.renderIntoDocument(
      <WithoutRouter />,
      );
    expect(wrapper).to.equal(null);
  });
});
