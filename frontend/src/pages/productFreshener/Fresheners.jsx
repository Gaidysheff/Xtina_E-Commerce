import Card from "./../../components/sharedUI/Card.jsx";
import { Link } from "react-router";
import { NumericFormat } from "react-number-format";
import { PERFUMES } from "../../utils/products.js";
import { dynamicRouteSet2 } from "../../App.jsx";

const Fresheners = () => {
  return (
    <section className="container py-10">
      <div
        className="grid grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-3 mx-3 lg:gap-10 lg:mx-5"
      >
        {PERFUMES.map((product) => (
          <Card key={product.id}>
            <Link to={`${product.id}`}>
              <div className="inside-card">
                <img
                  src={product.image}
                  alt="product image"
                  className=" bg-white dark:bg-brandLightGray rounded-t-xl 
                  w-full"
                />

                <div className="p-3 pb-0">
                  <div className="text-[0.7rem] md:text-[0.8rem] lg:text-lg">
                    {product.brand}
                  </div>

                  <div
                    className="text-[0.8rem] md:text-[0.9rem] lg:text-xl 
                  font-semibold"
                  >
                    {product.name}
                  </div>
                </div>
                <div className="">
                  <NumericFormat
                    className="flex justify-center text-2xl text-primaryDark
                      dark:text-primaryLight pb-2"
                    value={product.price}
                    displayType={"text"}
                    decimalSeparator=","
                    thousandSeparator="."
                    suffix={" ₽"}
                  />
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Fresheners;
