import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import MainLayout from '../../Layouts/MainLayout'
import SubLayout from '../../Layouts/SubLayout'

import Login from '../Auth/Login'
import RequireAuth from '../Auth/RequireAuth'
import { getUserInfor } from '../../axios/user'
import { setAuthen } from '../../redux/slices/authSlice'
import { setCartItem } from '../../redux/slices/cartSlide'

// pages
import ProductDetail from '../ProductDetail'
import Shop from '../Shop'
import Cart from '../Cart'
import Order from '../Order'
import Register from '../Auth/Register'
import ProductShop from '../ProductShop'
import CategoryShop from '../CategoryShop'


const Application = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin')
    
    if(isLogin){
      const getInfor = async () => {
        const { data } = await getUserInfor()

        dispatch(setAuthen({
          user: {
            id: data._id,
            displayName: data.displayName,
            role: data.role,
            username: data.username
          }
        }))

        dispatch(setCartItem(data.cart))
      }

      getInfor()
    }
  }, [])

  return (
    <React.Fragment>
      <Routes>
        
        <Route element={<MainLayout />}>
          <Route path="/shop" element={<Shop />}>
            <Route path="" element={<ProductShop />} />
            <Route path="category/:slug" element={<CategoryShop />} />
          </Route>

          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

            <Route path="/order" element={
              <RequireAuth>
                <Order />
              </RequireAuth>
            } />
          <Route path="*" element={<Navigate to="/shop" />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default Application