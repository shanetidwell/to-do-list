import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            task: this.props.task
        }
    }
    render(){
        return(
            <div className="toDoItem">
                {/* <input input="checkbox" ></input> */}
                <div>{this.state.task}</div>
            </div>
        )

    }
}
export default ListItem