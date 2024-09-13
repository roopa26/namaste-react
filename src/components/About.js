import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { useContext } from "react";
import userContext from "../utils/UserContext";

// const About = () => {
//     return(<div>
//         <h3>This is about the food app created when learning React Web Series.</h3>
//         <User name={"Roopa"} location={"Namma Kudla"}/>
//     </div>)
// }

// export default About;

class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("parent component constructor")
        this.state = {userInfo:{
            name:'rrai',
            location:'k'
        }}
    }

    async componentDidMount(){
        //console.log("parent component did mount")
        const apiRes = await fetch("https://api.github.com/users/roopa26");
        const user = await apiRes.json();
        this.setState({userInfo:user})
        //console.log(user)
    }

    render(){
        //console.log(this.state.userInfo)
        return(<div>
                <h3>This is about the food app created when learning React Web Series.</h3>
                {/* <User name={"Roopa"} location={"Namma Kudla"}/> */}
                <UserClass userInfo={this.state.userInfo}/>
                <userContext.Consumer>
                    {(userInfo)=><h1 className="font-bold text-xl">{userInfo.loggedInUser}</h1>}
                </userContext.Consumer>
                
               </div>)
    }
}

export default About