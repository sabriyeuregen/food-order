import { useContext } from "react";

import CardItemForm from "./CardItemForm";
import style from "./Card.module.css";
import CardContext from "../../store/basketcard-context";

const Card = (props) => {
  const cardCtx = useContext(CardContext);

  const addToCardHandler = (amount) => {
    cardCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={style.card}>
      <div>
        <div className={style.card__img}>{props.image}</div>
        <h3 className={style.card__name}>{props.name}</h3>
        <div className={style.card__description}>{props.description}</div>
        <div className={style.card__price}>{props.price}</div>
      </div>
      <div>
        <CardItemForm id={props.id} onAddToCard={addToCardHandler} />
      </div>
    </div>
  );
};

export default Card;
