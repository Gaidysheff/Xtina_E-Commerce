import { useContext, useEffect, useState } from "react";

import AromaContext from "../../../store/API/aroma-context";
import BaseNoteContext from "../../../store/API/baseNote-context";
import ImageAroma from "../../../assets/filters/aroma.png";
import ImageBaseNote from "../../../assets/filters/baseNote.png";
import ImageMiddleNote from "../../../assets/filters/middleNote.png";
import ImageTopNote from "../../../assets/filters/topNote.png";
import { IoIosPricetags } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MAX_PRICE_FRESHENERS } from "../../../utils/filterMenu";
import MiddleNoteContext from "../../../store/API/middleNote-context";
import StrainerSelector from "../../../components/sharedUI/filter/StrainerSelector";
import TopNoteContext from "../../../store/API/topNote-context";
import { useDebounce } from "../../../hooks/useDebounce";

const ProductListFilters = (props) => {
  const [aroma, setAroma] = useState();
  const [topNote, setTopNote] = useState();
  const [baseNote, setBaseNote] = useState();
  const [middleNote, setMiddleNote] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [search, setSearch] = useState();

  const aromas = useContext(AromaContext);
  const topNotes = useContext(TopNoteContext);
  const baseNotes = useContext(BaseNoteContext);
  const middleNotes = useContext(MiddleNoteContext);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    props.onChange({
      aroma,
      topNote,
      baseNote,
      middleNote,
      maxPrice,
      search: debouncedSearch,
    });
  }, [aroma, topNote, baseNote, middleNote, maxPrice, debouncedSearch]);

  // -------------- Filtering on Aromas --------------
  const menuAroma = aromas.map((item) => {
    if (item.name !== "---") {
      return (
        <option key={item.id} value={item.name} className="checked:bg-primary">
          {item.name}
        </option>
      );
    }
  });

  const iconAroma = (
    <div className="h-[1.125rem] 2xsm:h-[1.25rem]">
      <img
        src={ImageAroma}
        alt="aroma icon"
        className="h-[1.125rem] 2xsm:h-[1.25rem]"
      />
    </div>
  );

  // -------------- Filtering on TopNotes --------------
  const menuTopNote = topNotes.map((item) => {
    if (item.name !== "---") {
      return (
        <option key={item.id} value={item.name} className="checked:bg-primary">
          {item.name}
        </option>
      );
    }
  });

  const iconTopNote = (
    <div className="h-[1.125rem] 2xsm:h-[1.25rem]">
      <img
        src={ImageTopNote}
        alt="aroma icon"
        className="h-[1.125rem] 2xsm:h-[1.25rem]"
      />
    </div>
  );

  // -------------- Filtering on MiddleNotes --------------
  const menuMiddleNote = middleNotes.map((item) => {
    if (item.name !== "---") {
      return (
        <option key={item.id} value={item.name} className="checked:bg-primary">
          {item.name}
        </option>
      );
    }
  });

  const iconMiddleNote = (
    <div className="h-[1.125rem] 2xsm:h-[1.25rem]">
      <img
        src={ImageMiddleNote}
        alt="aroma icon"
        className="h-[1.125rem] 2xsm:h-[1.25rem]"
      />
    </div>
  );

  // -------------- Filtering on BaseNotes --------------
  const menuBaseNote = baseNotes.map((item) => {
    if (item.name !== "---") {
      return (
        <option key={item.id} value={item.name} className="checked:bg-primary">
          {item.name}
        </option>
      );
    }
  });

  const iconBaseNote = (
    <div className="h-[1.125rem] 2xsm:h-[1.25rem]">
      <img
        src={ImageBaseNote}
        alt="aroma icon"
        className="h-[1.125rem] 2xsm:h-[1.25rem]"
      />
    </div>
  );

  // -------------- Filtering on maxPrice --------------
  const menuMaxPrice = MAX_PRICE_FRESHENERS.map((item, index) => {
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
        {/* -------------- Filtering on Aromas -------------- */}

        <div className="mb-6">
          <StrainerSelector
            filterName={aroma}
            icon={iconAroma}
            menuSelector={menuAroma}
            title={"Выбрать аромат"}
            onChange={(e) => setAroma(e.target.value)}
          />
        </div>
        {/* -------------- Filtering on TopNotes -------------- */}
        <div className="mb-6">
          <StrainerSelector
            filterName={topNote}
            icon={iconTopNote}
            menuSelector={menuTopNote}
            title={"Выбрать верхнюю ноту"}
            onChange={(e) => setTopNote(e.target.value)}
          />
        </div>
        {/* -------------- Filtering on MiddleNotes -------------- */}
        <div className="mb-6">
          <StrainerSelector
            filterName={middleNote}
            icon={iconMiddleNote}
            menuSelector={menuMiddleNote}
            title={"Выбрать среднюю ноту"}
            onChange={(e) => setMiddleNote(e.target.value)}
          />
        </div>
        {/* -------------- Filtering on BaseNotes -------------- */}
        <div className="mb-6">
          <StrainerSelector
            filterName={baseNote}
            icon={iconBaseNote}
            menuSelector={menuBaseNote}
            title={"Выбрать базовую ноту"}
            onChange={(e) => setBaseNote(e.target.value)}
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
          <div className="text-lg 2xsm:text-xl text-gray-400 mr-2">
            <IoSearch />
          </div>
          <label
            htmlFor="search"
            className="block text-[0.7rem] 2xsm:text-[0.8rem] font-medium text-gray-900 
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
          placeholder="фрагмент текста для поиска ..."
          className="h-[25px] 2xsm:h-[40px] px-2 bg-gray-50 border 
          border-gray-400 w-full 
          rounded-lg picker:ring-primary picker:border-primary 
          placeholder:italic placeholder:text-[0.6rem] 2xsm:placeholder:text-[0.7rem]
          hover:ring-primary hover:ring-2 hover:border-primary
          focus:outline-none focus:text-primaryDark dark:focus:text-primary
          focus:ring-primary focus:ring-1 focus:border-1 focus:border-primary
          dark:bg-gray-700 dark:border-gray-400 
          caret-primary focus:caret-primary"
        />
      </div>
      {/* ====================================================== */}
    </>
  );
};

export default ProductListFilters;
