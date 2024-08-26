import React from "react";

export default class UserClass extends React.Component{
    constructor(props){
        console.log(props.name+" child component constructor")
        super(props);
        this.state = {
            count:0,
            count2:1
        }
    
    }

    componentDidMount(){
        console.log(this.props.name+" child component did mount")
    }

    render(){
        console.log(this.props.name+" child component render")
        const {count,count2} = this.state;
        return(
        <div className="user-card">
             <h1>{count}</h1>
             <h1>{count2}</h1>
             <button onClick = {()=>{this.setState({count : this.state.count+1,
                count2 : this.state.count2+1
             })
             }}>Increase Count</button>
             <h4>Name : {this.props.name}</h4>
             <h4>Location : {this.props.location}</h4>
             <h5>Contact : @roopashetty</h5>
        </div>     
        )
    }
}