import { useEffect, useState } from "react";

import { FRESHENERS } from "../utils/fresheners.js";
import FreshenerContext from "./freshener-context.js";
import Loader from "./../components/sharedUI/LoaderKest.jsx";

const FreshenerContextProvider = (props) => {
  const [fresheners, setFresheners] = useState([]);
  const [isLoadFresheners, setIsLoadFresheners] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchFresheners = async () => {
      setIsLoadFresheners(true);

      const response = await fetch("http://127.0.0.1:8000/api/fresheners");
      // const response = await fetch(
      //   "https://perfume-a7057-default-rtdb.firebaseio.com/FRESHENERS.json"
      // );

      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, попробуйте перезагрузить страницу."
        );
      }

      const responseData = await response.json();

      const loadedFresheners = [];
      for (const key in responseData) {
        loadedFresheners.push({
          id: key,
          title: responseData[key].title,
          subtitle: responseData[key].subtitle,
          slug: responseData[key].slug,
          image: responseData[key].image,
          price: responseData[key].price,
          aroma1: responseData[key].aroma1.name,
          aroma2: responseData[key].aroma2.name,
          aroma3: responseData[key].aroma3.name,
          aroma4: responseData[key].aroma4.name,
          aroma5: responseData[key].aroma5.name,
          topNote1: responseData[key].topNote1.name,
          topNote2: responseData[key].topNote2.name,
          topNote3: responseData[key].topNote3.name,
          topNote4: responseData[key].topNote4.name,
          topNote5: responseData[key].topNote5.name,
          middleNote1: responseData[key].middleNote1.name,
          middleNote2: responseData[key].middleNote2.name,
          middleNote3: responseData[key].middleNote3.name,
          middleNote4: responseData[key].middleNote4.name,
          middleNote5: responseData[key].middleNote5.name,
          baseNote1: responseData[key].baseNote1.name,
          baseNote2: responseData[key].baseNote2.name,
          baseNote3: responseData[key].baseNote3.name,
          baseNote4: responseData[key].baseNote4.name,
          baseNote5: responseData[key].baseNote5.name,
          description: responseData[key].description,
        });
      }

      setFresheners(loadedFresheners);
      setIsLoadFresheners(false);
    };

    fetchFresheners().catch((error) => {
      setIsLoadFresheners(false);
      setHttpErrorMessage(error.message);
    });
  }, []);

  if (isLoadFresheners) {
    return (
      <section className="text-red-600 text-xl mt-[100px] text-center">
        {/* <p>Загрузка данных с сервера...</p> */}
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
    // <FreshenerContext.Provider value={FRESHENERS}>
    <FreshenerContext.Provider value={fresheners}>
      {props.children}
    </FreshenerContext.Provider>
  );
};

export default FreshenerContextProvider;
