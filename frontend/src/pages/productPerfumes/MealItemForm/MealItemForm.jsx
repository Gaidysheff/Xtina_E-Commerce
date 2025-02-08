import { useRef, useState } from "react";

import Input from "../../../components/sharedUI/Input/Input";
import style from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Количество"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Пожайлуста, введите количество от 1 до 10</p>}
    </form>
  );
};

export default MealItemForm;
