import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header=()=>{

  const logo=<img src="logo.png" alt="logo"/>
  const title="GOOD FOOD RESTAURANT";



    return(
        <div className={style.header}>
            <div className={style.logo}>{logo}</div>
            <div className={style.title}>{title}</div>
          
          <nav>
          <NavLink to="/home" /*className={isActiveMenu}*/>Anasayfa</NavLink>
          <NavLink to="/products"/* className={isActiveMenu}*/>Ürünler</NavLink>
          <NavLink to="/contact" /*className={isActiveMenu}*/>İletişim</NavLink>
          <NavLink to="/aboutus" /*className={isActiveMenu}*/>Hakkımızda</NavLink>
           </nav>
    
          </div>
        
    )
}
export default Header;