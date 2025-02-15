// import "intl-tel-input/styles";
// import IntlTelInput from "intl-tel-input/reactWithUtils";

import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input";
import { useState } from "react";

// import PhoneInput from "react-phone-number-input";

const TelephoneInput = () => {
  const [value, setValue] = useState();

  const phoneInputHandler = (number) => {
    setValue(number);
    console.log("Phone:", number);
  };

  return (
    <PhoneInput
      defaultCountry="RU"
      placeholder="введите телефон без кода страны"
      value={value}
      onChange={phoneInputHandler}
      className="text-sm rounded-xl border-2 border-red-600 p-1 
      active:border-0 focus:border-0"
    />
  );
  // <IntlTelInput
  //   initialValue={value}
  //   onChangeNumber={setNumber}
  //   onChangeValidity={setIsValid}
  //   onChangeErrorCode={setErrorCode}
  //   // any initialisation options from the readme will work here
  //   initOptions={{
  //     initialCountry: "us",
  //     loadUtils: () => import("/intl-tel-input/js/utils.js?1733756310855"),
  //   }}
  // />
  // <IntlTelInput
  //   onChangeNumber={"9122413937"}
  //   // onChangeNumber={setNumber}
  //   // onChangeValidity={setIsValid}
  //   initOptions={{
  //     initialCountry: "ru",
  //   }}
  // />
};

export default TelephoneInput;
