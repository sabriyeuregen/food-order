import { NavLink } from "react-router-dom";

import "./Navigation.css";
const Navigation=()=>{

    const isActiveMenu = (data) => {
        return data.isActive ? "-active" : ""
   
     }

    return(
    <div>
       <nav >
          <NavLink to="/home" className={isActiveMenu}>Anasayfa</NavLink>
          <NavLink to="/products" className={isActiveMenu}>Ürünler</NavLink>
          <NavLink to="/contact" className={isActiveMenu}>İletişim</NavLink>
          <NavLink to="/aboutus" className={isActiveMenu}>Hakkımızda</NavLink>
       </nav>

    </div>
    )
}
export default Navigation;