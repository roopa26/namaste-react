import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
      return (<div className="header">
                <div className='logo'>
                        <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="logo"/>
                </div>
                <div className='nav-items'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                </div>
        </div>)

}

const AppLayout = () =>{
       return(<div className='app'>
                <Header/>
        </div>)
}

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);