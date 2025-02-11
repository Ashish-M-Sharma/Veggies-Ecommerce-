import React, { useContext } from "react";
import { Cart } from "../context/Context";
import { BiCartAlt } from "react-icons/bi";

const WishList = () => {
  const { wishlist, toggleWishlist, buyFromWishlist } = useContext(Cart);

  return (
    <div>
      <center>
        <h1 className="text-2xl font-bold">Your Wishlist</h1>
      </center>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mx-25 my-4">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="border-2 border-gray-200 bg-white rounded-lg shadow-md px-5 py-3"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-fit h-32 mx-auto"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-xl font-bold text-gray-900">
                &#8377; {item.price}
              </p>

              <button
                className="w-full mt-2 px-4 py-2 rounded-lg border-2 border-red-500 hover:bg-red-500 hover:text-white"
                onClick={() => toggleWishlist(item.id)}
              >
                Remove from Wishlist
              </button>

              <button
                className="w-full mt-2 px-4 py-2 rounded-lg bg-green-500 text-white flex justify-center items-center gap-2"
                onClick={() => buyFromWishlist(item.id)}
              >
                Buy Now <BiCartAlt />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
