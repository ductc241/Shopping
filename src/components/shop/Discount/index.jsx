import React from 'react'

import Button from '../../common/Button'
import './Discount.css'

const Discount = () => {
  return (
    <section className="discount container">
        <div className="discount__container">
            <h2 className="discount__title">Get Discount Infor</h2>
            <p className="discount__subtitle">Subscribe to the Outstock mailing list to receive updates on new arrivals, special offers and other discount information.</p>
            <form className="discount-form">
                <input type="text" placeholder="Your email address" />
                <Button 
                  content='subcriber'
                  variant='border'
                />
            </form>
        </div>
    </section>
  )
}

export default Discount