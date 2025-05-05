import React from "react";

const ProductList = (props) => {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {props.products.map((product) => (
        <div
          key={product.id}
          className="flex w-[250px] flex-col gap-4 rounded-md 
        bg-grayscale-700 p-4"
        >
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="opacity-50">{product.brand}</p>
              <h1 className="opacity-50">{product.sex}</h1>
            </div>
            <p className="">${product.price}</p>
          </div>
          <img src={product.image} alt={product.name} className="rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
