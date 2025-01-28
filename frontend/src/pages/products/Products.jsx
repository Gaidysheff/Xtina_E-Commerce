import Card from "./../../components/sharedUI/Card.jsx";
import { Link } from "react-router";
import { NumericFormat } from "react-number-format";
import { dynamicRouteSet1 } from "../../App.jsx";
import { perfume } from "../../utils/products.js";

// import ProductItem from "./ProductItem.jsx";
{
  /* <div
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
xl:grid-cols-4 gap-10 mx-5"
> */
}
const Products = () => {
  return (
    <section className="container py-10">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-3 mx-3 lg:gap-10 lg:mx-5"
      >
        {perfume.map((product) => (
          <Card key={product.id}>
            <Link to={`:${dynamicRouteSet1}`}>
              <div className="">
                <img
                  src={product.image}
                  alt="product image"
                  className=" bg-white rounded-t-xl w-full"
                />

                <div className="p-5 pb-0">
                  <div className="text-lg lg:text-lg text-center">
                    {product.brand}
                  </div>

                  <div className="text-lg lg:text-xl font-semibold text-center">
                    {product.name}
                  </div>
                </div>
                <div className="">
                  <NumericFormat
                    className="flex justify-center text-2xl text-primaryDark
                      dark:text-primaryLight pb-2 pr-5"
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

export default Products;
