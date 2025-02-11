import React from "react";

const PopularCategory = () => {
  const productdata = [
    {
      src: "https://vegshops.vercel.app/assets/img/category/coffe.png",
      title: "Coffee & Tea",
      subtitle: "120 Product",
    },
    {
      src: "https://vegshops.vercel.app/assets/img/category/oil.png",
      title: "Oil",
      subtitle: "250 Product",
    },
    {
      src: "https://vegshops.vercel.app/assets/img/category/venegar.png",
      title: "Vinegar",
      subtitle: "350 Products",
    },
    {
      src: "https://vegshops.vercel.app/assets/img/category/super-food.png",
      title: "Super Food",
      subtitle: "450 Products",
    },
    {
      src: "https://vegshops.vercel.app/assets/img/category/nuts.png",
      title: "Nuts & Seeds",
      subtitle: "150 Products",
    },
    {
      src: "https://vegshops.vercel.app/assets/img/category/salt.png",
      title: "Salt",
      subtitle: "320 Products",
    },
  ];

  return (
    <>
      <p className="text-[27px] px-12 mt-25 mx-19 mt-5 mb-8 font-[700] leading-[32.4px]">
        Popular Category
      </p>

      <div className="flex justify-around flex-wrap items-center space-y-2 m-auto w-[87%] ">
        {productdata.map((val, i) => {
          return (
            <div
              key={i}
              className=" w-40 p-4 border-2 rounded-md border-zinc-200 flex flex-col justify-center items-center gap-4 hover:border-primary hover:text-primary cursor-pointer"
            >
              <img
                src={val.src}
                alt="img"
                className="w-16 rounded-full bg-sky-100 p-2"
              />
              <span className="flex flex-col justify-center items-center">
                <p>{val.title}</p>
                <p>{val.subtitle}</p>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularCategory;
