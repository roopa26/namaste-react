import { useEffect } from "react";

const Contact = () => {
    useEffect(async ()=>{
        console.log("hello")
    },[])
    return(<div>
        This is contact us page
    </div>)
}

export default Contact;