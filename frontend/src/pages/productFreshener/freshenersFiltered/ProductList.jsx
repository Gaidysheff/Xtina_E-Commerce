import Card from "../../../components/sharedUI/Card.jsx";
import { Link } from "react-router";
import { NumericFormat } from "react-number-format";

const ProductList = (props) => {
  return (
    <section className="container pb-10">
      <div
        className="grid grid-cols-2 lg:grid-cols-3 
      xl:grid-cols-4 gap-3 mx-3 lg:gap-10 lg:mx-5"
      >
        {props.products.map((product) => (
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

                <div
                  className="text-[0.8rem] md:text-[1.1rem] lg:text-xl 
                  font-semibold"
                  data-aos="flip-left"
                >
                  {product.title}
                </div>

                <div className="p-2 pb-0">
                  <div
                    className="text-[0.7rem] md:text-[0.9rem] lg:text-lg"
                    data-aos="flip-left"
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
                    data-aos="zoom-in"
                    data-aos-delay="1000"
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

export default ProductList;
