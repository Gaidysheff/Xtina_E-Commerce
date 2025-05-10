import { BASE_URL } from "../config";
import { queryOptions } from "@tanstack/react-query";

const createPerfumesOptions = (sex, note) => {
  return queryOptions({
    queryKey: ["perfumes", { sex, note }],
    queryFn: () => fetchPerfumes({ sex, note }),
  });
};

export default createPerfumesOptions;

const fetchPerfumes = async (options) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`${BASE_URL}/api/perfumes`);
  let filteredProducts = await response.json();
  // console.log("filteredProducts==", filteredProducts);

  if (options?.sex) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.sex === options.sex;
    });
  }
  if (options?.note) {
    filteredProducts = filteredProducts.filter((product) => {
      const result =
        (product.note1.name === options.note) |
        (product.note2.name === options.note) |
        (product.note3.name === options.note) |
        (product.note4.name === options.note) |
        (product.note5.name === options.note);
      return result;
    });
  }
  return filteredProducts;
};
