import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});

    // Add item to cart
    const addToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1, // Increase quantity or set to 1
        }));
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0, // Decrease quantity, but not below 0
        }));
    };

    // Get total amount of items in cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const itemId in cartItem) {
            if (cartItem[itemId] > 0) { // Ensure there's a positive quantity
                let itemInfo = food_list.find((product) => product._id === itemId);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItem[itemId]; // Calculate total
                }
            }
        }

        return totalAmount;
    };

    // Context value to provide to children components
    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
