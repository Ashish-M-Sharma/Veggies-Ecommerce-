import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-3 py-6 pt-18 mt-18">
      <div className="container mx-auto px-5 lg:px-10">
        {/* Footer starts*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center lg:text-left">
          {/* About the shop starts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              About The Shop
            </h3>
            <p className="text-sm mb-4">
              Fresh, organic veggies delivered to your doorstep – healthy,
              sustainable, and farm-fresh every time!
            </p>
            <div className="flex flex-col space-y-2 items-center lg:items-start">
              <a
                href="mailto:Support@example.com"
                className="flex items-center gap-2 cursor-pointer hover:text-white"
              >
                📧 <span>Support@example.com</span>
              </a>
              <a
                href="tel:+0985474624225"
                className="flex items-center gap-2 cursor-pointer hover:text-white"
              >
                📞 <span>+91 9665803633</span>
              </a>
              <a
                href="https://maps.google.com/?q=1585+Stratford+Park+Allen,+KY+41601"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 cursor-pointer hover:text-white"
              >
                📍 <span>Pune,Maharashtra,India-413255</span>
              </a>
            </div>
          </div>

          {/* Products starts*/}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Prices Drop",
                "New Products",
                "Best Sales",
                "Contact Us",
                "Sitemap",
                "Stores",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="cursor-pointer hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Products ends*/}

          {/* company starts*/}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Our Company
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Delivery",
                "Legal Notice",
                "Terms And Conditions",
                "About Us",
                "Secure Payment",
                "My Account",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="cursor-pointer hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* company ends*/}

          {/* Account starts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Your Account
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Product Support",
                "Checkout",
                "License Policy",
                "Affiliate",
                "Locality",
                "Order Tracking",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="cursor-pointer hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Account ends */}

          {/* App starts */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Download App
            </h3>
            <p className="text-sm mb-4">
              Download our app to access exclusive savings! Enjoy a fantastic
              15% discount!
            </p>
            <div className="flex justify-center items-center lg:justify-start gap-2">
              <img
                src="applestore.png"
                alt="App Store"
                className="w-[110px] h-14"
              />
              <img
                src="googleplayy.png"
                alt="Google Play"
                className="w-[110px]"
              />
            </div>
          </div>
          {/* App ends */}
        </div>

        {/* Section 2 */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom section starts */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-5">
          <p className="text-sm">
            Copyright © 2025{" "}
            <span className="text-blue-400">Ashish Sharma</span>. All Rights
            Reserved.
          </p>

          {/* social media starts */}
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  className="text-white bg-gray-700 p-2 rounded-full w-8 h-8 cursor-pointer hover:bg-gray-600"
                />
              )
            )}
          </div>
          {/* social media ends */}

          {/* payment icons starts */}
          <div className="hidden lg:flex space-x-2">
            {["visa.png", "mastercard.png", "paypal.png"].map((src) => (
              <img
                key={src}
                src={src}
                alt={src.split(".")[0]}
                className="w-12"
              />
            ))}
          </div>
          {/* payment icons ends */}
        </div>
        {/* Bottom section ends */}
      </div>
    </footer>
  );
};

export default Footer;
