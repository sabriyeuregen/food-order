import Modal from "../Modal/Modal";
import style from "./BasketCard.module.css";

import { useState } from "react";

const BasketCard =(props)=>{
 
    
    return(
      <Modal onClose={props.onClose}>
          
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