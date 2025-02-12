import { NumericFormat } from "react-number-format";

const CartItem = (props) => {
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
    <li className="">
      <div className="flex items-end justify-between mb-2 sm:mb-5">
        <div className="flex justify-start items-end">
          <div className="w-[50px] h-[50px] mr-2">
            <img className="h-full" src={props.image} alt="" />
          </div>
          <div className="text-lg leading-5 sm:text-2xl justify-self-start">
            {props.name}
          </div>
        </div>
        <div>
          {props.volume && (
            <div className="inline-flex">
              <p className="hidden sm:block text-md sm:text-xl text-gray-400">
                Объём:
              </p>
              <p
                className="text-lg sm:text-xl sm:mx-2 text-transparent 
                  bg-clip-text bg-gradient-to-r from-primary to-primaryDark"
              >
                {props.volume}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <div className="w-full flex justify-between items-center">
          <div className="inline-flex">
            <p className="text-md sm:text-xl mr-2 text-gray-400">Цена:</p>
            <p
              className="text-md sm:text-xl sm:mx-2 font-bold
              text-transparent bg-clip-text bg-gradient-to-r 
              from-primary to-primaryDark"
            >
              {price}
            </p>
          </div>
          <div className="inline-flex items-center">
            <p className="hidden sm:block text-md sm:text-xl text-gray-400">
              Кол-во:
            </p>
            <div
              className="text-md sm:text-xl w-10 h-8 sm:w-14 sm:h-10 text-white
              rounded-lg sm:rounded-xl flex justify-center items-center mx-2
              bg-gradient-to-br from-primaryLight to-primaryDark"
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
      <div
        className="h-[2px] sm:h-[4px] w-full my-2 sm:my-4
      bg-gradient-to-r from-primaryLight to-primaryDark"
      ></div>
    </li>
  );
};

export default CartItem;
