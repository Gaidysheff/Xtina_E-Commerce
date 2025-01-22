import {
  TbCertificate,
  TbPerfume,
  TbShoppingBagDiscount,
} from "react-icons/tb";

import { FaVialCircleCheck } from "react-icons/fa6";
import { SiOrigin } from "react-icons/si";

const Questions = () => {
  return (
    <div className="my-3">
      <h2 class="text-4xl font-semibold m-5 dark:text-white">
        Часто задаваемые вопросы:
      </h2>

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <div className="flex items-center">
              <SiOrigin className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                ЭТО ТОЧНО ОРИГИНАЛ?
              </span>
            </div>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div
            class="p-5 border border-b-0 border-gray-200 
            dark:border-gray-700 dark:bg-gray-900"
          >
            <p
              class="sm:text-lg lg:text-xl mb-2 text-gray-500 
              dark:text-gray-400"
            >
              Да, вся реализуемая нами парфюмерия строго{" "}
              <span className="text-red-600">ОРИГИНАЛЬНАЯ</span>. Мы долго и
              тщательно отбирали поставщиков, отсеивали недобросовестных и
              отобрали только лучших в своём деле.
            </p>

            <blockquote
              class="sm:text-lg lg:text-xl italic font-semibold 
              text-gray-700 dark:text-white"
            >
              <p>
                Вы можете быть уверенны в том, что покупая у нас, это будет 100%
                оригинальный парфюм.
              </p>
            </blockquote>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <div className="flex items-center">
              <FaVialCircleCheck className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                ЧТО ТАКОЕ РАСПИВ?
              </span>
            </div>

            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div
            class="p-5 border border-b-0 border-gray-200 
          dark:border-gray-700"
          >
            <p
              class="sm:text-lg lg:text-xl mb-2 text-gray-500 
            dark:text-gray-400"
            >
              Распив — это удобный способ приобретения оригинальных ароматов, в
              отливантах со спреем. У нас вы можете приобрести его в объёме
              3,5,10,30 мл.
            </p>
            <p
              class="sm:text-lg lg:text-xl mb-2 text-gray-500 
              dark:text-gray-400"
            >
              Это отличный способ не покупать целый флакон, а познакомиться с
              ароматом и понять подходит ли он вам.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <div className="flex items-center">
              <TbPerfume className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                МОЖНО ЛИ КУПИТЬ ФЛАКОН?
              </span>
            </div>

            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="sm:text-lg lg:text-xl mb-2 text-gray-500 dark:text-gray-400">
              Конечно, помимо распива мы привозим полноразмерные ароматы под
              заказ, по ценам ниже, чем в сетевых парфюмерных магазинах.
            </p>
            <p class="sm:text-lg lg:text-xl mb-2 text-gray-500 dark:text-gray-400">
              У нашего поставщика более 50 000 позиций. Чтобы узнать стоимость и
              наличие определенного аромата, напишите нам, любым удобным для вас
              способом, укажите название желаемого аромата и объём.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium 
            rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 
            focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 
            dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-4"
          >
            <div className="flex items-center">
              <TbShoppingBagDiscount className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                ПОЧЕМУ ДЕШЕВЛЕ?
              </span>
            </div>

            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="sm:text-lg lg:text-xl mb-2 text-gray-500 dark:text-gray-400">
              Мы намеренно придерживаемся политики доступных цен, ведь
              рассчитываем на долгосрочное и приятное сотрудничество с
              клиентами.
            </p>

            <h2
              class="sm:text-lg lg:text-xl mb-2 text-lg font-semibold 
              text-gray-900 dark:text-white"
            >
              А также:
            </h2>
            <ul
              class="space-y-1 mb-2 text-gray-500 list-inside 
            dark:text-gray-400"
            >
              <li class="sm:text-lg lg:text-xl flex items-center">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 
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
              <li class="sm:text-lg lg:text-xl flex items-center">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 
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
              <li class="sm:text-lg lg:text-xl flex items-center">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 
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
              class="sm:text-lg lg:text-xl mb-2 text-gray-500 
            dark:text-gray-400"
            >
              Всё это позволяет нам продавать вам парфюм выгоднее.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-5">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium 
            rtl:text-right text-gray-500 border border-gray-200 
            focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 
            dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 
            dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-5"
          >
            <div className="flex items-center">
              <TbCertificate className="text-lg sm:text-xl lg:text-2xl mr-5" />
              <span className="text-left sm:text-lg lg:text-xl">
                ЕСТЬ ЛИ ПОДАРОЧНЫЕ СЕРТИФИКАТЫ?
              </span>
            </div>

            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="sm:text-lg lg:text-xl mb-2 text-gray-500 dark:text-gray-400">
              Да, конечно. В нашем магазине вы можете приобрести подарочные
              сертификаты на любую сумму. Сертификат можно приобрести как в
              печатном, так и в электронном виде.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
