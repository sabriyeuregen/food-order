import HeaderBasketButton from "./HeaderBasketButton";
import  style from "./Header.module.css";
import logo from "../../assets/logo.jpg";

const Header = (props) => {

 
  const title="Happy Fast Food";

 
  

    return(
        <div className={style.header}>
            <div className={style.header__logo}><img src={logo} alt="Logo"/></div>
            <div className={style.header__title}>{title}</div>
            
           <HeaderBasketButton onClick={props.onShowCard}/>
          
          </div>
        
    )
}
export default Header;