import { useEffect, useState } from "react";

import AromaContext from "./aroma-context.js";
import { BASE_URL } from "../../config.js";

const AromaContextProvider = (props) => {
  const [aromas, setAromas] = useState([]);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchAromas = async () => {
      const response = await fetch(`${BASE_URL}/api/aromas`);

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
          name: responseData[key].name,
        });
      }

      setAromas(loadedData);
    };

    fetchAromas();

    fetchAromas().catch((error) => {
      setHttpErrorMessage(error.message);
    });
  }, []);

  if (httpErrorMessage) {
    return (
      <section className="text-red-600 text-xl text-center">
        <p>{httpErrorMessage}</p>
      </section>
    );
  }

  return (
    <AromaContext.Provider value={aromas}>
      {props.children}
    </AromaContext.Provider>
  );
};

export default AromaContextProvider;
