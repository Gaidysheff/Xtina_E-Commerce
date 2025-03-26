import { useContext, useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import Button from "./../../components/sharedUI/Button.jsx";
import CartContext from "./../../store/cart-context.js";
import { NumericFormat } from "react-number-format";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const SingleFreshener = () => {
  const [freshener, setFreshener] = useState([]);
  const [isLoadFreshener, setIsLoadFreshener] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  const params = useParams();
  const slug = params.freshenerSlug;

  const cartContext = useContext(CartContext);
  // -----------------------------------------------
  const [aroma1, setAroma1] = useState("");
  const [aroma2, setAroma2] = useState("");
  const [aroma3, setAroma3] = useState("");
  const [aroma4, setAroma4] = useState("");
  const [aroma5, setAroma5] = useState("");
  const [topNote1, setTopNote1] = useState("");
  const [topNote2, setTopNote2] = useState("");
  const [topNote3, setTopNote3] = useState("");
  const [topNote4, setTopNote4] = useState("");
  const [topNote5, setTopNote5] = useState("");
  const [middleNote1, setMiddleNote1] = useState("");
  const [middleNote2, setMiddleNote2] = useState("");
  const [middleNote3, setMiddleNote3] = useState("");
  const [middleNote4, setMiddleNote4] = useState("");
  const [middleNote5, setMiddleNote5] = useState("");
  const [baseNote1, setBaseNote1] = useState("");
  const [baseNote2, setBaseNote2] = useState("");
  const [baseNote3, setBaseNote3] = useState("");
  const [baseNote4, setBaseNote4] = useState("");
  const [baseNote5, setBaseNote5] = useState("");

  // ===================== Loading Fresheners Data ===============

  useEffect(() => {
    setIsLoadFreshener(true);
    axios
      .get(`${BASE_URL}/fresheners/${slug}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            "Что-то пошло не так, попробуйте перезагрузить страницу."
          );
        }
        setFreshener(response.data);
        // ---------------------------------
        setAroma1(response.data.aroma1.name);
        setAroma2(response.data.aroma2.name);
        setAroma3(response.data.aroma3.name);
        setAroma4(response.data.aroma4.name);
        setAroma5(response.data.aroma5.name);
        setTopNote1(response.data.topNote1.name);
        setTopNote2(response.data.topNote2.name);
        setTopNote3(response.data.topNote3.name);
        setTopNote4(response.data.topNote4.name);
        setTopNote5(response.data.topNote5.name);
        setMiddleNote1(response.data.middleNote1.name);
        setMiddleNote2(response.data.middleNote2.name);
        setMiddleNote3(response.data.middleNote3.name);
        setMiddleNote4(response.data.middleNote4.name);
        setMiddleNote5(response.data.middleNote5.name);
        setBaseNote1(response.data.baseNote1.name);
        setBaseNote2(response.data.baseNote2.name);
        setBaseNote3(response.data.baseNote3.name);
        setBaseNote4(response.data.baseNote4.name);
        setBaseNote5(response.data.baseNote5.name);
      })
      .catch((error) => {
        console.log("error=", error);
        setHttpErrorMessage(error.message);
      });
    setIsLoadFreshener(false);
  }, []);

  if (isLoadFreshener) {
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
      id: freshener.id,
      name: freshener.title,
      image: freshener.image,
      amount: 1,
      price: freshener.price,
    });
    toast.success("Выбранный товар добавлен в корзину");
  };

  return (
    <section className="container py-5 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="px-7 md:px-0 md:pr-5 mb-10 md:mb-0 md:mt-20">
          <img src={freshener.image} alt="freshener image" data-aos="zoom-in" />
        </div>
        <div className="mx-5 md:mx-2">
          {/* --------------------- Название ---------------------- */}
          <p
            className="text-2xl font-semibold"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {freshener.title}
          </p>
          <p
            className="text-2xl"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {freshener.subtitle}
          </p>

          <NumericFormat
            className="flex justify-start text-5xl text-primaryDark
                      dark:text-primary my-10"
            value={freshener.price}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix={" ₽"}
            data-aos="slide-left"
            data-aos-delay="400"
          />

          {/* -------------------- Аромат --------------------------- */}
          <div className="flex mb-3">
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
                {aroma1 !== "---" && aroma1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {aroma2 !== "---" && aroma2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {aroma3 !== "---" && aroma3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {aroma4 !== "---" && aroma4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {aroma5 !== "---" && aroma5}
              </p>
            </div>
          </div>
          {/* ------------------ Верхние ноты ---------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Верхние ноты:
            </div>
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="600"
            >
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {topNote1 !== "---" && topNote1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {topNote2 !== "---" && topNote2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {topNote3 !== "---" && topNote3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {topNote4 !== "---" && topNote4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {topNote5 !== "---" && topNote5}
              </p>
            </div>
          </div>
          {/* ------------------- Средние ноты ------------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Средние ноты:
            </div>
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="700"
            >
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {middleNote1 !== "---" && middleNote1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {middleNote2 !== "---" && middleNote2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {middleNote3 !== "---" && middleNote3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {middleNote4 !== "---" && middleNote4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {middleNote5 !== "---" && middleNote5}
              </p>
            </div>
          </div>
          {/* ------------------- Базовые ноты ------------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Базовые ноты:
            </div>
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="800"
            >
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {baseNote1 !== "---" && baseNote1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {baseNote2 !== "---" && baseNote2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {baseNote3 !== "---" && baseNote3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {baseNote4 !== "---" && baseNote4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {baseNote5 !== "---" && baseNote5}
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------- */}
          <div data-aos="fade-in" data-aos-delay="900">
            {freshener.description}
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

export default SingleFreshener;
