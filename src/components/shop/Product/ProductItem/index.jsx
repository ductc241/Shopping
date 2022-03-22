import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import { addCartItem } from '../../../../redux/slices/cartSlide'

import './Product.css'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { authenticated } = useSelector(state => state.auth)

  const handleAddCart = () => {
    if(authenticated){
      const cartItem = { product: product._id, quantity: 1}
      
      dispatch(addCartItem(cartItem))
      toast("Thêm vào giỏ thành công!");
    }else{
      navigate('/login')
    }
  }

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
              <div className="product__add" onClick={handleAddCart}>
                <i className='bx bx-plus'></i>
                <span>Add to Cart</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProductItem