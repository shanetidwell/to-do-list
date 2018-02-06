import React, { Component } from 'react';
import ListItem from './ListItem';

class ListContainer extends Component {
    
  render() {
    return (
      <div>{        
            this.props.tasks.map((task,index)=>{
                console.log(task);

              return( <ListItem id={task.id} task={task.task}></ListItem>
              )
            })
          }
       
      </div>
    )
  }
}

export default ListContainer;