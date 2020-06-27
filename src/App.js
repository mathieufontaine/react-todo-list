import React from 'react';
import './Style/App.css';
import ListTasks from './Components/ListTasks.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import logo192 from './logo192.png';

library.add(faTrash);

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      newTask: '',
      taskList: ['Check Emails', 'Pay the bills', 'Book an hotel for the weekend']
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleChange (event){
    this.setState({newTask: event.currentTarget.value});
  }

  addTask(event){
    event.preventDefault();
    const task = this.state.newTask;
    // console.log(task);
    if (task !== ''){
      const tasks = [...this.state.taskList, task];
      // console.log(tasks);
      this.setState({taskList: tasks});
          console.log(this.state.taskList);
    }
  }

  deleteTask(removedTask){
    const filteredList = this.state.taskList.filter(task => task != removedTask)
    this.setState({taskList: filteredList});
  }

  setUpdate(text){
    const updatedList = this.state.taskList.map(item =>{
      if(item == text){
        item = text;
      }
    });
    this.setState({taskList: updatedList});
  }

  render(){
  return (
    <div className="App">
      <h1>To-Do List App</h1>
        <form className="add-task-form" onSubmit={this.addTask}>
          <input type="text" placeholder="Enter a task here" value={this.state.newTask} onChange={this.handleChange}/>
          <button type="submit">Add</button>
        </form>
      <div className="list">
        <ListTasks tasks={this.state.taskList} deleteTask = {this.deleteTask} setUpdate = {this.setUpdate}/>
        <footer>
          <p>Built by Mathieu Fontaine - with React</p>
          <img src={logo192} alt={'react logo'}/>
        </footer>
      </div>  
    </div>
  );
  }
}

export default App;
