import Image from "../assets/shared/constraction.png";
import { Link } from "react-router";
import OrderContext from "./../store/order-context.js";
import { useContext } from "react";

const About = () => {
  const orderContext = useContext(OrderContext);

  return (
    <section className="section h-[62vh] m-[5rem]" id="about">
      <div className="container flex justify-center">
        {/* <img src={Image} alt="" /> */}

        {orderContext.shipping.map((ship, index) => (
          <div key={index}>
            <div>{ship.name}</div>
            <div>{ship.telephone}</div>
            <div>{ship.connection}</div>
            {ship.deliveryOne && <div>{ship.deliveryOne}</div>}

            {ship.deliveryTwo && <div>{ship.deliveryTwo}</div>}
            {ship.deliveryThree && <div>{ship.deliveryThree}</div>}
            {ship.deliveryFour && <div>{ship.deliveryFour}</div>}
            {ship.deliveryFive && <div>{ship.deliveryFive}</div>}
            {ship.deliveryOne ||
            ship.deliveryTwo ||
            ship.deliveryThree ||
            ship.deliveryFour ||
            ship.deliveryFive ? null : (
              <p>Самовывоз</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default About;
