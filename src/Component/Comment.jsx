/* eslint-disable */

// 语法验证忽略当前文件，这文件故意留了两个语法错误，开发中请删除这三行
// 语法验证报错，会导致打包失败和热更新失败，所以我打包时先注释掉
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const data222 = [
  { author: 'Pete Hunt', text: 'This is one comment' },
  { author: 'Jordan Walke', text: 'This is *another* comment' },
];

function Comment(props) {
  return (
    <div className="comment">
      <h2>{props.author}</h2>
      <p>{props.text}</p>
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function CommentList(props) {
  const commentNodes = props.data.map((comment, index) => (
    <Comment key={index} author={comment.author} text={comment.text} />
      ));
  return (
    <div className="commentList">
      {commentNodes}
    </div>
  );
}

CommentList.propTypes = {
  data: PropTypes.array.isRequired,
};

class CommentFrom extends Component {
  handleSubmit =(e) => {
    e.preventDefault();
    const author = this.author.value;
    const text = this.text.value;
    if (!text || !author) {
      return;
    }

    // TODO: send request to the server
    this.props.onCommentSubmit({ author, text });
    this.author.value = '';
    this.text.value = '';
  };

  render() {
    return (
      <div className="commentForm">
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your name" ref={c => (this.author = c)} />
          <input type="text" placeholder="Say something..." ref={c => (this.text = c)} />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

CommentFrom.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: data222 });
    }, 3000);
  }

  handleCommentSubmit(comment) {
    setTimeout(() => {
      data222.push(comment);
      this.setState({ data: data222 });
    }, 1000);
  }

  render() {
    return (
      <div className="commentBox">
        <h1> Comment </h1>
        <CommentList data={this.state.data} />
        <CommentFrom onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox;
