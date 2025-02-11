import React, { useState } from "react";

const ChooseUs = () => {
  const features = [
    {
      src: "https://vegshops.vercel.app/assets/img/choose_us/icon-1.svg",
      title: "100% Organic Products",
      image: "https://vegshops.vercel.app/assets/img/choose_us/1.png",
      intro: "Healthy Food is The Key to Your Good Mood",
      description:
        "Organic food is grown without synthetic pesticides, fertilizers, or GMOs, making it a healthier and more eco-friendly choice. It is rich in nutrients, free from harmful chemicals, and supports better digestion and immunity.",
      description2:
        "Organic farming also helps preserve soil health and biodiversity, making it a sustainable choice for the environment.",
    },
    {
      src: "https://vegshops.vercel.app/assets/img/choose_us/icon-2.svg",
      title: "Express Delivery",
      image:
        "https://img.freepik.com/premium-vector/free-vector-3d-illustration-delivery-man-scooter_883906-2151.jpg?w=740",
      intro:
        "Express Delivery of Fresh Veggies – Quality at Your Doorstep, Fast!",
      description:
        "Enjoy hassle-free express delivery of fresh, organic veggies straight from the farm to your home. Get fresh veggies delivered fast to your doorstep, ensuring quality, convenience, and farm-fresh goodness every time!",
      description2:
        "Get farm-fresh vegetables delivered swiftly to your doorstep with our express service. We guarantee freshness, quality, and timely delivery, so you always have the healthiest produce for your meals.",
    },
    {
      src: "https://vegshops.vercel.app/assets/img/choose_us/icon-3.svg",
      title: "100% Safe Products",
      image:
        "https://img.freepik.com/premium-photo/vegetable-mix-cooking-food-kitchen-white-background_39768-4246.jpg?w=996",
      intro: "Safe Veggies for a Healthier You – Pure, Fresh, and Nourishing!",
      description:
        "Our products go through strict quality checks to ensure they are 100% safe for consumption. Our safe veggies are grown without harmful chemicals, ensuring you get the freshest, most nutritious produce for a healthy lifestyle. Enjoy peace of mind with every bite!",
      description2:
        "Organic farming also helps preserve soil health and biodiversity, making it a sustainable choice for the environment.",
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <>
      <p className="text-[24px] px-12 mt-8 mx-auto my-8 font-semibold text-center">
        Why Choose Us
      </p>

      <div className="w-[87%] mx-auto flex flex-col md:flex-col lg:flex-row items-center gap-8">
        {/* Left Side - Feature Buttons */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(feature)}
              className={`border border-primary w-full max-w-[400px] mx-auto flex items-center gap-4 px-6 py-3 rounded-full text-left cursor-pointer transition-all duration-300 
              ${
                selectedFeature.title === feature.title
                  ? "bg-primary text-white"
                  : "bg-white text-black"
              }`}
            >
              <img
                src={feature.src}
                alt={feature.title}
                className="size-[40px]"
              />
              <p className="text-[18px] font-medium">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Middle Section - Feature Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={selectedFeature.image}
            alt="Feature Image"
            className="w-full max-w-[350px] transition-all duration-300"
          />
        </div>

        {/* Right Side - Feature Description */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 px-4">
          <p className="text-[22px] font-bold">{selectedFeature.intro}</p>
          <p className="text-[16px] text-gray-600">
            {selectedFeature.description}
          </p>
          <p className="text-[16px] text-gray-600">
            {selectedFeature.description2}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
