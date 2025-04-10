import BottleVolume from "./BottleVolume";
import Bottles from "../../assets/banners/Bottles.png";

const BannerBottles = () => {
  return (
    <section className="container">
      <div className="my-3">
        <div
          className="min-h-[400px] md:min-h-[230px] lg:min-h-[300px] 
		xl:min-h-[370px] flex justify-center items-center"
        >
          <div className="w-full">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 
              items-center
              text-white rounded-3xl p-4 sm:p-7 md:p-4 lg:pl-7 xl:pl-10
              bg-gradient-to-br from-gray-200 to-gray-700"
            >
              {/* first column */}
              <div className="h-full">
                <div
                  className="h-full flex flex-col items-start 
                justify-center w-full"
                >
                  {/* ------------------------------------------------- */}

                  <div
                    className="flex flex-row w-full justify-center sm:justify-around
                md:hidden"
                  >
                    <BottleVolume volume="3ml" />
                    <BottleVolume volume="5ml" />
                    <BottleVolume volume="10ml" />
                    <BottleVolume volume="20ml" />
                    <BottleVolume volume="30ml" />
                  </div>

                  <div className="hidden md:flex md:flex-row md:w-full md:justify-start">
                    <BottleVolume volume="3ml" />
                    <BottleVolume volume="5ml" />
                  </div>
                  <div className="hidden md:flex md:flex-row md:w-full md:justify-start">
                    <BottleVolume volume="10ml" />
                    <BottleVolume volume="20ml" />
                    <BottleVolume volume="30ml" />
                  </div>

                  {/* ------------------------------------------------- */}
                  {/* <div className="flex flex-row w-full justify-center md:justify-start">
                    <div
                      className="m-1 w-[80px] h-[80px]
                    md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px] 
                    xl:w-[115px] xl:h-[115px] 2xl:w-[143px] 2xl:h-[143px]"
                      data-aos="flip-up"
                      data-aos-duration="500"
                    >
                      <div
                        className="w-full h-full p-[5px] md:p-[3px] lg:p-[5px]
                        text-lg md:text-xl font-medium text-gray-900 rounded-lg 
                        group bg-gradient-to-br from-primaryLight via-primary to-primaryDark 
                        group-hover:from-primaryLight group-hover:via-primary 
                        group-hover:to-primaryDark dark:text-white"
                      >
                        <div
                          className="w-full h-full bg-gray-500 rounded-md
                        flex justify-center items-center"
                        >
                          <span
                            className="text-transparent bg-clip-text 
                            bg-gradient-to-br from-primaryLight via-primary 
                            to-primaryDark md:text-lg lg:text-2xl xl:text-4xl
                            2xl:text-5xl"
                          >
                            3 ml
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="m-1 w-[80px] h-[80px]
                    md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px] 
                    xl:w-[115px] xl:h-[115px] 2xl:w-[143px] 2xl:h-[143px]"
                      data-aos="flip-up"
                      data-aos-duration="500"
                    >
                      <div
                        className="w-full h-full p-[5px] md:p-[3px] lg:p-[5px]
                        text-lg md:text-xl font-medium text-gray-900 rounded-lg 
                        group bg-gradient-to-br from-primaryLight via-primary to-primaryDark 
                        group-hover:from-primaryLight group-hover:via-primary 
                        group-hover:to-primaryDark dark:text-white"
                      >
                        <div
                          className="w-full h-full bg-gray-500 rounded-md
                        flex justify-center items-center"
                        >
                          <span
                            className="text-transparent bg-clip-text 
                            bg-gradient-to-br from-primaryLight via-primary 
                            to-primaryDark md:text-lg lg:text-2xl xl:text-4xl
                            2xl:text-5xl"
                          >
                            5 ml
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-center md:justify-start">
                    <div
                      className="m-1 w-[80px] h-[80px]
                    md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px] 
                    xl:w-[115px] xl:h-[115px] 2xl:w-[143px] 2xl:h-[143px]"
                      data-aos="flip-up"
                      data-aos-duration="500"
                    >
                      <div
                        className="w-full h-full p-[5px] md:p-[3px] lg:p-[5px]
                        text-lg md:text-xl font-medium text-gray-900 rounded-lg 
                        group bg-gradient-to-br from-primaryLight via-primary to-primaryDark 
                        group-hover:from-primaryLight group-hover:via-primary 
                        group-hover:to-primaryDark dark:text-white"
                      >
                        <div
                          className="w-full h-full bg-gray-500 rounded-md
                        flex justify-center items-center"
                        >
                          <span
                            className="text-transparent bg-clip-text 
                            bg-gradient-to-br from-primaryLight via-primary 
                            to-primaryDark md:text-lg lg:text-2xl xl:text-4xl
                            2xl:text-5xl"
                          >
                            10 ml
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="m-1 w-[80px] h-[80px]
                    md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px] 
                    xl:w-[115px] xl:h-[115px] 2xl:w-[143px] 2xl:h-[143px]"
                      data-aos="flip-up"
                      data-aos-duration="500"
                    >
                      <div
                        className="w-full h-full p-[5px] md:p-[3px] lg:p-[5px]
                        text-lg md:text-xl font-medium text-gray-900 rounded-lg 
                        group bg-gradient-to-br from-primaryLight via-primary to-primaryDark 
                        group-hover:from-primaryLight group-hover:via-primary 
                        group-hover:to-primaryDark dark:text-white"
                      >
                        <div
                          className="w-full h-full bg-gray-500 rounded-md
                        flex justify-center items-center"
                        >
                          <span
                            className="text-transparent bg-clip-text 
                            bg-gradient-to-br from-primaryLight via-primary 
                            to-primaryDark md:text-lg lg:text-2xl xl:text-4xl
                            2xl:text-5xl"
                          >
                            20 ml
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="m-1 w-[80px] h-[80px]
                    md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px] 
                    xl:w-[115px] xl:h-[115px] 2xl:w-[143px] 2xl:h-[143px]"
                      data-aos="flip-up"
                      data-aos-duration="500"
                    >
                      <div
                        className="w-full h-full p-[5px] md:p-[3px] lg:p-[5px]
                        text-lg md:text-xl font-medium text-gray-900 rounded-lg 
                        group bg-gradient-to-br from-primaryLight via-primary to-primaryDark 
                        group-hover:from-primaryLight group-hover:via-primary 
                        group-hover:to-primaryDark dark:text-white"
                      >
                        <div
                          className="w-full h-full bg-gray-500 rounded-md
                        flex justify-center items-center"
                        >
                          <span
                            className="text-transparent bg-clip-text 
                            bg-gradient-to-br from-primaryLight via-primary 
                            to-primaryDark md:text-lg lg:text-2xl xl:text-4xl
                            2xl:text-5xl"
                          >
                            30 ml
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* second column */}
              <div data-aos="zoom-in" className="md:mb-0 text-center">
                <p
                  data-aos="fade-up"
                  className="text-lg lg:text-2xl xl:text-3xl 2xl:text-46xl 
                  text-center font-['Pacifico']
                  drop-shadow-[10px_10px_6px_rgba(0,0,0,.7)]"
                >
                  У нас вы можете приобрести
                </p>
                <p
                  data-aos="zoom-out"
                  className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl 
                  text-center text-white uppercase font-bold 
                  my-2 md:my-4 lg:my-7 xl:my-10 font-['Rubik_Scribble']
                  drop-shadow-[10px_10px_6px_rgba(0,0,0,.9)]"
                >
                  Распив
                </p>
                <p
                  data-aos="fade-up"
                  className="text-xl sm:text-3xl md:text-lg lg:text-2xl xl:text-3xl 
                  2xl:text-46xl text-center font-['Pacifico']
                  drop-shadow-[10px_10px_6px_rgba(0,0,0,.7)]"
                >
                  в объёме 3, 5, 10, 20, 30 мл.
                </p>
              </div>
              {/* third column */}
              <div className="w-full px-8 py-4 xsm:py-6 lg:py-8 flex items-center justify-center">
                <div data-aos="flip-left" data-aos-duration="1000" className="">
                  <img
                    src={Bottles}
                    alt="Подарочный сертификат"
                    className="w-[250px] md:w-[370px] mx-auto object-cover 
                    drop-shadow-[0_10px_20px_rgba(255,209,15,0.6)]"
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

export default BannerBottles;
