import { useEffect, useState } from "react";

const ProductListFilters = (props) => {
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
