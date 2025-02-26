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

      const response = await fetch(
        "https://perfume-a7057-default-rtdb.firebaseio.com/FRESHENERS.json"
      );

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
          image: responseData[key].image,
          category: responseData[key].category,
          title: responseData[key].title,
          subtitle: responseData[key].subtitle,
          price: responseData[key].price,
          aroma1: responseData[key].aroma1,
          aroma2: responseData[key].aroma2,
          aroma3: responseData[key].aroma3,
          aroma4: responseData[key].aroma4,
          aroma5: responseData[key].aroma5,
          middle_note1: responseData[key].middle_note1,
          middle_note2: responseData[key].middle_note2,
          middle_note3: responseData[key].middle_note3,
          middle_note4: responseData[key].middle_note4,
          middle_note5: responseData[key].middle_note5,
          base_note1: responseData[key].base_note1,
          base_note2: responseData[key].base_note2,
          base_note3: responseData[key].base_note3,
          base_note4: responseData[key].base_note4,
          base_note5: responseData[key].base_note5,
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
    // <FreshenerContext.Provider value={fresheners}>

    <FreshenerContext.Provider value={FRESHENERS}>
      {props.children}
    </FreshenerContext.Provider>
  );
};

export default FreshenerContextProvider;
