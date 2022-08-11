import { NavLink } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

import  "./Header.css";
import logo from "../../assets/logo.jpg";

const Header=()=>{

 
  const title="GOOD FOOD RESTAURANT";



    return(
        <div className="header">
            <div className="logo"><img src={logo} alt="Logo"/></div>
            <div className="title">{title}</div>
          
          <nav className="navigation">
          <NavLink to="/home" /*className={isActiveMenu}*/>Anasayfa</NavLink>
          <NavLink to="/products"/* className={isActiveMenu}*/>Ürünler</NavLink>
          <NavLink to="/contact" /*className={isActiveMenu}*/>İletişim</NavLink>
          <NavLink to="/aboutus" /*className={isActiveMenu}*/>Hakkımızda</NavLink>
           </nav>
           <div className="basket"><FaShoppingBasket/><h3>Sepetim</h3></div>
    
          </div>
        
    )
}
export default Header;