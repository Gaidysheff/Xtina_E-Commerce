import { useEffect, useState } from "react";

import { BASE_URL } from "../../config";
import Card from "../sharedUI/Card";
import { Link } from "react-router";
import Loader from "../sharedUI/LoaderKest";
import axios from "axios";
import useDebounce from "../hooks/use-debounce";

// import { IoMdSearch } from "react-icons/io";

// import Modal from "../modalWindow/Modal";

const NewSearch = (props) => {
  const [searchPerfumes, setSearchPerfumes] = useState([]);
  const [isLoadPerfumes, setIsLoadPerfumes] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");
  const [lookupText, setLookupText] = useState("");

  const debounce = useDebounce(lookupText, 500);

  const searchLinkHandler = () => {
    props.setMenuOpen();
  };

  // const bluringSearchHandler = () => {
  //   props.onBluringSearch(false);
  // };

  const lookupTextHandler = (event) => {
    setLookupText(event.target.value);
    // props.onSearchChange();
  };

  useEffect(() => {
    setIsLoadPerfumes(true);
    axios
      .get(`${BASE_URL}/api/search?name=${lookupText}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            "Что-то пошло не так, попробуйте перезагрузить страницу."
          );
        }
        setSearchPerfumes(response.data);
      })
      .catch((error) => {
        console.log("error=", error);
        setHttpErrorMessage(error.message);
      });
    setIsLoadPerfumes(false);
  }, [debounce]);

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
  return (
    <>
      <div className=" flex justify-center">
        <input
          type="text"
          placeholder="Найти..."
          className="search-bar-burger dark:bg-gray-700"
          value={lookupText}
          onChange={lookupTextHandler}
          // onBlur={bluringSearchHandler}
        />
      </div>
      <div>
        {lookupText.length > 0 &&
          searchPerfumes.map((perfume) => (
            <Card key={perfume.slug}>
              {/* <Link
                  to={`http://localhost:5173/perfumes/${perfume.slug}`}
                  onClick={searchLinkHandler}
                > */}
              <Link
                to={`${BASE_URL}/perfumes/${perfume.slug}`}
                onClick={searchLinkHandler}
              >
                <img
                  src={perfume.image}
                  alt="product image"
                  className="w-[25%] bg-white dark:bg-brandLightGray"
                />
                <div className="p-2 pb-0">
                  <div
                    className="text-[0.7rem] md:text-[0.9rem] lg:text-lg"
                    data-aos="flip-left"
                  >
                    Бренд: {perfume.brand}
                  </div>
                  <div
                    className="text-[0.8rem] md:text-[1.1rem] lg:text-xl
												font-semibold"
                    data-aos="flip-left"
                  >
                    Название: {perfume.name}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        {searchPerfumes.length == 0 && (
          <p
            className="text-lg sm:text-2xl italic text-center my-5 
            text-primaryDark/80 font-['Pacifico']
            drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            По вашему запросу ничего не найдено.
          </p>
        )}
      </div>
    </>
  );
};

export default NewSearch;
