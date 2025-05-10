import { useContext, useEffect, useState } from "react";

import { BsMusicNoteList } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { GiGroupedDrops } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import { LiaElementor } from "react-icons/lia";
import { LiaLayerGroupSolid } from "react-icons/lia";
import NoteContext from "../../../store/API/note-context";
import { SiElement } from "react-icons/si";
import { SiInstructure } from "react-icons/si";
import StrainerSelector from "../../../components/sharedUI/filter/StrainerSelector";
import { VscSettings } from "react-icons/vsc";

const ProductListFilters = (props) => {
  const notes = useContext(NoteContext);

  const [sex, setSex] = useState();
  const [note, setNote] = useState();

  useEffect(() => {
    props.onChange({ sex, note });
  }, [sex, note]);

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

  return (
    <>
      <div className="max-w-sm mx-auto mt-4">
        {/* -------------- Filtering on Notes -------------- */}

        <div className="mb-6">
          <StrainerSelector
            filterName={"note"}
            icon={iconNote}
            menuSelector={menuNote}
            title={"Выбрать основные ноты"}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        {/* -------------------------------------------------------- */}

        <ImManWoman />
        <VscSettings />
        <SiInstructure />
        <SiElement />
        <LiaElementor />
        <GiGroupedDrops />
        <LiaLayerGroupSolid />
        <FaLayerGroup />
        <br />
      </div>
      {/* -------------- Filtering on Sex -------------- */}

      <div className="max-w-sm mx-auto mt-6">
        <label
          htmlFor="sex"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Выбрать пол
        </label>
        <select
          id="sex"
          className="bg-gray-50 border focus:border-2 border-gray-400 
          text-gray-900 text-sm p-2.5 block w-full rounded-lg 
          focus:ring-primary focus:border-primary 
          picker:ring-primary picker:border-primary 
          dark:text-white
          dark:bg-gray-700 dark:border-gray-400 
          dark:focus:ring-primary dark:focus:border-primary"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <option defaultValue value="" className="checked:bg-primary">
            Показать все
          </option>
          <option value="для женщин" className="checked:bg-primary">
            для женщин
          </option>
          <option value="для мужчин" className="checked:bg-primary">
            для мужчин
          </option>
          <option value="унисекс" className="checked:bg-primary">
            унисекс
          </option>
        </select>
      </div>

      {/* ------------------------------------------------------ */}
    </>
  );
};

export default ProductListFilters;
