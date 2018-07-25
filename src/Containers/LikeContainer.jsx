import React from 'react';
import { connect } from 'react-redux';

import { LikeAction } from '../Action/Index';
import Like from '../Component/Like';

function Main(props) {
  return <Like {...props} />;
}

export default connect(state => ({ like: state.Like }), LikeAction)(Main); // 连接redux
