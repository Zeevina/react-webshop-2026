import { useContext } from "react";
import CartContext from "../context/CartContext";

function useCart() {
    const { cart, addToCart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
    return { cart, addToCart, updateQuantity, removeFromCart, clearCart };
}

export default useCart;