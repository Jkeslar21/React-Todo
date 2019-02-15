import React from 'react';
import TodoList from './TodoList';
import './Todo.css';

function List(props) {
  return (
      <div className={`list-info${props.task.completed ? ' completed' : ''}`}>
        <div className="check" >
          <div className="left">
            <input type="checkbox" onClick={() => props.toggleTask(props.task.id)} style={{cursor: 'crosshair'}} />
            { ' ' }
            <h3 className='taskValue'>{props.task.task}</h3>
          </div>
          <div className="right">
            <button className='rmBtn'>x</button>
          </div>
        </div>
      </div>
  );
}

export default List;