import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListContainer from './components/ListContainer';
import ListItem from './components/ListItem';
const baseUrl = 'http://localhost:3100';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
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
  handleChange = ()=>{
    axios({
      method: "GET",
      url: `http://quotes.rest/qod.json?category=inspire`
    }).then(response=>{
      console.log(response);
      console.log(this.state.toDoListItems)
      this.setState({quote: `"${response.data.contents.quotes[0].quote}"`,
                    whoSaidIt: `-${response.data.contents.quotes[0].author}`
                    });
    }).catch(console.log);
    
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.quote}</h1>
          <div>{`${this.state.whoSaidIt}`}</div>
          <button onClick={()=>{this.handleChange()}}>Click Me!</button>
        </header>
        <div className="list-container">
        <ListContainer tasks={this.state.toDoListItems}></ListContainer>
        </div>
        
        
      </div>
    );
  }
}

export default App;
