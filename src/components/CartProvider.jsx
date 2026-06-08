import { useReducer } from "react";
import CartContext from "../context/CartContext";

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const { product, quantity } = action.payload;
            const existingItem = state.find((item) => item.id === product.id);
            if (existingItem) {
                return state.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: Number(item.quantity) + Number(quantity) }
                        : item
                );
            }
            return [...state, { ...product, quantity: Number(quantity) }];
        }
        case "UPDATE_QUANTITY": {
            return state.map((item) => 
                item.id === action.payload.productId 
                ? {...item, quantity: Math.max(1, action.payload.quantity) }
                : item
            );
        }
        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.payload);
        case "CLEAR_CART":
            return [];
        default:
            return state;        
    }
};

export default function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = (product, quantity = 1) => {
        dispatch({ type: "ADD_TO_CART", payload: { product, quantity: Number(quantity) } });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity: Number(quantity) } });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: productId });
    };

    return(
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, clearCart, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    )
}