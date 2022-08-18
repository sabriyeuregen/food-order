import { useContext } from 'react';

import CardItemForm from './CardItemForm';
import style from "./Card.module.css";
<<<<<<< HEAD
import CardContext from '../../store/basketcard-context';
=======
import { useBasket } from "../store/BasketContext";
>>>>>>> 58eddeb4b3ecf953caae5cb0e8322a1de45838b1

const Card = (props) => {
  
  const cardCtx = useContext(CardContext);

<<<<<<< HEAD
  const addToCardHandler = (amount) => {
    cardCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
=======
   const {addToBasket}=useBasket();

  
>>>>>>> 58eddeb4b3ecf953caae5cb0e8322a1de45838b1

  return (
    <div className={style.card}>
      <div>
        
        <div className={style.card__img}>{props.image}</div>
<<<<<<< HEAD
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

=======
        <div className={style.card__name}>{props.name}</div>
        <div className={style.card__price}>{props.price}</div> 
        <div className={style.card__contents}>{props.contents}</div>
        <div>
        <button onClick={() => addToBasket(data)} >Sepete Ekle</button>
        </div>
        </div>
    )
}
>>>>>>> 58eddeb4b3ecf953caae5cb0e8322a1de45838b1
export default Card;