import { NavLink } from "react-router-dom";

import style from "./Navigation.module.css";

const Navigation=()=>{

    /*const isActiveMenu=(data)={
     return data.isActive ? "-active": " "
    }*/

    return(
       <nav>
        <NavLink to="/home" /*className={isActiveMenu}*/>Anasayfa</NavLink>
        <NavLink to="/products"/* className={isActiveMenu}*/>Ürünler</NavLink>
        <NavLink to="/contact" /*className={isActiveMenu}*/>İletişim</NavLink>
        <NavLink to="/aboutus" /*className={isActiveMenu}*/>Hakkımızda</NavLink>
       </nav>
    )
}
export default Navigation;