import React from 'react'
import { Outlet } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import Header from '../components/common/Header'
import Breadscrumb from '../components/shop/Breadcrumb'
import Discount from '../components/shop/Discount'

const MainLayout = () => {
    return (
        <React.Fragment>
            <ToastContainer 
                autoClose={2000}
                hideProgressBar={true}
            />
            <Header />
            <Breadscrumb />
            <main className='main'>
                <Outlet />
                <Discount />
            </main>
        </React.Fragment>
    )
}

export default MainLayout