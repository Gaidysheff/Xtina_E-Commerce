import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import PerfumeContext from "./perfume-context.js";

const PerfumeContextProvider = (props) => {
  const [perfumes, setPerfumes] = useState([]);

  const [isLoadData, setIsLoadData] = useState(false);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchPerfumes = async () => {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoadData(true);

      const response = await fetch(`${BASE_URL}/api/perfumes`);

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
          slug: responseData[key].slug,
          image: responseData[key].image,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price1: responseData[key].price3,
          price2: responseData[key].price5,
          price3: responseData[key].price10,
          price4: responseData[key].price20,
          price5: responseData[key].price30,
          perfumer: responseData[key].perfumer,
          country: responseData[key].country,
          year: responseData[key].year,
          sex: responseData[key].sex,
          compound1: responseData[key].compound1.name,
          compound2: responseData[key].compound2.name,
          compound3: responseData[key].compound3.name,
          compound4: responseData[key].compound4.name,
          compound5: responseData[key].compound5.name,
          family1: responseData[key].family1.name,
          family2: responseData[key].family2.name,
          family3: responseData[key].family3.name,
          family4: responseData[key].family4.name,
          family5: responseData[key].family5.name,
          note1: responseData[key].note1.name,
          note2: responseData[key].note2.name,
          note3: responseData[key].note3.name,
          note4: responseData[key].note4.name,
          note5: responseData[key].note5.name,
          chord1: responseData[key].chord1.name,
          chord2: responseData[key].chord2.name,
          chord3: responseData[key].chord3.name,
          chord4: responseData[key].chord4.name,
          chord5: responseData[key].chord5.name,
          description: responseData[key].description,
          feedback: responseData[key].feedback,
        });
      }

      setPerfumes(loadedData);
      setIsLoadData(false);
    };

    fetchPerfumes();

    fetchPerfumes().catch((error) => {
      setIsLoadData(false);
      setHttpErrorMessage(error.message);
    });
  }, []);

  // if (isLoadData) {
  //   return (
  //     <section className="text-red-600 text-xl mt-[100px] text-center">
  //       <p>Загрузка данных с сервера...</p>
  //     </section>
  //   );
  // }

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
