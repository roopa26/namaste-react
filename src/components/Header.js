import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
        const [btnNameReact,setBtnNameReact] = useState("Login")
    return (<div className="header">
              <div className='logo'>
                      <img src={LOGO_URL} alt="logo"/>
              </div>
              <div className='nav-items'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact Us</li>
                      <li>Cart</li>
                      <button onClick={()=>{btnNameReact == "Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}}>{btnNameReact}</button>
              </div>
      </div>)

}

export default Header;