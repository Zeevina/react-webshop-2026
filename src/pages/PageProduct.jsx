import { useEffect, useState } from "react";
import { useParams } from "react-router";

import useCart from "../hooks/useCart.js"

export default function PageProduct() {
    const { productId } = useParams();
    const [ quantities, setQuantities ] = useState({});
    const { cart, addToCart, removeFromCart } = useCart();


    useEffect(() => {
        console.log("Current cart:", cart);
    }, [cart]);

    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                console.log("Fetched products:", data.products);
                const product = data.products.find(
                (p) => parseInt(p.id) === parseInt(productId),
                );
                console.log(data.products[0], productId);
                setCurrentProduct(product);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [productId]);

    const handleQuantityDecrement = (productId) => {
        setQuantities({...quantities, [productId]: Math.max(1, quantities[productId] || 1) - 1});
    };

    const handleQuantityIncrement = (productId) => {
        setQuantities({...quantities, [productId]: (quantities[productId] || 1) + 1});
    };

    const handleAddToCart = (product) => {
        const quantity = quantities[product.id] || 1;
        addToCart(product, quantity);
        setQuantities({ ...quantities, [product.id]: 1 });
    };

    return(
        <>
            <div className="page-product-container">
                <div className="page-product-card">
                    <h1>{currentProduct?.title}</h1>
                    <img src={currentProduct?.thumbnail}></img>
                    
                    <p><strong>Description:</strong> {currentProduct?.description}</p>
                    <p><strong>Price:</strong> ${currentProduct?.price}</p>
                    <button className="quantity-button" onClick={() => handleQuantityDecrement(productId)} >-</button>
                    <button className="page-product-button" onClick={() => handleAddToCart(currentProduct)}>Add To Cart ({quantities[productId] || 1})</button>
                    <button className="quantity-button" onClick={() => handleQuantityIncrement(productId)}>+</button>
                    <button className="page-remove-item-button" onClick={() => removeFromCart(currentProduct.id)}>❌</button>
                </div>
            </div>
        </>
    );
}