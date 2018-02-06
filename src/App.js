import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListContainer from './components/ListContainer';
//import { builtinModules } from 'module';
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

  // updateToDoList = () =>{
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.quote}</h1>
          <div>{`${this.state.whoSaidIt}`}</div>
          <button onClick={()=>{this.handleChange()}}>Click Me!</button>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ListContainer tasks={this.state.toDoListItems}></ListContainer>
        
      </div>
    );
  }
}

export default App;
