const Button = ({ text, bgColor, textColor, paddings, handler = () => {} }) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} ${paddings} cursor-pointer 
      hover:scale-105 duration-300 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
