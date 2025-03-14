import { useEffect, useState } from "react";

import { BASE_URL } from "../config.js";
import DeliveryContext from "./delivery-context.js";
import Loader from "./../components/sharedUI/LoaderKest.jsx";

const DeliveryContextProvider = (props) => {
  const [delivery, setDelivery] = useState([]);
  const [isLoadData, setIsLoadData] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchDelivery = async () => {
      setIsLoadData(true);

      const response = await fetch(`${BASE_URL}/delivery`);

      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, попробуйте перезагрузить страницу."
        );
      }

      const responseData = await response.json();

      const loadedConsumables = [];
      for (const key in responseData) {
        loadedConsumables.push({
          id: key,
          title: responseData[key].title,
          image: responseData[key].image,
          price: responseData[key].price,
          code: responseData[key].code,
          handler: responseData[key].handler,
        });
      }

      setDelivery(loadedConsumables);
      setIsLoadData(false);
    };

    fetchDelivery().catch((error) => {
      setIsLoadConsumables(false);
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

  return (
    <DeliveryContext.Provider value={delivery}>
      {props.children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryContextProvider;
