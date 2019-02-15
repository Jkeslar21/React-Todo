import React from 'react';
import TodoList from './TodoList';
import './Todo.css';

function List(props) {
  return (
      <div className={`list-info${props.task.completed ? ' completed' : ''}`} onClick={() => props.toggleTask(props.task.id)}>
        <div className="check">
        <input type="checkbox" />
        { ' ' }
        <h3>{props.task.task}</h3>
        </div>
      </div>
  );
}

export default List;