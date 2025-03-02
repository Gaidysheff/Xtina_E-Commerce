import React, { forwardRef, useImperativeHandle, useState } from "react";

import { DELIVERY } from "../../utils/delivery";
import OrderContext from "./../../store/order-context.js";
import SelfPickup from "../../assets/cart/self-pickup.png";
import style from "./SubmitOrder.module.css";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const isInputValid = (inputValue) => inputValue.trim() !== "";
// const isPhoneValid = (phoneValue) => phoneValue.trim() !== "+7";
const isPhoneValid = (phoneValue) =>
  (phoneValue.trim() !== "+7") & (phoneValue.length == 12);

export default forwardRef((props, ref) => {
  const orderContext = useContext(OrderContext);

  const [formData, setFormData] = useState([]);

  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      telephone: "+7",
    },
  });

  // -------------- Validation ----------------

  const [formValidity, setFormValidity] = useState({
    name: true,
    telephone: true,
    connection: true,
  });

  // --------------Delivery options ----------------

  const [selfPickup, setSelfPickup] = useState(true);
  const [deliveryOne, setDeliveryOne] = useState(false);
  const [deliveryTwo, setDeliveryTwo] = useState(false);
  const [deliveryThree, setDeliveryThree] = useState(false);
  const [deliveryFour, setDeliveryFour] = useState(false);
  const [deliveryFive, setDeliveryFive] = useState(false);

  const selfPickupHandler = () => {
    setDeliveryOne(false);
    setDeliveryTwo(false);
    setDeliveryThree(false);
    setDeliveryFour(false);
    setDeliveryFive(false);
    setSelfPickup(!selfPickup);
  };

  const deliveryOneHandler = () => {
    setSelfPickup(false);
    setDeliveryTwo(false);
    setDeliveryThree(false);
    setDeliveryFour(false);
    setDeliveryFive(false);
    setDeliveryOne(!deliveryOne);
  };

  const deliveryTwoHandler = () => {
    setSelfPickup(false);
    setDeliveryOne(false);
    setDeliveryThree(false);
    setDeliveryFour(false);
    setDeliveryFive(false);
    setDeliveryTwo(!deliveryTwo);
  };

  const deliveryThreeHandler = () => {
    setSelfPickup(false);
    setDeliveryOne(false);
    setDeliveryTwo(false);
    setDeliveryFour(false);
    setDeliveryFive(false);
    setDeliveryThree(!deliveryThree);
  };
  const deliveryFourHandler = () => {
    setSelfPickup(false);
    setDeliveryOne(false);
    setDeliveryTwo(false);
    setDeliveryThree(false);
    setDeliveryFive(false);
    setDeliveryFour(!deliveryFour);
  };
  const deliveryFiveHandler = () => {
    setSelfPickup(false);
    setDeliveryOne(false);
    setDeliveryTwo(false);
    setDeliveryThree(false);
    setDeliveryFour(false);
    setDeliveryFive(!deliveryFive);
  };

  const selfPickupClasses = `${style["input-control"]} ${
    selfPickup ? style.selected : ""
  }`;
  const deliveryOneClasses = `${style["input-control"]} ${
    deliveryOne ? style.selected : ""
  }`;
  const deliveryTwoClasses = `${style["input-control"]} ${
    deliveryTwo ? style.selected : ""
  }`;
  const deliveryThreeClasses = `${style["input-control"]} ${
    deliveryThree ? style.selected : ""
  }`;
  const deliveryFourClasses = `${style["input-control"]} ${
    deliveryFour ? style.selected : ""
  }`;
  const deliveryFiveClasses = `${style["input-control"]} ${
    deliveryFive ? style.selected : ""
  }`;

  // ==================================================

  const onSubmit = (data) => {
    const enteredName = data.name;
    const enteredTelephone = data.telephone;
    const enteredConnection = data.connection;

    const isEnteredNameValid = isInputValid(enteredName);
    const isEnteredTelephoneValid = isPhoneValid(enteredTelephone);
    const isEnteredConnectionValid = isInputValid(enteredConnection);

    setFormValidity({
      name: isEnteredNameValid,
      telephone: isEnteredTelephoneValid,
      connection: isEnteredConnectionValid,
    });

    const isFormValid =
      isEnteredNameValid && isEnteredTelephoneValid && isEnteredConnectionValid;

    if (!isFormValid) {
      return;
    }

    setFormData([...formData, data]);
    orderContext.addOrder(data);
    props.onSetDeliveryOption(data);
    props.onOpenConfirm();
  };

  // ==================================================

  const onError = (e) => {
    console.error(e);
  };

  // Expose submitForm method to parent component.
  useImperativeHandle(ref, () => ({
    submitForm() {
      handleSubmit(onSubmit, onError)();
    },
  }));

  // ==========================================================

  const addressInputClasses = `${style.control}`;

  const nameInputClasses = `${style.control} ${
    formValidity.name ? "" : style.invalid
  }`;
  const telephoneInputClasses = `${style.control} ${
    formValidity.telephone ? "" : style.invalid
  }`;
  const connectionInputClasses = `${style.control} ${
    formValidity.connection ? "" : style.invalid
  }`;

  // ------- Reset fields if any single one is typed in ------------

  const addressOneHandler = () => {
    resetField("deliveryTwo");
    resetField("deliveryThree");
    resetField("deliveryFour");
    resetField("deliveryFive");
  };
  const addressTwoHandler = () => {
    resetField("deliveryOne");
    resetField("deliveryThree");
    resetField("deliveryFour");
    resetField("deliveryFive");
  };
  const addressThreeHandler = () => {
    resetField("deliveryOne");
    resetField("deliveryTwo");
    resetField("deliveryFour");
    resetField("deliveryFive");
  };
  const addressFourHandler = () => {
    resetField("deliveryOne");
    resetField("deliveryTwo");
    resetField("deliveryThree");
    resetField("deliveryFive");
  };
  const addressFiveHandler = () => {
    resetField("deliveryOne");
    resetField("deliveryTwo");
    resetField("deliveryThree");
    resetField("deliveryFour");
  };

  return (
    <form className={style.form}>
      <div className={nameInputClasses}>
        <label htmlFor="name" data-aos="slide-right">
          ФИО
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Полное ФИО необходимо для транспортной компании"
          className="placeholder:italic placeholder:text-[0.7rem] placeholder:text-md"
          {...register("name")}
          data-aos="slide-left"
          // {...register("name", { required: true })}
        />
        {!formValidity.name && (
          <p
            className="text-[0.7rem] sm:text-sm text-red-600 italic"
            data-aos="slide-down"
          >
            Необходимо ввести ФИО
          </p>
        )}
      </div>
      <div className={telephoneInputClasses}>
        <label htmlFor="telephone" data-aos="slide-right">
          Телефон
        </label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          {...register("telephone", {
            // pattern: { value: /^+7(0-9)\d{10}$/ },
            // message: "Неверный формат номера телефона",
          })}
          // placeholder="+7__________"
          className="placeholder:italic placeholder:text-[0.7rem] placeholder:text-md"
          data-aos="slide-left"
          // {...register("telephone", { required: true })}
        />
        {!formValidity.telephone && (
          <p
            className="text-[0.7rem] sm:text-sm text-red-600 italic"
            data-aos="slide-down"
          >
            Необходимо ввести номер телефона (10 цифр после кода страны)
          </p>
        )}
      </div>
      <div className={connectionInputClasses}>
        <label htmlFor="connection" data-aos="slide-right">
          Способ связи{" "}
          <span className="text-[0.7rem] sm:text-lg italic text-brandLightGray">
            (Укажите, как с Вами удобно связаться)
          </span>
        </label>
        <input
          type="text"
          id="connection"
          name="connection"
          placeholder="Звонок, WhatsApp или Telegram (укажите ник)"
          className="placeholder:italic placeholder:text-[0.7rem] placeholder:text-md"
          {...register("connection")}
          data-aos="slide-left"
          // {...register("connection", { required: true })}
        />
        {!formValidity.connection && (
          <p
            className="text-[0.7rem] sm:text-sm text-red-600 italic"
            data-aos="slide-down"
          >
            Необходимо ввести способ связи
          </p>
        )}
      </div>

      {/* ================= Delivery ==================== */}
      <h3
        className="sm:mb-5 text-lg font-medium text-gray-900 dark:text-white"
        data-aos="slide-right"
      >
        Доставка:
      </h3>
      <ul className="flex-col">
        {/* ---------------- SelfPickup -------------------- */}
        <li className="my-2 sm:my-5">
          <input
            type="checkbox"
            id="selfPickup"
            value=""
            className="hidden peer"
            required=""
            onChange={selfPickupHandler}
          />
          <label htmlFor="selfPickup" className={selfPickupClasses}>
            <div className="inline-block w-full ">
              <div className="flex items-center justify-start mb-2">
                <img
                  src={SelfPickup}
                  alt=""
                  className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] mr-5"
                />
                <div className="w-full text-sm sm:text-lg font-semibold">
                  Самовывоз
                </div>
              </div>
            </div>
          </label>
        </li>

        {/* ------------------ Delivery One ------------------- */}
        <li className="my-2 sm:my-5">
          <input
            type="checkbox"
            id="deliveryOne"
            value=""
            className="hidden peer"
            required=""
            onChange={deliveryOneHandler}
          />
          <label htmlFor="deliveryOne" className={deliveryOneClasses}>
            <div className="inline-block w-full ">
              <div className="flex items-center justify-start mb-2">
                <img
                  src={DELIVERY[0].image}
                  alt="icon for delivery option"
                  className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] mr-5"
                />
                <div
                  className="w-full text-sm sm:text-lg font-semibold 
                sm:leading-5"
                >
                  {DELIVERY[0].title}
                </div>
                <div
                  className="w-[4rem] text-end text-sm sm:text-lg font-semibold
                text-primaryDark"
                >
                  {DELIVERY[0].price} ₽
                </div>
              </div>
              {deliveryOne && (
                <div className={addressInputClasses}>
                  <label htmlFor="address">Адрес доставки:</label>
                  <input
                    type="text"
                    id="deliveryOne"
                    name="deliveryOne"
                    {...register("deliveryOne")}
                    onChange={addressOneHandler}
                  />
                </div>
              )}
            </div>
          </label>
        </li>

        {/* ------------------ Delivery Two ------------------- */}
        <li className="my-2 sm:my-5">
          <input
            type="checkbox"
            id="deliveryTwo"
            value=""
            className="hidden peer"
            required=""
            onChange={deliveryTwoHandler}
          />
          <label htmlFor="deliveryTwo" className={deliveryTwoClasses}>
            <div className="inline-block w-full ">
              <div className="flex items-center justify-start mb-2">
                <img
                  src={DELIVERY[1].image}
                  alt="icon for delivery option"
                  className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] mr-5"
                />
                <div
                  className="w-full text-sm sm:text-lg font-semibold 
                sm:leading-5"
                >
                  {DELIVERY[1].title}
                </div>
                <div
                  className="w-[4rem] text-end text-sm sm:text-lg font-semibold
                text-primaryDark"
                >
                  {DELIVERY[1].price} ₽
                </div>
              </div>
              {deliveryTwo && (
                <div className={addressInputClasses}>
                  <label htmlFor="address">Адрес доставки:</label>
                  <input
                    type="text"
                    id="deliveryTwo"
                    name="deliveryTwo"
                    {...register("deliveryTwo")}
                    onChange={addressTwoHandler}
                  />
                </div>
              )}
            </div>
          </label>
        </li>

        {/* ------------------ Delivery Three ------------------- */}
        <li className="my-2 sm:my-5">
          <input
            type="checkbox"
            id="deliveryThree"
            value=""
            className="hidden peer"
            required=""
            onChange={deliveryThreeHandler}
          />
          <label htmlFor="deliveryThree" className={deliveryThreeClasses}>
            <div className="inline-block w-full ">
              <div className="flex items-center justify-start mb-2">
                <img
                  src={DELIVERY[2].image}
                  alt="icon for delivery option"
                  className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] mr-5"
                />
                <div
                  className="w-full text-sm sm:text-lg font-semibold 
                sm:leading-5"
                >
                  {DELIVERY[2].title}
                </div>
                <div
                  className="w-[4rem] text-end text-sm sm:text-lg font-semibold
                text-primaryDark"
                >
                  {DELIVERY[2].price} ₽
                </div>
              </div>
              {deliveryThree && (
                <div className={addressInputClasses}>
                  <label htmlFor="address">Адрес доставки:</label>
                  <input
                    type="text"
                    id="deliveryThree"
                    name="deliveryThree"
                    {...register("deliveryThree")}
                    onChange={addressThreeHandler}
                  />
                </div>
              )}
            </div>
          </label>
        </li>

        {/* ------------------ Delivery Four ------------------- */}
        <li className="my-2 sm:my-5">
          <input
            type="checkbox"
            id="deliveryFour"
            value=""
            className="hidden peer"
            required=""
            onChange={deliveryFourHandler}
          />
          <label htmlFor="deliveryFour" className={deliveryFourClasses}>
            <div className="inline-block w-full ">
              <div className="flex items-center justify-start mb-2">
                <img
                  src={DELIVERY[3].image}
                  alt="icon for delivery option"
                  className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] mr-5"
                />
                <div
                  className="w-full text-sm sm:text-lg font-semibold 
                sm:leading-5"
                >
                  {DELIVERY[3].title}
                </div>
                <div
                  className="w-[4rem] text-end text-sm sm:text-lg font-semibold
                text-primaryDark"
                >
                  {DELIVERY[3].price} ₽
                </div>
              </div>
              {deliveryFour && (
                <div className={addressInputClasses}>
                  <label htmlFor="address">Адрес доставки:</label>
                  <input
                    type="text"
                    id="deliveryFour"
                    name="deliveryFour"
                    {...register("deliveryFour")}
                    onChange={addressFourHandler}
                  />
                </div>
              )}
            </div>
          </label>
        </li>

        {/* ------------------ Delivery Five ------------------- */}
        <li className="my-2 sm:my-5">
          <input
            type="checkbox"
            id="deliveryFive"
            value=""
            className="hidden peer"
            required=""
            onChange={deliveryFiveHandler}
          />
          <label htmlFor="deliveryFive" className={deliveryFiveClasses}>
            <div className="inline-block w-full ">
              <div className="flex items-center justify-start mb-2">
                <img
                  src={DELIVERY[4].image}
                  alt="icon for delivery option"
                  className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] mr-5"
                />
                <div
                  className="w-full text-sm sm:text-lg font-semibold 
                sm:leading-5"
                >
                  {DELIVERY[4].title}
                </div>
                <div
                  className="w-[4rem] text-end text-sm sm:text-lg font-semibold
                text-primaryDark"
                >
                  {DELIVERY[4].price} ₽
                </div>
              </div>
              {deliveryFive && (
                <div className={addressInputClasses}>
                  <label htmlFor="address">Адрес доставки:</label>
                  <input
                    type="text"
                    id="deliveryFive"
                    name="deliveryFive"
                    {...register("deliveryFive")}
                    onChange={addressFiveHandler}
                  />
                </div>
              )}
            </div>
          </label>
        </li>
      </ul>
      {/* ============= JSON data checkout ================= */}
      {/* <div className={style.actions}>
        {formData.length > 0 && JSON.stringify(formData)}
      </div> */}
    </form>
  );
});
