import {FaShoppingBasket} from "react-icons/fa";

import  "./Header.css";
import logo from "../../assets/logo.jpg";

const Header=()=>{

 
  const title="GOOD FOOD RESTAURANT";

 
  

    return(
        <div className="header">
            <div className="header__logo"><img src={logo} alt="Logo"/></div>
            <div className="header__title">{title}</div>
            
           <div className="basket"><FaShoppingBasket></FaShoppingBasket></div>
          
          </div>
        
    )
}
export default Header;