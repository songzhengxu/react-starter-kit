import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import TodoListWithContainer from '../../src/Component/TodoList';
import Reducer from '../../src/Reducer/Index';

const TodoList = Reducer.TodoList;

// 创建一个测试用的时候的store必须在创建的时候必须用combineReducers包裹一层，否则默认的state无法引导到测试组件的props。
const store = createStore(combineReducers({ TodoList }));
const provider = (<Provider store={store}>
  <TodoListWithContainer />
</Provider>);

// 这个测试用的是react官方的测试组件
describe('render into document with store and use react test util', () => {
  it('can i render into document', () => {
    // react 自带测试套件
    const app = ReactTestUtils.renderIntoDocument(provider);
    const divisions = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'div');
    expect(divisions.length).to.equal(5);
  });
});

// 这个测试用的是enzyme的测试组件
describe('render into document with store and use enzyme', () => {
  it('can i render into document??', () => {
    // enzyme测试组件
    const wrapper = mount(provider);
    expect(wrapper.find('.App')).to.have.length(1);
  });
});
