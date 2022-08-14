import {FaShoppingBasket} from "react-icons/fa";

import style from "./HeaderBasketIcon.module.css";

const HeaderBasketIcon =()=>{

    return(
        <div className={style.icon__wrapper}>
         <span className={style.icon}>
            <FaShoppingBasket></FaShoppingBasket>
         </span>
         <span>Sepetim</span>
         <span className={style.badge}></span>
        </div>
    )
}
export default HeaderBasketIcon;