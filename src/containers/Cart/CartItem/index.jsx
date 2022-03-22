import React from 'react'
import { Link } from 'react-router-dom'

import './CartItem.css'

const CartItem = ({ item }) => {
    return (
        <tr>
            <td className='cart__image-infor'>
                <img src="https://cdn.shopify.com/s/files/1/1573/5553/products/14_370x.jpg?v=1601694510"/>
            </td>
            <td className='cart__product-infor'>
                <Link to='#'>{item.product}</Link>
                <div style={{ marginTop: '10px' }}>
                    <p className='cart__product-price'>${item.price}</p>
                    <div className="cart__product-quantity">
                        <i className='bx bx-minus' ></i>
                        <span>{ item.quantity }</span>
                        <i className='bx bx-plus'></i>
                    </div>
                </div>
            </td>
            <td className='cart__total-infor'>${item.quantity * item.price}</td>
        </tr>
    )
}

export default CartItem