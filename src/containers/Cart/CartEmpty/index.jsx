import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'

import './CartEmty.css'

const CartEmpty = () => {
  return (
    <div className="container">
        <h3 className='empty__title'>YOUR CART IS CURRENTLY EMPTY.</h3>
        <p className='empty__subtitle'>Before proceed to checkout you must add some products to your shopping cart.
        You will find a lot of interesting products on our Website.</p>

        <Link to='/shop'>
            <Button content='GO TO SHOPPING' variant='border'/>
        </Link>
        
    </div>
  )
}

export default CartEmpty