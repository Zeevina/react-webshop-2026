import { NavLink } from "./NavLink"

import useCart from "../hooks/useCart";

export default function Navbar() {

    const { cart } = useCart();

    const totalSum = () => {
        return cart.reduce((sum, item) => 
        sum + (item.price * (item.quantity || 1)), 0).toFixed(2);
    };

    const displayTotalItems = () => {
        return cart.reduce((total, item) => total + (item.quantity || 1), 0);
    };

    return(
        <nav className="navbar-container">
            <h1 className="navbar-text">My Webshop</h1>
            <ul className="navbar-links-container">           
                <NavLink title='Shop' to='/' />
                <NavLink title='Cart' to='/cart' />               
            </ul>
                <span className="cart-info">{displayTotalItems()} Items, $ {totalSum()}</span>
        </nav>
    )
}

