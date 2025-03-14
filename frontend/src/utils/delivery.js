import image1 from "../assets/cart/delivery_center.png";
import image2 from "../assets/cart/delivery_outskirts.png";
import image3 from "../assets/cart/Post_RF.png";
import image4 from "../assets/cart/Sdek_RF.png";
import image5 from "../assets/cart/to_Sdek.png";

export const DELIVERY = [
  {
    code: "deliveryOne",
    image: image1,
    title: "Центральные районы Екатеринбурга",
    price: 300,
    handler: "deliveryOneHandler",
  },
  {
    code: "deliveryTwo",
    image: image2,
    title: "Уралмаш, Эльмаш, Xиммаш, Елизавет, Компрессорный, Солнечный",
    price: 500,
    handler: "deliveryTwoHandler",
  },
  {
    code: "deliveryThree",
    image: image3,
    title: "по РФ Почта России",
    price: 300,
    handler: "deliveryThreeHandler",
  },
  {
    code: "deliveryFour",
    image: image4,
    title: "по РФ служба доставки СДЕК",
    price: 300,
    handler: "deliveryFourHandler",
  },
  {
    code: "deliveryFive",
    image: image5,
    title: "Доставка до пункта выдачи СДЕК",
    price: 150,
    handler: "deliveryFiveHandler",
  },
];
