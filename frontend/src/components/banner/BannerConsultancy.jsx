import Aroma_wheel from "../../assets/banners/Aroma_select.png";
import Button from "../sharedUI/Button";

const BannerConsultancy = () => {
  return (
    <section className="container py-2">
      <div className="my-3">
        <div className="min-h-[550px] md:min-h-[350px] lg:min-h-[550px] flex justify-center items-center">
          <div className="">
            <div
              className="bg-primary grid grid-cols-1 md:grid-cols-3 gap-6 items-center
            text-white rounded-3xl"
              // style={{ backgroundColor: props.data.bgColor }}
            >
              {/* first column */}
              <div
                className="md:my-0 p-4 md:p-0 md:pl-4 lg:pl-6
                xl:pr-16 2xl:pr-4 text-center md:text-start"
              >
                <h1
                  data-aos="zoom-out"
                  className="py-3 text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl 
                  uppercase font-bold xl:leading-snug"
                >
                  Индивидуальный подбор аромата
                </h1>
                <p
                  data-aos="slide-right"
                  className="text-xl md:mt-5 md:text-md lg:text-2xl xl:text-3xl 
                  2xl:text-3xl leading-5 text-gray-500"
                >
                  в парфюм-баре
                </p>
                <p
                  data-aos="fade-up"
                  className="text-xl md:text-md lg:text-2xl xl:text-3xl 
                  2xl:text-3xl leading-5 text-gray-500"
                >
                  и онлайн
                </p>
              </div>
              {/* second column */}
              <div data-aos="zoom-in" className="h-full flex items-center">
                <img
                  src={Aroma_wheel}
                  alt="Подарочный сертификат"
                  className="scale-125 w-[250px] md:w-[370px] mx-auto 
                  drop-shadow-2xl object-cover md:ml-8 2xl:ml-[10rem]"
                />
              </div>
              {/* third column */}
              <div
                className="md:mt-0 flex flex-col justify-center gap-4 
                p-4 md:pr-5 lg:pr-62xl:pr-12"
              >
                <div>
                  <p
                    data-aos="fade-up"
                    className="text-xl md:text-md lg:text-xl xl:text-3xl 2xl:text-5xl 
                    leading-5 text-gray-500 font-semibold italic text-center 
                    md:text-end md:mb-6 md:text-white"
                  >
                    Записаться на подбор аромата
                  </p>

                  <p
                    data-aos="fade-up"
                    className="text-xl md:text-md xl:text-3xl 2xl:text-4xl 
                    leading-5 text-gray-500 font-semibold italic text-center 
                    md:text-end xl:mb-5"
                  >
                    прямо сейчас
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  className="self-center md:self-end"
                >
                  <Button
                    text="Записаться"
                    bgColor="group rounded-full
                    bg-gradient-to-br from-brandLightGray via-gray-400 
                    to-brandDarkGray ring-4 ring-brandDarkGray
                    group-hover:from-gray-100 group-hover:via-gray-500 
                    group-hover:to-gray-700"
                    textColor="text-white text-lg"
                    paddings="py-2 px-4"
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

export default BannerConsultancy;
