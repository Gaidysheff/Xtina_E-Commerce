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
        // console.log("Response=", response);
        // console.log("Response.data=", response.data);
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
          className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[350px] 
          hero-bg-color border border-gray-300"
        >
          <div className="container sm:pb-0">
            <Slider {...settings}>
              {hero.map((slide) => (
                <div key={slide.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text content section */}
                    <div
                      className="flex flex-col justify-center gap-2 md:gap-4 sm:pl-3 
                      sm:pt-0 text-center sm:text-left order-2 sm:order-1
                      relative z-10"
                    >
                      <div className="mt-3">
                        <h1
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          className="text-2xl md:text-3xl lg:text-4xl italic 
                          text-primaryDark/60 dark:text-primary/80 font-['Pacifico']
                          drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)] my-1 md:my-3"
                        >
                          {slide.noteHero1.name}
                        </h1>
                        <h1
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          className="text-2xl md:text-3xl lg:text-4xl italic 
                          text-primaryDark/60 dark:text-primary/80 font-['Pacifico']
                          drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]
                          sm:text-center my-1 md:my-3"
                        >
                          {slide.noteHero2.name}
                        </h1>
                        <h1
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          className="text-2xl md:text-3xl lg:text-4xl italic 
                          text-primaryDark/60 dark:text-primary/80 font-['Pacifico']
                          drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]
                          sm:text-right my-1 md:my-3"
                        >
                          {slide.noteHero3.name}
                        </h1>
                      </div>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        className="text-5xl md:text-7xl sm:text-[40px] md:text-[50px] 
                        xl:text-[100px] text-white dark:text-brandLightGray 
                        font-bold dark:drop-shadow-[10px_10px_6px_rgba(120,120,120,.9)]
                        uppercase drop-shadow-[10px_10px_6px_rgba(0,0,0,.6)]"
                      >
                        {slide.title}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        className="text-2xl md:text-3xl lg:text-4xl font-bold 
                        text-white dark:text-brandLightGray uppercase 
                        drop-shadow-[10px_10px_6px_rgba(0,0,0,.9)]
                        dark:drop-shadow-[5px_5px_6px_rgba(200,200,200,.9)]
                        font-['Rubik_Scribble']"
                      >
                        {slide.subtitle}
                      </h1>

                      <div
                        data-aos="fade-out"
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="300"
                        className="my-[30px] drop-shadow-[10px_10px_6px_rgba(0,0,0,.4)]
                        dark:drop-shadow-[10px_10px_6px_rgba(120,120,120,.9)]]"
                      >
                        <Button
                          text="перейти в Каталог"
                          bgColor="group bg-gradient-to-br from-primaryLight 
                          via-primary to-primaryDark/70 ring-4 ring-primary"
                          textColor="text-brandDarkGray font-semibold italic 
                          text-sm md:text-lg"
                          paddings="py-2 px-4 md:py-4 md:px-10"
                          handler={routeChange}
                        />
                      </div>
                    </div>
                    {/* image section */}
                    <div
                      className="order-1 sm:order-2 my-4 sm:my-10 flex items-center 
                    justify-center"
                    >
                      <div
                        data-aos="zoom-in"
                        className="relative z-10 flex items-center"
                      >
                        <img
                          src={slide.image}
                          alt=""
                          className="w-[100px] sm:w-[200px] sm:scale-105 lg:scale-110
                          object-contain mx-auto relative z-40
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
