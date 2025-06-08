import { NumericFormat } from "react-number-format";

const CloudPayment = (props) => {
  //let language = navigator.language //or fix
  let language = "ru-RU";

  function pay() {
    var widget = new cp.CloudPayments({
      language: language,
    });
    widget.pay(
      "auth", // или 'charge'
      {
        //options
        publicId: "test_api_00000000000000000000002", //id из личного кабинета
        description: "Оплата товаров в магазине Kést", //назначение
        amount: props.totalToBePaid, //сумма
        currency: "RUB", //валюта
        accountId: "user@example.com", //идентификатор плательщика (необязательно)
        invoiceId: "1234567", //номер заказа  (необязательно)
        skin: "modern", //дизайн виджета (необязательно)
        autoClose: 3,
      },
      {
        onSuccess: function (options) {
          // success
          //действие при успешной оплате
        },
        onFail: function (reason, options) {
          // fail
          //действие при неуспешной оплате
        },
        onComplete: function (paymentResult, options) {
          //Вызывается как только виджет получает от api.cloudpayments ответ с
          // результатом транзакции, например вызов вашей аналитики Facebook Pixel
        },
      }
    );
  }

  const cloudPaymentHandler = () => {
    pay();
  };

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
    <button
      className="cursor-pointer bg-transparent text-primaryDark ml-2
                font-semibold border-2 border-primaryDark py-2 px-4 rounded-xl 
                hover:bg-gradient-to-br hover:from-primaryLight 
                hover:to-primaryDark hover:text-white hover:ring 
                hover:border-white hover:ring-primaryDark/70"
      // data-aos="zoom-in"
      // data-aos-delay="500"
      // data-aos-duration="2000"
      onClick={cloudPaymentHandler}
    >
      Оплатить {amountToBePaid} через ВИДЖИТ
    </button>
  );
};

export default CloudPayment;
