import {
  DropdownLinks,
  DropdownLinksBurger,
  MenuLinks,
} from "../../utils/navbarMenus";
import { FaArrowUpFromBracket, FaSquareWhatsapp } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTelegram,
} from "react-icons/fa";

import { FaVk } from "react-icons/fa6";
import { Link } from "react-scroll";
import Logo_short_primary from "../../assets/shared/Logo_short_primary.svg";
import { MdPlace } from "react-icons/md";
import heart from "../../assets/icons/heart-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-3 sm:px-0">
      <section className="container md:grid md:grid-cols-8">
        <div className="md:col-span-3">
          {/* company details */}
          <div
            className="col-span-2 py-8 pl-4 pr-2"
            data-aos="slide-right"
            data-aos-delay="200"
          >
            <a
              href="/"
              className="text-primary font-semibold text-2xl tracking-widest 
							uppercase sm:text-3xl"
            >
              <img
                src={Logo_short_primary}
                alt="Logo"
                className="w-[100px] hover:scale-110 mb-6"
              />
            </a>
            <p className="text-brandLightGray lg:pr-24 pt-3">
              12:00 – 20:00 ежедневно
            </p>
            <p className="text-brandLightGray lg:pr-24 pt-3">
              *о возможных изменениях узнавайте в WhatsApp или по телефону.
            </p>

            {/* for Emoji type Windows logo key + . */}
            {/* <a
              href="http://www.google.com"
              target="_blank"
              className="inline-block bg-primary/90 text-white text-sm 
							py-2 px-4 mt-4 rounded-full"
            >
              Visit our YouTube Channel
            </a> */}
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 md:col-span-5 md:grid-cols-12">
          <div className="grid grid-cols-2 md:col-span-6 md:grid-cols-10 items-center">
            <div className="md:col-span-4">
              {/* Menu links */}
              <div className="py-8 pl-4">
                <h1
                  className="text-xl font-bold sm:text-left mb-3 
                text-brandLightGray"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="1000"
                >
                  Меню
                </h1>
                <ul className="space-y-3">
                  {MenuLinks.map((link, index) => (
                    <li
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay={link.aosDelay}
                    >
                      <a
                        href={link.path}
                        className="text-brandLightGray
											hover:text-white hover:text-lg duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-6 text-end pr-4">
              {/* Catalogue links */}
              <div className="py-8">
                <h1
                  className="text-xl font-bold mb-3 
                text-brandLightGray"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="1000"
                >
                  Каталог
                </h1>
                <ul className="space-y-3">
                  {DropdownLinks.map((link, index) => (
                    <li
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay={link.aosDelay}
                    >
                      <a
                        href={link.path}
                        className="text-brandLightGray
											hover:text-white hover:text-lg duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            {/* Company Address */}
            <div
              className="py-2 sm:py-8 pr-4 sm:col-span-auto md:col-span-2 
              text-brandLightGray sm:pr-8"
              data-aos="slide-left"
              data-aos-delay="200"
            >
              <h1 className="text-xl font-bold mb-3  sm:text-end">Адрес</h1>
              <div>
                <div className="flex items-center gap-2 sm:justify-end sm:text-end">
                  <MdPlace className="text-2xl sm:text-3xl" />
                  <div>
                    <p>ул. Печатников д.1,</p>
                    <p>Екатеринбург</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-6 sm:justify-end">
                  <FaMobileAlt className="text-xl" />
                  <p>+7(922)-038-96-44</p>
                </div>
                {/* Social links */}
                <div className="flex items-center gap-3 mt-6 sm:justify-end">
                  <a href="#">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 text-brandLightGray mx-[-1rem] sm:mx-0">
        <div className="container py-5">
          <div className="flex justify-between items-center">
            <Link
              to="top"
              smooth={true}
              duration={700}
              className="cursor-pointer hover:scale-110 hover:text-primary"
            >
              <div className="flex-col text-brandLightGray px-1 hover:text-primary">
                <FaArrowUpFromBracket className="justify-self-center" />
                <p>Наверх</p>
              </div>
            </Link>
            <div
              className="text-center text-[0.7rem] sm:text-[1rem]"
              data-aos="flip-right"
              data-aos-delay="800"
              data-aos-duration="2000"
            >
              <p>ИП Ревенков Александр Владимирович</p>
              <p>ИНН 667112821820</p>
              <p>ОГРН 322665800053502</p>
              <p>эл.почта: k.est@internet.ru</p>
            </div>
            <a
              href="#"
              // href="https://gaidysheff.ru/"
              target="_blank"
              className="italic pr-2 sm:pr-5 text-end hover:scale-125 
              text-[0.5rem] sm:text-[0.7rem] leading-4"
            >
              <span className="hidden">
                <div>Made with </div>
                <div className="inline-block w-[1rem] h-[1rem] align-middle">
                  <img src={heart} alt="" />
                </div>
                <div>
                  by{" "}
                  <span className="font-semibold underline underline-offset-2">
                    gaidysheff.ru
                  </span>
                </div>
              </span>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
