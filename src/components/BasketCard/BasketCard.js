import Modal from "../Modal/Modal";
import style from "./BasketCard.module.css";


const BasketCard =(props)=>{
 
     const cardItems=[]


    return(
      <Modal onClose={props.onClose}>
          {cardItems}
         <div className={style.total}>
            <span>Total Amount</span>
         </div>
         <div className={style.actions}>
            <button onClick={props.onClose}>Kapat</button>
            <button className={style.button}>Sipariş Ver</button>
         </div>
        </Modal>
    )
}
export default BasketCard;