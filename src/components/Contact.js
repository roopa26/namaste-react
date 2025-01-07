import React from "react";

const Contact = () => {

    return(<div>
        <h1 className="text-3xl">This is contact us page</h1>
        <form>
            <input type="input" className="p-2 m-2 border border-b-2 border-black" placeholder="Name"/>
            <input type="input" className="p-2 m-2 border border-b-2 border-black" placeholder="Message"/>
            <button className="p-2 m-4 border border-b-2 border-black bg-slate-200">Submit</button>
        </form>
        
    </div>)
}

export default Contact;