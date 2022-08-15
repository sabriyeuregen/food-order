import {FaShoppingBasket} from "react-icons/fa";

import style from "./HeaderBasketIcon.module.css";

const HeaderBasketIcon =(props)=>{

    return(
        <button className={style.icon__wrapper} onClick={props.onClick}>
         <span className={style.icon}>
            <FaShoppingBasket></FaShoppingBasket>
         </span>
         <span>Sepetim</span>
         <span className={style.badge}></span>
        </button>
    )
}
export default HeaderBasketIcon;