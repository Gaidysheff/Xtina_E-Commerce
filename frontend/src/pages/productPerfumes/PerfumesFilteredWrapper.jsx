import FilterDrawer from "./FilterDrawer";
import LoaderKest from "../../components/sharedUI/LoaderKest";
import ProductList from "./perfumesFiltered/ProductList";
import createPerfumesOptions from "../../queryOptions/createPerfumesOptions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const PerfumesFilteredWrapper = (props) => {
  const [sex, setSex] = useState();

  // Queries
  const { data, isFetching } = useQuery(createPerfumesOptions(sex));

  return (
    <>
      {/* Drawer for Filters */}
      <FilterDrawer
        onChange={(filter) => {
          setSex(filter.sex);
        }}
      />
      {isFetching && <LoaderKest />}

      {/* Results of Filtering */}
      {data && <ProductList products={data} />}
    </>
  );
};

export default PerfumesFilteredWrapper;
