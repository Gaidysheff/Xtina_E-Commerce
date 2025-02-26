import { useEffect, useState } from "react";

import { CONSUMABLES } from "../utils/consumables.js";
import ConsumablesContext from "./consumables-context.js";
import Loader from "./../components/sharedUI/LoaderKest.jsx";

const ConsumablesContextProvider = (props) => {
  const [consumables, setConsumables] = useState([]);
  const [isLoadConsumables, setIsLoadConsumables] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchConsumables = async () => {
      setIsLoadConsumables(true);

      const response = await fetch(
        "https://perfume-a7057-default-rtdb.firebaseio.com/CONSUMABLES.json"
      );

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
          image: responseData[key].image,
          category: responseData[key].category,
          title: responseData[key].title,
          subtitle: responseData[key].subtitle,
          price: responseData[key].price,
          aroma: responseData[key].aroma,
        });
      }

      setConsumables(loadedConsumables);
      setIsLoadConsumables(false);
    };

    fetchConsumables().catch((error) => {
      setIsLoadConsumables(false);
      setHttpErrorMessage(error.message);
    });
  }, []);

  if (isLoadConsumables) {
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
    // <ConsumablesContext.Provider value={CONSUMABLES}>
    <ConsumablesContext.Provider value={consumables}>
      {props.children}
    </ConsumablesContext.Provider>
  );
};

export default ConsumablesContextProvider;
