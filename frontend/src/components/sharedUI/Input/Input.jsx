import { forwardRef } from "react";
import style from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input} />
    </div>
  );
});

export default Input;
