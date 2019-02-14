import React from 'react';

function List(props) {
  return (
      <div className="list-info">
        <h3>{props.taskList.task}</h3>
      </div>
  );
}

export default List;