import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { GENDER, MAX_PRICE } from "../../../utils/filterMenu";
import { HiChartPie, HiCollection } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";

import { BsMusicNoteList } from "react-icons/bs";
import ChordContext from "../../../store/API/chord-context";
import CompoundContext from "../../../store/API/compound-context";
import FamilyContext from "../../../store/API/family-context";
import { ImManWoman } from "react-icons/im";
import { IoIosPricetags } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import NoteContext from "../../../store/API/note-context";
import StrainerSelector from "../../../components/sharedUI/filter/StrainerSelector";
import { useDebounce } from "../../../hooks/useDebounce";

const ProductListFilters = (props) => {
  const [gender, setGender] = useState();
  const [note, setNote] = useState();
  const [chord, setChord] = useState();
  const [compound, setCompound] = useState();
  const [family, setFamily] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [search, setSearch] = useState();

  const notes = useContext(NoteContext);
  const chords = useContext(ChordContext);
  const compounds = useContext(CompoundContext);
  const families = useContext(FamilyContext);
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    props.onChange({
      gender,
      note,
      chord,
      compound,
      family,
      maxPrice,
      search: debouncedSearch,
    });
  }, [gender, note, chord, compound, family, maxPrice, debouncedSearch]);

  // -------------- Filtering on Notes --------------
  const menuNote = notes.map((item) => {
    if (item.name !== "---") {
      return (
        <option key={item.id} value={item.name} className="checked:bg-primary">
          {item.name}
        </option>
      );
    }
  });

  const iconNote = <BsMusicNoteList />;

  // -------------- Filtering on Chords --------------
  const menuChord = chords.map((item) => {
    if (item.name !== "---") {
      return (
        <option key={item.id} value={item.name} className="checked:bg-primary">
          {item.name}
        </option>
      );
    }
  });

  const iconChord = <HiCollection />;

  // -------------- Filtering on Compounds --------------
  const menuCompound = compounds.map((item) => {
    if (item.name !== "---") {
      return (
        <option key={item.id} value={item.name} className="checked:bg-primary">
          {item.name}
        </option>
      );
    }
  });

  const iconCompound = <HiChartPie />;

  // -------------- Filtering on Families --------------
  const menuFamily = families.map((item) => {
    if (item.name !== "---") {
      return (
        <option key={item.id} value={item.name} className="checked:bg-primary">
          {item.name}
        </option>
      );
    }
  });

  const iconFamily = <MdCategory />;

  // -------------- Filtering on Gender --------------
  const menuGender = GENDER.map((item, index) => {
    return (
      <option key={index} value={item.name} className="checked:bg-primary">
        {item.name}
      </option>
    );
  });

  const iconGender = <ImManWoman />;

  // -------------- Filtering on maxPrice --------------
  const menuMaxPrice = MAX_PRICE.map((item, index) => {
    return (
      <option key={index} value={item.price} className="checked:bg-primary">
        {item.price} ₽
      </option>
    );
  });

  const iconMaxPrice = <IoIosPricetags />;

  return (
    <>
      <div className="max-w-sm mx-auto mt-4">
        {/* -------------- Filtering on Notes -------------- */}

        <div className="mb-6">
          <StrainerSelector
            filterName={note}
            icon={iconNote}
            menuSelector={menuNote}
            title={"Выбрать основные ноты"}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        {/* -------------- Filtering on Chords -------------- */}
        <div className="mb-6">
          <StrainerSelector
            filterName={chord}
            icon={iconChord}
            menuSelector={menuChord}
            title={"Выбрать аккорды"}
            onChange={(e) => setChord(e.target.value)}
          />
        </div>
        {/* -------------- Filtering on Compounds -------------- */}
        <div className="mb-6">
          <StrainerSelector
            filterName={compound}
            icon={iconCompound}
            menuSelector={menuCompound}
            title={"Выбрать состав"}
            onChange={(e) => setCompound(e.target.value)}
          />
        </div>
        {/* -------------- Filtering on Families -------------- */}
        <div className="mb-6">
          <StrainerSelector
            filterName={family}
            icon={iconFamily}
            menuSelector={menuFamily}
            title={"Выбрать семейство"}
            onChange={(e) => setFamily(e.target.value)}
          />
        </div>

        {/* -------------- Filtering on Gender -------------- */}
        <div className="mb-6">
          <StrainerSelector
            filterName={gender}
            icon={iconGender}
            menuSelector={menuGender}
            title={"Выбрать пол"}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        {/* -------------- Filtering on maxPrice -------------- */}
        <div className="mb-6">
          <StrainerSelector
            filterName={maxPrice}
            icon={iconMaxPrice}
            menuSelector={menuMaxPrice}
            title={"Выбрать максимальную цену"}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      {/* ------------------ SEARCH INPUT ------------- */}

      <div className="max-w-sm mx-auto mt-4">
        <div className="flex items-center mb-2">
          <div className="text-xl text-gray-400 mr-2">
            <IoSearch />
          </div>
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-900 
          dark:text-white"
          >
            Поиск в названии товара
          </label>
        </div>
        <input
          id="search"
          type="text"
          // value={search}
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="фрагмент для поиска ..."
          className="h-[40px] p-2 bg-gray-50 border border-gray-400 w-full 
          rounded-lg picker:ring-primary picker:border-primary 
          placeholder:italic placeholder:text-sm
          hover:ring-primary hover:ring-2 hover:border-primary
          focus:outline-none focus:text-primaryDark dark:focus:text-primary
          focus:ring-primary focus:ring-1 focus:border-1 focus:border-primary
          dark:bg-gray-700 dark:border-gray-400 
          caret-primary focus:caret-primary"
        />
      </div>
      {/* ====================================================== */}
      <br />
      <br />
      <br />
      {/* ====================================================== */}
    </>
  );
};

export default ProductListFilters;
