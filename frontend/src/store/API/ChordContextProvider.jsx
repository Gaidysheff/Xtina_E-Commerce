import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import ChordContext from "./chord-context.js";

const ChordContextProvider = (props) => {
  const [chords, setChords] = useState([]);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchChords = async () => {
      const response = await fetch(`${BASE_URL}/api/chords`);

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

      setChords(loadedData);
    };

    fetchChords();

    fetchChords().catch((error) => {
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
    <ChordContext.Provider value={chords}>
      {props.children}
    </ChordContext.Provider>
  );
};

export default ChordContextProvider;
