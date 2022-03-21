import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const ProductItem = ({ product }) => {
  return (
    <div className="product">
      <div className="product__image">
          <Link to={`product/${product.title}`} className='product__link'>
              <img src={product.image} alt="" />
          </Link>
          <div className="product__lable">
              <span>sale</span>
          </div>
      </div>
      <div className="product__content">
          <Link to={`product/${product.title}`} className='product__name'>
            {product.title}
          </Link>
          <div className="product__price">
              <span className="product__price-compare">$1165.00</span>
              <div className="product__add">
                <i className='bx bx-plus'></i>
                <span>Add to Cart</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProductItem