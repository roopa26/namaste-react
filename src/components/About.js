import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(<div>
        <h3>This is about the food app created when learning React Web Series.</h3>
        <User name={"Roopa"} location={"Namma Kudla"}/>
    </div>)
}

// export default About;

// class About extends React.Component{
//     constructor(props){
//         super(props)
//         console.log("parent component constructor")
//     }

//     componentDidMount(){
//         console.log("parent component did mount")
//     }

//     render(){
//         console.log("parent component render")
//         return(<div>
//                 <h3>This is about the food app created when learning React Web Series.</h3>
//                 <User name={"Roopa"} location={"Namma Kudla"}/>
//                 <UserClass name={"Roopa"} location={"Namma Kudla"}/>
//                 <UserClass name={"Roopa1"} location={"Namma Kudla"}/>
//                </div>)
//     }
// }

export default About