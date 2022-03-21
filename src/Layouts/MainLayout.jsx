import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/common/Header'
import Breadscrumb from '../components/shop/Breadcrumb'
import Discount from '../components/shop/Discount'

const MainLayout = () => {
    return (
        <React.Fragment>
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