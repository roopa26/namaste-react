import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/UserContext";

const Header = () => {
        const {loggedInUser} = useContext(userContext)
        console.log(loggedInUser);
        const onlineStatus = useOnlineStatus();
        const [btnNameReact,setBtnNameReact] = useState("Login")
    return (<div className="flex justify-between p-4 items-center my-4 border-2 shadow-lg">
              <div className='w-20'>
                      <img src={LOGO_URL} alt="logo"/>
              </div>
              <div className='flex list-none'>
                      <li className="p-4">online Status:{onlineStatus == true? "✅":"🔴"}</li>
                      <li className="p-4"><Link to="/">Home</Link></li>
                      <li className="p-4"><Link to="/about">About</Link></li>
                      <li className="p-4"><Link to="/contact">Contact Us</Link></li>
                      <li className="p-4"><Link to="/cart">Cart</Link></li>
                      <button onClick={()=>{btnNameReact == "Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}}>{btnNameReact}</button>
                      <li className="font-bold text-lg p-4" >{loggedInUser}</li>
              </div>
      </div>)

}

export default Header;