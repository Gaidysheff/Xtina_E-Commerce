import { useContext, useState } from "react";

import PerfumeContext from "../store/API/perfume-context";
import { queryOptions } from "@tanstack/react-query";

const createPerfumesOptions = () => {
  return queryOptions({
    queryKey: ["perfumes", { sex }],
    queryFn: () => fetchPerfumes({ sex }),
  });
};

export default createPerfumesOptions;

const fetchPerfumes = async (options) => {
  // const perfumes = useContext(PerfumeContext);
  const response = await fetch(`http://localhost:8000/api/perfumes`);
  let filteredProducts = response.json();

  // let filteredProducts = perfumes;

  if (options?.sex) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.sex === options.sex;
    });
  }
  return filteredProducts;
};
