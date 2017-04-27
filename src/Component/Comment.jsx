import React, { Component } from 'react';
import '../Style/style.less';

const data222 = [
  { author: 'Pete Hunt', text: 'This is one comment' },
  { author: 'Jordan Walke', text: 'This is *another* comment' },
];


class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h2>{this.props.author}</h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class CommentList extends Component {
  render() {
    const commentNodes = this.props.data.map((comment, index) => (
      <Comment key={index} author={comment.author}> {comment.text} </Comment>
      ));
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}


class CommentFrom extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
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
  }
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
