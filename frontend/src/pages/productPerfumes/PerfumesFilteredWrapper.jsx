import FilterDrawer from "./FilterDrawer";
import LoaderKest from "../../components/sharedUI/LoaderKest";
import ProductList from "./perfumesFiltered/ProductList";
import createPerfumesOptions from "../../queryOptions/createPerfumesOptions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const PerfumesFilteredWrapper = (props) => {
  const [gender, setGender] = useState();
  const [note, setNote] = useState();
  const [chord, setChord] = useState();
  const [compound, setCompound] = useState();
  const [family, setFamily] = useState();

  // Queries
  const { data, isFetching } = useQuery(
    createPerfumesOptions(gender, note, chord, compound, family)
  );

  // console.log("DATA=", data);

  return (
    <>
      {/* Drawer for Filters */}
      <FilterDrawer
        onChange={(filter) => {
          setGender(filter.gender);
          setNote(filter.note);
          setChord(filter.chord);
          setCompound(filter.compound);
          setFamily(filter.family);
        }}
      />
      {isFetching && <LoaderKest />}

      {/* Results of Filtering */}
      {data && <ProductList products={data} />}
    </>
  );
};

export default PerfumesFilteredWrapper;
