import Button from "./../../components/sharedUI/Button.jsx";
import CartContext from "./../../store/cart-context.js";
import FreshenerContext from "./../../store/freshener-context.js";
import { NumericFormat } from "react-number-format";
import { toast } from "react-toastify";
import { useContext } from "react";
import { useParams } from "react-router";

const SingleFreshener = () => {
  const fresheners = useContext(FreshenerContext);

  const params = useParams();
  const freshener = fresheners.find(
    (freshener) => freshener.id === params.freshenerId
  );

  const cartContext = useContext(CartContext);

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
                {freshener.aroma1 !== "---" && freshener.aroma1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.aroma2 !== "---" && freshener.aroma2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.aroma3 !== "---" && freshener.aroma3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.aroma4 !== "---" && freshener.aroma4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.aroma4 !== "---" && freshener.aroma4}
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
                {freshener.topNote1 !== "---" && freshener.topNote1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.topNote2 !== "---" && freshener.topNote2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.topNote3 !== "---" && freshener.topNote3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.topNote4 !== "---" && freshener.topNote4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.topNote5 !== "---" && freshener.topNote5}
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
                {freshener.middleNote1 !== "---" && freshener.middleNote1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.middleNote2 !== "---" && freshener.middleNote2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.middleNote3 !== "---" && freshener.middleNote3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.middleNote4 !== "---" && freshener.middleNote4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.middleNote5 !== "---" && freshener.middleNote5}
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
                {freshener.baseNote1 !== "---" && freshener.baseNote1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.baseNote2 !== "---" && freshener.baseNote2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.baseNote3 !== "---" && freshener.baseNote3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.baseNote4 !== "---" && freshener.baseNote4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.baseNote5 !== "---" && freshener.baseNote5}
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
