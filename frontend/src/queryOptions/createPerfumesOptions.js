import { keepPreviousData, queryOptions } from "@tanstack/react-query";

import { BASE_URL } from "../config";

const createPerfumesOptions = (
  page,
  gender,
  note,
  chord,
  compound,
  family,
  maxPrice,
  search
) => {
  return queryOptions({
    queryKey: [
      "perfumes",
      page,
      { gender, note, chord, compound, family, maxPrice, search },
    ],
    queryFn: () =>
      fetchPerfumes(page, {
        gender,
        note,
        chord,
        compound,
        family,
        maxPrice,
        search,
      }),
    placeholderData: keepPreviousData,
  });
};

export default createPerfumesOptions;

const fetchPerfumes = async (page = 0, options) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`${BASE_URL}/api/perfumes?page=${page}`);
  // const response = await fetch(`${BASE_URL}/api/perfume_paged?page=${page}`);
  let filteredProducts = await response.json();
  // console.log("filteredProducts==", filteredProducts);

  if (options?.gender) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.sex === options.gender;
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
  if (options?.chord) {
    filteredProducts = filteredProducts.filter((product) => {
      const result =
        (product.chord1.name === options.chord) |
        (product.chord2.name === options.chord) |
        (product.chord3.name === options.chord) |
        (product.chord4.name === options.chord) |
        (product.chord5.name === options.chord);
      return result;
    });
  }

  if (options?.compound) {
    filteredProducts = filteredProducts.filter((product) => {
      const result =
        (product.compound1.name === options.compound) |
        (product.compound2.name === options.compound) |
        (product.compound3.name === options.compound) |
        (product.compound4.name === options.compound) |
        (product.compound5.name === options.compound);
      return result;
    });
  }

  if (options?.family) {
    filteredProducts = filteredProducts.filter((product) => {
      const result =
        (product.family1.name === options.family) |
        (product.family2.name === options.family) |
        (product.family3.name === options.family) |
        (product.family4.name === options.family) |
        (product.family5.name === options.family);
      return result;
    });
  }

  if (options?.maxPrice) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price3 <= options.maxPrice;
    });
  }

  if (options?.search) {
    filteredProducts = filteredProducts.filter((product) => {
      // return product.name.toLowerCase().includes(options.search.toLowerCase());
      const result =
        product.name.toLowerCase().includes(options.search.toLowerCase()) |
        product.brand.toLowerCase().includes(options.search.toLowerCase());
      return result;
    });
  }

  return filteredProducts;
};
