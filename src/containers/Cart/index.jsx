import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CartEmpty from './CartEmpty'
import CartItem from './CartItem'
import './Cart.css'

import { updateCart } from '../../axios/user'
import { createOrder } from '../../axios/order'
import { resetCartItem } from '../../redux/slices/cartSlide'
import { toast } from 'react-toastify'


const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems, amount } = useSelector(state => state.cart)
    const { userInfor } = useSelector(state => state.auth)

    useEffect(() => {
        if(amount > 0){
            const update = async () => {
                await updateCart({
                    id: userInfor.id,
                    cart: cartItems
                })
            }
            update()
        }
    }, [])
    


    const calculatedTotal = (arr) => {
        let total = 0
        cartItems.forEach(element => {
            total += (element.price * element.quantity)
        });
        
        return total
    }

    const submitOrder = async () => {
        const { data } = await createOrder({
            cart: cartItems,
            userId: userInfor.id
        })

        dispatch(resetCartItem())
        updateCart({
            id: userInfor.id,
            cart: []
        })
        toast('Đặt hàng thành công')
    }

    return (
        <div className="cart container">
            {amount > 0 ? (
                <>
                    <table className='cart__container'>
                        <thead>
                            <tr>
                                <th className='cart__image'>Image</th>
                                <th className='cart__product'>Product</th>
                                <th className='cart__total'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item, index) => {
                            return <CartItem  key={index} item={item}/>
                        })}
                        </tbody>
                    </table>
                    <div className='cart__footer'>
                        <p><span>Subtotal: </span> ${calculatedTotal(cartItems)} </p>
                        <p>Shipping, taxes, and discounts will be calculated at checkout.</p>
                        <button 
                            type="button"
                            className="btn btn-small"
                            onClick={submitOrder}
                        >
                            Check Out
                        </button>
                    </div>
                </>  
            ) : (
                <CartEmpty />
            )}
        </div>
    )
}

export default Cart