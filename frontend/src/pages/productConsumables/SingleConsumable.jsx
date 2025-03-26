import { useContext, useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import Button from "../../components/sharedUI/Button.jsx";
import CartContext from "../../store/cart-context.js";
import { NumericFormat } from "react-number-format";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const SingleConsumable = () => {
  const [consumable, setConsumable] = useState([]);
  const [isLoadConsumable, setIsLoadConsumable] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  const params = useParams();
  const slug = params.consumableSlug;

  const cartContext = useContext(CartContext);
  // -----------------------------------------------
  const [aroma, setAroma] = useState("");

  // ===================== Loading Consumables Data ===============

  useEffect(() => {
    setIsLoadConsumable(true);
    axios
      .get(`${BASE_URL}/consumables/${slug}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            "Что-то пошло не так, попробуйте перезагрузить страницу."
          );
        }
        setConsumable(response.data);
        // ---------------------------------
        setAroma(response.data.aroma.name);
      })
      .catch((error) => {
        console.log("error=", error);
        setHttpErrorMessage(error.message);
      });
    setIsLoadConsumable(false);
  }, []);

  if (isLoadConsumable) {
    return (
      <section className="text-red-600 text-xl mt-[100px] text-center">
        <Loader />
      </section>
    );
  }

  if (httpErrorMessage) {
    return (
      <section className="text-red-600 text-xl text-center">
        <p>{httpErrorMessage}</p>
      </section>
    );
  }

  // ============================================================

  const addItemToCartHandler = (event) => {
    event.preventDefault();

    cartContext.addItem({
      id: consumable.id,
      name: consumable.title,
      image: consumable.image,
      amount: 1,
      price: consumable.price,
    });
    toast.success("Выбранный товар добавлен в корзину");
  };

  return (
    <section className="container py-5 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="px-7 md:px-0 md:pr-5 mb-10 md:mb-0 md:mt-20">
          <img
            src={consumable.image}
            alt="consumable image"
            data-aos="zoom-in"
          />
        </div>
        <div className="mx-5 md:mx-2">
          {/* --------------- Категория и Название ----------------- */}
          <p
            className="mb-3 text-xl lg:text-3xl font-semibold"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {consumable.category}
          </p>
          <p
            className="text-2xl font-semibold"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {consumable.title}
          </p>
          <p
            className="text-2xl"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {consumable.subtitle}
          </p>

          <NumericFormat
            className="flex justify-start text-5xl text-primaryDark
                      dark:text-primary my-10"
            value={consumable.price}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix={" ₽"}
            data-aos="slide-left"
            data-aos-delay="400"
          />

          {/* -------------------- Аромат --------------------------- */}
          <div className="flex mb-3 items-center">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Аромат:
            </div>
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="500"
            >
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {aroma !== "---" && aroma}
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          <div data-aos="fade-in" data-aos-delay="900">
            {consumable.description}
          </div>

          <div className="my-10" data-aos="zoom-in" data-aos-delay="1000">
            <Button
              text="Добавить в корзину"
              bgColor="
              group bg-gradient-to-br from-primaryLight/50 via-primary 
              to-primaryDark/70 group-hover:from-primaryLight 
              group-hover:via-primary group-hover:to-primaryDark 
              ring-4 ring-primary"
              textColor="text-white text-xl"
              paddings="py-4 px-10"
              handler={addItemToCartHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleConsumable;
