const StrainerSelector = (props) => {
  return (
    <div className="max-w-sm mx-auto mt-4">
      <div className="flex items-center mb-2">
        <div className="text-xl text-gray-400 mr-2">{props.icon}</div>
        <label
          htmlFor={props.filterName}
          className="block text-sm font-medium text-gray-900 
          dark:text-white"
        >
          {props.title}
        </label>
      </div>
      <select
        id={props.filterName}
        className="bg-gray-50 border focus:border-2 border-gray-400 
					text-gray-900 text-sm p-2.5 block w-full rounded-lg 
					focus:ring-primary focus:border-primary 
					picker:ring-primary picker:border-primary 
					dark:text-white
					dark:bg-gray-700 dark:border-gray-400 
					dark:focus:ring-primary dark:focus:border-primary"
        value={props.filterName}
        onChange={props.onChange}
      >
        <option defaultValue value="" className="checked:bg-primary">
          Показать все
        </option>

        {/* --- other options ----- */}
        {props.menuSelector}
      </select>
    </div>
  );
};

export default StrainerSelector;
