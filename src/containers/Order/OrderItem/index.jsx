import React from 'react'
import './OrderItem.css'


const Orderitem = ({ order }) => {
    return (
        <div className="order__item">
            <div className='order__item-code'>
                <span className='order__item-title'>Order Code: </span>
                <span>{order._id}</span>
            </div>
            <div>
                <span className='order__item-title'>Total Price: </span>
                <span>${order.total}</span>
            </div>
            <div>
                <span className='order__item-title'>Date: </span>
                <span>{order.createdAt}</span>
            </div>
            <div>
                <span className='order__item-title'>Status: </span>
                <span>In Processing</span>
            </div>
        </div>
    )
}

export default Orderitem