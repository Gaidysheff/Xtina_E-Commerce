import {
  TbCertificate,
  TbPerfume,
  TbShoppingBagDiscount,
} from "react-icons/tb";

import { Accordion } from "flowbite-react";
import { FaVialCircleCheck } from "react-icons/fa6";
import { SiOrigin } from "react-icons/si";

const Questions = () => {
  return (
    <div className="my-3">
      <h2 className="text-4xl font-semibold m-5 dark:text-white">
        Часто задаваемые вопросы:
      </h2>

      <Accordion>
        <Accordion.Panel>
          <Accordion.Title className="text-left sm:text-lg lg:text-xl">
            <div className="flex items-center">
              <SiOrigin className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                ЭТО ТОЧНО ОРИГИНАЛ?
              </span>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <div
              className="p-5 border border-b-0 border-gray-200 
          dark:border-gray-700"
            >
              <p
                className="sm:text-lg lg:text-xl mb-2 text-gray-500 
            dark:text-gray-400"
              >
                Да, вся реализуемая нами парфюмерия строго
                <span className="text-red-600">ОРИГИНАЛЬНАЯ</span>. Мы долго и
                тщательно отбирали поставщиков, отсеивали недобросовестных и
                отобрали только лучших в своём деле.
              </p>

              <blockquote
                className="sm:text-lg lg:text-xl italic font-semibold 
              text-gray-700 dark:text-white"
              >
                <p>
                  Вы можете быть уверенны в том, что покупая у нас, это будет
                  100% оригинальный парфюм.
                </p>
              </blockquote>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-left sm:text-lg lg:text-xl">
            <div className="flex items-center">
              <FaVialCircleCheck className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                ЧТО ТАКОЕ РАСПИВ?
              </span>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <div
              className="p-5 border border-b-0 border-gray-200 
          dark:border-gray-700"
            >
              <p
                className="sm:text-lg lg:text-xl mb-2 text-gray-500 
            dark:text-gray-400"
              >
                Распив — это удобный способ приобретения оригинальных ароматов,
                в отливантах со спреем. У нас вы можете приобрести его в объёме
                3,5,10,30 мл.
              </p>
              <p
                className="sm:text-lg lg:text-xl mb-2 text-gray-500 
              dark:text-gray-400"
              >
                Это отличный способ не покупать целый флакон, а познакомиться с
                ароматом и понять подходит ли он вам.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-left sm:text-lg lg:text-xl">
            <div className="flex items-center">
              <TbPerfume className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                МОЖНО ЛИ КУПИТЬ ФЛАКОН?
              </span>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="sm:text-lg lg:text-xl mb-2 text-gray-500 dark:text-gray-400">
                Конечно, помимо распива мы привозим полноразмерные ароматы под
                заказ, по ценам ниже, чем в сетевых парфюмерных магазинах.
              </p>
              <p className="sm:text-lg lg:text-xl mb-2 text-gray-500 dark:text-gray-400">
                У нашего поставщика более 50 000 позиций. Чтобы узнать стоимость
                и наличие определенного аромата, напишите нам, любым удобным для
                вас способом, укажите название желаемого аромата и объём.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-left sm:text-lg lg:text-xl">
            <div className="flex items-center">
              <TbShoppingBagDiscount className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                ПОЧЕМУ ДЕШЕВЛЕ?
              </span>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="sm:text-lg lg:text-xl mb-2 text-gray-500 dark:text-gray-400">
                Мы намеренно придерживаемся политики доступных цен, ведь
                рассчитываем на долгосрочное и приятное сотрудничество с
                клиентами.
              </p>

              <h2
                className="sm:text-lg lg:text-xl mb-2 text-lg font-semibold 
              text-gray-900 dark:text-white"
              >
                А также:
              </h2>
              <ul
                className="space-y-1 mb-2 text-gray-500 list-inside 
            dark:text-gray-400"
              >
                <li className="sm:text-lg lg:text-xl flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 
                  flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Мы не платим за аренду больших торговых площадей.
                </li>
                <li className="sm:text-lg lg:text-xl flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 
                  dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Не покупаем рекламу у звёзд.
                </li>
                <li className="sm:text-lg lg:text-xl flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 
                  dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Штат наших сотрудников существенно меньше, чем у сетевых
                  парфюмерных магазинов.
                </li>
              </ul>

              <p
                className="sm:text-lg lg:text-xl mb-2 text-gray-500 
            dark:text-gray-400"
              >
                Всё это позволяет нам продавать вам парфюм выгоднее.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-left sm:text-lg lg:text-xl">
            <div className="flex items-center">
              <TbCertificate className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                ЕСТЬ ЛИ ПОДАРОЧНЫЕ СЕРТИФИКАТЫ?
              </span>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="sm:text-lg lg:text-xl mb-2 text-gray-500 dark:text-gray-400">
                Да, конечно. В нашем магазине вы можете приобрести подарочные
                сертификаты на любую сумму. Сертификат можно приобрести как в
                печатном, так и в электронном виде.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Questions;
