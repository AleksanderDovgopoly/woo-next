import Link from 'next/link';
import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from '../../context/AddContext';


const CartIcon = () => {
    const [cart, setCart] = useContext(AppContext);
    const productCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsCount : '0';
    const productTotal = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice : '0.00';

    return (
        <>
            <Link href="/cart">
                <a className="mini-cart-link">
                    <div className="woo-next-cart-wrap">
                        <span className="woo-next-cart-icon-container">
                            <FaShoppingCart className="woo-next-cart-icon" />
                            <span className="woo-next-cart-count">{productCount}</span>
                            <span className="subtotal-divider">/</span>
                            <span className="woo-next-cart-subtotal">${productTotal}</span>
                        </span>
                    </div>
                </a>
            </Link>
        </>
    )
}

export default CartIcon
