import React from 'react';
import TodoList from './TodoList';

function List(props) {
  return (
      <div className={`list-info${props.task.completed ? ' completed' : ''}`} onClick={() => props.toggleTask(props.task.id)}>
        <h3>{props.task.task}</h3>
      </div>
  );
}

export default List;