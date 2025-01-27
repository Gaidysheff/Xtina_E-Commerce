import Card from "./../../components/sharedUI/Card.jsx";
import { Link } from "react-router";
import { NumericFormat } from "react-number-format";
import { dynamicRouteSet1 } from "../../App.jsx";
import { perfume } from "../../utils/products.js";

// import ProductItem from "./ProductItem.jsx";

const Products = () => {
  return (
    <section className="container py-10">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-10 mx-5"
      >
        {perfume.map((product) => (
          <Card key={product.id}>
            <Link to={`:${dynamicRouteSet1}`}>
              <img
                src={product.image}
                alt="product image"
                className="hover:scale-110"
              />
              <div className="bg-primaryLight/20 p-5">
                <div className="text-lg">{product.brand}</div>
                <div className="text-xl font-semibold">{product.name}</div>

                <NumericFormat
                  className="flex justify-end text-2xl text-primaryDark
                dark:text-primaryLight"
                  value={product.price}
                  displayType={"text"}
                  decimalSeparator=","
                  thousandSeparator="."
                  suffix={" ₽"}
                />
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Products;
