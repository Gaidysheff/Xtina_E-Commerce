import { useEffect, useState } from "react";

import { BASE_URL } from "../../config";
import { Link } from "react-router";
import Loader from "../sharedUI/LoaderKest";
import axios from "axios";
import useDebounce from "../hooks/use-debounce";

// import Card from "../sharedUI/Card";

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
          className="search-bar-burger dark:bg-gray-700 mb-2 dark:border-gray-400"
          value={lookupText}
          onChange={lookupTextHandler}
          // onBlur={bluringSearchHandler}
        />
      </div>
      <div className="flex flex-col items-center">
        {lookupText.length > 0 &&
          searchPerfumes.map((perfume) => (
            <div key={perfume.slug} className="rounded-xl w-full md:w-[75%]">
              {/* <Link
                  to={`http://localhost:5173/perfumes/${perfume.slug}`}
                  onClick={searchLinkHandler}
                > */}
              <Link
                to={`${BASE_URL}/#/perfumes/${perfume.slug}`}
                onClick={searchLinkHandler}
              >
                <div
                  className="flex mb-1 p-1 bg-white rounded-xl
                hover:border-primary hover:border-2 dark:hover:border-4"
                >
                  <img
                    src={perfume.image}
                    alt="product image"
                    className="w-[50px] lg:w-[90px]"
                  />
                  <div className="flex flex-col justify-center text-gray-600">
                    <div
                      className="flex text-[0.6rem] md:text-[0.9rem] lg:text-lg"
                      data-aos="flip-left"
                    >
                      <div className="w-[50px] md:w-[60px]">Бренд:</div>
                      <div>{perfume.brand}</div>
                    </div>
                    <div
                      className="flex text-[0.7rem] md:text-[1.1rem] lg:text-xl
                      font-semibold"
                      data-aos="flip-left"
                    >
                      <div className="w-[50px] md:w-[60px]">Духи:</div>
                      <div>{perfume.name}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
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
