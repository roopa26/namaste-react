import { LOGO_URL } from "../../utils/constants";

const Header = () => {
    return (<div className="header">
              <div className='logo'>
                      <img src={LOGO_URL} alt="logo"/>
              </div>
              <div className='nav-items'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact Us</li>
                      <li>Cart</li>
              </div>
      </div>)

}

export default Header;