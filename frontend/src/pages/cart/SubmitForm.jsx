import React, { forwardRef, useImperativeHandle, useState } from "react";

import { DELIVERY } from "../../utils/delivery";
import SelfPickup from "../../assets/cart/self-pickup.png";
import style from "./SubmitOrder.module.css";
import { useForm } from "react-hook-form";

// import { useRef } from "react";

export default forwardRef((props, ref) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { telephone: "+7" },
  });

  const [formData, setFormData] = useState([]);

  // const nameInputRef = useRef();
  // const telephoneInputRef = useRef();
  // const addressInputRef = useRef();

  // --------------Delivery options ----------------

  const [selfPickup, setSelfPickup] = useState(false);
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
    setDeliveryThree(!selfPickup);
  };
  const deliveryFourHandler = () => {
    setSelfPickup(false);
    setDeliveryOne(false);
    setDeliveryTwo(false);
    setDeliveryThree(false);
    setDeliveryFive(false);
    setDeliveryFour(!selfPickup);
  };
  const deliveryFiveHandler = () => {
    setSelfPickup(false);
    setDeliveryOne(false);
    setDeliveryTwo(false);
    setDeliveryThree(false);
    setDeliveryFour(false);
    setDeliveryFive(!selfPickup);
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

  // -------------------------------------
  const onSubmit = (d) => {
    setFormData([...formData, d]);
  };

  // console.log(formData[0]);
  // if (formData[0]) {
  //   console.log(formData[0].name);
  //   console.log(formData[0].telephone);
  //   console.log(formData[0].address);
  // }

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

  const nameInputClasses = `${style.control}`;
  const cityInputClasses = `${style.control}`;
  const addressInputClasses = `${style.control}`;

  // const nameInputClasses = `${style.control} ${
  //   formValidity.name ? "" : style.invalid
  // }`;
  // const cityInputClasses = `${style.control} ${
  //   formValidity.city ? "" : style.invalid
  // }`;
  // const addressInputClasses = `${style.control} ${
  //   formValidity.address ? "" : style.invalid
  // }`;

  return (
    <form
      className={style.form}
      // onSubmit={confirmOrderHandler}
    >
      <div className={nameInputClasses}>
        <label htmlFor="name">ФИО</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Полное ФИО необходимо для транспортной компании"
          className="placeholder:italic placeholder:text-[0.7rem] placeholder:text-md"
          {...register("name", { required: true })}
          // ref={nameInputRef}
        />
        {/* {!formValidity.name && <p>Необходимо ввести имя</p>} */}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="telephone">Телефон</label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          {...register("telephone", { required: true })}
          // ref={telephoneInputRef}
        />
        {/* {!formValidity.city && <p>Необходимо ввести город</p>} */}
      </div>
      <div className={addressInputClasses}>
        <label htmlFor="address">
          Способ связи{" "}
          <span className="text-[0.7rem] sm:text-lg italic text-brandLightGray">
            (Укажите, как Вам удобно связаться)
          </span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Звонок, WhatsApp или Telegram (укажите ник)"
          className="placeholder:italic placeholder:text-[0.7rem] placeholder:text-md"
          {...register("address")}
          // ref={addressInputRef}
        />
        {/* {!formValidity.address && <p>Необходимо ввести адрес</p>} */}
      </div>

      {/* ================= Delivery ==================== */}
      <h3 className="sm:mb-5 text-lg font-medium text-gray-900 dark:text-white">
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
        {/* ------------------ Delivery Two ------------------- */}
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
                    // ref={addressInputRef}
                  />
                  {/* {!formValidity.address && <p>Необходимо ввести адрес</p>} */}
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
                    // ref={addressInputRef}
                  />
                  {/* {!formValidity.address && <p>Необходимо ввести адрес</p>} */}
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
                    // ref={addressInputRef}
                  />
                  {/* {!formValidity.address && <p>Необходимо ввести адрес</p>} */}
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
                    // ref={addressInputRef}
                  />
                  {/* {!formValidity.address && <p>Необходимо ввести адрес</p>} */}
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
                    // ref={addressInputRef}
                  />
                  {/* {!formValidity.address && <p>Необходимо ввести адрес</p>} */}
                </div>
              )}
            </div>
          </label>
        </li>
      </ul>
      {/* =============================================== */}
      <div className={style.actions}>
        {formData.length > 0 && JSON.stringify(formData)}
        {/* <button className={style.submit}>Подтвердить заказ</button> */}
      </div>
    </form>
  );
});
