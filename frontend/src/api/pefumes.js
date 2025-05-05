// import { products } from "./data/products";

export const fetchPerfumes = async (options) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  let filteredProducts = products;

  if (options?.category) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.category === options.category;
    });
  }

  if (options?.maxPrice) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price <= options.maxPrice;
    });
  }

  if (options?.search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().includes(options.search.toLowerCase());
    });
  }

  return filteredProducts;
};
