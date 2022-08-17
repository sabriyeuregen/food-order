import style from "./Card.module.css";
import { useBasket } from "../store/BasketContext";

const Card=(props)=>{

   const {addToBasket}=useBasket();

  

    return(
        <div className={style.card}>
        <div className={style.card__img}>{props.image}</div>
        <div className={style.card__name}>{props.name}</div>
        <div className={style.card__price}>{props.price}</div> 
        <div className={style.card__contents}>{props.contents}</div>
        <div>
        <button onClick={() => addToBasket(data)} >Sepete Ekle</button>
        </div>
        </div>
    )
}
export default Card;