import { useEffect, useState } from "react";

import { BASE_URL } from "../../config.js";
import TopNoteContext from "./topNote-context.js";

const TopNoteContextProvider = (props) => {
  const [topNotes, setTopNotes] = useState([]);

  const [httpErrorMessage, setHttpErrorMessage] = useState("");

  useEffect(() => {
    const fetchTopNotes = async () => {
      const response = await fetch(`${BASE_URL}/api/top_notes`);

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

      setTopNotes(loadedData);
    };

    fetchTopNotes();

    fetchTopNotes().catch((error) => {
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
    <TopNoteContext.Provider value={topNotes}>
      {props.children}
    </TopNoteContext.Provider>
  );
};

export default TopNoteContextProvider;
