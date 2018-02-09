import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListContainer from './components/ListContainer';
import ListItem from './components/ListItem';
import QuoteContainer from './components/QuoteContainer'
const baseUrl = 'http://localhost:3100';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTask: '',
      quote: '',
      whoSaidIt: '',
      toDoListItems: []
    }
  }
 
    


  componentDidMount = ()=>{
    axios.get(`${baseUrl}/api/toDo`).then((response)=>{
        this.setState({toDoListItems: response.data})
    }).catch(console.log)
  }

  deleteTask = (id)=>{
    axios({
      method: "Delete",
      url:`${baseUrl}/api/toDo/${id}`
    }).then((response)=>{
      this.setState({toDoListItems: response.data});
    }).catch(console.log)
  }
  
  
  addTask = ()=>{
    let newTask = {
      task: this.state.newTask
    };
    console.log(newTask);
    axios ({
      method: "POST",
      url: baseUrl + '/api/toDo',
      data: newTask
    }).then(response=>{
      this.setState({toDoListItems: response.data});
    }).catch(console.log)
  }
  handleChange = (value)=>{
    this.setState({newTask:value})

  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>To Do List</h1>
          {/* <h1 className="App-title">{this.state.quote}</h1> */}
          {/* <div>{`${this.state.whoSaidIt}`}</div> */}
          <QuoteContainer/>
          {/* <button onClick={()=>{this.handleChange()}}>Click Me!</button> */}
        </header>
        <div className="content">
          <div className="list-container">
          <ListContainer tasks={this.state.toDoListItems} delete={this.deleteTask}></ListContainer>
          </div>
          <div className="new-task-container">
            <input type="text" onChange={(e)=>this.handleChange(e.target.value)} placeholder="New To Do Item"></input>
            <button onClick={()=>this.addTask()}>Add</button>
          </div> 
        </div>
        
        
      </div>
    );
  }
}

export default App;
