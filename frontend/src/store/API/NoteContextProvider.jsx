import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import NoteContext from "./note-context.js";

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState([]);

  const [isLoadData, setIsLoadData] = useState(false);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoadData(true);

      const response = await fetch(`${BASE_URL}/api/notes`);

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

      setNotes(loadedData);
      setIsLoadData(false);
    };

    fetchNotes();

    fetchNotes().catch((error) => {
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
    <NoteContext.Provider value={notes}>{props.children}</NoteContext.Provider>
  );
};

export default NoteContextProvider;
