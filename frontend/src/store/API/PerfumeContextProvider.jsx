import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import PerfumeContext from "./perfume-context.js";

const PerfumeContextProvider = (props) => {
  const [perfumes, setPerfumes] = useState([]);

  const [isLoadPerfumes, setIsLoadPerfumes] = useState(false);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchPerfumes = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoadPerfumes(true);

      const response = await fetch(`${BASE_URL}/api/perfumes`);

      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, попробуйте перезагрузить страницу."
        );
      }

      const responseData = await response.json();

      const loadedPerfumes = [];

      for (const key in responseData) {
        loadedPerfumes.push({
          id: key,
          slug: responseData[key].slug,
          image: responseData[key].image,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price1: responseData[key].price1,
          price2: responseData[key].price2,
          price3: responseData[key].price3,
          price4: responseData[key].price4,
          price5: responseData[key].price5,
          perfumer: responseData[key].perfumer,
          country: responseData[key].country,
          year: responseData[key].year,
          sex: responseData[key].sex,
          compound1: responseData[key].compound1,
          compound2: responseData[key].compound2,
          compound3: responseData[key].compound3,
          compound4: responseData[key].compound4,
          compound5: responseData[key].compound5,
          family1: responseData[key].family1,
          family2: responseData[key].family2,
          family3: responseData[key].family3,
          family4: responseData[key].family4,
          family5: responseData[key].family5,
          note1: responseData[key].no1te,
          note2: responseData[key].not2e,
          note3: responseData[key].note3,
          note4: responseData[key].note4,
          note5: responseData[key].note5,
          chord1: responseData[key].chord1,
          chord2: responseData[key].chord2,
          chord3: responseData[key].chord3,
          chord4: responseData[key].chord4,
          chord5: responseData[key].chord5,
          description: responseData[key].description,
          feedback: responseData[key].feedback,
        });
      }

      setPerfumes(loadedPerfumes);
      setIsLoadPerfumes(false);
    };

    fetchPerfumes();

    fetchPerfumes().catch((error) => {
      setIsLoadPerfumes(false);
      setHttpErrorMessage(error.message);
    });
  }, []);

  if (isLoadPerfumes) {
    return (
      <section className="text-red-600 text-xl mt-[100px] text-center">
        <p>Загрузка данных с сервера...</p>
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
    <PerfumeContext.Provider value={perfumes}>
      {props.children}
    </PerfumeContext.Provider>
  );
};

export default PerfumeContextProvider;
