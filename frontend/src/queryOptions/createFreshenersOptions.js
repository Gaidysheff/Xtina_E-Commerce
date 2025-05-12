import { BASE_URL } from "../config";
import { queryOptions } from "@tanstack/react-query";

const createPerfumesOptions = (
  aroma,
  topNote,
  baseNote,
  middleNote,
  maxPrice,
  search
) => {
  return queryOptions({
    queryKey: [
      "fresheners",
      { aroma, topNote, baseNote, middleNote, maxPrice, search },
    ],
    queryFn: () =>
      fetchPerfumes({ aroma, topNote, baseNote, middleNote, maxPrice, search }),
  });
};

export default createPerfumesOptions;

const fetchPerfumes = async (options) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`${BASE_URL}/api/fresheners`);
  let filteredProducts = await response.json();
  // console.log("filteredProducts==", filteredProducts);

  if (options?.aroma) {
    filteredProducts = filteredProducts.filter((product) => {
      const result =
        (product.aroma1.name === options.aroma) |
        (product.aroma2.name === options.aroma) |
        (product.aroma3.name === options.aroma) |
        (product.aroma4.name === options.aroma) |
        (product.aroma5.name === options.aroma);
      return result;
    });
  }

  if (options?.topNote) {
    filteredProducts = filteredProducts.filter((product) => {
      const result =
        (product.topNote1.name === options.topNote) |
        (product.topNote2.name === options.topNote) |
        (product.topNote3.name === options.topNote) |
        (product.topNote4.name === options.topNote) |
        (product.topNote5.name === options.topNote);
      return result;
    });
  }

  if (options?.middleNote) {
    filteredProducts = filteredProducts.filter((product) => {
      const result =
        (product.middleNote1.name === options.middleNote) |
        (product.middleNote2.name === options.middleNote) |
        (product.middleNote3.name === options.middleNote) |
        (product.middleNote4.name === options.middleNote) |
        (product.middleNote5.name === options.middleNote);
      return result;
    });
  }

  if (options?.baseNote) {
    filteredProducts = filteredProducts.filter((product) => {
      const result =
        (product.baseNote1.name === options.baseNote) |
        (product.baseNote2.name === options.baseNote) |
        (product.baseNote3.name === options.baseNote) |
        (product.baseNote4.name === options.baseNote) |
        (product.baseNote5.name === options.baseNote);
      return result;
    });
  }

  if (options?.maxPrice) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price <= options.maxPrice;
    });
  }

  if (options?.search) {
    filteredProducts = filteredProducts.filter((product) => {
      const result =
        product.title.toLowerCase().includes(options.search.toLowerCase()) |
        product.subtitle.toLowerCase().includes(options.search.toLowerCase());
      return result;
    });
  }

  return filteredProducts;
};
