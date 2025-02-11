import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      src: "1.svg",
      title: "Free Delivery",
      slogan: "Free Shipping all over the World",
    },
    {
      id: 2,
      src: "2.svg",
      title: "Secure Payment",
      slogan: "Secure Payments, Hassle-Free Transactions!",
    },
    {
      id: 3,
      src: "3.svg",
      title: "100% Satisfaction",
      slogan: "100% Satisfaction Guaranteed!",
    },
    {
      id: 4,
      src: "4.svg",
      title: "24/7 Support",
      slogan: "24/7 Support, Always Here for You!",
    },
  ];

  return (
    <>
      <div className="border border-zinc-300 rounded-lg w-[87%] m-auto my-16 px-6 sm:px-8 md:px-10 py-7 flex flex-wrap md:flex-nowrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
        {features.map((val, index) => (
          <div key={val.id} className="flex items-center gap-4">
            <img src={val.src} alt="svg" className="size-10 sm:size-11" />
            <span className="flex flex-col gap-1">
              <p className="text-[18px] sm:text-[20px] font-[700] leading-[24px]">
                {val.title}
              </p>
              <p className="text-[11px] sm:text-[12px] font-[400] leading-[20px] sm:leading-[26px]">
                {val.slogan}
              </p>
            </span>

            {/* Divider line */}
            {index !== features.length - 1 && (
              <hr className="hidden md:block border border-zinc-300 h-11 ml-4 sm:ml-6 md:ml-8 mr-4 sm:mr-6 md:mr-8" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
