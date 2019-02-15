import React from 'react';
import './Todo.css';
import TodoList from './TodoList';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTask} className='form'>
      <input
        className="inputClass"
        type="text"
        value={props.name}
        name="name"
        onChange={props.handleChanges}
        placeholder="Enter Task"
      />
      <div className='buttonDiv'>
      <button type="submit" className='addTaskBtn' >Add Task</button>
      <button type="button" className='clearTaskBtn' onClick={props.clearCompleted}>Clear Finish Tasks</button>
      </div>
    </form>
  );
};

export default TodoForm;