import React, { Component } from 'react';
import ListItem from './ListItem';

    
  export default function generateList(props) {
    console.log(props.tasks)
    return (
      <div>{        
            props.tasks.map((task,index)=>{            
              return( <ListItem id={task.id} task={task.task} delete={props.delete} index={index} update={props.update}></ListItem>
              )
            })
          }
       
      </div>
    )
  }


// export default ListContainer;