import CardContext from "./basketcard-context";

import { useReducer } from "react";

const defaultCardState = {
  items: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCardItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCardItem = state.items[existingCardItemIndex];
    let updatedItems;

    if (existingCardItem) {
      const updatedItem = {
        ...existingCardItem,
        amount: existingCardItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCardItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCardItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCardItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCardItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCardState;
};

const CardProvider = (props) => {
  const [cardState, dispatchCardAction] = useReducer(
    cardReducer,
    defaultCardState
  );

  const addItemToCardHandler = (item) => {
    dispatchCardAction({ type: "ADD", item: item });
  };

  const removeItemFromCardHandler = (id) => {
    dispatchCardAction({ type: "REMOVE", id: id });
  };

  const cardContext = {
    items: cardState.items,
    totalAmount: cardState.totalAmount,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler,
  };

  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};
export default CardProvider;
