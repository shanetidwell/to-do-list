import React, { Component } from 'react';
import axios from 'axios';
const baseUrl = `http://localhost:3100`;
class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            task: this.props.task,
            showedit: false,
            delete: this.props.delete
        }
    }
    handleChange = ()=>{
        this.setState({showEdit:false})
        console.log("URL", `${baseUrl}/api/toDo/${this.state.id}`);
        console.log("task", this.state.task);
        var body = {
            task: this.state.task
        }
        console.log(this.state.task)
        console.log(`${baseUrl}/api/toDo/${this.state.id}`)
        console.log(body)
        axios({
            method: "PUT",
            url: `${baseUrl}/api/toDo/${this.state.id}`,
            data: body
        }).then((response)=>{
            console.log(this.state.id)
            console.log(11111, response);
            this.props.update()

        }).catch(console.log)
    }
    // pdatePrice( priceChange, id ) {
    //     axios ({
    //       method: "PUT",
    //       url: `${baseUrl}/vehicles/${id}/${priceChange}`
    //       //url: baseUrl + '/vehicles/' + id + '/' + priceChange
    //     }).then(response=>{
    //       this.setState({vehiclesToDisplay: response.data.vehicles});
    //       toast.success("sucess");
    //     }).catch(error=>toast.error("Error with request", error));
    //   }
      

    render(){
        return(
            <div className="to-do-item">
                <input onClick={()=>this.state.delete(this.state.id)}  className="checkbox" type="checkbox" name="item" value="yes" checked={false}></input>
                {this.state.showEdit ? (
                    <input placeholder={this.props.task} onChange={(e)=>this.setState({task:e.target.value})} />
                ) : (
                <div className>{this.props.task}</div>
                )}
                {!this.state.showEdit ?(
                <button onClick={() => this.setState({ showEdit: true })}> Edit </button>
                ):(
                    <button onClick={()=>this.handleChange()}>submit</button>
                )
                }
                {/* <button onClick={()=>this.state.delete(this.state.id)}>finish</button> */}
            </div>
        )

    }
}
export default ListItem