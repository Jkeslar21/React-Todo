import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTask} className='form'>
      <input
        type="text"
        value={props.task}
        name="task"
        onChange={props.handleChanges}
        placeholder="Enter Task"
      />
      <div className='buttonDiv'>
      <button type="submit">Add Task</button>
      <button type="button">Clear Finish Tasks</button>
      </div>
    </form>
  );
};

export default TodoForm;