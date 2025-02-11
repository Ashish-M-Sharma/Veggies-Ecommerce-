import React, { useContext } from "react";
import { Cart } from "../context/Context";
import { FaShoppingBasket } from "react-icons/fa";

const FlashSale = () => {
  const { flashSale, searchQuery, cartItems, addToCart, removeFromCart } =
    useContext(Cart);

  // For filteration of products
  const filteredProducts = flashSale.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Title  */}
      <p className="text-[27px] px-6 w-[87%] mx-auto my-10 font-[700]">
        New Products
      </p>
      {/* Title */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[84%] m-auto my-4 p-4">
        {filteredProducts.map((val) => {
          const isInCart = cartItems.some((item) => item.id === val.id);

          return (
            <div
              key={val.id}
              className="w-full max-w-sm mx-auto border-2 border-zinc-200 bg-white rounded-lg shadow-md px-5 py-5 transition-transform transform group hover:rotate-1"
            >
              <img
                src={val.src}
                alt={val.name}
                className="w-full h-40 object-contain mx-auto"
              />
              <h3 className="text-lg font-semibold mt-2 text-center">
                {val.name}
              </h3>
              <div className="mt-2 flex justify-center items-center space-x-2">
                <span className="text-xl font-bold text-gray-900">
                  ₹ {val.price}
                </span>
                <span className="text-gray-500 line-through">
                  ₹ {val.prePrice}
                </span>
              </div>

              {isInCart ? (
                <button
                  className="w-full mt-6 px-10 py-2 bg-red-500 text-white rounded-lg flex justify-center items-center gap-2 cursor-pointer"
                  onClick={() => removeFromCart(val.id)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="w-full mt-6 px-10 py-2 bg-primary text-white rounded-lg flex justify-center items-center gap-2 cursor-pointer"
                  onClick={() => addToCart(val.id)}
                >
                  Add to Cart <FaShoppingBasket />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FlashSale;
