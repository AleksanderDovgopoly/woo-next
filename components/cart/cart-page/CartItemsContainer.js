import Link from 'next/link';
import React, { useContext } from 'react';
import { AppContext } from '../../../context/AddContext';
import { removeItemFromCart } from '../../../utils/functions';
import CartItem from './CartItem';

const CartItemsContainer = () => {
    const [cart, setCart] = useContext(AppContext);

    const handleRemoveProductClick = (event, productId) => {
        const updatedCart = removeItemFromCart(productId);
        setCart(updatedCart);
    };

    return (
        <div>
            {cart ? (
                <div className='woo-next-cart-wrapper container'>
                    <h1 className='woo-next-cart-heading mt-5'>Cart</h1>
                    <table className='table table-hover'>
                        <thead>
                            <tr className='woo-next-cart-header-container'>
                                <th className='woo-next-cart-heading' scope='col' />
                                <th className='woo-next-cart-heading' scope='col' />
                                <th className='woo-next-cart-heading' scope='col'>Product</th>
                                <th className='woo-next-cart-heading' scope='col'>Price</th>
                                <th className='woo-next-cart-heading' scope='col'>Quantity</th>
                                <th className='woo-next-cart-heading' scope='col'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.length && (
                                cart.products.map(item => (
                                    <CartItem
                                        key={item.productId}
                                        item={item}
                                        setCart={setCart}
                                        handleRemoveProductClick={handleRemoveProductClick}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>

                    {/* Cart Total */}
                    <div className='row woo-next-cart-total-container mt-5'>
                        <div className='col-6'>
                            <h2>Cart Total</h2>
                            <table className='table table-hover'>
                                <tbody>
                                    <tr className='table-light'>
                                        <td className='woo-next-cart-element-total'>Subtotal</td>
                                        <td className='woo-next-cart-element-amt'>{cart.totalProductsPrice}</td>
                                    </tr>
                                    <tr className='table-light'>
                                        <td className='woo-next-cart-element-total'>Total</td>
                                        <td className='woo-next-cart-element-amt'>{cart.totalProductsPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Checkout button */}
                    <Link href="/checkout">
                        <button className='btn btn-secondary woo-next-large-black'>
                            <span className='woo-next-cart-checkout-text'>Proceed to Checkout</span>
                        </button>
                    </Link>
                </div>
            ) : ''}
        </div>
    )
}

export default CartItemsContainer;
