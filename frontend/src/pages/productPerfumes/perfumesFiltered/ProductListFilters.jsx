import { useContext, useEffect, useState } from "react";

import { BsMusicNoteList } from "react-icons/bs";
import ChordContext from "../../../store/API/chord-context";
import CompoundContext from "../../../store/API/compound-context";
import { FaLayerGroup } from "react-icons/fa";
import FamilyContext from "../../../store/API/family-context";
import { GENDER } from "../../../utils/filterMenu";
import { GiGroupedDrops } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import { LiaElementor } from "react-icons/lia";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { MdCategory } from "react-icons/md";
import NoteContext from "../../../store/API/note-context";
import { SiElement } from "react-icons/si";
import { SiInstructure } from "react-icons/si";
import StrainerSelector from "../../../components/sharedUI/filter/StrainerSelector";
import { VscSettings } from "react-icons/vsc";

const ProductListFilters = (props) => {
  const notes = useContext(NoteContext);
  const chords = useContext(ChordContext);
  const compounds = useContext(CompoundContext);
  const families = useContext(FamilyContext);

  const [gender, setGender] = useState();
  const [note, setNote] = useState();
  const [chord, setChord] = useState();
  const [compound, setCompound] = useState();
  const [family, setFamily] = useState();

  useEffect(() => {
    props.onChange({ gender, note, chord, compound, family });
  }, [gender, note, chord, compound, family]);

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

  const iconChord = <FaLayerGroup />;

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

  const iconCompound = <SiInstructure />;

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
        {/* -------------------------------------------------------- */}

        <SiElement />
        <LiaElementor />
        <GiGroupedDrops />
        <LiaLayerGroupSolid />
        <VscSettings />

        <br />
      </div>

      {/* ------------------------------------------------------ */}
    </>
  );
};

export default ProductListFilters;
