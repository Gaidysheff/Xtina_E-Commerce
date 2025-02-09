import { NumericFormat } from "react-number-format";

const CartItem = (props) => {
  // const price = `${props.price.toFixed(0)} R`;

  const price = (
    <NumericFormat
      value={props.price}
      displayType={"text"}
      decimalSeparator=","
      thousandSeparator="."
      suffix={" ₽"}
    />
  );

  return (
    <li
      className="pb-2 mb-2 sm:pb-4 sm:mb-4 border-b-2 sm:border-b-4 
      border-primaryDark"
    >
      <div className="flex items-end mb-2 sm:mb-5">
        <div className="w-[50px] h-[50px]">
          <img className="w-full" src={props.image} alt="" />
        </div>
        <div className="text-lg leading-5 sm:text-2xl">{props.name}</div>
      </div>
      <div className="flex justify-between items-center ">
        <div className="w-full flex justify-between items-center">
          <div className="inline-flex">
            <p className="hidden sm:block text-md sm:text-xl text-gray-400">
              Объём:
            </p>
            <p className="text-md sm:text-xl sm:mx-2 sm:text-primaryDark">
              {props.volume}
            </p>
          </div>
          <div className="inline-flex">
            <p className="hidden sm:block text-md sm:text-xl text-gray-400">
              Цена:
            </p>
            <p className="text-md sm:text-xl sm:mx-2 font-bold text-primaryDark">
              {price}
            </p>
          </div>
          <div className="inline-flex items-center">
            <p className="hidden sm:block text-md sm:text-xl text-gray-400">
              Кол-во:
            </p>
            <div
              className=" bg-primaryDark text-white text-md sm:text-xl 
              w-10 h-8 sm:w-14 sm:h-10 mx-2
              rounded-lg sm:rounded-xl flex justify-center items-center"
            >
              <p> x {props.amount}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl sm:text-2xl w-6 h-6 sm:w-8 sm:h-8 
            rounded-lg sm:rounded-xl pb-1 flex items-center justify-center
            text-bold text-primaryDark text-center 
            border-2 border-primaryDark cursor-pointer m-1
            hover:bg-gradient-to-br hover:from-primaryLight 
            hover:to-primaryDark hover:text-white hover:ring 
            hover:border-white hover:ring-primaryDark/70"
            onClick={props.onRemove}
          >
            <p>−</p>
          </button>
          <button
            className="text-xl sm:text-2xl w-6 h-6 sm:w-8 sm:h-8 
            rounded-lg sm:rounded-xl pb-1 flex items-center justify-center
            text-bold text-primaryDark text-center 
            border-2 border-primaryDark cursor-pointer m-1
            hover:bg-gradient-to-br hover:from-primaryLight 
            hover:to-primaryDark hover:text-white hover:ring 
            hover:border-white hover:ring-primaryDark/70"
            onClick={props.onAdd}
          >
            <p> +</p>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
