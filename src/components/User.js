import { useState } from "react"

export default User = ({name,location}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    
    return(<div className="user-card">
        <h4>Name : {name}</h4>
        <h4>Location : {location}</h4>
        <h5>Contact : @roopashetty</h5>
    </div>)
}