import { useContext } from 'react';

import CardItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../store/basketcard-context';

const CardItem = (props) => {
  const cardCtx = useContext(CartContext);

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
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CardItemForm id={props.id} onAddToCart={addToCardHandler} />
      </div>
    </li>
  );
};

export default CardItem;