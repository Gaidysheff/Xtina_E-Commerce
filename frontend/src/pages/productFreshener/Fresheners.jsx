import Card from "./../../components/sharedUI/Card.jsx";
import { FRESHENERS } from "../../utils/fresheners.js";
import { Link } from "react-router";
import { NumericFormat } from "react-number-format";

const Fresheners = () => {
  return (
    <section className="container py-10">
      <div
        className="grid grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-3 mx-3 lg:gap-10 lg:mx-5"
      >
        {FRESHENERS.map((product) => (
          <Card key={product.id}>
            <Link to={`${product.id}`}>
              <div className="inside-card flex flex-col justify-between">
                <div
                  className="x-full p-5 bg-white dark:bg-brandLightGray
                  rounded-t-xl flex justify-center"
                >
                  <img
                    src={product.image}
                    alt="product image"
                    className="w-[75%] bg-white dark:bg-brandLightGray"
                  />
                </div>

                <div className="p-2 pb-0">
                  <div className="text-[0.7rem] md:text-[0.9rem] lg:text-lg">
                    {product.category}
                  </div>
                  <div className="text-[0.7rem] md:text-[0.9rem] lg:text-lg">
                    {product.title}
                  </div>

                  <div
                    className="text-[0.8rem] md:text-[1.1rem] lg:text-xl 
                    font-semibold"
                  >
                    {product.subtitle}
                  </div>
                </div>
                <div className="justify-self-end">
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
