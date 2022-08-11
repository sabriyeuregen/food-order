import style from "./Card.module.css";

const Card=(props)=>{

    return(
        <div className={style.card}>
        <div className={style.img}>{props.img}</div>
       <div className={style.name}>{props.name}</div>
       <div className={style.price}>{props.price}</div> 
       <div className={style.contents}>{props.contents}</div>
        </div>
    )
}
export default Card;