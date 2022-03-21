import React from 'react'
import './Breadcrumb.css'

const Breadscrumb = () => {
  return (
    <section className="breadcrumb">
        <div className="breadcrumb__container">
            <h2 className="breadcrumb__title">Shopping</h2>
            <ul className="breadcrumb__list">
                <li className="breadcrumb__item">Home</li>
                <li className="breadcrumb__item">Shop</li>
            </ul>
        </div>
    </section>
  )
}

export default Breadscrumb