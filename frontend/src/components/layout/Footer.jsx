import { DropdownLinks, MenuLinks } from "../../utils/navbarMenus";
import { FaArrowUpFromBracket, FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagram, FaMobileAlt, FaTelegram } from "react-icons/fa";
import { Link, NavLink } from "react-router";

import { FaVk } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Logo_short_primary from "../../assets/shared/Logo_short_primary.svg";
import { MdPlace } from "react-icons/md";
import SocialSharing from "../socialSharing/SocialSharing";
import heart from "../../assets/icons/heart-icon.svg";

const Footer = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 0;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800">
      <section
        className="bg-gray-700 text-brandLightGray text-[0.6rem] 
      xsm:text-[0.8rem] sm:text-[1rem] italic px-3 sm:px-0"
      >
        <p className="container px-4 py-1 sm:py-2">
          Поделиться этой страницей с друзьями
        </p>
        <div className="container px-4 pb-1 sm:pb-2 lg:pb-3">
          <SocialSharing />
        </div>
      </section>
      <section className="container md:grid md:grid-cols-8">
        <div className="md:col-span-3">
          {/* company details */}
          <div
            className="col-span-2 py-8 pl-4 pr-2 text-sm sm:text-base"
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
          <div className="grid grid-cols-2 md:col-span-6 md:grid-cols-10 items-start">
            <div className="md:col-span-4">
              {/* Menu links */}
              <div className="md:py-8 pl-4">
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
                      <Link
                        to={link.path}
                        className="text-brandLightGray
											hover:text-white hover:text-lg duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className="mt-3"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="2000"
                >
                  <HashLink
                    to="/#contacts"
                    scroll={(el) => scrollWithOffset(el)}
                    className="text-brandLightGray
                    hover:text-white hover:text-lg"
                  >
                    <p>Контакты</p>
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 text-end pr-4">
              {/* Catalogue links */}
              <div className="md:py-8">
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
                      <Link
                        to={link.path}
                        className="text-brandLightGray
											hover:text-white hover:text-lg duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            {/* Company Address */}
            <div
              className="pb-4 md:py-8 pl-4 sm:pl-0 md:pr-4 sm:col-span-auto 
              md:col-span-2 text-brandLightGray"
              data-aos="slide-left"
              data-aos-delay="200"
            >
              <h1 className="text-xl font-bold mb-3  sm:text-end">Адрес</h1>
              <div>
                <div className="flex items-center gap-2 sm:justify-end sm:text-end">
                  <MdPlace className="text-2xl sm:text-3xl order-1 sm:order-2" />

                  <p className="order-2 sm:order-1">
                    ул. Печатников д.1, Екатеринбург
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-2 sm:mt-6 sm:justify-end">
                  <FaMobileAlt className="text-xl order-1 sm:order-2" />
                  <p className="order-2 sm:order-1">+7(922)-038-96-44</p>
                </div>
                {/* Social links */}
                <div
                  className="flex items-center gap-3 mt-6 
                justify-center sm:justify-end"
                >
                  <a href="https://wa.me/79220389644">
                    <FaSquareWhatsapp
                      className="text-3xl hover:text-primary 
                      hover:scale-125 duration-300"
                    />
                  </a>
                  <a href="https://instagram.com/k.est.perfume/">
                    <FaInstagram
                      className="text-3xl hover:text-primary 
                      hover:scale-125 duration-300"
                    />
                  </a>
                  <a href="tg://resolve?domain=Kestperfume23">
                    <FaTelegram
                      className="text-3xl hover:text-primary 
                      hover:scale-125 duration-300"
                    />
                  </a>
                  <a href="https://vk.me/kestperfume">
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

      <section className="bg-gray-950 text-brandLightGray  px-4 mx-[-1rem] sm:mx-0">
        <div className="container py-5">
          <div className="flex justify-between items-center">
            <HashLink
              to="#"
              scroll={(el) => scrollWithOffset(el)}
              className="cursor-pointer hover:scale-110 hover:text-primary"
            >
              <div
                className="flex-col text-brandLightGray px-1 
              hover:text-primary"
              >
                <FaArrowUpFromBracket className="justify-self-center" />
                <p>Наверх</p>
              </div>
            </HashLink>

            <div
              className="text-center text-[0.7rem] sm:text-[1rem]"
              // data-aos="flip-right"
              // data-aos-delay="800"
              // data-aos-duration="2000"
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
