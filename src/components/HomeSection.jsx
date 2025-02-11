import React from "react";
import HeroSection from "./HeroSection";
import PopularCategory from "./PopularCategory";
import FlashSale from "./FlashSale";
import ChooseUs from "./ChooseUs";
import Promotion from "./Promotion";
import Promotion2 from "./Promotion2";
import Features from "./Features";
import Email from "./Email";
import { FaArrowUp } from "react-icons/fa";

const HomeSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div id="Above">
        <HeroSection />
      </div>

      {/* Popular Category start */}
      <PopularCategory />
      {/* Popular Category Ends */}

      {/* Flash Sale Category start */}
      <FlashSale />
      {/* Flash Sale Category start */}

      {/* Choose Us start */}
      <ChooseUs />
      {/* Choose Us Ends */}

      {/* Promotion start */}
      <Promotion />
      {/* Promotions Ends */}

      {/* Promotion2 start */}
      <Promotion2 />
      {/* Promotions2 Ends */}

      {/* Features starts */}
      <Features />
      {/* Features Ends */}

      {/* Email starts */}
      <Email />
      {/* Email Ends */}

      <FaArrowUp
        onClick={scrollToTop}
        className="bg-black text-white size-13 rounded-full p-3 fixed right-3 bottom-5 cursor-pointer "
      />
    </>
  );
};

export default HomeSection;
