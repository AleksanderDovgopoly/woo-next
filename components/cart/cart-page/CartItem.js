import React, { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { updateCart } from '../../../utils/functions';

const CartItem = (props) => {
    const { item, setCart, handleRemoveProductClick } = props;
    const [productCount, setProductCount] = useState(item.qty);

    const handleQtyChange = (event) => {
        if (process.browser) {
            const newQty = event.target.value;
            setProductCount(newQty);

            //Update Cart
            let existingCart = localStorage.getItem('woo-next-cart');
            existingCart = JSON.parse(existingCart);

            const updatedCart = updateCart(existingCart, item, false, newQty);

            setCart(updatedCart);
        }
    };

    return (
        <tr className='woo-next-cart-item' key={item.productId}>
            {/*Remove icon*/}
            <th className='woo-next-cart-element woo-next-cart-el-close'>
                <span className='woo-next-cart-close-icon' onClick={(event) => handleRemoveProductClick(event, item.productId)}>
                    <FaTimesCircle />
                </span>
            </th>
            {/*Prod image*/}
            <td className='woo-next-cart-element'>
                <img width="64" src={item.image.sourceUrl} srcSet={item.image.srcSet} alt={item.image.title} />
            </td>
            {/*Prod title*/}
            <td className='woo-next-cart-element'>{item.name}</td>
            {/*Price*/}
            <td className='woo-next-cart-element'>{item.price.toFixed(2)}</td>
            {/*Qty*/}
            <td className='woo-next-cart-element'>
                <input
                    type="number"
                    min="1"
                    className='woo-next-cart-qty-input'
                    value={productCount}
                    onChange={handleQtyChange}
                />
            </td>
            {/*TotalPrice*/}
            <td className='woo-next-cart-element'>{item.totalPrice.toFixed(2)}</td>
        </tr>
    )
}

export default CartItem;
