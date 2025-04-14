import {
  EmailIcon,
  InstapaperIcon,
  TelegramIcon,
  VKIcon,
  WhatsappIcon,
} from "react-share";
import {
  EmailShareButton,
  InstapaperShareButton,
  TelegramShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaInstagram, FaTelegram } from "react-icons/fa";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaVk } from "react-icons/fa6";

const SocialSharing = () => {
  // const currentPageUrl = window.location.href;
  // Fetch current Url of the Page

  const currentPageUrl = "https://ecommerce.gaidysheff.ru/";
  return (
    <>
      <div
        className="flex items-center gap-3 mt-6 justify-center sm:justify-end 
        text-brandLightGray"
      >
        <a href="https://wa.me/79122413937">
          <FaSquareWhatsapp
            className="text-3xl hover:text-primary 
                          hover:scale-125 duration-300"
          />
        </a>
        <a href="#">
          <FaInstagram
            className="text-3xl hover:text-primary 
                          hover:scale-125 duration-300"
          />
        </a>
        <a href="#">
          <FaTelegram
            className="text-3xl hover:text-primary 
                          hover:scale-125 duration-300"
          />
        </a>
        <a href="#">
          <FaVk
            className="text-3xl hover:text-primary 
                          hover:scale-125 duration-300"
          />
        </a>
      </div>
      {/* -------------------------------------------------- */}
      <WhatsappShareButton url={currentPageUrl} title="Title of This Page">
        <WhatsappIcon
          size={32}
          className="rounded-lg hover:scale-125 duration-300 hover:fill-primary"
          iconFillColor="transparant"
          bgStyle={{ fill: "#9ca3af" }}
        />
      </WhatsappShareButton>
      <WhatsappShareButton url={currentPageUrl} title="Title of This Page">
        <a href="#">
          <FaSquareWhatsapp
            className="text-3xl text-brandLightGray hover:text-primary 
          hover:scale-125 duration-300"
          />
        </a>
      </WhatsappShareButton>

      <TelegramShareButton url={currentPageUrl}>
        <TelegramIcon
          size={32}
          className="rounded-lg hover:scale-125 duration-300 hover:fill-primary"
          iconFillColor="transparant"
          bgStyle={{ fill: "#9ca3af" }}
        />
      </TelegramShareButton>
    </>
  );
};

export default SocialSharing;
