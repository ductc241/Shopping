import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import MainLayout from '../../Layouts/MainLayout'
import SubLayout from '../../Layouts/SubLayout'

import Login from '../Auth/Login'
import RequireAuth from '../Auth/RequireAuth'

// pages
import ProductDetail from '../ProductDetail'
import Shop from '../Shop'


const Application = () => {
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