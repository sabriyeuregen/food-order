import Modal from "../Modal/Modal";
import style from "./BasketCard.module.css";
import BasketCardItem from "./BasketCardItem";

import { useContext } from "react";
import CardContext from "../../store/basketcard-context";

const BasketCard =(props)=>{
 
   const cardCtx = useContext(CardContext);

   const totalAmount = `$${cardCtx.totalAmount.toFixed(2)}`;
   const hasItems = cardCtx.items.length > 0;
 
   const cardItemRemoveHandler = (id) => {
    cardCtx.removeItem(id)
   };
 
   const cardItemAddHandler = (item) => {
    cardCtx.addItem({...item, amount:1})
   };

   const cardItems = (
      <ul className={style['cart-items']}>
        {cardCtx.items.map((item) => (
          <BasketCardItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cardItemRemoveHandler.bind(null, item.id)}
            onAdd={cardItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );
   

    return(
      <Modal onClose={props.onClose}>
          {cardItems}
         <div className={style.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
         </div>
         <div className={style.actions}>
            <button onClick={props.onClose}>Kapat</button>
            {{hasItems} && <button className={style.button}>Sipariş Ver</button>}
         </div>
        </Modal>
    )
}
export default BasketCard;