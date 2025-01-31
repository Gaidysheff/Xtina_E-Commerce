const ButtonVolume = ({ text, handler = () => {} }) => {
  return (
    <button
      onClick={handler}
      className="cursor-pointer hover:scale-110 z-10 w-[5.8rem] md:w-[6rem]
			relative inline-flex items-center justify-center p-0.5 mb-2 me-1 
			overflow-hidden text-lg md:text-xl font-medium text-gray-900 rounded-lg 
      group bg-gradient-to-br from-primaryLight via-primary to-primaryDark 
			group-hover:from-primaryLight group-hover:via-primary 
			group-hover:to-primaryDark dark:text-white dark:hover:text-gray-800 
			focus:ring-4 focus:outline-none focus:ring-primary 
      dark:focus:ring-primary mr-3"
    >
      <span
        className="relative px-5 py-2.5 transition-all ease-in duration-100 
			bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0 
      w-[5.8rem] md:w-[6rem]"
      >
        {text}
      </span>
    </button>
  );
};

export default ButtonVolume;
