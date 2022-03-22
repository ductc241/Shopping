import React, { useEffect, useState } from 'react'

import Orderitem from './OrderItem'
import { getUserOrder } from '../../axios/order'


import './Order.css'

const Order = () => {
    const [orders, setOrders] = useState();
    
    useEffect(() => {
        const getOrders = async () => {
            const { data } = await getUserOrder()
            setOrders(data)
        }

        getOrders()
    }, [])

    return (
        <div className="order container">
            <div className="order__container">
                <h3>Order History</h3>

                {orders && orders.length === 0 && (
                    <p className='order__empty'>You haven't placed any orders yet.</p>
                )}

                {orders && orders.length > 0 && (
                    <div className="order__list">
                        {orders.map((order, index) => {
                            return <Orderitem key={index} order={order}/>
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Order