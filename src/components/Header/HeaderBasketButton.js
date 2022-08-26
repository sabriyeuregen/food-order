import { FaShoppingBasket } from "react-icons/fa";
import CardContext from "../../store/basketcard-context";

import style from "./HeaderBasketIcon.module.css";
import { useContext } from "react";

const HeaderBasketIcon = (props) => {
  const cardCtx = useContext(CardContext);

  const numberOfCardItems = cardCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={style.icon__wrapper} onClick={props.onClick}>
      <span className={style.icon}>
        <FaShoppingBasket></FaShoppingBasket>
      </span>
      <span>Sepetim</span>
      <span className={style.badge}>{numberOfCardItems}</span>
    </button>
  );
};
export default HeaderBasketIcon;
