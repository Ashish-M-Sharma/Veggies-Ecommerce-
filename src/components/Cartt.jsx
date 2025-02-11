import React, { useContext } from "react";
import { Cart } from "../context/Context";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

const CartComponent = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(Cart);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        Shopping Cart 🛒
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 sm:p-5 flex flex-col items-center transform transition-transform hover:scale-105"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-20 sm:w-24 h-20 sm:h-24 object-contain mb-3 sm:mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                {item.name}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg font-medium">
                ₹ {item.price}
              </p>
              <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 sm:mt-4">
                <button
                  className="px-3 sm:px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-1 sm:gap-2 shadow-md hover:bg-green-600 transition-all text-sm sm:text-base"
                  onClick={() => addToCart(item.id)}
                >
                  <FaPlus /> Add
                </button>
                <button
                  className="px-3 sm:px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-1 sm:gap-2 shadow-md hover:bg-red-600 transition-all text-sm sm:text-base"
                  onClick={() => removeFromCart(item.id)}
                >
                  {item.quantity > 1 ? <FaMinus /> : <FaTrashAlt />} Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartComponent;
