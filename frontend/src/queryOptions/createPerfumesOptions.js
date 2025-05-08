import PerfumeContext from "../store/API/perfume-context";
import { queryOptions } from "@tanstack/react-query";
import { useContext } from "react";

const createPerfumesOptions = (sex) => {
  let filteredProducts = useContext(PerfumeContext);

  return queryOptions({
    queryKey: ["perfumes", { sex }],
    queryFn: () => fetchPerfumes({ sex }, filteredProducts),
  });
};

export default createPerfumesOptions;

const fetchPerfumes = async (options, filteredProducts) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  if (options?.sex) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.sex === options.sex;
    });
  }
  return filteredProducts;
};
