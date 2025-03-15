import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import Card from "./../../components/sharedUI/Card.jsx";
import { Link } from "react-router";
import { NumericFormat } from "react-number-format";
import axios from "axios";

const Fresheners = () => {
  const [fresheners, setFresheners] = useState([]);
  const [isLoadData, setIsLoadData] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    setIsLoadData(true);
    axios
      .get(`${BASE_URL}/fresheners`)
      // .get("http://127.0.0.1:8000/api/Fresheners")
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            "Что-то пошло не так, попробуйте перезагрузить страницу."
          );
        }
        setFresheners(response.data);
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
    <section className="container py-10">
      <div
        className="grid grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-3 mx-3 lg:gap-10 lg:mx-5"
      >
        {fresheners.map((product) => (
          <Card key={product.id}>
            <Link to={`${product.slug}`}>
              <div className="inside-card flex flex-col justify-between">
                <div
                  className="x-full p-5 bg-white dark:bg-brandLightGray
                  rounded-t-xl flex justify-center"
                  data-aos="zoom-in"
                >
                  <img
                    src={product.image}
                    alt="product image"
                    className="w-[75%] bg-white dark:bg-brandLightGray"
                  />
                </div>

                <div className="p-2 pb-0">
                  <div
                    className="text-[0.7rem] md:text-[0.9rem] lg:text-lg"
                    data-aos="flip-left"
                  >
                    {product.category}
                  </div>
                  <div
                    className="text-[0.7rem] md:text-[0.9rem] lg:text-lg"
                    data-aos="flip-left"
                  >
                    {product.title}
                  </div>

                  <div
                    className="text-[0.8rem] md:text-[1.1rem] lg:text-xl 
                    font-semibold"
                    data-aos="flip-left"
                  >
                    {product.subtitle}
                  </div>
                </div>
                <div className="justify-self-end">
                  <NumericFormat
                    className="flex justify-center text-2xl text-primaryDark
                        dark:text-primaryLight pb-2"
                    value={product.price}
                    displayType={"text"}
                    decimalSeparator=","
                    thousandSeparator="."
                    suffix={" ₽"}
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                  />
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Fresheners;
