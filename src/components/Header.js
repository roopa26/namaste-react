import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
        const [btnNameReact,setBtnNameReact] = useState("Login")
    return (<div className="header">
              <div className='logo'>
                      <img src={LOGO_URL} alt="logo"/>
              </div>
              <div className='nav-items'>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                      <li><Link to="/cart">Cart</Link></li>
                      <button onClick={()=>{btnNameReact == "Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}}>{btnNameReact}</button>
              </div>
      </div>)

}

export default Header;