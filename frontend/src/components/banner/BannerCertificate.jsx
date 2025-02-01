import Button from "../sharedUI/Button";
import Certificate_light from "../../assets/banners/Certificate-light.png";

const BannerCertificate = () => {
  return (
    <div className="my-3">
      <div className="min-h-[550px] flex justify-center items-center">
        <div className="">
          <div
            className="bg-primary grid grid-cols-1 md:grid-cols-3 gap-6 items-center
          text-white rounded-3xl"
            // style={{ backgroundColor: props.data.bgColor }}
          >
            {/* first column */}
            <div
              className="mb-6 md:mb-0 p-6 sm:p-8 md:p-6 xl:pr-16 2xl:pr-4
            text-center md:text-start"
            >
              <p
                data-aos="slide-right"
                className="text-xl md:text-md xl:text-2xl 2xl:text-4xl leading-5 text-gray-500"
              >
                Приобрести подарочный сертификат
              </p>
              <h1
                data-aos="zoom-out"
                className="py-3 text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl 
                uppercase font-bold"
              >
                на любую сумму
              </h1>
              <p
                data-aos="fade-up"
                className="text-xl md:text-md xl:text-2xl 2xl:text-4xl leading-5 text-gray-500"
              >
                с{" "}
                <span className="font-semibold italic">бессрочным сроком</span>{" "}
                использования
              </p>
            </div>
            {/* second column */}
            <div data-aos="zoom-in" className="h-full flex items-center">
              <img
                src={Certificate_light}
                alt=""
                className="scale-150 w-[250px] md:w-[370px] mx-auto 
                drop-shadow-2xl object-cover rounded-3xl border-2 border-primary"
              />
            </div>
            {/* third column */}
            <div
              className="mt-10 md:mt-0 flex flex-col justify-center gap-4 
              p-6 sm:p-8 md:p-6 xl:pl-16 2xl:pl-4"
            >
              <p
                data-aos="fade-up"
                className="text-xl md:text-md xl:text-3xl 2xl:text-5xl 
                leading-5 text-gray-500 text-center md:text-end"
              >
                Оформить
              </p>
              <p
                data-aos="zoom-out"
                className="uppercase text-xl sm:text-2xl lg:text-3xl 
                xl:text-5xl 2xl:text-6xl font-semibold  text-center md:text-end"
              >
                онлайн сертификат
              </p>
              <p
                data-aos="fade-up"
                className="text-xl md:text-md xl:text-3xl 2xl:text-5xl 
                leading-5 text-gray-500 text-center md:text-end"
              >
                прямо сейчас
              </p>
              <div
                data-aos="fade-up"
                data-aos-offset="0"
                className="self-center"
              >
                <Button
                  text="Оформить"
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
  );
};

export default BannerCertificate;
