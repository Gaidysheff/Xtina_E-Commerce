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
  const [maxPrice, setMaxPrice] = useState();
  const [search, setSearch] = useState();

  const [page, setPage] = useState(1);
  const numberOfPerfumesPerPage = 12;

  // Queries
  const { data, isFetching } = useQuery(
    createPerfumesOptions(
      page,
      gender,
      note,
      chord,
      compound,
      family,
      maxPrice,
      search
    )
  );

  const perfumes = data?.results || [];
  const numOfPages = Math.ceil(data?.count / numberOfPerfumesPerPage);

  const handlePageSetNumber = (value) => {
    setPage(value);
  };

  const increasePageNumberHandler = () => {
    setPage((current) => current + 1);
  };

  const decreasePageNumberHandler = () => {
    setPage((current) => current - 1);
  };

  return (
    <>
      {/* Drawer for Filters */}
      <FilterDrawer
        data={data}
        onChange={(filter) => {
          setGender(filter.gender);
          setNote(filter.note);
          setChord(filter.chord);
          setCompound(filter.compound);
          setFamily(filter.family);
          setMaxPrice(filter.maxPrice);
          setSearch(filter.search);
        }}
      />
      {isFetching && <LoaderKest />}

      {/* Results of Filtering */}
      {data && (
        <ProductList
          products={perfumes}
          numOfPages={numOfPages}
          page={page}
          handlePageSetNumber={handlePageSetNumber}
          increasePageNumberHandler={increasePageNumberHandler}
          decreasePageNumberHandler={decreasePageNumberHandler}
        />
      )}
    </>
  );
};

export default PerfumesFilteredWrapper;
