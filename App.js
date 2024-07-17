import React from 'react';
import ReactDOM from 'react-dom/client';

var jsxHeading = <h1 id="jxsHeading">Namaste react using jsx</h1>

var heading = React.createElement("h1",{id:"heading"},"Namaste React");

const Title = () => (<h4>Title</h4>)
const HeadingCOmponent = () =>
        ( 
        <div>
           <h1 id="fnHeading">Hello from funcitonal component 🚀</h1>
           <Title/>
        </div>
        )
//console.log(heading);
        var root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<HeadingCOmponent/>);