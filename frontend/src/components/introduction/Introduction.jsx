import { GiCheckMark } from "react-icons/gi";
import Logo_black from "../../assets/shared/Logo_black.svg";
import Logo_primary from "../../assets/shared/Logo_primary.svg";
import Xtina from "../../assets/introduction/xtina.png";

const Introduction = (props) => {
  return (
    <section className="container py-2">
      <div className="grid grid-cols-3 gap-2 md:mb-5 lg:mb-10">
        <div className="col-span-2">
          <div
            className="inline-flex justify-between mb-[15px] sm:mb-[30px] 
            md:mb-[50px] lg:mb-[70px] xl:mb-[90px] 2xl:mb-[100px]"
          >
            <div className="w-[80%]">
              {props.theme === "light" ? (
                <div className="">
                  <img src={Logo_black} alt="Company logo" />
                </div>
              ) : (
                <div className="">
                  <img src={Logo_primary} alt="Company logo" />
                </div>
              )}
            </div>
            <p
              className="w-full text-center text-md sm:text-lg md:text-2xl 
              lg:text-4xl xl:text-5xl 2xl:text-6xl self-end mb-3"
            >
              – это
            </p>
          </div>
          <div
            className="flex flex-col text-[11px] sm:text-xl md:text-2xl 
            lg:text-4xl xl:text-5xl 2xl:text-6xl"
          >
            <div
              className="inline-flex sm:mb-1 md:mb-2 lg:mb-3 xl:mb-5 2xl:mb-7"
              data-aos="slide-right"
            >
              <span>
                <GiCheckMark />
              </span>
              <p className="ml-1">Только ОРИГИНАЛЬНАЯ парфюмерия</p>
            </div>
            <div
              className="inline-flex sm:mb-1 md:mb-2 lg:mb-3 xl:mb-5 2xl:mb-7"
              data-aos="slide-right"
            >
              <span>
                <GiCheckMark />
              </span>
              <p className="ml-1">Распив 3, 5, 10, 20, 30 ml</p>
            </div>
            <div
              className="inline-flex sm:mb-1 md:mb-2 lg:mb-3 xl:mb-5 2xl:mb-7"
              data-aos="slide-right"
            >
              <span>
                <GiCheckMark />
              </span>
              <p className="ml-1">Подбор аромата от Аромастилиста</p>
            </div>
            <div
              className="inline-flex sm:mb-1 md:mb-2 lg:mb-3 xl:mb-5 2xl:mb-7"
              data-aos="slide-right"
            >
              <span>
                <GiCheckMark />
              </span>
              <p className="ml-1">Полноразмерные флаконы под заказ</p>
            </div>
            <div
              className="inline-flex sm:mb-1 md:mb-2 lg:mb-3 xl:mb-5 2xl:mb-7"
              data-aos="slide-right"
            >
              <span>
                <GiCheckMark />
              </span>
              <p className="ml-1">Приятные цены</p>
            </div>
            <div
              className="inline-flex sm:mb-1 md:mb-2 lg:mb-3 xl:mb-5 2xl:mb-7"
              data-aos="slide-right"
            >
              <span>
                <GiCheckMark />
              </span>
              <p className="ml-1">Доставка по всей России</p>
            </div>
          </div>
        </div>
        <div className="flex items-center" data-aos="flip-right">
          <img src={Xtina} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
