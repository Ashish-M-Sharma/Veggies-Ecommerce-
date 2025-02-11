import React from "react";

const Promotion2 = () => {
  return (
    <div className="w-[87%] border-2 border-black m-auto my-20 bg-[url('https://vegshops.vercel.app/assets/img/discount/1.png')] h-[400px] bg-cover bg-center bg-no-repeat rounded-4xl flex items-center">
      <div className="flex flex-col items-start gap-4 md:gap-6 px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
        <button className="text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[36px] text-white bg-orange-400 px-6 sm:px-8 md:px-10 py-2 rounded-full">
          Up to 50% off
        </button>

        <span className="flex flex-col gap-1 sm:gap-2">
          <p className="text-[30px] sm:text-[34px] md:text-[37px] font-[400] leading-[38px] sm:leading-[42px] md:leading-[44.4px] text-white">
            Pure & Organic
          </p>
          <p className="text-[30px] sm:text-[34px] md:text-[37px] font-[700] leading-[38px] sm:leading-[42px] md:leading-[44.4px] text-white">
            Fruits, Veggies and Meat
          </p>
        </span>

        <p className="text-[16px] sm:text-[17px] md:text-[18px] font-[400] leading-[24px] sm:leading-[26px] md:leading-[28.8px] text-white">
          Build your juicy life
        </p>

        <button className="text-[16px] sm:text-[17px] md:text-[18px] font-[500] leading-[25.2px] text-white bg-orange-400 px-7 sm:px-8 md:px-9 py-2 sm:py-3 rounded-full cursor-pointer hover:bg-white hover:text-black">
          Buy Now &rarr;
        </button>
      </div>
    </div>
  );
};

export default Promotion2;
