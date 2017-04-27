import React, { Component } from 'react';

/**
 * 不用redux 的写法
 */

// class Like extends Component {
//   constructor(pops) {
//     super(pops);
//     this.state = { like: false };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({ like: !this.state.like });
//   }
//   render() {
//     const like = this.state.like ? 'like' : 'don\'t like';
//     return (
//       <div className="App">
//         <p onClick={this.handleClick}>
//           you {like} this;
//         </p>
//       </div>
//     );
//   }
// }

 /**
  * 用 redux 的写法
  *
  */

import { connect } from 'react-redux';
import { LikeAction } from '../Action/Index';


class Like extends Component {
  render() {
    const { handleClick } = this.props;
    const like = this.props.Like.like ? 'like' : 'don\'t like';
    return (
      <div className="App">
        <p onClick={handleClick}>
          you {like} this;
        </p>
      </div>
    );
  }
}

export default connect(state => ({ Like: state.Like }), LikeAction)(Like); // 连接redux
