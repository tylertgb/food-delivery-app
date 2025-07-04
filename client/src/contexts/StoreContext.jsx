import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const deliveryFee = 5.3; // Example fixed fee
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[id] > 0) {
        newCartItems[id] -= 1;
        if (newCartItems[id] === 0) {
          delete newCartItems[id];
        }
      }
      return newCartItems;
    });
  };

  const deleteFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      delete newCartItems[id];
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems({});
    setPromoCode("");
    setDiscount(0);
  };
  // Get total number of items in cart
  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
  };
  // Calculate subtotal
  const getCartSubtotal = () => {
    let subtotal = 0;
    for (const id in cartItems) {
      const item = food_list.find((food) => food._id === id);
      if (item) {
        subtotal += item.price * cartItems[id];
      }
    }
    return subtotal;
  };

  // Calculate total (subtotal + delivery - discount)
  const getCartTotal = () => {
    return getCartSubtotal() - discount;
  };

  // Apply promo code (example: "SAVE10" gives GH₵10 off)
  const applyPromoCode = (code) => {
    if (code === "SAVE10") {
      setPromoCode(code);
      setDiscount(10);
    } else {
      setPromoCode("");
      setDiscount(0);
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
    deliveryFee,
    promoCode,
    discount,
    getCartSubtotal,
    getCartTotal,
    applyPromoCode,
    getCartCount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
