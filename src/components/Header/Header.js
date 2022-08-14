import HeaderBasketIcon from "./HeaderBasketIcon";
import  style from "./Header.module.css";
import logo from "../../assets/logo.jpg";

const Header=()=>{

 
  const title="GOOD FOOD RESTAURANT";

 
  

    return(
        <div className={style.header}>
            <div className={style.header__logo}><img src={logo} alt="Logo"/></div>
            <div className={style.header__title}>{title}</div>
            
           <HeaderBasketIcon></HeaderBasketIcon>
          
          </div>
        
    )
}
export default Header;