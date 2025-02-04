import { BRANDS } from "../../utils/brands";
import React from "react";

const Brands = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-4xl md:text-5xl text-bold text-center my-5">
          Бренды, с которыми мы работаем
        </h1>
      </div>
      <div className="bg-gray-300 py-4">
        <div className="container">
          <div className="sm:my-3">
            <ul
              className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8
            2xl:grid-cols-12 gap-2 lg:gap-4"
            >
              {BRANDS.map((brand, index) => (
                <li
                  key={index}
                  className="h-[70px] md:h-[100px] flex flex-wrap 
                  justify-center items-center"
                >
                  <img
                    src={brand.image}
                    alt="Brand logo"
                    className="h-full w-auto grayscale"
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
