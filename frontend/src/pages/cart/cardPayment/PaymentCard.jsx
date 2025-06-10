import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./paymentCard.css";

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

  const [inputError, setInputError] = useState("");
  const [isCryptogram, setIsCryptogram] = useState(false);
  // ---------------------------------------

  const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;
  const inputNameClasses = isNameInputInvalid ? "invalid_field" : "valid_field";

  const [isEnteredNumberValid, setIsEnteredNumberValid] = useState(true);
  const [wasNumberInputTouched, setWasNumberInputTouched] = useState(false);
  const isNumberInputInvalid = !isEnteredNumberValid && wasNumberInputTouched;
  const inputNumberClasses = isNumberInputInvalid
    ? "invalid_field"
    : "valid_field";
  const [isEnteredCodeValid, setIsEnteredCodeValid] = useState(true);
  const [wasCodeInputTouched, setWasCodeInputTouched] = useState(false);
  const isCodeInputInvalid = !isEnteredCodeValid && wasCodeInputTouched;
  const inputCodeClasses = isCodeInputInvalid ? "invalid_field" : "valid_field";
  // --------
  const [isEnteredExpDateMonthValid, setIsEnteredExpDateMonthValid] =
    useState(true);
  const [isEnteredExpDateYearValid, setIsEnteredExpDateYearValid] =
    useState(true);
  const [wasExpiryInputTouched, setWasExpiryInputTouched] = useState(false);

  const isExpiryInputInvalid =
    (!isEnteredExpDateMonthValid && wasExpiryInputTouched) ||
    (!isEnteredExpDateYearValid && wasExpiryInputTouched);

  const inputExpiryClasses = isExpiryInputInvalid
    ? "invalid_field"
    : "valid_field";
  // ---------------------------------------

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState((prev) => ({ ...prev, [name]: value }));

    setInputError("");

    if (name === "number") {
      setCardNumber(event.target.value);
      setIsEnteredNumberValid(true);
      setWasNumberInputTouched(true);

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
      setIsEnteredNameValid(true);
      setWasNameInputTouched(true);
    }

    if (name === "expiry") {
      const expireDate = event.target.value;
      setExpDateMonth(expireDate.slice(0, 2));
      setExpDateYear(expireDate.slice(4, 6) || expireDate.slice(2, 4));
      setIsEnteredExpDateMonthValid(true);
      setIsEnteredExpDateYearValid(true);
      setWasExpiryInputTouched(true);
    }
    if (name === "cvc") {
      setCode(event.target.value);
      setIsEnteredCodeValid(true);
      setWasCodeInputTouched(true);
    }
  };

  const handleInputFocus = (event) => {
    setState((prev) => ({ ...prev, focus: event.target.name }));
  };

  // ===============================================

  const cloudPaymentHandler = () => {
    setWasNameInputTouched(true);
    setWasNumberInputTouched(true);
    setWasCodeInputTouched(true);
    setWasExpiryInputTouched(true);

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
        setIsCryptogram(true);
      })
      .catch((errors) => {
        console.log(errors);
        if (errors.cardNumber == "CardNumber_Empty") {
          setInputError("Введите номер карты");
          setIsEnteredNumberValid(false);
        }
        if (errors.cardNumber == "CardNumber_Invalid") {
          setInputError("Некорректный номер карты");
          setIsEnteredNumberValid(false);
        }
        if (errors.cvv == "Cvv_Empty") {
          setInputError("Введите код cvv/cvc");
          setIsEnteredCodeValid(false);
        }
        if (errors.cvv == "Cvv_Invalid") {
          setInputError("Некорректный код cvv/cvc");
          setIsEnteredCodeValid(false);
        }
        if (errors.expDateMonth == "ExpDateMonth_Empty") {
          setInputError("Введите месяц");
          setIsEnteredExpDateMonthValid(false);
        }
        if (!errors.expDateMonth && errors.expDateYear == "ExpDateYear_Empty") {
          setInputError("Введите год");
          setIsEnteredExpDateYearValid(false);
        }
        if (errors.expDateMonth == "ExpDateMonth_Invalid") {
          setInputError("Некорректный месяц");
          setIsEnteredExpDateMonthValid(false);
        }
        if (errors.expDateYear == "ExpDateYear_Invalid") {
          setInputError("Некорректный год");
          setIsEnteredExpDateYearValid(false);
        }
        if (errors.name == "Name_Empty") {
          setInputError("Введите имя владельца карты");
          setIsEnteredNameValid(false);
        }
        if (errors.name == "Name_Invalid") {
          setInputError("Некорректное имя");
          setIsEnteredNameValid(false);
        }
        if (errors.name == "Name_TooLong") {
          setInputError("Слишком длинное имя");
          setIsEnteredNameValid(false);
        }
        if (errors.name == "Name_TooShort") {
          setInputError("Слишком короткое имя");
          setIsEnteredNameValid(false);
        }
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
    <section>
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
              className={inputNumberClasses}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <div className="">
              <input
                type="text"
                name="name"
                placeholder="имя владельца карты"
                required
                className={inputNameClasses}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="flex gap-3">
              <div className="">
                <input
                  type="text"
                  name="expiry"
                  className={inputExpiryClasses}
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
                  className={inputCodeClasses}
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
      {inputError && (
        <div
          className="bg-red-500 text-white rounded-lg my-2 p-1 text-center 
        italic font-light"
        >
          {inputError}
        </div>
      )}
      {isCryptogram && (
        <div
          className="bg-green-700 text-white rounded-lg my-2 p-1 text-center 
        italic font-light"
        >
          Шифрованная криптограмма отослана. Можно закрыть окно.
        </div>
      )}
    </section>
  );
};

export default PaymentCard;
