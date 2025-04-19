import { useEffect, useState } from "react";

import { BASE_URL } from "../config.js";
import Card from "../components/sharedUI/Card.jsx";
import Image from "../assets/shared/constraction.png";
import { Link } from "react-router";
import Loader from "./../components/sharedUI/LoaderKest.jsx";
import { NumericFormat } from "react-number-format";
import axios from "axios";

const About = () => {
  // const user = [
  //   {
  //     name: "John",
  //     age: 15,
  //   },
  //   {
  //     name: "Ivan",
  //     age: 22,
  //   },
  // ];

  // localStorage.setItem("userObject", JSON.stringify(user));
  // const UserFromStorage = JSON.parse(localStorage.getItem("userObject"));

  // UserFromStorage.forEach((user) => {
  //   console.log("NAME:", user.name, "AGE:", user.age);
  // });

  // --------------------------------------------------
  // const [perfumes, setPerfumes] = useState([]);

  const cashedPerfumes = localStorage.getItem("perfumesInStorage");

  if (cashedPerfumes) {
    const perfumesFromStorage = JSON.parse(cashedPerfumes);

    console.log("I've found Data in MEMORY");
    console.log(perfumesFromStorage);
  } else {
    axios
      .get(`${BASE_URL}/api/perfumes`)
      .then((response) => {
        localStorage.setItem(
          "perfumesInStorage",
          JSON.stringify(response.data)
        );

        const perfumesFromStorage = response.data;
        console.log("Data Received and Stored");
        console.log(perfumesFromStorage);
      })
      .catch((error) => {
        console.log("error=", error);
        setHttpErrorMessage(error.message);
      });
  }

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/api/perfumes`)
  //     .then((response) => {
  //       setPerfumes(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error=", error);
  //       setHttpErrorMessage(error.message);
  //     });
  // }, []);

  // localStorage.setItem("perfumesInStorage", JSON.stringify(perfumes));

  // const perfumesFromStorage = JSON.parse(
  //   localStorage.getItem("perfumesInStorage")
  // );

  // console.log("PerfumesInStorage:", perfumesFromStorage);

  return (
    <section className="section h-[62vh] m-[3rem]" id="about">
      <div className="container flex-col justify-center">
        {/* -------------------------------- */}
        {/* {UserFromStorage.name} <br />
        {UserFromStorage.age} */}

        <div
          className="grid grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-3 mx-3 lg:gap-10 lg:mx-5"
        >
          {/* {perfumesFromStorage.map((product) => (
            <Card key={product.id}>
              <Link to={`${product.slug}`}>
                <div className="inside-card flex flex-col justify-between">
                  <div
                    className="x-full bg-white dark:bg-brandLightGray
                  rounded-t-xl flex justify-center"
                    data-aos="zoom-in"
                  >
                    <img
                      src={product.image}
                      alt="product image"
                      className="w-[75%] bg-white dark:bg-brandLightGray"
                    />
                  </div>

                  <div className="p-2 pb-0">
                    <div
                      className="text-[0.7rem] md:text-[0.9rem] lg:text-lg"
                      data-aos="flip-left"
                    >
                      {product.brand}
                    </div>

                    <div
                      className="text-[0.8rem] md:text-[1.1rem] lg:text-xl 
                    font-semibold"
                      data-aos="flip-left"
                    >
                      {product.name}
                    </div>
                  </div>
                  <div className="justify-self-end">
                    <NumericFormat
                      className="flex justify-center text-2xl text-primaryDark
                        dark:text-primaryLight pb-2"
                      value={product.price3}
                      displayType={"text"}
                      decimalSeparator=","
                      thousandSeparator="."
                      suffix={" ₽"}
                      data-aos="zoom-in"
                      data-aos-delay="1000"
                    />
                  </div>
                </div>
              </Link>
            </Card>
          ))} */}
        </div>
        {/* -------------------------------- */}
        <div className="justify-self-center w-[250px] mb-8">
          <img src={Image} alt="" />
        </div>
        <Loader />
      </div>
    </section>
  );
};
export default About;
