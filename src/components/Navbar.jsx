import React, { useContext, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { RiMenu2Line } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Cart } from "../context/Context";

const Navbar = () => {
  const options = [
    { id: 1, name: "All Categories", value: "All Categories" },
    { id: 2, name: "Rice", value: "Rice" },
    { id: 3, name: "Olive Oil", value: "Olive Oil" },
    { id: 4, name: "Green Tea", value: "Green Tea" },
    { id: 5, name: "Coffee", value: "Coffee" },
    { id: 6, name: "Super Food", value: "Super Food" },
    { id: 7, name: "Coconut Oil", value: "Coconut Oil" },
    { id: 8, name: "Black Rice", value: "Black Rice" },
    { id: 9, name: "Seeds and Nuts", value: "Seeds and Nuts" },
    { id: 10, name: "Pink Salt", value: "Pink Salt" },
  ];

  const { cartCount, searchQuery, setSearchQuery } = useContext(Cart);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      {/* Fixed Top Section */}
      <div className="fixed top-0 w-full m-auto bg-white shadow-md z-50 py-3 flex justify-around items-center">
        <NavLink to="/">
          {" "}
          <img
            src="logo.svg"
            className="sm:w-[200px] xs:w[100px]"
            alt="Brand Logo"
          />
        </NavLink>

        {/* Search Bar */}
        <div className="hidden lg:flex border-gray-300 items-center border-2 w-[600px] h-13 rounded-full overflow-hidden">
          <div className="flex items-center">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="p-2 pl-4 pr-2 border-none rounded-l-full focus:outline-none"
            >
              {options.map((val) => (
                <option key={val.id} value={val.value}>
                  {val.name}
                </option>
              ))}
            </select>
            <div className="h-6 border-l-2 border-gray-300 mx-2"></div>
          </div>

          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-2 text-center bg-transparent outline-none focus:ring-0"
          />
        </div>

        {/* Cart Section */}
        <div className="flex">
          <NavLink to="/Cartt">
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="size-7 xs:size-4 px-2 rounded-full bg-sky-50">
                {cartCount}
              </p>
              <span className="flex justify-center items-center gap-2">
                <BiCartAlt />
                <p>Cart</p>
              </span>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Scrollable Navigation Menu */}
      <nav className="w-full pt-26 flex justify-between px-6 lg:px-28 py-2 bg-primary text-white relative">
        {/* Menu Toggle Button */}
        <span className="flex items-center gap-3">
          <RiMenu2Line
            className="cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <p className="hidden lg:block">Browse Categories</p>
        </span>

        {/* Desktop Menu (Always Visible on LG) */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink to="/">Home</NavLink>
          <p>Shop</p>
          <p>Product</p>
          <p>Blog</p>
          <p>Pages</p>
          <p>Contact Us</p>
        </div>

        {/* Mobile & Tablet Menu (Toggleable) */}
        <div
          className={`absolute top-full left-0 w-full bg-primary text-white flex flex-col items-center gap-4 py-4 lg:hidden transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink to="/">Home</NavLink>
          <p>Shop</p>
          <p>Product</p>
          <p>Blog</p>
          <p>Pages</p>
          <p>Contact Us</p>
        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-4">
          <IoCallOutline className="size-10 rounded-full p-2 bg-white text-black" />
          <span>
            Hotline <p>(0183) 547-6985</p>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
