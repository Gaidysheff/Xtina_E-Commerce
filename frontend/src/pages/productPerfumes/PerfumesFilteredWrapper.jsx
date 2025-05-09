import { useEffect, useState } from "react";

import FilterDrawer from "./FilterDrawer";
import LoaderKest from "../../components/sharedUI/LoaderKest";
import ProductList from "./perfumesFiltered/ProductList";
import createPerfumesOptions from "../../queryOptions/createPerfumesOptions";
import { useQuery } from "@tanstack/react-query";

const PerfumesFilteredWrapper = (props) => {
  const [sex, setSex] = useState();
  const [note, setNote] = useState();

  // Queries
  const { data, isFetching } = useQuery(createPerfumesOptions(sex, note));

  return (
    <>
      {/* Drawer for Filters */}
      <FilterDrawer
        onChange={(filter) => {
          setSex(filter.sex);
          setNote(filter.note);
        }}
      />
      {isFetching && <LoaderKest />}

      {/* Results of Filtering */}
      {data && <ProductList products={data} />}
    </>
  );
};

export default PerfumesFilteredWrapper;
