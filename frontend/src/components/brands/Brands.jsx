import { BRANDS } from "../../utils/brands";

const Brands = () => {
  return (
    <section>
      <div className="container">
        <h1
          className="text-lg 2xsm:text-xl xsm:text-2xl sm:text-4xl md:text-5xl 
          text-bold text-center mu-2 sm:my-5"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Бренды, с которыми мы работаем
        </h1>
      </div>
      <div className="bg-gray-300 py-4">
        <div className="container">
          <div className="sm:my-3">
            <ul
              className="grid grid-cols-6 lg:grid-cols-8 2xl:grid-cols-12 
              gap-2 lg:gap-4"
            >
              {BRANDS.map((brand, index) => (
                <li
                  key={index}
                  className="h-[40px] 2xsm:h-[50px] xsm:h-[55px] sm:h-[70px] 
                  md:h-[100px] flex flex-wrap justify-center items-center"
                >
                  <img
                    src={brand.image}
                    alt="Brand logo"
                    className="h-full w-auto grayscale"
                    data-aos="zoom-in"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
