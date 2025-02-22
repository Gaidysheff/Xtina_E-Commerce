import { NumericFormat } from "react-number-format";

const ConfirmFormItem = (props) => {
  const price = (
    <NumericFormat
      value={props.price}
      displayType={"text"}
      decimalSeparator=","
      thousandSeparator="."
      suffix={" ₽"}
    />
  );

  const subTotalCalculated = props.price * props.amount;

  const subTotal = (
    <NumericFormat
      value={subTotalCalculated}
      displayType={"text"}
      decimalSeparator=","
      thousandSeparator="."
      // suffix={" ₽"}
    />
  );

  return (
    <li>
      <div className="grid grid-cols-12">
        <div className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] sm:mr-2">
          {" "}
          <img className="h-full" src={props.image} alt="" />
        </div>
        <div className="col-span-7 grid grid-rows-2">
          <div
            className="text-[0.7rem] sm:text-lg leading-3 
					flex justify-start items-center"
          >
            <p>{props.name}</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-[0.7rem] sm:text-[1rem] flex justify-start items-center">
              {props.volume && (
                <p className="text-brandLightGray">
                  Объём:{" "}
                  <span className="text-primaryDark font-semibold">
                    {props.volume}
                  </span>
                </p>
              )}
            </div>
            <div
              className="text-[0.7rem] sm:text-[1rem] 
						flex justify-start items-center"
            >
              <p className="text-brandLightGray">
                Цена:{" "}
                <span className="text-primaryDark font-semibold">{price}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-center flex justify-center items-center">
          <p className="text-[0.9rem] sm:text-[1rem]">
            {props.amount}{" "}
            <span className="text-[0.7rem] text-brandLightGray sm:text-[0.9rem]">
              шт.
            </span>
          </p>
        </div>
        <div className="col-span-2 flex justify-end items-center">
          <p className="text-[0.9rem] sm:text-[1rem]">
            {subTotal}{" "}
            <span className="text-brandLightGray sm:text-[0.9rem]">₽</span>
          </p>
        </div>
      </div>
      <div
        className="h-[1px] sm:h-[2px] w-full my-2 sm:my-4
      bg-gradient-to-r from-primaryLight to-primaryDark"
      ></div>

      {/* ======================================================== */}
    </li>
  );
};

export default ConfirmFormItem;
