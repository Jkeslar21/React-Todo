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
      };
  }
//////////////////////////////////////////////////  
  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTask],
      name: '',
    });
  };
//////////////////////////////////////////////////
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
///////////////////////////////////////////////////
  toggleTask = taskID => {
    console.log(taskID)
    this.setState({
      list: this.state.list.map(task => {
        if (taskID === task.id) {
          return {...task, completed: !task.completed}
        }
        return task;
      })
    })
  }
////////////////////////////////////////////////////
clearCompleted = e => {
  this.setState({
    list: this.state.list.filter(task => !task.completed)
  });
};
//////////////////////////////////////////////////

/////////////////////////////////////////////////
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Task List:</h1>
        <div className="todo-list">
          {this.state.list.map(i => (
            <List key={i.id} task={i} toggleTask={this.toggleTask} />
          ))}
        </div>
        <TodoForm
          addTask={this.addTask}
          list={this.state.list}
          handleChanges={this.handleChanges}
          id={this.state.id}
          name={this.state.name}
          completed={this.state.completed}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default TodoList;