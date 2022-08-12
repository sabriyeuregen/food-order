import style from "./Card.module.css";


const Card=(props)=>{

    
   

    return(
        <div className={style.card}>
        <div >{props.image}</div>
        
       <div className={style.card__name}>{props.name}</div>
       <div className={style.card__price}>{props.price}</div> 
       <div className={style.card__contents}>{props.contents}</div>
        </div>
    )
}
export default Card;