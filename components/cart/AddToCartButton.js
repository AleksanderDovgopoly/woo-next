import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AddContext';
import { addFirstProduct, updateCart } from '../../utils/functions';

const AddToCartButton = ({ product }) => {
    const [cart, setCart] = useContext(AppContext);
    const [showCartBtn, setShowCartBtn] = useState(false);

    const handleAddToCart = () => {
        if (process.browser) {
            let existingCart = localStorage.getItem('woo-next-cart');

            if (existingCart) {
                existingCart = JSON.parse(existingCart);
                const qtyToBeAddad = 1;

                const updatedCart = updateCart(existingCart, product, qtyToBeAddad)
                setCart(updatedCart);

            } else {
                // Add first product
                const newCart = addFirstProduct(product);
                setCart(newCart);
            }

            setShowCartBtn(true);
        }
    };

    return (
        <>
            {
                showCartBtn ? (
                    <Link href="/cart">
                        <button className="btn btn-secondary text-center">
                            View cart
                        </button>
                    </Link>
                ) : (
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-secondary text-center"
                    >
                        Add to cart
                    </button>
                )
            }
        </>
    )
}

export default AddToCartButton;
