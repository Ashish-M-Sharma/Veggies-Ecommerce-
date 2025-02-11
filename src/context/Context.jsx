import React, { createContext, useState } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const [flashSale, setFlashSale] = useState([
    {
      id: 1,
      src: "https://vegshops.vercel.app/assets/img/flash_sale/1.png",
      name: "Orange - Sweet and healthy Vitamin C fruit",
      price: "45.00",
      prePrice: "50.00",
    },
    {
      id: 2,
      src: "https://vegshops.vercel.app/assets/img/flash_sale/2.png",
      name: "Strawberry - Juicy and rich in antioxidants",
      price: "70.00",
      prePrice: "100.00",
    },
    {
      id: 3,
      src: "https://vegshops.vercel.app/assets/img/flash_sale/3.png",
      name: "Capsicum - Crunchy and full of Vitamin C",
      price: "40.00",
      prePrice: "60.00",
    },
    {
      id: 4,
      src: "https://vegshops.vercel.app/assets/img/flash_sale/4.png",
      thumbnail1: "parsely1.png",
      thumbnail2: "parsely2.png",
      thumbnail3: "parsely3.png",
      rating: "",
      name: "Curly Parsley - A flavorful herb with health benefits",
      price: "50.00",
      prePrice: "80.00",
      isAdded: false,
    },
    {
      id: 5,
      src: "https://vegshops.vercel.app/assets/img/flash_sale/5.png",
      thumbnail1: "corn1.png",
      thumbnail2: "corn2.png",
      thumbnail3: "corn3.png",
      rating: "",
      name: "Corn - Rich in fiber, vitamins, and minerals",
      price: "30.00",
      prePrice: "40.00",
      isAdded: false,
    },
    {
      id: 6,
      src: "https://vegshops.vercel.app/assets/img/flash_sale/6.png",
      thumbnail1: "cabbage1.png",
      thumbnail2: "cabbage2.png",
      thumbnail3: "cabbage3.png",
      rating: "",
      name: "Cabbage - Low in calories, rich in Vitamin C and fiber",
      price: "35.00",
      prePrice: "45.00",
      isAdded: false,
    },
    {
      id: 7,
      src: "https://vegshops.vercel.app/assets/img/flash_sale/7.png",
      thumbnail1: "winter1.png",
      thumbnail2: "winter2.png",
      thumbnail3: "winter3.png",
      rating: "",
      name: "Winter Vegetables - are a great source of vitamins",
      price: "45.00",
      prePrice: "60.00",
      isAdded: false,
    },
    {
      id: 8,
      src: "https://vegshops.vercel.app/assets/img/flash_sale/8.png",
      thumbnail1: "tomato1.png",
      thumbnail2: "tomato2.png",
      thumbnail3: "tomato3.png",
      rating: "",
      name: "Tomato-Hign in vitamin A and C, potassium",
      price: "35.00",
      prePrice: "45.00",
      isAdded: false,
    },
  ]);

  const [newProducts, setNewProducts] = useState([
    {
      id: 9,
      src: "olive.png",
      name: "Olive Oil - Healthy cooking oil rich in antioxidants",
      price: "120.00",
      prePrice: "150.00",
    },
    {
      id: 10,
      src: "salmon.png",
      name: "Salmon - High in Omega-3 fatty acids and protein",
      price: "300.00",
      prePrice: "350.00",
    },
    {
      id: 11,
      src: "breast.png",
      name: "Chicken Breast - Lean protein for muscle growth",
      price: "220.00",
      prePrice: "260.00",
    },
    {
      id: 12,
      src: "mutton.png",
      name: "Mutton - Rich in iron and essential nutrients",
      price: "450.00",
      prePrice: "500.00",
    },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (id) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const foundProduct =
          flashSale.find((item) => item.id === id) ||
          newProducts.find((item) => item.id === id);
        if (!foundProduct) return prevCart;

        return [...prevCart, { ...foundProduct, quantity: 1 }];
      }
    });

    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });

    setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <Cart.Provider
      value={{
        flashSale,
        newProducts,
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        searchQuery,
        setSearchQuery, // <-- Add this to make it accessible in Navbar & Products
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;
