import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

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

    // Delete item from cart regardless of quantity
    const deleteFromCart = (id) => {
        setCartItems((prevCartItems) => {
            const newCartItems = { ...prevCartItems };
            delete newCartItems[id];
            return newCartItems;
        });
    };

    // Clear the entire cart
    const clearCart = () => {
        setCartItems({});
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
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
