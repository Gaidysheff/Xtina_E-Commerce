import { useEffect, useState } from "react";

import Loader from "./../components/sharedUI/LoaderKest.jsx";
import { PERFUMES } from "../utils/perfumes.js";
import PerfumeContext from "./perfume-context.js";
import axios from "axios";

const PerfumeContextProvider = (props) => {
  const [perfumes, setPerfumes] = useState([]);
  const [isLoadPerfumes, setIsLoadPerfumes] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    setIsLoadPerfumes(true);
    axios
      .get("http://127.0.0.1:8000/api/perfumes")
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            "Что-то пошло не так, попробуйте перезагрузить страницу."
          );
        }
        setPerfumes(response.data);
      })
      .catch((error) => {
        console.log("error=", error);
        setHttpErrorMessage(error.message);
      });
    setIsLoadPerfumes(false);
  }, []);

  if (isLoadPerfumes) {
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
  // useEffect(() => {
  //   const fetchPerfumes = async () => {
  //     setIsLoadPerfumes(true);

  //     const response = await fetch("http://127.0.0.1:8000/api/perfumes");

  //     if (!response.ok) {
  //       throw new Error(
  //         "Что-то пошло не так, попробуйте перезагрузить страницу."
  //       );
  //     }

  //     const responseData = await response.json();

  //     const loadedPerfumes = [];

  //     for (const key in responseData) {
  //       loadedPerfumes.push({
  //         id: key,
  //         name: responseData[key].name,
  //         slug: responseData[key].slug,
  //         brand: responseData[key].brand,
  //         image: responseData[key].image,
  //         price3: responseData[key].price3,
  //         price5: responseData[key].price5,
  //         price10: responseData[key].price10,
  //         price20: responseData[key].price20,
  //         price30: responseData[key].price30,
  //         perfumer: responseData[key].perfumer,
  //         country: responseData[key].country,
  //         year: responseData[key].year,
  //         sex: responseData[key].sex,
  //         compound1: responseData[key].compound1.name,
  //         compound2: responseData[key].compound2.name,
  //         compound3: responseData[key].compound3.name,
  //         compound4: responseData[key].compound4.name,
  //         compound5: responseData[key].compound5.name,
  //         family1: responseData[key].family1.name,
  //         family2: responseData[key].family2.name,
  //         family3: responseData[key].family3.name,
  //         family4: responseData[key].family4.name,
  //         family5: responseData[key].family5.name,
  //         note1: responseData[key].note1.name,
  //         note2: responseData[key].note2.name,
  //         note3: responseData[key].note3.name,
  //         note4: responseData[key].note4.name,
  //         note5: responseData[key].note5.name,
  //         chord1: responseData[key].chord1.name,
  //         chord2: responseData[key].chord2.name,
  //         chord3: responseData[key].chord3.name,
  //         chord4: responseData[key].chord4.name,
  //         chord5: responseData[key].chord5.name,
  //         description: responseData[key].description,
  //         feedback: responseData[key].feedback,
  //       });
  //     }
  //     console.log("LOADED=", loadedPerfumes);
  //     setPerfumes(loadedPerfumes);
  //     setIsLoadPerfumes(false);
  //   };

  //   fetchPerfumes().catch((error) => {
  //     setIsLoadPerfumes(false);
  //     setHttpErrorMessage(error.message);
  //   });
  // }, []);

  return (
    // <PerfumeContext.Provider value={PERFUMES}>
    <PerfumeContext.Provider value={perfumes}>
      {props.children}
    </PerfumeContext.Provider>
  );
};

export default PerfumeContextProvider;
