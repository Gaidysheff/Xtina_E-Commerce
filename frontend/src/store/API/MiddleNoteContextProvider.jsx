import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import MiddleNoteContext from "./middleNote-context.js";

const MiddleNoteContextProvider = (props) => {
  const [middleNotes, setMiddleNotes] = useState([]);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchMiddleNotes = async () => {
      const response = await fetch(`${BASE_URL}/api/middle_notes`);

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

      setMiddleNotes(loadedData);
    };

    fetchMiddleNotes();

    fetchMiddleNotes().catch((error) => {
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
    <MiddleNoteContext.Provider value={middleNotes}>
      {props.children}
    </MiddleNoteContext.Provider>
  );
};

export default MiddleNoteContextProvider;
