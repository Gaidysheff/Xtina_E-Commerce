import Button from "./../../components/sharedUI/Button.jsx";
import ButtonVolume from "./../../components/sharedUI/ButtonVolume.jsx";
import { FRESHENERS } from "../../utils/fresheners.js";
import { NumericFormat } from "react-number-format";
import { useParams } from "react-router";

const SingleFreshener = () => {
  const params = useParams();
  const freshener = FRESHENERS.find(
    (freshener) => freshener.id === params.freshenerId
  );

  return (
    <section className="container py-5 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="px-7 md:px-0 md:pr-5 mb-10 md:mb-0 md:mt-20">
          <img src={freshener.image} alt="freshener image" />
        </div>
        <div className="mx-5 md:mx-2">
          {/* --------------- Категория и Название ----------------- */}
          <p className="mb-3 text-xl lg:text-3xl font-semibold">
            {freshener.category}
          </p>
          <p className="text-2xl font-semibold">{freshener.title}</p>
          <p className="text-2xl">{freshener.subtitle}</p>

          <NumericFormat
            className="flex justify-start text-5xl text-primaryDark
                      dark:text-primary my-10"
            value={freshener.price}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            suffix={" ₽"}
          />

          {/* -------------------- Аромат --------------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Аромат:
            </div>
            <div className="w-[100%]">
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {freshener.aroma1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.aroma2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.aroma3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.aroma4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.aroma5}
              </p>
            </div>
          </div>
          {/* ------------------ Верхние ноты ---------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Верхние ноты:
            </div>
            <div className="w-[100%]">
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {freshener.top_note1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.top_note2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.top_note3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.top_note4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.top_note5}
              </p>
            </div>
          </div>
          {/* ------------------- Средние ноты ------------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Средние ноты:
            </div>
            <div className="w-[100%]">
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {freshener.middle_note1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.middle_note2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.middle_note3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.middle_note4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.middle_note5}
              </p>
            </div>
          </div>
          {/* ------------------- Базовые ноты ------------------------- */}
          <div className="flex mb-3">
            <div className="w-[12rem] font-semibold md:text-lg xl:text-2xl">
              Базовые ноты:
            </div>
            <div className="w-[100%]">
              <p
                className="bg-primary w-[100%] my-2 pl-3 rounded-md 
              dark:text-gray-900 md:text-md xl:text-2xl italic"
              >
                {freshener.base_note1}
              </p>
              <p
                className="bg-primary/50 w-[90%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.base_note2}
              </p>
              <p
                className="bg-primary/30 w-[80%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.base_note3}
              </p>
              <p
                className="bg-primary/10 w-[70%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.base_note4}
              </p>
              <p
                className="bg-primary/10 w-[60%] my-2 pl-3 rounded-md 
              md:text-md xl:text-2xl italic"
              >
                {freshener.base_note5}
              </p>
            </div>
          </div>
          {/* ------------------------------------------------------- */}
          <div>{freshener.description}</div>

          <div className="my-10">
            <Button
              text="Добавить в корзину"
              bgColor="
              group bg-gradient-to-br from-primaryLight/50 via-primary 
              to-primaryDark/70 group-hover:from-primaryLight 
              group-hover:via-primary group-hover:to-primaryDark 
              ring-4 ring-primary"
              textColor="text-white text-xl"
              // handler={props.orderPopupHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleFreshener;
