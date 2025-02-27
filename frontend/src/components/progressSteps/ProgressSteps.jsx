import { FaClipboardList } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

const ProgressSteps = ({ step1, step2, step3, step4, step5 }) => {
  return (
    <>
      <ol className="flex items-center w-full">
        {/* ---------------------- Step-1 ----------------------- */}
        <li
          className={`flex w-full items-center
          after:content-[''] after:w-full after:h-1 after:border-b 
          after:border-4 after:inline-block ${
            step1 ? "after:border-primaryLight" : "after:border-gray-100"
          }`}
        >
          <span
            className={`flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 
              ${
                step1 ? "bg-primaryLight" : "bg-gray-100"
              } rounded-full lg:h-12 lg:w-12 shrink-0`}
          >
            <FaClipboardList
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                step1 ? "text-primaryDark" : "text-gray-500"
              }`}
            />
          </span>
        </li>
        {/* ---------------------- Step-2 ----------------------- */}
        <li
          className={`flex w-full items-center
            after:content-[''] after:w-full after:h-1 after:border-b 
            after:border-4 after:inline-block ${
              step2 ? "after:border-primaryLight" : "after:border-gray-100"
            }`}
        >
          <span
            className={`flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 
              ${
                step2 ? "bg-primaryLight" : "bg-gray-100"
              } rounded-full lg:h-12 lg:w-12 shrink-0`}
          >
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                step2 ? "text-primaryDark" : "text-gray-500"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
        </li>
        {/* ---------------------- Step-3 ----------------------- */}
        <li
          className={`flex w-full items-center
            after:content-[''] after:w-full after:h-1 after:border-b 
            after:border-4 after:inline-block ${
              step3 ? "after:border-primaryLight" : "after:border-gray-100"
            }`}
        >
          <span
            className={`flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 
              ${
                step3 ? "bg-primaryLight" : "bg-gray-100"
              } rounded-full lg:h-12 lg:w-12 shrink-0`}
          >
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                step3 ? "text-primaryDark" : "text-gray-500"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
            </svg>
          </span>
        </li>
        {/* ---------------------- Step-4 ----------------------- */}
        <li
          className={`flex w-full items-center
            after:content-[''] after:w-full after:h-1 after:border-b 
            after:border-4 after:inline-block ${
              step4 ? "after:border-primaryLight" : "after:border-gray-100"
            }`}
        >
          <span
            className={`flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 
              ${
                step4 ? "bg-primaryLight" : "bg-gray-100"
              } rounded-full lg:h-12 lg:w-12 shrink-0`}
          >
            <GiMoneyStack
              className={`w-5 h-5 sm:w-7 sm:h-7 ${
                step4 ? "text-primaryDark" : "text-gray-500"
              }`}
            />
          </span>
        </li>
        {/* ---------------------- Step-5 ----------------------- */}
        <li className="flex items-center w-full">
          <span
            className={`flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 
              ${
                step5 ? "bg-primaryLight" : "bg-gray-100"
              } rounded-full lg:h-12 lg:w-12 shrink-0`}
          >
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                step5 ? "text-primaryDark" : "text-gray-500"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </li>
      </ol>
    </>
  );
};

export default ProgressSteps;
