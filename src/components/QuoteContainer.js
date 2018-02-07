import React, { Component } from 'react';
import axios from 'axios'


class QuoteContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            quote:"",
            author:""
        }
    }
    componentDidMount = () => {
        axios({
            method: "GET",
            url: `http://quotes.rest/qod.json?category=inspire`
        }).then(response=>{
            console.log(response);
            console.log(this.state.toDoListItems)
            this.setState({quote: `"${response.data.contents.quotes[0].quote}"`,
                          author: `-${response.data.contents.quotes[0].author}`
                          });
        }).catch(console.log);
          
    }
    

    
  render() {
    return (
      <div className="quote-container">   
            <div className="quote">{this.state.quote}</div>
            <div className="author">{this.state.author}</div>
      </div>
    )
  }
}

export default QuoteContainer;