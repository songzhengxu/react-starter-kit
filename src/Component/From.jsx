import React, { Component } from 'react';
import '../Style/style.less';

class From extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'hello' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    // 思考 使用Redux的核心 就是组件不直接修改 state。是否可以在这里，进行发送 dispatch(action)
  }
  render() {
    const value = this.state.value;
    return (
      <div className="App">
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
}

export default From;
