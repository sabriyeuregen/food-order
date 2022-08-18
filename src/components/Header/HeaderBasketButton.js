import {FaShoppingBasket} from "react-icons/fa";
import style from "./HeaderBasketIcon.module.css";
import { useBasket } from "../store/BasketContext";

const HeaderBasketIcon =(props)=>{

    const {items} =useBasket();

     const basketAmount = items.length

    return(
        <button className={style.icon__wrapper} onClick={props.onClick}>
         <span className={style.icon}>
            <FaShoppingBasket></FaShoppingBasket>
         </span>
         <span>Sepetim</span>
         <span className={style.badge}>{basketAmount}</span>
        </button>
    )
}
export default HeaderBasketIcon;