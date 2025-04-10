import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import Button from "./../sharedUI/Button.jsx";
import Slider from "react-slick";
import axios from "axios";
import { parentRouteSet1 } from "../../App.jsx";
import { useNavigate } from "react-router";

const Hero = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: true,
    draggable: true,
    cssEase: "ease-in-out",
  };

  const [hero, setHero] = useState([]);
  const [isLoadData, setIsLoadData] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  const navigate = useNavigate();
  const routeChange = () => {
    let path = `${parentRouteSet1}`;
    navigate(path);
  };

  // ===================== Loading Hero Data ===============

  useEffect(() => {
    setIsLoadData(true);
    axios
      .get(`${BASE_URL}/api/hero`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            "Что-то пошло не так, попробуйте перезагрузить страницу."
          );
        }
        setHero(response.data);
      })
      .catch((error) => {
        console.log("error=", error);
        setHttpErrorMessage(error.message);
      });
    setIsLoadData(false);
  }, []);

  if (isLoadData) {
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

  return (
    <section className="container py-2">
      <div className="my-3">
        <div
          className="overflow-hidden rounded-3xl 
          hero-bg-color border border-gray-300"
        >
          <div className="container sm:pb-0">
            <Slider {...settings}>
              {hero.map((slide) => (
                <div key={slide.id}>
                  <div className="grid grid-cols-3">
                    {/* text content section */}
                    <div
                      className="flex flex-col justify-between gap-2 md:gap-4 
                      px-8 pt-4 lg:p-6 text-center order-2 relative 
                      z-10 col-span-2"
                    >
                      <div className="mt-3">
                        <h1
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          className="text-md xsm:text-xl sm:text-2xl md:text-3xl 
                          lg:text-4xl italic font-['Pacifico'] my-1 md:my-3
                          text-primaryDark/60 dark:text-primary/80 
                          drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]"
                        >
                          {slide.noteHero1.name}
                        </h1>
                        <h1
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          className="text-md xsm:text-xl sm:text-2xl md:text-3xl
                          lg:text-4xl italic font-['Pacifico'] my-1 md:my-3
                          text-primaryDark/60 dark:text-primary/80 
                          drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]"
                        >
                          {slide.noteHero2.name}
                        </h1>
                        <h1
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          className="text-md xsm:text-xl sm:text-2xl md:text-3xl
                          lg:text-4xl italic font-['Pacifico'] my-1 md:my-3
                          text-primaryDark/60 dark:text-primary/80 
                          drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]"
                        >
                          {slide.noteHero3.name}
                        </h1>
                      </div>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        className="text-2xl  xsm:text-3xl md:text-7xl
                        sm:text-[40px] md:text-[50px] text-center font-bold
                        xl:text-[100px] text-white dark:text-brandLightGray 
                        dark:drop-shadow-[10px_10px_6px_rgba(120,120,120,.9)]
                        uppercase drop-shadow-[10px_10px_6px_rgba(0,0,0,.6)]"
                      >
                        {slide.title}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        className="text-md  xsm:text-lg sm:text-xl md:text-3xl 
                        lg:text-4xl font-bold text-center font-['Rubik_Scribble
                        text-white dark:text-brandLightGray uppercase 
                        drop-shadow-[10px_10px_6px_rgba(0,0,0,.9)]
                        dark:drop-shadow-[5px_5px_6px_rgba(200,200,200,.9)]"
                      >
                        {slide.subtitle}
                      </h1>

                      <div
                        data-aos="fade-out"
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="300"
                        className="mt-2 mb-5 mx-auto 
                        drop-shadow-[10px_10px_6px_rgba(0,0,0,.4)]
                        dark:drop-shadow-[10px_10px_6px_rgba(120,120,120,.9)]]"
                      >
                        <Button
                          text="перейти в Каталог"
                          bgColor="group bg-gradient-to-br from-primaryLight 
                          via-primary to-primaryDark/70 ring-4 ring-primary"
                          textColor="text-brandDarkGray font-semibold italic 
                          text-[0.6rem]  xsm:text-[0.8rem] sm:text-lg md:text-xl"
                          paddings="py-2 px-4 md:py-4 md:px-10"
                          handler={routeChange}
                        />
                      </div>
                    </div>
                    {/* image section */}
                    <div
                      className="col-span-1 order-1 my-4 sm:my-10 flex items-center 
                    justify-center "
                    >
                      <div
                        data-aos="zoom-in"
                        className="pl-4 relative z-10 flex items-center"
                      >
                        <img
                          src={slide.image}
                          alt=""
                          className="w-[100px] sm:w-[120px] md:w-[160px] z-40
                          lg:w-[180px] xl:w-[200px] object-contain mx-auto relative
                          drop-shadow-[10px_10px_6px_rgba(0,0,0,.4)]
                          dark:drop-shadow-[10px_10px_6px_rgba(120,120,120,.9)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
