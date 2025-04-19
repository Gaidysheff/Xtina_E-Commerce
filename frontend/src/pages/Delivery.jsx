import { useEffect, useState } from "react";

import { BASE_URL } from "../config.js";
import Loader from "./../components/sharedUI/LoaderKest.jsx";

const Delivery = () => {
  const [delivery, setDelivery] = useState([]);
  const [isLoadData, setIsLoadData] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchDelivery = async () => {
      setIsLoadData(true);

      const response = await fetch(`${BASE_URL}/api/delivery`);

      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, попробуйте перезагрузить страницу."
        );
      }

      const responseData = await response.json();

      const loadedData = [];
      for (const key in responseData) {
        loadedData.push({
          id: key,
          title: responseData[key].title,
          image: responseData[key].image,
          price: responseData[key].price,
          code: responseData[key].code,
          handler: responseData[key].handler,
        });
      }

      setDelivery(loadedData);
      setIsLoadData(false);
    };

    fetchDelivery().catch((error) => {
      setIsLoadData(false);
      setHttpErrorMessage(error.message);
    });
  }, []);

  if (isLoadData) {
    return (
      <section className="text-red-600 text-xl mt-[100px] text-center">
        {/* <p>Загрузка данных с сервера...</p> */}
        <Loader />
      </section>
    );
  }

  if (httpErrorMessage) {
    return (
      <section className="text-red-600 text-xl mt-[100px] text-center">
        <p>{httpErrorMessage}</p>
      </section>
    );
  }
  // --------------------------------------
  // const perfumesFromStorage = JSON.parse(
  //   localStorage.getItem("perfumesObject")
  // );
  // console.log("PerfumesObject:", perfumesFromStorage);
  // ------------------------------------

  return (
    <section className="container" id="about">
      <div
        className="text-lg sm:text-2xl italic text-center my-7 sm:mb-[50px]
        text-primaryDark/80 dark:text-primaryLight/80 font-['Pacifico']
        drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]
        dark:drop-shadow-[5px_5px_6px_rgba(250,250,250,.7)]"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <p>Уважаемый Клиент!</p>{" "}
        <p>
          Мы благодарны Вам за выбор нашей компании и сделаем все возможное,
          чтобы заказ был доставлен как можно скорее.
        </p>
      </div>
      <ul className="mx-3 md:mx-5 xl:w-[80%] xl:mx-auto mb-[50px] lg:mb-[100px]">
        {delivery.map((item, index) => (
          <li
            key={index}
            className="bg-gray-200 dark:bg-gray-700 py-5 my-2 rounded-lg
          grid grid-cols-12 gap-4 items-center text-gray-700 dark:text-gray-300
          text-[0.7rem] 2xsm:text-[0.8rem] xsm:text-[0.9rem] sm:text-[1rem]
          md:text-[1.2rem] lg:text-[1.3rem]"
          >
            <div className="col-span-2 pl-2 md:pl-5 mx-auto">
              <img
                src={item.image}
                alt="icon of delivery option"
                className="h-[40px] lg:h-[50px] xl:h-[60px]"
              />
            </div>

            <div
              className="col-span-8 
            drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]"
            >
              {item.title}
            </div>
            <div
              className="col-span-2 ml-auto pr-2 2xsm:pr-3 xsm:pr-4 sm:pr-5 
            drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]"
            >
              {item.price} ₽
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Delivery;
