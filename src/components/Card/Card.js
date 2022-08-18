import { useContext } from 'react';

import CardItemForm from './CardItemForm';
import style from './CardItem.module.css';
import CardContext from '../../store/basketcard-context';

const Card = (props) => {
  const cardCtx = useContext(CardContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCardHandler = (amount) => {
    cardCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={style.meal}>
      <div>
        
        <div className={style.img}>{props.image}</div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <CardItemForm id={props.id} onAddToCard={addToCardHandler} />
      </div>
    </div>
  );
};

export default Card;