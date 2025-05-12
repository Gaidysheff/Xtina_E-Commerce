import FilterDrawer from "./FilterDrawer";
import LoaderKest from "../../components/sharedUI/LoaderKest";
import ProductList from "./freshenersFiltered/ProductList";
import createFreshenersOptions from "../../queryOptions/createFreshenersOptions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const FreshenersFilteredWrapper = (props) => {
  const [aroma, setAroma] = useState();
  const [topNote, setTopNote] = useState();
  const [baseNote, setBaseNote] = useState();
  const [middleNote, setMiddleNote] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [search, setSearch] = useState();

  // Queries
  const { data, isFetching } = useQuery(
    createFreshenersOptions(
      aroma,
      topNote,
      baseNote,
      middleNote,
      maxPrice,
      search
    )
  );

  console.log("data=", data);
  return (
    <>
      {/* Drawer for Filters */}
      <FilterDrawer
        data={data}
        onChange={(filter) => {
          setAroma(filter.aroma);
          setTopNote(filter.topNote);
          setBaseNote(filter.baseNote);
          setMiddleNote(filter.middleNote);
          setMaxPrice(filter.maxPrice);
          setSearch(filter.search);
        }}
      />
      {isFetching && <LoaderKest />}

      {/* Results of Filtering */}
      {data && <ProductList products={data} />}
    </>
  );
};

export default FreshenersFilteredWrapper;
