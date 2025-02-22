import { DELIVERY } from "../../utils/delivery";
import { FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { NumericFormat } from "react-number-format";
import SelfPickup from "../../assets/cart/self-pickup.png";

const ConfirmFormDelivery = (props) => {
  return (
    <li>
      <div className="text-[0.8rem] sm:text-[1rem] italic text-brandLightGray">
        Контактные данные:
      </div>
      <div className="grid grid-cols-12 my-2 text-[0.8rem] sm:text-[1rem]">
        <div className="col-span-1 flex items-center text-primaryDark">
          <FaRegUser />
        </div>
        <div className="col-span-11 flex items-center">{props.name}</div>
      </div>
      <div className="grid grid-cols-12 my-2 text-[0.8rem] sm:text-[1rem]">
        <div className="col-span-1 flex items-center text-primaryDark">
          <FiPhoneCall />
        </div>
        <div className="col-span-11 flex items-center">{props.telephone}</div>
      </div>

      <div className="grid grid-cols-12 my-2 text-[0.8rem] sm:text-[1rem]">
        <div className="col-span-1 flex items-center text-[1rem] sm:text-[1.4rem] text-primaryDark">
          <MdOutlineDriveFileRenameOutline />
        </div>
        <div className="col-span-11 flex items-center">{props.connection}</div>
      </div>

      <div
        className="text-[0.8rem] sm:text-[1rem] italic text-brandLightGray
      my-3"
      >
        Доставка:
      </div>
      {/* ------------------ Delivery One ------------------- */}
      {props.deliveryOne && (
        <div className="border-2 rounded-xl p-3 flex justify-between items-center">
          <div className="flex items-center justify-start">
            <img
              src={DELIVERY[0].image}
              alt="icon for delivery option"
              className="w-[1.6rem] h-[1.8rem] sm:w-[1.8rem] sm:h-[2.2rem] mr-5"
            />
            <div className="grid-rows-2">
              <div
                className="w-full text-[0.7rem] sm:text-[0.9rem] italic 
              text-brandDarkGray sm:leading-5"
              >
                {DELIVERY[0].title}
              </div>
              <div className="text-[0.9rem] sm:text-[1.1rem]">
                {props.deliveryOne}
              </div>
            </div>
          </div>
          <div className="w-[4rem] text-end text-[0.9rem] sm:text-[1rem]">
            {DELIVERY[0].price}{" "}
            <span className="text-brandLightGray sm:text-[0.9rem]">₽</span>
          </div>
        </div>
      )}
      {/* ------------------ Delivery Two ------------------- */}
      {props.deliveryTwo && (
        <div className="border-2 rounded-xl p-3 flex justify-between items-center">
          <div className="flex items-center justify-start">
            <img
              src={DELIVERY[1].image}
              alt="icon for delivery option"
              className="w-[1.6rem] h-[1.8rem] sm:w-[1.8rem] sm:h-[2.2rem] mr-5"
            />
            <div className="grid-rows-2">
              <div
                className="w-full text-[0.7rem] sm:text-[0.9rem] italic 
              text-brandDarkGray sm:leading-5"
              >
                {DELIVERY[1].title}
              </div>
              <div className="text-[0.9rem] sm:text-[1.1rem]">
                {props.deliveryTwo}
              </div>
            </div>
          </div>
          <div className="w-[4rem] text-end text-[0.9rem] sm:text-[1rem]">
            {DELIVERY[1].price}{" "}
            <span className="text-brandLightGray sm:text-[0.9rem]">₽</span>
          </div>
        </div>
      )}
      {/* ------------------ Delivery Three ------------------- */}
      {props.deliveryThree && (
        <div className="border-2 rounded-xl p-3 flex justify-between items-center">
          <div className="flex items-center justify-start">
            <img
              src={DELIVERY[2].image}
              alt="icon for delivery option"
              className="w-[1.6rem] h-[1.8rem] sm:w-[1.8rem] sm:h-[2.2rem] mr-5"
            />
            <div className="grid-rows-2">
              <div
                className="w-full text-[0.7rem] sm:text-[0.9rem] italic 
              text-brandDarkGray sm:leading-5"
              >
                {DELIVERY[2].title}
              </div>
              <div className="text-[0.9rem] sm:text-[1.1rem]">
                {props.deliveryThree}
              </div>
            </div>
          </div>
          <div className="w-[4rem] text-end text-[0.9rem] sm:text-[1rem]">
            {DELIVERY[2].price}{" "}
            <span className="text-brandLightGray sm:text-[0.9rem]">₽</span>
          </div>
        </div>
      )}
      {/* ------------------ Delivery Four ------------------- */}
      {props.deliveryFour && (
        <div className="border-2 rounded-xl p-3 flex justify-between items-center">
          <div className="flex items-center justify-start">
            <img
              src={DELIVERY[3].image}
              alt="icon for delivery option"
              className="w-[1.6rem] h-[1.8rem] sm:w-[1.8rem] sm:h-[2.2rem] mr-5"
            />
            <div className="grid-rows-2">
              <div
                className="w-full text-[0.7rem] sm:text-[0.9rem] italic 
              text-brandDarkGray sm:leading-5"
              >
                {DELIVERY[3].title}
              </div>
              <div className="text-[0.9rem] sm:text-[1.1rem]">
                {props.deliveryFour}
              </div>
            </div>
          </div>
          <div className="w-[4rem] text-end text-[0.9rem] sm:text-[1rem]">
            {DELIVERY[3].price}{" "}
            <span className="text-brandLightGray sm:text-[0.9rem]">₽</span>
          </div>
        </div>
      )}
      {/* ------------------ Delivery Five ------------------- */}
      {props.deliveryFive && (
        <div className="border-2 rounded-xl p-3 flex justify-between items-center">
          <div className="flex items-center justify-start">
            <img
              src={DELIVERY[4].image}
              alt="icon for delivery option"
              className="w-[1.6rem] h-[1.8rem] sm:w-[1.8rem] sm:h-[2.2rem] mr-5"
            />
            <div className="grid-rows-2">
              <div
                className="w-full text-[0.7rem] sm:text-[0.9rem] italic 
              text-brandDarkGray sm:leading-5"
              >
                {DELIVERY[4].title}
              </div>
              <div className="text-[0.9rem] sm:text-[1.1rem]">
                {props.deliveryFive}
              </div>
            </div>
          </div>
          <div className="w-[4rem] text-end text-[0.9rem] sm:text-[1rem]">
            {DELIVERY[4].price}{" "}
            <span className="text-brandLightGray sm:text-[0.9rem]">₽</span>
          </div>
        </div>
      )}
      {/* ------------------ SelfPickup ------------------- */}

      {props.deliveryOne ||
      props.deliveryTwo ||
      props.deliveryThree ||
      props.deliveryFour ||
      props.deliveryFive ? null : (
        <div className="border-2 rounded-xl p-3 flex justify-between items-center">
          <div className="flex items-center justify-start">
            <img
              src={SelfPickup}
              alt="icon for delivery option"
              className="w-[1.6rem] h-[1.8rem] sm:w-[1.8rem] sm:h-[2.2rem] mr-5"
            />
            <div className="grid-rows-2">
              <div
                className="w-full text-[0.7rem] sm:text-[0.9rem] italic 
                      text-brandDarkGray sm:leading-5"
              >
                Самовывоз
              </div>
              <div className="text-[0.9rem] sm:text-[1.1rem]">
                {props.deliveryFive}
              </div>
            </div>
          </div>
          <div className="w-[4rem] text-end text-[0.9rem] sm:text-[1rem]">
            0<span className="text-brandLightGray sm:text-[0.9rem]">₽</span>
          </div>
        </div>
      )}
    </li>
  );
};

export default ConfirmFormDelivery;
