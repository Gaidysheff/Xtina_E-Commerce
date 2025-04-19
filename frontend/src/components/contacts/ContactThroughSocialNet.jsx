import { FaTelegramPlane, FaVk, FaWhatsapp } from "react-icons/fa";

import { BsTelephoneOutboundFill } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";

const ContactThroughSocialNet = () => {
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4 text-brandLightGray">
        <a
          href="https://wa.me/79220389644"
          className="flex justify-center items-center py-2 border-2 border-brandLightGray 
					rounded-xl group hover:border-primary"
        >
          <FaWhatsapp
            className="text-lg xsm:text-xl sm:text-3xl md:text-5xl 
					group-hover:text-primary group-hover:scale-125 duration-300"
          />
        </a>
        <a
          href="tg://resolve?domain=Kestperfume23"
          className="flex justify-center items-center py-2 border-2 border-brandLightGray 
					rounded-xl group hover:border-primary"
        >
          <FaTelegramPlane
            className="text-lg xsm:text-xl sm:text-3xl md:text-5xl 
					group-hover:text-primary group-hover:scale-125 duration-300"
          />
        </a>
        <a
          href="https://vk.me/kestperfume"
          className="flex justify-center items-center py-2 border-2 border-brandLightGray 
					rounded-xl group hover:border-primary"
        >
          <FaVk
            className="text-lg xsm:text-xl sm:text-3xl md:text-5xl 
					group-hover:text-primary group-hover:scale-125 duration-300"
          />
        </a>
        <a
          href="tel:79220389644"
          className="flex justify-center items-center py-2 border-2 border-brandLightGray 
					rounded-xl group hover:border-primary"
        >
          <BsTelephoneOutboundFill
            className="text-base xsm:text-lg sm:text-2xl md:text-4xl 
					group-hover:text-primary group-hover:scale-125 duration-300"
          />
        </a>
        <a
          href="mailto:mail@example.com"
          className="flex justify-center items-center py-2 border-2 border-brandLightGray 
					rounded-xl group hover:border-primary"
        >
          <IoMailOpenOutline
            className="text-lg xsm:text-xl sm:text-3xl md:text-5xl 
					group-hover:text-primary group-hover:scale-125 duration-300"
          />
        </a>
      </div>
    </>
  );
};

export default ContactThroughSocialNet;
