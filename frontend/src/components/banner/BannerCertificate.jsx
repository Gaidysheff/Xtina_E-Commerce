import Button from "../sharedUI/Button";
import Certificate_dark from "../../assets/banners/Certificate_dark.png";
import Certificate_light from "../../assets/banners/Certificate-light.png";

const BannerCertificate = (props) => {
  return (
    <section className="container py-2">
      <div className="my-1 md:my-3">
        <div
          className="min-h-[550px] md:min-h-[320px] lg:min-h-[450px] 
          xl:min-h-[550px] 2xl:min-h-[700px] flex justify-center items-center"
        >
          <div className="w-full">
            <div
              className="bg-primary grid grid-cols-1 md:grid-cols-3 
              gap-2 md:gap-6 items-center text-white rounded-3xl"
              // style={{ backgroundColor: props.data.bgColor }}
            >
              {/* first column */}
              <div
                className="md:mb-0 p-3 xsm:p-6 xl:pr-16 2xl:pr-4
                text-center md:text-start"
              >
                <p
                  data-aos="slide-right"
                  className="text-[1rem] xsm:text-[1.2rem] md:text-md xl:text-2xl 2xl:text-4xl leading-5 text-gray-500"
                >
                  Приобрести подарочный сертификат
                </p>
                <h1
                  data-aos="zoom-out"
                  className="py-1 md:py-3 text-[1.2rem] xsm:text-[1.5rem] 
                  lg:text-4xl xl:text-5xl 2xl:text-7xl uppercase font-bold"
                >
                  на любую сумму
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-[1rem] xsm:text-[1.2rem] md:text-base xl:text-2xl 2xl:text-4xl 
                  leading-5 text-gray-500"
                >
                  с{" "}
                  <span className="font-semibold italic">
                    бессрочным сроком
                  </span>{" "}
                  использования
                </p>
              </div>
              {/* second column */}
              <div data-aos="zoom-in" className="h-full flex items-center">
                {props.theme === "light" ? (
                  <img
                    src={Certificate_light}
                    alt="Подарочный сертификат"
                    className="w-[100%] scale-105 md:scale-150
                    mx-auto drop-shadow-2xl object-cover rounded-3xl 
                    border-2 border-primary"
                  />
                ) : (
                  <img
                    src={Certificate_dark}
                    alt="Подарочный сертификат"
                    className="w-[100%] scale-105 md:w-[370px] md:scale-150
                    mx-auto drop-shadow-2xl object-cover rounded-3xl 
                    border-2 border-primary"
                  />
                )}
              </div>
              {/* third column */}
              <div
                className="md:mt-0 flex flex-col justify-center gap-1 md:gap-4 
                p-4 sm:p-8 md:p-6 xl:pl-16 2xl:pl-4"
              >
                <p
                  data-aos="fade-up"
                  className="text-[1rem] xsm:text-[1.2rem] md:text-base 
                  xl:text-3xl 2xl:text-5xl leading-5 text-gray-500 
                  text-center md:text-end"
                >
                  Оформить
                </p>
                <p
                  data-aos="zoom-out"
                  className="uppercase text-[1.2rem] xsm:text-[1.5rem] lg:text-3xl 
                  xl:text-5xl 2xl:text-6xl font-semibold  text-center md:text-end"
                >
                  онлайн сертификат
                </p>
                <p
                  data-aos="fade-up"
                  className="text-[1rem] xsm:text-[1.2rem] md:text-base 
                  xl:text-3xl 2xl:text-5xl leading-5 text-gray-500 
                  text-center md:text-end"
                >
                  прямо сейчас
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  className="self-center md:self-end"
                >
                  <Button
                    text="Оформить"
                    bgColor="group rounded-full
                    bg-gradient-to-br from-brandLightGray via-gray-400 
                    to-brandDarkGray ring-4 ring-brandDarkGray
                    group-hover:from-gray-100 group-hover:via-gray-500 
                    group-hover:to-gray-700"
                    textColor="text-white text-lg"
                    paddings="py-2 px-4 my-3 sm:mt-6"
                    // handler={props.orderPopupHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCertificate;
