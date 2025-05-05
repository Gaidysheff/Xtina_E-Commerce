import { useEffect, useState } from "react";

// import { useDebounce } from "../../../hooks/useDebounce";

// import { categories } from "../../api/data/products";

const ProductListFilters = (props) => {
  // const perfumes = useContext(PerfumeContext);
  const [sex, setSex] = useState();

  useEffect(() => {
    props.onChange({ sex });
  }, [sex]);

  return (
    <>
      {/* -------------- Filtering on Sex -------------- */}

      <div className="max-w-sm mx-auto">
        <label
          htmlFor="sex"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Выбрать пол
        </label>
        <select
          id="sex"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
          rounded-lg focus:ring-primary focus:border-primary focus:border-2 block w-full 
          p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-primary dark:focus:border-primary"
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
