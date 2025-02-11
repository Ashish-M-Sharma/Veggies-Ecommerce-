import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

// For carousel :
const slides = [
  {
    title: "High Quality Grocery Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper non purus quis tincidunt.",
    image: "https://vegshops.vercel.app/assets/img/slider/1.png",
  },
  {
    title: "Fresh Organic Vegetables Delivered to Your Doorstep!",
    description:
      "Get fresh and organic vegetables right at your doorstep with the best quality assurance.",
    image: "https://vegshops.vercel.app/assets/img/slider/2.png",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background image */}
      <div
        className=" relative w-[85%] h-[500px] mx-auto my-18 md:flex items-center justify-center flex-wrap bg-cover bg-center rounded-4xl shadow-lg"
        style={{
          backgroundImage: `url('https://nextjs.marketpro.wowtheme7.com/assets/images/bg/banner-bg.png')`,
        }}
      >
        {/* Background image */}

        <button
          onClick={prevSlide}
          className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="relative sm:w-full flex items-center flex-wrap justify-between w-[90%] max-w-6xl p-8">
          <div className="md:w-1/2 xs:w-full  text-left flex flex-col ">
            <p className="text-green-600 font-semibold transition-opacity duration-700 opacity-100">
              100% ORGANIC AND FRESH FOOD
            </p>
            <h2
              className={`text-5xl font-bold text-gray-800 mt-2 transition-opacity duration-700 ${
                currentIndex === 0 ? "opacity-100" : "opacity-95"
              }`}
            >
              {slides[currentIndex].title}
            </h2>
            <p
              className={`text-gray-600 mt-4 transition-opacity duration-700 ${
                currentIndex === 0 ? "opacity-100" : "opacity-95"
              }`}
            >
              {slides[currentIndex].description}
            </p>
            <NavLink to={"/"}>
              {" "}
              <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-500 cursor-pointer transition">
                SHOP NOW →
              </button>
            </NavLink>
          </div>
          <div className="hidden lg:block w-1/2  ">
            <img
              src={slides[currentIndex].image}
              alt="Slide"
              className="w-full rounded-lg shadow-lg transition-opacity duration-700 opacity-100"
            />
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-green-700 w-8" : "bg-gray-400 w-6"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
