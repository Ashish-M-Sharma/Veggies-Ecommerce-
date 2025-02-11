import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import { IoMdClose } from "react-icons/io";
import PopularCategory from "./PopularCategory";
import FlashSale from "./FlashSale";
import ChooseUs from "./ChooseUs";
import Promotion from "./Promotion";
import PopularProducts from "./PopularProducts";
import Promotion2 from "./Promotion2";
import NewProducts from "./NewProducts";
import Features from "./Features";
import Email from "./Email";

const HomeSection = () => {
  return (
    <>
      {/* Hero Section starts */}
      <HeroSection />
      {/* Hero Section Ends */}

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

      {/* Promotion start */}
      {/* <PopularProducts /> */}
      {/* Promotions Ends */}

      {/* Promotion2 start */}
      <Promotion2 />
      {/* Promotions2 Ends */}

      {/* New Products starts */}
      {/* <NewProducts /> */}
      {/* New Products Ends */}

      {/* Features starts */}
      <Features />
      {/* Features Ends */}

      {/* Email starts */}
      <Email />
      {/* Email Ends */}
    </>
  );
};

export default HomeSection;
