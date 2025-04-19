import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  MailruShareButton,
  OKShareButton,
  TelegramShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaFacebookSquare,
  FaInstagram,
  FaOdnoklassnikiSquare,
  FaTelegram,
} from "react-icons/fa";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaVk } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import { MdOutlineAlternateEmail } from "react-icons/md";

const SocialSharing = () => {
  const currentPageUrl = window.location;
  // Fetch current Url of the Page

  return (
    <>
      <WhatsappShareButton
        url={currentPageUrl}
        title="Привет, хочу поделиться интересной страницей"
      >
        <FaSquareWhatsapp
          className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl mr-2 sm:mr-3
          md:mr-4 text-brandLightGray hover:text-primary hover:scale-125 
          duration-300"
        />
      </WhatsappShareButton>

      <VKShareButton
        url={currentPageUrl}
        title="Привет, хочу поделиться интересной страницей"
      >
        <FaVk
          className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl mr-2 sm:mr-3
          md:mr-4 text-brandLightGray hover:text-primary hover:scale-125 
          duration-300"
        />
      </VKShareButton>

      <InstapaperShareButton
        url={currentPageUrl}
        title="Делюсь интересной страницей"
        description="Привет, хочу поделиться интересной страницей"
      >
        <FaInstagram
          className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl mr-2 sm:mr-3
          md:mr-4 text-brandLightGray hover:text-primary hover:scale-125 
          duration-300"
        />
      </InstapaperShareButton>

      <TelegramShareButton
        url={currentPageUrl}
        title="Привет, хочу поделиться интересной страницей"
      >
        <FaTelegram
          className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl mr-2 sm:mr-3
          md:mr-4 text-brandLightGray hover:text-primary hover:scale-125 
          duration-300"
        />
      </TelegramShareButton>

      <OKShareButton
        url={currentPageUrl}
        title="Привет, хочу поделиться интересной страницей"
      >
        <FaOdnoklassnikiSquare
          className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl mr-2 sm:mr-3
          md:mr-4 text-brandLightGray hover:text-primary hover:scale-125 
          duration-300"
        />
      </OKShareButton>
      <FacebookShareButton url={currentPageUrl} hashtag="#K.ést.23">
        <FaFacebookSquare
          className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl mr-2 sm:mr-3
          md:mr-4 text-brandLightGray hover:text-primary hover:scale-125 
          duration-300"
        />
      </FacebookShareButton>

      <MailruShareButton
        url={currentPageUrl}
        title="Делюсь интересной страницей"
        description="Привет, хочу поделиться интересной страницей"
      >
        <MdOutlineAlternateEmail
          className="text-sxl xsm:text-3xl sm:text-4xl md:text-5xl mr-2 sm:mr-3
          md:mr-4 text-brandLightGray hover:text-primary hover:scale-125 
          duration-300"
        />
      </MailruShareButton>
      <EmailShareButton
        url={currentPageUrl}
        subject="хочу поделиться интересной страницей"
        body="Привет, хочу поделиться интересной страницей"
        separator=" --> "
      >
        <ImMail
          className="text-sxl xsm:text-3xl sm:text-4xl md:text-5xl mr-2 sm:mr-3
          md:mr-4 text-brandLightGray hover:text-primary hover:scale-125 
          duration-300"
        />
      </EmailShareButton>
    </>
  );
};

export default SocialSharing;
