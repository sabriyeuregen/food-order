import { useRef, useState } from "react";
import CardInput from "./CardInput";
import style from "./CardItemForm.module.css";

const CardItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCard(enteredAmountNumber);
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <CardInput
        ref={amountInputRef}
        label="Miktar"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={style.button}>Sepete Ekle</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default CardItemForm;
