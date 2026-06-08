import { useEffect, useState } from "react";
import { Link } from "react-router";

import useCart from "../hooks/useCart";

export default function ProductList() {

    const [products, setProduct] = useState([]);
    const [quantities, setQuantities] = useState({});
    const { cart, addToCart } = useCart();
 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const data = await res.json();
                console.log("Products: ", data);
                setProduct(data.products);

            } catch(error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchProducts();
    }, []);
 
    useEffect(() => {
        console.log("Product added to cart. Current cart:", cart);
    }, [cart]);

    const handleQuantityIncrement = (productId) => {
        setQuantities({ ...quantities, [productId]: (quantities[productId] || 1) + 1 });
    };

    const handleQuantityDecrement = (productId) => {
        setQuantities({ ...quantities, [productId]: Math.max(1, (quantities[productId] || 1) - 1) });
    };

    const handleAddToCart = (product) => {
        const quantity = quantities[product.id] || 1;
        addToCart(product, quantity);
        setQuantities({ ...quantities, [product.id]: 1 });


    };

    return(
        <div className="product-list">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img className="product-image" src={product.thumbnail} alt='Product Img'></img>
                    <Link className="product-link" to={`/product/${product.id}`}>{product.title}</Link>
                    <br/>
                    ${product.price}
                    <div className="quantity-controls">
                        <button className="quantity-button" onClick={() => handleQuantityDecrement(product.id)}>−</button>
                        <button className="add-product-button" onClick={() => handleAddToCart(product)}>Add ({quantities[product.id] || 1})</button>
                        <button className="quantity-button" onClick={() => handleQuantityIncrement(product.id)}>+</button>                        
                    </div>
                </div>                    
            ))}            
        </div>
    )
}