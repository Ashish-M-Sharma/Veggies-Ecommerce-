import React, { useContext } from "react";
import { Cart } from "../context/Context";

const NewProducts = () => {
  const { newProducts, toggleCart } = useContext(Cart);

  return (
    <>
      <p className="text-[27px] px-12 mt-5 mb-8 font-[700]">New Products</p>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-6 w-[87%] m-auto my-4">
        {newProducts.map((product) => (
          <div
            key={product.id}
            className="max-w-xs border-2 border-zinc-200 bg-white rounded-lg shadow-md px-7 py-5"
          >
            <img
              src={product.src}
              alt={product.name}
              className="w-fit h-40 object-cover mx-auto "
            />

            <div className="mt-4">
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>

              <div className="mt-2 flex items-center space-x-2">
                <span className="text-xl font-bold text-gray-900">
                  &#8377;{product.price}
                </span>
                <span className="text-gray-500 line-through">
                  &#8377;{product.prePrice}
                </span>
              </div>

              <button
                className={`w-48 mt-6 mx-10 py-2 rounded-lg flex justify-center items-center gap-2 cursor-pointer active:scale-95 ${
                  product.isAdded
                    ? "bg-red-500 text-white"
                    : "border-2 border-primary hover:bg-primary hover:text-white"
                }`}
                onClick={() => toggleCart(product.id)}
              >
                {product.isAdded ? "Remove From Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProducts;
