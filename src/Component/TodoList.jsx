import React, { Component } from 'react';


/**
 * todolist  不用Redux的写法
 */

// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: ['hello', 'world', 'click', 'me'] };
//     this.handleAdd = this.handleAdd.bind(this);
//   }
//   handleRemove(i) {
//     const newItems = this.state.items;
//     newItems.splice(i, 1);
//     this.setState({ items: newItems });
//   }
//   handleAdd() {
//     const newItems =
//      this.state.items.concat([prompt('Enter some text')]);
//     this.setState({ items: newItems });
//   }
//   render() {
//     const items = this.state.items.map((item, i) => (
//       <div key={item} onClick={this.handleRemove.bind(this, i)} >
//         {item}
//       </div>
//       ));
//     return (
//       <div className="App">
//         <button onClick={this.handleAdd}>Add Item</button>
//         {items}
//       </div>
//     );
//   }
// }

import { connect } from 'react-redux';
import { TodoListAction } from '../Action/Index';
//
class Main extends Component {
  render() {
    const { TodoList, handleAdd, handleRemove } = this.props;
    const items = TodoList.items.map((item, i) => (
      <div key={item} onClick={() => handleRemove(i)} >
        {item}
      </div>
      ));
    return (
      <div className="App">
        <button onClick={handleAdd}>Add Item</button>
        {items}
      </div>
    );
  }
}

// // 定义action
// const Add = { type: 'Add' };
// function Remove(i) {
//   return {
//     type: 'Remove',
//     index: i,
//   };
// }
//
//
// function mapDispatchToProps(dispatch) {
//   return {
//     handleAdd: () => dispatch(Add),
//     handleRemove: i => dispatch(Remove(i)),
//   };
// }

// // 返回ui组件的属性，和state的对照关系
// function mapStateToProps(state) {
//   return {
//     values: state.items,
//   };
// }
// // 定义 mapDispatchToProps 返回事件 和要发送的action
// function mapDispatchToProps(dispatch) {
//   return {
//     onHandleAdd: () => dispatch(Add),
//   };
// }
// // 连接组件 connect
// const TodoListMian = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TodoList);

// export default TodoListMian;
//
//
export default connect(state => ({ TodoList: state.TodoList }), TodoListAction)(Main); // 连接redux
