import React from 'react';
import { expect } from 'chai';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import App from '../../src/Component/App'; // 导入测试组件

function shallowRender(Component) {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Component />);
  return renderer.getRenderOutput();
}


describe('Shallow Rendering', () => {
  it('App\'s tag should be h1', () => {
    const app = shallowRender(App);
    expect(app.props.children[0].type).to.equal('h1');
  });
});
