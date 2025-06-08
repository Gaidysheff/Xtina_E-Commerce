import "react-credit-cards-2/dist/es/styles-compiled.css";

import Cards from "react-credit-cards-2";
import { NumericFormat } from "react-number-format";
import { useState } from "react";

const PaymentCard = (props) => {
  // ---------- RCC-2 -------------------
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  // const [cardDisplay, setCardDisplay] = useState("");

  // ---------- cloudPayment -------------------
  const [cardNumber, setCardNumber] = useState("");
  const [expDateMonth, setExpDateMonth] = useState("");
  const [expDateYear, setExpDateYear] = useState("");
  const [code, setCode] = useState("");
  const [userName, setUserName] = useState("");

  // ---------------------------------------

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState((prev) => ({ ...prev, [name]: value }));

    if (name === "number") {
      setCardNumber(event.target.value);
      // setCardDisplay(
      //   event.target.value
      //     .replace(/[^\dA-Z]/g, "")
      //     .replace(/(.{4})/g, "$1  ")
      //     .trim()
      // );
      // if (cardNumber.length > 16) {
      //   setCardNumber(cardNumber.replaceAll(" ", ""));
      // }
    }

    if (name === "name") {
      setUserName(event.target.value);
    }

    if (name === "expiry") {
      const expireDate = event.target.value;
      setExpDateMonth(expireDate.slice(0, 2));
      setExpDateYear(expireDate.slice(4, 6) || expireDate.slice(2, 4));
    }
    if (name === "cvc") {
      setCode(event.target.value);
    }
  };

  const handleInputFocus = (event) => {
    setState((prev) => ({ ...prev, focus: event.target.name }));
  };

  // ===============================================

  const cloudPaymentHandler = () => {
    // setCardNumber(cardNumber.replaceAll(" ", ""));

    const checkout = new cp.Checkout({
      publicId: "test_api_000000000000000002",
      container: document.getElementById("paymentFormSample"),
    });

    checkout
      .createPaymentCryptogram()
      .then((cryptogram) => {
        console.log("cardNumber=", cardNumber);
        console.log("ExpDateMonth=", expDateMonth);
        console.log("ExpDateYear=", expDateYear);
        console.log("Code=", code);
        console.log("Name=", userName);
        console.log(cryptogram); // криптограмма
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  // ===============================================

  const amountToBePaid = (
    <NumericFormat
      value={props.totalToBePaid}
      displayType={"text"}
      decimalSeparator=","
      thousandSeparator="."
      suffix={" ₽"}
    />
  );

  return (
    <div className="grid grid-cols-2 gap-2">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />

      <div className="grid gap-2">
        {/* =================== ReactCreditCard–2 =================== */}
        <form className="grid gap-2" id="cardPayment" autoComplete="off">
          <input
            type="text"
            name="number"
            placeholder="номер карты"
            value={state.number}
            required
            className="border border-2 w-ful rounded-lg p-1 pl-3 text-base 
            italic font-normal"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="имя владельца карты"
              required
              className="border border-2 w-full rounded-lg p-1 pl-3 text-base 
              italic font-normal"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="flex gap-3">
            <div className="">
              <input
                type="text"
                name="expiry"
                className="border border-2 w-full rounded-lg p-1 pl-3 text-base 
                italic font-normal"
                placeholder="мм/гг"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                name="cvc"
                className="border border-2 w-full rounded-lg p-1 pl-3 text-base 
                italic font-normal"
                placeholder="код карты"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-transparent text-primaryDark w-full
            justify-self-end font-semibold border-2 border-primaryDark py-2 px-4 
            rounded-xl hover:bg-gradient-to-br hover:from-primaryLight 
            hover:to-primaryDark hover:text-white hover:ring 
            hover:border-white hover:ring-primaryDark/70
            hidden"
          >
            Оплатить {amountToBePaid}
          </button>
        </form>
        {/* =================== CloudPayment Form =================== */}
        <form id="paymentFormSample" autoComplete="off">
          <input
            className="hidden"
            type="text"
            data-cp="cardNumber"
            defaultValue={cardNumber}
          />
          <input
            className="hidden"
            type="text"
            data-cp="expDateMonth"
            defaultValue={expDateMonth}
          />
          <input
            className="hidden"
            type="text"
            data-cp="expDateYear"
            defaultValue={expDateYear}
          />
          <input
            className="hidden"
            type="text"
            data-cp="cvv"
            defaultValue={code}
          />
          <input
            className="hidden"
            type="text"
            data-cp="name"
            defaultValue={userName}
          />
          <button
            type="submit"
            className="cursor-pointer bg-transparent text-primaryDark w-full
            justify-self-end font-semibold border-2 border-primaryDark py-2 px-4 
            rounded-xl hover:bg-gradient-to-br hover:from-primaryLight 
            hover:to-primaryDark hover:text-white hover:ring 
            hover:border-white hover:ring-primaryDark/70"
            onClick={cloudPaymentHandler}
          >
            Оплатить {amountToBePaid}
          </button>
        </form>
        {/* -------------------------------------------- */}
      </div>
    </div>
  );
};

export default PaymentCard;
