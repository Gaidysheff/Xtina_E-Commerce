import DarkButton from "./../../../assets/website/dark-mode-button.png";
import LightButton from "./../../../assets/website/light-mode-button.png";

const DarkMode = (props) => {
  return (
    <div className="relative">
      <img
        onClick={props.themeHandler}
        src={LightButton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10
        ${props.theme === "dark" ? "opacity-0" : "opacity-100"}
        transition-all duration-300`}
      />
      <img
        onClick={props.themeHandler}
        src={DarkButton}
        alt=""
        className="w-12 cursor-pointer"
      />
    </div>
  );
};

export default DarkMode;
