import React from "react";

const BottleVolume = ({ volume }) => {
  return (
    <div
      className="m-1 w-[45px] h-[45px] 2xsm:w-[65px] 2xsm:h-[65px]
			xsm:w-[85px] xsm:h-[85px] md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px]
			xl:w-[115px] xl:h-[115px] 2xl:w-[143px] 2xl:h-[143px]"
      data-aos="flip-up"
      data-aos-duration="500"
    >
      <div
        className="w-full h-full p-[2px] xsm:p-[3px] md:p-[3px] lg:p-[5px]
				text-lg md:text-xl font-medium text-gray-900 rounded-lg 
				group bg-gradient-to-br from-primaryLight via-primary
				to-primaryDark group-hover:from-primaryLight
				group-hover:via-primary group-hover:to-primaryDark dark:text-white"
      >
        <div
          className="bg-gray-500 rounded-md flex justify-center items-center
					w-[41px] h-[41px] 2xsm:w-[60px] 2xsm:h-[60px] xsm:w-[79px] xsm:h-[79px]
					md:w-[54px] md:h-[54px] lg:w-[75px] lg:h-[75px] xl:w-[105px] xl:h-[105px]
					2xl:w-[133px] 2xl:h-[133px]"
        >
          <span
            className="text-transparent bg-clip-text bg-gradient-to-br 
						from-primaryLight via-primary to-primaryDark 
						text-[0.8rem] 2xsm:text-[1.2rem] xsm:text-[1.8rem] md:text-lg 
						lg:text-2xl xl:text-4xl 2xl:text-5xl"
          >
            {volume}
          </span>
        </div>
      </div>
    </div>
  );
};
4;
export default BottleVolume;
