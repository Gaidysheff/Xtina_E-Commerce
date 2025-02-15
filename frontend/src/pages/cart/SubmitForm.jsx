import React, { forwardRef, useImperativeHandle, useState } from "react";

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
  const [deliveryTwo, setDeliveryTwo] = useState(false);

  const selfPickupHandler = () => {
    setDeliveryTwo(false);
    setSelfPickup(!selfPickup);
  };

  const deliveryTwoHandler = () => {
    setSelfPickup(false);
    setDeliveryTwo(!deliveryTwo);
  };

  const selfPickupClasses = `${style["input-control"]} ${
    selfPickup ? style.selected : ""
  }`;
  const DeliveryTwoClasses = `${style["input-control"]} ${
    deliveryTwo ? style.selected : ""
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
        <label htmlFor="address">Адрес доставки</label>
        <input
          type="text"
          id="address"
          name="address"
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
        {/* -------------------------------------------- */}
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
        {/* -------------------------------------------- */}
        <li className="my-2 sm:my-5">
          <input
            type="checkbox"
            id="deliveryTwo"
            value=""
            className="hidden peer"
            required=""
            onChange={deliveryTwoHandler}
          />
          <label htmlFor="deliveryTwo" className={DeliveryTwoClasses}>
            <div className="inline-block w-full ">
              <div className="flex items-center justify-start mb-2">
                <img
                  src={SelfPickup}
                  alt=""
                  className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] mr-5"
                />
                <div className="w-full text-sm sm:text-lg font-semibold">
                  Центральные районы Екатеринбурга
                </div>
                <div
                  className="w-[4rem] text-sm sm:text-md font-semibold
                text-primaryDark"
                >
                  300 ₽
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
      </ul>
      {/* =============================================== */}
      <div className={style.actions}>
        {formData.length > 0 && JSON.stringify(formData)}
        {/* <button className={style.submit}>Подтвердить заказ</button> */}
      </div>
    </form>
  );
});
