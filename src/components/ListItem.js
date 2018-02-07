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
            <div className="to-do-item">
                <input className="checkbox" type="checkbox" name="item" value="yes"></input>
                <div className>{this.state.task}{console.log(this.state.task)}</div>
            </div>
        )

    }
}
export default ListItem