import React from "react";

const Promotion = () => {
  return (
    <div className="w-[87%] m-auto flex flex-wrap md:flex-nowrap gap-8 mt-22">
      {/* Left Section starts */}
      <div className="w-full md:w-1/2 border border-primary bg-[url('1.png')] h-[400px] bg-cover bg-center rounded-4xl flex flex-col items-start justify-start gap-5 px-10 py-17">
        <p className="text-[32px] md:text-[37px] font-[400] leading-[44.4px] text-primary">
          Pure & Organic
        </p>
        <p className="text-[32px] md:text-[37px] font-[700] leading-[44.4px] text-white">
          Kiwi Smoothie
        </p>
        <p className="text-[14px] md:text-[16px] font-[400] leading-[28.8px] text-primary">
          Build Your Juicy Life
        </p>
        <button className="text-[16px] md:text-[18px] font-[500] leading-[25.2px] text-white bg-primary px-7 md:px-9 py-3 rounded-full cursor-pointer hover:bg-orange-400 hover:text-white">
          Buy Now &rarr;
        </button>
      </div>
      {/* Left Section ends */}

      {/* Right section starts */}
      <div className="w-full md:w-1/2 border border-primary bg-[url('2.png')] h-[400px] bg-cover bg-center rounded-4xl flex flex-col items-start justify-start gap-5 px-10 py-17">
        <p className="text-[32px] md:text-[37px] font-[400] leading-[44.4px] text-primary">
          Healthy Eating
        </p>
        <p className="text-[32px] md:text-[37px] font-[700] leading-[44.4px] text-white">
          Starts Here !
        </p>
        <p className="text-[14px] md:text-[16px] font-[400] leading-[28.8px] text-primary">
          Build Your Juicy Life
        </p>
        <button className="text-[16px] md:text-[18px] font-[500] leading-[25.2px] text-white bg-primary px-7 md:px-9 py-3 rounded-full cursor-pointer hover:bg-orange-400 hover:text-white">
          Buy Now &rarr;
        </button>
      </div>
      {/* Right section ends */}
    </div>
  );
};

export default Promotion;
