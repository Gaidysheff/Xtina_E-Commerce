import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import CompoundContext from "./compound-context.js";

const CompoundContextProvider = (props) => {
  const [compounds, setCompounds] = useState([]);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchCompounds = async () => {
      const response = await fetch(`${BASE_URL}/api/compounds`);

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

      setCompounds(loadedData);
    };

    fetchCompounds();

    fetchCompounds().catch((error) => {
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
    <CompoundContext.Provider value={compounds}>
      {props.children}
    </CompoundContext.Provider>
  );
};

export default CompoundContextProvider;
