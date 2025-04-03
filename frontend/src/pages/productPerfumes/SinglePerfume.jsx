import { useContext, useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import Button from "./../../components/sharedUI/Button.jsx";
import ButtonVolume from "./../../components/sharedUI/ButtonVolume.jsx";
import CartContext from "./../../store/cart-context.js";
import Loader from "../../components/sharedUI/LoaderKest.jsx";
import { NumericFormat } from "react-number-format";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router";

// import { PRESENT } from "../../utils/gift.js";

const SingleProduct = (props) => {
  const [perfume, setPerfume] = useState([]);
  const [isLoadPerfumes, setIsLoadPerfumes] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  const [present, setPresent] = useState([]);
  // const present = PRESENT[0];

  const cartContext = useContext(CartContext);

  const [volume, setVolume] = useState("3ml");
  const [price, setPrice] = useState(0);
  const [gift, setGift] = useState(false);

  // -----------------------------------------------
  const [compound1, setCompound1] = useState("");
  const [compound2, setCompound2] = useState("");
  const [compound3, setCompound3] = useState("");
  const [compound4, setCompound4] = useState("");
  const [compound5, setCompound5] = useState("");
  const [family1, setFamily1] = useState("");
  const [family2, setFamily2] = useState("");
  const [family3, setFamily3] = useState("");
  const [family4, setFamily4] = useState("");
  const [family5, setFamily5] = useState("");
  const [note1, setNote1] = useState("");
  const [note2, setNote2] = useState("");
  const [note3, setNote3] = useState("");
  const [note4, setNote4] = useState("");
  const [note5, setNote5] = useState("");
  const [chord1, setChord1] = useState("");
  const [chord2, setChord2] = useState("");
  const [chord3, setChord3] = useState("");
  const [chord4, setChord4] = useState("");
  const [chord5, setChord5] = useState("");
  // -----------------------------------------------

  const params = useParams();
  const slug = params.perfumeSlug;

  // =============== Loading Perfume Data =======================
  useEffect(() => {
    setIsLoadPerfumes(true);
    axios
      .get(`${BASE_URL}/api/perfumes/${slug}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            "Что-то пошло не так, попробуйте перезагрузить страницу."
          );
        }
        setPerfume(response.data);
        setPrice(response.data.price3);
        // ---------------------------------
        setCompound1(response.data.compound1.name);
        setCompound2(response.data.compound2.name);
        setCompound3(response.data.compound3.name);
        setCompound4(response.data.compound4.name);
        setCompound5(response.data.compound5.name);
        setFamily1(response.data.family1.name);
        setFamily2(response.data.family2.name);
        setFamily3(response.data.family3.name);
        setFamily4(response.data.family4.name);
        setFamily5(response.data.family5.name);
        setNote1(response.data.note1.name);
        setNote2(response.data.note2.name);
        setNote3(response.data.note3.name);
        setNote4(response.data.note4.name);
        setNote5(response.data.note5.name);
        setChord1(response.data.chord1.name);
        setChord2(response.data.chord2.name);
        setChord3(response.data.chord3.name);
        setChord4(response.data.chord4.name);
        setChord5(response.data.chord5.name);
      })
      .catch((error) => {
        console.log("error=", error);
        setHttpErrorMessage(error.message);
      });
    // ----------------------------------------------
    axios
      .get(`${BASE_URL}/api/gift`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            "Что-то пошло не так, попробуйте перезагрузить страницу."
          );
        }
        setPresent(response.data[0]);
      })
      .catch((error) => {
        console.log("error=", error);
        setHttpErrorMessage(error.message);
      });

    setIsLoadPerfumes(false);
  }, []);

  if (isLoadPerfumes) {
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

  // ========================================================

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

    toast.success("Выбранный товар добавлен в корзину");
  };

  return (
    <section className="container py-5 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <img src={perfume.image} alt="Perfume image" data-aos="zoom-in" />
        <div className="mx-5 md:mx-2">
          <div
            className="text-4xl"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {perfume.name}
          </div>
          <div
            className="text-xl my-3 text-brandLightGray italic"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {perfume.brand}
          </div>

          <NumericFormat
            className="flex justify-start text-5xl text-primaryDark 
            dark:text-primary pb-2"
            data-aos="slide-left"
            data-aos-delay="300"
            value={price}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix={" ₽"}
          />

          <div className="my-5 block sm:flex md:block">
            <div
              data-aos="flip-up"
              data-aos-delay="300"
              data-aos-delay-duration="1000"
            >
              <ButtonVolume text="3 ml" handler={volume3mlHandler} />
              <ButtonVolume text="5 ml" handler={volume5mlHandler} />
            </div>
            <div
              data-aos="flip-up"
              data-aos-delay="400"
              data-aos-delay-duration="1000"
            >
              <ButtonVolume text="10 ml" handler={volume10mlHandler} />
              <ButtonVolume text="20 ml" handler={volume20mlHandler} />
              <ButtonVolume text="30 ml" handler={volume30mlHandler} />
            </div>
          </div>

          <div className="mb-7">
            <label className="check-container ">
              <span className="text-[1.1rem] sm:text-lg">{present.title}</span>
              <span className="text-[1.1rem] sm:text-lg mx-2">
                {present.volume}
              </span>
              <span className="text-brandLightGray text-sm lg:text-lg">
                (+{present.price} ₽)
              </span>
              <input type="checkbox" onChange={giftHandler} />
              <span className="checkmark"></span>
            </label>
          </div>

          <div
            className="my-10"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-delay-duration="1000"
          >
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
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="500"
            >
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
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="550"
            >
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
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="600"
            >
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
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="650"
            >
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
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="700"
            >
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
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="700"
            >
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {compound1 !== "---" && compound1}
              </p>
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {compound2 !== "---" && compound2}
              </p>
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {compound3 !== "---" && compound3}
              </p>
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {compound4 !== "---" && compound4}
              </p>
              <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                {compound5 !== "---" && compound5}
              </p>
            </div>
          </div>
          {/* -------------------- Семейство --------------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Семейство:
            </div>
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="750"
            >
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {family1 !== "---" && family1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {family2 !== "---" && family2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {family3 !== "---" && family3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {family4 !== "---" && family4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {family5 !== "---" && family5}
              </p>
            </div>
          </div>
          {/* ------------------ Основные ноты ---------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Основные ноты:
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
                {note1 !== "---" && note1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {note2 !== "---" && note2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {note3 !== "---" && note3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {note4 !== "---" && note4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {note5 !== "---" && note5}
              </p>
            </div>
          </div>
          {/* ------------------- Аккорды ------------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Аккорды:
            </div>
            <div
              className="w-[100%]"
              data-aos="slide-left"
              data-aos-delay="900"
            >
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {chord1 !== "---" && chord1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {chord2 !== "---" && chord2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {chord3 !== "---" && chord3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {chord4 !== "---" && chord4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {chord5 !== "---" && chord5}
              </p>
            </div>
          </div>
          {/* -------------------- Отзывы ------------------------ */}
          {perfume.feedback && (
            <div className="flex mb-10">
              <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
                Отзывы:
              </div>
              <div
                className="w-[100%]"
                data-aos="slide-left"
                data-aos-delay="950"
              >
                <p className="pl-3 rounded-md md:text-md xl:text-2xl italic">
                  {perfume.feedback}
                </p>
              </div>
            </div>
          )}
          {/* ------------------------------------------------------- */}
          <div data-aos="slide-left" data-aos-delay="1000">
            {perfume.description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
