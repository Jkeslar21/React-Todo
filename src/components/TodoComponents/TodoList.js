// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import List from './Todo';
import TodoForm from './TodoForm'; 
import './Todo.css';

const list = [];

  class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
        list: list,
        name: '',
        id: Date.now(),
        completed: false
      };
  }
//////////////////////////////////////////////////  
  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed,
    };

    this.setState({
      list: [...this.state.list, newTask],
      task: '',
      id: '',
      completed: ''
    });
  };
//////////////////////////////////////////////////
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
//////////////////////////////////////////////////
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Task List:</h1>
        <div className="todo-list">
          {this.state.list.map(i => (
            <List key={i.id} taskList={i} />
          ))}
        </div>
        <TodoForm
          addTask={this.addTask}
          list={this.state.list}
          handleChanges={this.handleChanges}
          id={this.state.id}
          completed={this.state.completed}
        />
      </div>
    );
  }
}

export default TodoList;
