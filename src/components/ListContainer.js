import React, { Component } from 'react';
import ListItem from './ListItem';

class ListContainer extends Component {
    
  render() {
    return (
      <div>{        
            this.props.tasks.map((task,index)=>{
                console.log(999, task);
            
              return( <ListItem id={task.id} task={task.task} delete={this.props.delete}></ListItem>
              )
            })
          }
       
      </div>
    )
  }
}

export default ListContainer;