import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { PiArrowSquareUpLeftLight, PiArrowSquareUpRight } from "react-icons/pi";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      discount: "-20%",
      src: "1.jpg",
      title: "Cabbage - Rich in carbohydrates and a great energy source",
      price: "30",
      oPrice: "38",
    },
    {
      id: 2,
      discount: "-15%",
      src: "onion.png",
      title: "Onion - Packed with antioxidants and boosts immunity",
      price: "40",
      oPrice: "47",
    },
    {
      id: 3,
      discount: "-25%",
      src: "3.jpg",
      title: "Mushroom - High in protein and supports brain health",
      price: "60",
      oPrice: "80",
    },
    {
      id: 4,
      discount: "-10%",
      src: "tomato.png",
      title: "Tomato - Rich in Vitamin C and enhances skin health",
      price: "35",
      oPrice: "39",
    },
    {
      id: 5,
      discount: "-18%",
      src: "carrot.png",
      title: "Carrot - Great for eye health and rich in Vitamin A",
      price: "28",
      oPrice: "34",
    },
    {
      id: 6,
      discount: "-22%",
      src: "brocoli.png",
      title: "Broccoli - High in fiber and good for digestion",
      price: "55",
      oPrice: "70",
    },
    {
      id: 7,
      discount: "-12%",
      src: "potato.png",
      title: "Potato - A good source of potassium and energy",
      price: "25",
      oPrice: "28",
    },
    {
      id: 8,
      discount: "-17%",
      src: "capsicum.png",
      title: "Capsicum - Boosts metabolism and full of Vitamin C",
      price: "45",
      oPrice: "54",
    },
    {
      id: 9,
      discount: "-20%",
      src: "flower.png",
      title: "Cauliflower - Packed with fiber and supports heart health",
      price: "32",
      oPrice: "40",
    },
    {
      id: 10,
      discount: "-14%",
      src: "spinach.png",
      title: "Spinach - Rich in iron and promotes healthy skin",
      price: "38",
      oPrice: "44",
    },
    {
      id: 11,
      discount: "-19%",
      src: "beetroot.png",
      title: "Beetroot - Improves blood flow and endurance",
      price: "50",
      oPrice: "62",
    },
    {
      id: 12,
      discount: "-16%",
      src: "radish.png",
      title: "Radish - Supports digestion and detoxifies the liver",
      price: "27",
      oPrice: "32",
    },
    {
      id: 13,
      discount: "-18%",
      src: "garlic.png",
      title: "Garlic - Boosts immunity and has anti-inflammatory properties",
      price: "35",
      oPrice: "43",
    },
    {
      id: 14,
      discount: "-12%",
      src: "lettuce.png",
      title: "Lettuce - Low in calories and high in fiber for digestion",
      price: "22",
      oPrice: "25",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 2) % products.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 2 < 0
        ? products.length - (products.length % 2 || 2)
        : prevIndex - 2
    );
  };

  return (
    <>
      <div className="flex justify-between items-center w-[87%] mx-auto mt-16 my-7">
        <p className="text-[24px]  font-semibold">Popular Products</p>
        <span className="flex  gap-2  mt-14">
          <PiArrowSquareUpLeftLight
            className="size-12 cursor-pointer"
            onClick={handlePrev}
          />
          <PiArrowSquareUpRight
            className="size-12 cursor-pointer"
            onClick={handleNext}
          />
        </span>
      </div>

      <div className="w-[87%] m-auto flex md:flex-nowrap flex-wrap gap-4 p-2">
        {/* Left Side Starts */}
        <div className="border rounded-4xl xs:w-1/3 md:w-1/3 bg-[url('/mein.png')] h-[520px] bg-center bg-no-repeat flex flex-col justify-center items-center gap-6">
          <p className="text-[32px] font-[400] leading-[38.4px] text-white">
            30% Off
          </p>
          <p className="text-[32px] font-[700] leading-[38.4px] text-white">
            Best Selling Products
          </p>
          <div>
            <p className="text-[16px] font-[400] leading-[28.8px] text-white">
              Detox Juice Recipes For
            </p>
            <p className="text-[16px] font-[400] leading-[28.8px] text-white">
              Weight Loss
            </p>
          </div>
          <button className="text-[18px] font-[500] leading-[25.2px] text-white bg-orange-400 px-9 py-3 rounded-full cursor-pointer hover:bg-white hover:text-black">
            Buy Now &rarr;
          </button>
        </div>
        {/* Left Side Ends */}

        {/* Right side starts */}

        <div className="flex gap-5 md:flex-nowrap flex-wrap ">
          {/* Left Portion */}
          <div className="flex flex-col gap-5">
            {products.slice(startIndex, startIndex + 2).map((product) => (
              <div
                key={product.id}
                className="border border-primary flex px-3 rounded-xl hover:border-amber-600 cursor-pointer"
              >
                <span>
                  <p className="text-[14px] font-[500] leading-[25.2px]">
                    {product.discount}
                  </p>
                  <img src={product.src} alt="" className="size-48" />
                </span>
                <div className="w-[200px] flex flex-col gap-2 p-2">
                  <div className="flex gap-2">
                    <span className="flex text-yellow-500">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="text-[18px]">
                            ★
                          </span>
                        ))}
                    </span>
                    <p> (5.0)</p>
                  </div>
                  <p className="text-[17px] font-[500] leading-[23px] py-2">
                    {product.title}
                  </p>
                  <hr className="h-[0.1px] text-zinc-300" />
                  <span className="flex gap-3">
                    <p className="text-[17px] font-[600] leading-[36.6px]">
                      &#8377;{product.price}
                    </p>
                    <p className="text-[17px] font-[600] leading-[36.6px] text-zinc-400">
                      <del>&#8377;{product.oPrice}</del>
                    </p>
                  </span>
                  <button className="w-38 border border-primary px-4 py-2 mt-2 rounded-full flex justify-center items-center gap-2">
                    Add to Cart <FiShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Left Portion */}

          {/* Right Portion */}
          <div className="flex flex-col gap-5">
            {products.slice(startIndex + 2, startIndex + 4).map((product) => (
              <div
                key={product.id}
                className="border border-primary flex px-3 rounded-xl hover:border-amber-600 cursor-pointer"
              >
                <span>
                  <p className="text-[14px] font-[500] leading-[25.2px]">
                    {product.discount}
                  </p>
                  <img src={product.src} alt="" className="size-48" />
                </span>
                <div className="w-[200px] flex flex-col gap-2 p-2">
                  <div className="flex gap-2">
                    <span className="flex text-yellow-500">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="text-[18px]">
                            ★
                          </span>
                        ))}
                    </span>
                    <p> (5.0)</p>
                  </div>
                  <p className="text-[17px] font-[500] leading-[23px] py-2">
                    {product.title}
                  </p>
                  <hr className="h-[0.1px] text-zinc-300" />
                  <span className="flex gap-3">
                    <p className="text-[17px] font-[600] leading-[36.6px]">
                      &#8377;{product.price}
                    </p>
                    <p className="text-[17px] font-[600] leading-[36.6px] text-zinc-400">
                      <del>&#8377;{product.oPrice}</del>
                    </p>
                  </span>
                  <button className="w-38 border border-primary px-4 py-2 mt-2 rounded-full flex justify-center items-center gap-2">
                    Add to Cart <FiShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Right Portion */}
        </div>

        {/* Right side ends */}
      </div>
    </>
  );
};

export default PopularProducts;
