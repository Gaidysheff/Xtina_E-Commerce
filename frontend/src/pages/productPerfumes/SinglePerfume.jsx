import { useContext, useState } from "react";

import Button from "./../../components/sharedUI/Button.jsx";
import ButtonVolume from "./../../components/sharedUI/ButtonVolume.jsx";
import CartContext from "./../../store/cart-context.js";
import { NumericFormat } from "react-number-format";
import { PRESENT } from "../../utils/gift.js";
import PerfumeContext from "../../store/perfume-context.js";
import { useParams } from "react-router";

const SingleProduct = (props) => {
  const perfumes = useContext(PerfumeContext);
  const params = useParams();

  const perfume = perfumes.find((perfume) => perfume.id === params.perfumeId);

  const present = PRESENT[0];

  const cartContext = useContext(CartContext);

  const [volume, setVolume] = useState("3ml");

  const [price, setPrice] = useState(perfume.price3);

  const [gift, setGift] = useState(false);

  const volume3mlHandler = () => {
    setVolume("3ml");
    setPrice(perfume.price3);
  };
  const volume5mlHandler = () => {
    setVolume("5ml");
    setPrice(perfume.price5);
  };
  const volume10mlHandler = () => {
    setVolume("10ml");
    setPrice(perfume.price10);
  };
  const volume20mlHandler = () => {
    setVolume("20ml");
    setPrice(perfume.price20);
  };
  const volume30mlHandler = () => {
    setVolume("30ml");
    setPrice(perfume.price30);
  };

  const giftHandler = () => {
    setGift(!gift);
  };

  const addItemToCartHandler = (event) => {
    event.preventDefault();

    cartContext.addItem({
      id: perfume.id,
      name: perfume.name,
      image: perfume.image,
      amount: 1,
      price: price,
      volume: volume,
    });

    if (gift) {
      cartContext.addItem({
        name: present.title,
        image: present.image,
        amount: 1,
        price: present.price,
        volume: present.volume,
      });
    }
  };

  return (
    <section className="container py-5 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <img src={perfume.image} alt="Perfume image" />
        <div className="mx-5 md:mx-2">
          <div className="text-4xl">{perfume.name}</div>
          <div className="text-xl my-3 text-brandLightGray italic">
            {perfume.brand}
          </div>

          <NumericFormat
            className="flex justify-start text-5xl text-primaryDark 
            dark:text-primary pb-2"
            value={price}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix={" ₽"}
          />

          <div className="my-5 block sm:flex md:block">
            <div>
              <ButtonVolume text="3 ml" handler={volume3mlHandler} />
              <ButtonVolume text="5 ml" handler={volume5mlHandler} />
            </div>
            <div>
              <ButtonVolume text="10 ml" handler={volume10mlHandler} />
              <ButtonVolume text="20 ml" handler={volume20mlHandler} />
              <ButtonVolume text="30 ml" handler={volume30mlHandler} />
            </div>
          </div>

          <div className="mb-7">
            <label className="check-container ">
              <span className="">{present.title}</span>
              <span className="mx-2">{present.volume}</span>
              <span className="text-brandLightGray text-sm lg:text-lg">
                (+{present.price} ₽)
              </span>
              <input type="checkbox" onChange={giftHandler} />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="my-10">
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

          {/* -------------------- Бренд ------------------------ */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Бренд:
            </div>
            <div className="w-[100%]">
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.brand}
              </p>
            </div>
          </div>
          {/* -------------------- Парфюмер ------------------------ */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Парфюмер:
            </div>
            <div className="w-[100%]">
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.perfumer}
              </p>
            </div>
          </div>
          {/* -------------------- Страна ------------------------ */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Страна:
            </div>
            <div className="w-[100%]">
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.country}
              </p>
            </div>
          </div>
          {/* --------------Год создания -------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Год создания:
            </div>
            <div className="w-[100%]">
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.year}
              </p>
            </div>
          </div>

          {/* -------------------- Пол ------------------------ */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Пол:
            </div>
            <div className="w-[100%]">
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.sex}
              </p>
            </div>
          </div>
          {/* -------------------- Состав ------------------------ */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Состав:
            </div>
            <div className="w-[100%]">
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.compound1}
              </p>
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.compound2}
              </p>
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.compound3}
              </p>
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.compound4}
              </p>
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {perfume.compound5}
              </p>
            </div>
          </div>
          {/* -------------------- Семейство --------------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Семейство:
            </div>
            <div className="w-[100%]">
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {perfume.family1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.family2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.family3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.family4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.family5}
              </p>
            </div>
          </div>
          {/* ------------------ Основные ноты ---------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Основные ноты:
            </div>
            <div className="w-[100%]">
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {perfume.note1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.note2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.note3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.note4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.note5}
              </p>
            </div>
          </div>
          {/* ------------------- Аккорды ------------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Аккорды:
            </div>
            <div className="w-[100%]">
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {perfume.chord1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.chord2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.chord3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.chord4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {perfume.chord5}
              </p>
            </div>
          </div>
          {/* -------------------- Отзывы ------------------------ */}
          {perfume.feedback && (
            <div className="flex mb-10">
              <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
                Отзывы:
              </div>
              <div className="w-[100%]">
                <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                  {perfume.feedback}
                </p>
              </div>
            </div>
          )}
          {/* ------------------------------------------------------- */}
          <div>{perfume.description}</div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
