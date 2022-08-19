import { NavLink } from "react-router-dom";

import style from "./Navigation.module.css";
const Navigation=()=>{

    const isActiveMenu = (data) => {
        return data.isActive ? "-active" : ""
   
     }

    return(
    <div className={style.navbar}>
       <nav >
          <NavLink to="/" className={isActiveMenu}>Anasayfa</NavLink>
          <NavLink to="/products" className={isActiveMenu}>Ürünler</NavLink>
          <NavLink to="/contact" className={isActiveMenu}>İletişim</NavLink>
       </nav>

    </div>
    )
}
export default Navigation;