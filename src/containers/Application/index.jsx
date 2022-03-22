import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import MainLayout from '../../Layouts/MainLayout'
import SubLayout from '../../Layouts/SubLayout'

import Login from '../Auth/Login'
import RequireAuth from '../Auth/RequireAuth'
import { getUserInfor } from '../../axios/user'


// pages
import ProductDetail from '../ProductDetail'
import Shop from '../Shop'
import { setAuthen } from '../../redux/slices/authSlice'


const Application = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin')
    
    if(isLogin){
      const getInfor = async () => {
        const { data } = await getUserInfor()
        console.log('setauth')

        dispatch(setAuthen({
          user: {
            id: data._id,
            displayName: data.displayName,
            role: data.role,
            username: data.username
          }
        }))
      }

      getInfor()
    }
  }, [])

  return (
    <React.Fragment>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="shop" />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<SubLayout />}>
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default Application