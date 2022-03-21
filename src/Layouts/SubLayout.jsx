import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/common/Header'
import Breadscrumb from '../components/shop/Breadcrumb'
import Discount from '../components/shop/Discount'

const SubLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Breadscrumb />
            <main className='main'>
                <Outlet />
            </main>
        </React.Fragment>
    )
}

export default SubLayout