import { Component } from 'react';
import PropTypes from 'prop-types';

class Bundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null,
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { load } = this.props;
    if (nextProps.load !== load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null,
    });
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod,
      });
    });
  }

  render() {
    const { mod } = this.state;
    const { children } = this.props;
    return mod ? children(mod) : null;
  }
}

Bundle.propTypes = {
  load: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Bundle;
