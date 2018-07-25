import React, { Component } from 'react';

class From extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'hello' };
  }

  handleChange =(event) => {
    // 思考 使用Redux的核心 就是组件不直接修改 state。是否可以在这里，进行发送 dispatch(action)
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <input type="text" value={value} onChange={this.handleChange} />
        <p>
          {value}
        </p>
      </div>
    );
  }
}

export default From;
