import { useEffect, useState } from "react";
import { Link } from "react-router";
import useCart from "../hooks/useCart";
import MyForm from "../components/MyForm.jsx";

import CheckoutModal from "../components/CheckoutModal.jsx";
import useDebounce from "../hooks/useDebounce.jsx";

export default function PageCart() {
    const { cart, clearCart, updateQuantity, removeFromCart } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [orderData, setOrderData] = useState(null);

    const [localQuantities, setLocalQuantities] = useState(() => {
        const qtys = {};
        cart.forEach(item => { qtys[item.id] = item.quantity; });
        return qtys;
    });
    
    // Sort by id
    const sortedCart = [...cart].sort((a, b) => a.id - b.id);

    // Rendering total sum of all cart items
    const totalSum = () => {
        return cart.reduce((sum, item) => 
        sum + (item.price * (item.quantity || 1)), 0).toFixed(2);
    };

    const handleItemIncrement = (itemId) => {
        setLocalQuantities(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 1) + 1
        }));
    };
    const handleItemDecrement = (itemId) => {
        setLocalQuantities(prev => {
            if ((prev[itemId] || 1) > 1) {
                return {
                    ...prev,
                    [itemId]: prev[itemId] - 1
                };
            }
            return prev;
        });
    };

    //Handle Checkout
    const handleCheckout = (formValues) => {
        if(!formValues.name || !formValues.email) {
            alert("Please fill in all the fields");
            return;
        };

        if(cart.length === 0) {
            alert("Cart is empty");
            return;
        };

        //Creation of order object
        const order = {
            orderId: "ORDER-"+ Date.now(),
            date: new Date().toLocaleDateString(),
            customer: formValues,
            items: cart,
            total: totalSum()
        };

        //Sets the order data and displays modal
        setOrderData(order);
        setShowModal(true);
        console.log({order});

        //Clears current cart
        clearCart();
    };

    //Handling of closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
        setOrderData(null);
    }; 

    const debouncedQuantities = useDebounce(localQuantities, 500);

    useEffect(() => {
        Object.entries(debouncedQuantities).forEach(([itemId, qty]) => {
            const id = Number(itemId);
            const item = cart.find(i => i.id === id);
            if (item && item.quantity !== qty) {
                updateQuantity(id, qty);
            }
        });
    }, [debouncedQuantities, cart, updateQuantity]);

    return(
        <div className="main-cart-container">            
            {cart.length > 0 ? (
                <>
                    <h1>Your Cart</h1>
                    <div className="cart-container">                            
                        {sortedCart.map(item => (
                            <div className="cart-item-card" key={item.id}> 
                                <img className="cart-item-img" src={item.thumbnail} alt='Product Img'></img>
                                
                                <div>
                                    <p className="cart-bold-text">Product:</p>
                                    <p><Link className="product-link" to={`/product/${item.id}`}>{item.title}</Link></p>
                                </div>
                                <div className="cart-item-details">
                                    <div className="cart-item-price-container">
                                        <p className="cart-bold-text">À price</p>
                                        <p>${item.price}</p>
                                    </div>                                                    
                                    <div className="cart-item-quantity-container">
                                        <button className="cart-item-quantity-button" onClick={() => handleItemDecrement(item.id)}>-</button>
                                        <p className="cart-item-quantity-text">{item.quantity}</p>
                                        <button className="cart-item-quantity-button" onClick={() => handleItemIncrement(item.id)}>+</button>
                                        <button className="cart-remove-item-button" onClick={() => removeFromCart(item.id)}>❌</button>
                                    </div>
                                        <div className="cart-item-total-container">
                                            <p className="cart-bold-text">Total:</p>
                                            <p>${(item.quantity * item.price).toFixed(2)}</p>
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>

                    <div className="checkout-container">
                        <MyForm onSubmit={handleCheckout} />
                        <p className="total-sum-text">Total: ${totalSum()}</p>
                    </div>
                </>
            ) : (
                <h2>Your Cart is empty. Start shopping</h2>
            )}
            <CheckoutModal 
                showModal={showModal}
                orderData={orderData}
                onClose={handleCloseModal}
            />
        </div>
    );
};