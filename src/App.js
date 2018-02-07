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
      toDoListItems: [{
        task: "Clean the bathroom",
        id: 0
        },
        {
          task: "Homework",
          id: 1          
        },
        {
          task: "Feed the Dog",
          id: 2
        }
      ]
    }
  }
 
    

  //updateToDoList = () =>{
  //   axios.get(`${baseUrl}/api/toDo`).then((response)=>{
  //     this.setState({toDoList: response})
  //     console.log(response);
  //     this.state.toDoList.map((task, index)=>{
  //       return(
  //         <ListItem id={task.id} task={task.task}/>
  //       ) 
  //     })
  //   }).catch(console.log);
  // }
  // updateToDoList = ()=>{
  //   this.state.toDoListItems.map((task, index)=>{
  //     console.log(task.id);
  //     return(
  //       <ListItem id={task.id} task={task.task}></ListItem>
  //     )
  //   })
  // }
  
  addTask = ()=>{
    let newTask = {
      task: this.state.newTask
    };
    axios ({
      method: "POST",
      url: baseUrl + '/api/toDo',
      data: newTask
    }).then(response=>{
      this.setState({toDoListItems: response});
    }).catch(console.log)
  }
  handleChange = (value)=>{
    this.setState({newTask:value})

  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">{this.state.quote}</h1> */}
          {/* <div>{`${this.state.whoSaidIt}`}</div> */}
          <QuoteContainer/>
          {/* <button onClick={()=>{this.handleChange()}}>Click Me!</button> */}
        </header>
        <div className="content">
          <div className="list-container">
          <ListContainer tasks={this.state.toDoListItems}></ListContainer>
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
