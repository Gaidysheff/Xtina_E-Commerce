import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RelatedProducts.css";

import { BASE_URL } from "../../config";
import Card from "../../components/sharedUI/Card";
import { Link } from "react-router";
import Slider from "react-slick";
import { parentRouteSet1 } from "../../App";

function Arrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const RelatedProducts = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,

    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // ==========================================

  return (
    <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-3 mt-5">
      <div
        className="inline-flex w-full text-[0.7rem] 2xsm:text-sm xsm:text-base
        sm:text-xl my-4 text-brandLightGray italic justify-center"
      >
        <div className="mr-2">Другие предложения по основной ноте:</div>
        <span
          className="before:block before:absolute before:-inset-1 mx-2
          before:-skew-y-3 before:bg-primary relative inline-block"
        >
          <span className="relative text-white dark:text-brandDarkGray font-semibold">
            "{props.note1}"
          </span>
        </span>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {props.similarProduct.map((product) => (
            <div className="px-2" key={product.id}>
              <Card>
                <Link to={`/${parentRouteSet1}/${product.slug}`}>
                  <div className="flex flex-col justify-between">
                    <div
                      className="x-full bg-white dark:bg-brandLightGray
                      rounded-t-xl flex justify-center"
                      data-aos="zoom-in"
                    >
                      <img
                        src={`${BASE_URL}/${product.image}`}
                        alt="product image"
                        className="w-[75%] bg-white dark:bg-brandLightGray"
                      />
                    </div>
                    <div
                      className="p-2 pb-0 text-center min-h-[4.5rem]
                      2xsm:min-h-[6rem] flex flex-col justify-center"
                    >
                      <div
                        className="text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem]"
                        data-aos="flip-left"
                      >
                        {product.brand}
                      </div>
                      <div
                        className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] 
                        font-semibold"
                        data-aos="flip-left"
                      >
                        {product.name}
                      </div>
                    </div>
                    <div className="justify-self-end"></div>
                  </div>
                </Link>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProducts;
