import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import BaseNoteContext from "./baseNote-context.js";

const BaseNoteContextProvider = (props) => {
  const [baseNotes, setBaseNotes] = useState([]);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchBaseNotes = async () => {
      const response = await fetch(`${BASE_URL}/api/base_notes`);

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

      setBaseNotes(loadedData);
    };

    fetchBaseNotes();

    fetchBaseNotes().catch((error) => {
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
    <BaseNoteContext.Provider value={baseNotes}>
      {props.children}
    </BaseNoteContext.Provider>
  );
};

export default BaseNoteContextProvider;
