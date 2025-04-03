import { useEffect, useState } from "react";

import { BASE_URL } from "../../config";
import Card from "../sharedUI/Card";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router";
import Loader from "../sharedUI/LoaderKest";
import Modal from "../modalWindow/Modal";
import axios from "axios";

const Search = (props) => {
  const [searchPerfumes, setSearchPerfumes] = useState([]);
  const [isLoadPerfumes, setIsLoadPerfumes] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState("");
  const [lookup, setLookup] = useState();

  const lookupHandler = (event) => {
    setLookup(event.target.value);
  };

  useEffect(() => {
    setIsLoadPerfumes(true);
    axios
      .get(`${BASE_URL}/api/perfumes`)
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
  }, []);

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

  // const searchResult = searchPerfumes
  //   .filter((perfume) => perfume.name.toLowerCase().includes(lookup))
  //   .map((perfume) => perfume.name);

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className="flex flex-col">
        <div className="flex justify-end items-center">
          <button
            onClick={props.onHideSearch}
            className="self-end w-8 h-8 text-3xl text-primaryDark rounded-md
				flex justify-center items-center border-2 cursor-pointer
				border-primaryDark 
				hover:bg-gradient-to-br hover:from-primaryLight 
				hover:to-primaryDark hover:text-white hover:ring 
				hover:border-white hover:ring-primaryDark/70"
            data-aos="zoom-in"
            data-aos-delay="2000"
            data-aos-duration="2000"
          >
            <div className="pb-1">&times;</div>
          </button>
        </div>
        {!searchPerfumes && (
          <p
            className="text-2xl sm:text-4xl italic text-center my-5
					text-primaryDark/80 font-['Pacifico']
					drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            По вашему запросу ничего не найдено.
          </p>
        )}
        <section>
          <div className="container">
            <div
              className="flex justify-center font-semibold
							my-[1rem] text-md"
            >
              <input
                type="text"
                placeholder="Найти..."
                className="search-bar text-gray-700 w-[80%]"
                onChange={lookupHandler}
              />
              <div className="relative">
                <IoMdSearch
                  className="text-xl text-gray-600 dark:text-gray-400
                  absolute top-2 ml-2"
                />
              </div>
            </div>
            <div className="overflow-scroll">
              {searchPerfumes &&
                searchPerfumes
                  .filter((perfume) =>
                    perfume.name.toLowerCase().includes(lookup)
                  )
                  .map((perfume) =>
                    lookup.length > 0 ? (
                      <Card key={perfume.slug}>
                        {/* <Link
                        to={`http://localhost:5173/perfumes/${perfume.slug}`}
                        onClick={props.onHideSearch}
                      > */}
                        <Link
                          to={`${BASE_URL}/perfumes/${perfume.slug}`}
                          onClick={props.onHideSearch}
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
                    ) : (
                      ""
                    )
                  )}
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default Search;
