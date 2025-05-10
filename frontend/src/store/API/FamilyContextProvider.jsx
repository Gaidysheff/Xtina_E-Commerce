import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import FamilyContext from "./family-context.js";

const FamilyContextProvider = (props) => {
  const [families, setFamilies] = useState([]);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchFamilies = async () => {
      const response = await fetch(`${BASE_URL}/api/families`);

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

      setFamilies(loadedData);
    };

    fetchFamilies();

    fetchFamilies().catch((error) => {
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
    <FamilyContext.Provider value={families}>
      {props.children}
    </FamilyContext.Provider>
  );
};

export default FamilyContextProvider;
