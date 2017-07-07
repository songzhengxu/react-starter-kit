import React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  const { TodoList, handleAdd, handleRemove } = props;
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

Main.propTypes = {
  TodoList: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Main;
