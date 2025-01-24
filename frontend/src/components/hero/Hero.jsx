import Button from "./../sharedUI/Button.jsx";
import Image1 from "../../assets/hero/Dior_Sauvage.png";
import Image2 from "../../assets/hero/AfnanCherryBouquet.png";
import Image3 from "../../assets/hero/Juliette.png";
import Slider from "react-slick";

const HeroData = [
  {
    id: 1,
    image: Image1,
    title: "Dior Sauvage",
    subtitle: "Eau De Parfum",
    aroma1: "Свежий пряный",
    aroma2: "Цитрусовый",
    aroma3: "Амбровый",
  },
  {
    id: 2,
    image: Image2,
    title: "Cherry Bouquet",
    subtitle: "Afnan",
    aroma1: "Вишневый",
    aroma2: "Фруктовый",
    aroma3: "Сладкий",
  },
  {
    id: 3,
    image: Image3,
    title: "Juliette has a gun",
    subtitle: " Ex Vetiver",
    aroma1: "Цитрусовый",
    aroma2: "Фужерный",
    aroma3: "Амбровый",
  },
];

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
  return (
    <div className="my-3">
      {/* <div className="rounded-3xl bg-brandGreen/50 px-4 py-2">
        Слайдер лучших товаров или Новинок Слайдер лучших товаров или Новинок
      </div> */}
      <div
        className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[350px] 
        hero-bg-color border border-gray-300"
      >
        <div className="container sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((slide) => (
              <div key={slide.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div
                    className="flex flex-col justify-center gap-4 sm:pl-3
									sm:pt-0 text-center sm:text-left order-2 sm:order-1
									relative z-10"
                  >
                    <div className="mt-3">
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl md:text-3xl lg:text-4xl italic 
                        text-red-900/50 drop-shadow-[10px_10px_6px_rgba(0,0,0,.9)]"
                      >
                        {slide.aroma1}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl md:text-3xl lg:text-4xl italic 
                        text-red-900/50 drop-shadow-[10px_10px_6px_rgba(0,0,0,.9)]
                        sm:text-center"
                      >
                        {slide.aroma2}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl md:text-3xl lg:text-4xl italic 
                        text-red-900/50 drop-shadow-[10px_10px_6px_rgba(0,0,0,.9)]
                        sm:text-right"
                      >
                        {slide.aroma3}
                      </h1>
                    </div>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-7xl sm:text-[40px] md:text-[50px] 
                      xl:text-[100px] text-white dark:text-white/5 font-bold 
                      uppercase drop-shadow-[10px_10px_6px_rgba(0,0,0,.6)]"
                    >
                      {slide.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl md:text-3xl lg:text-4xl font-bold 
                      text-white dark:text-white/5 uppercase 
                      drop-shadow-[10px_10px_6px_rgba(0,0,0,.4)]"
                    >
                      {slide.subtitle}
                    </h1>

                    <div
                      data-aos="fade-out"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className="my-[30px] drop-shadow-[10px_10px_6px_rgba(200,20,0,.4)]"
                    >
                      <Button
                        text="перейти в Категорию"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={props.orderPopupHandler}
                      />
                    </div>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2 my-10 flex items-center justify-center">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10 flex items-center"
                    >
                      <img
                        src={slide.image}
                        alt=""
                        className="w-[150px]
											sm:w-[200px] sm:scale-105 lg:scale-110
											object-contain mx-auto
											drop-shadow-[10px_10px_6px_rgba(0,0,0,.4)] relative z-40"
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
  );
};

export default Hero;
