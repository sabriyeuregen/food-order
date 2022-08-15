import style from "./Card.module.css";
import ButtonBasket from "../Button/ButtonBasket";
import ButtonAmount from "../Button/ButtonAmount";

const Card=(props)=>{

    
   

    return(
        <div className={style.card}>
        <div className={style.card__img}>{props.image}</div>
        <div className={style.card__name}>{props.name}</div>
        <div className={style.card__price}>{props.price}</div> 
        <div className={style.card__contents}>{props.contents}</div>
        <div>
        <ButtonAmount></ButtonAmount>
        <ButtonBasket></ButtonBasket>
        </div>
        </div>
    )
}
export default Card;