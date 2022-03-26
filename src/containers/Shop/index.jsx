import React from 'react'
import { useSelector } from 'react-redux'

import Sidebar from '../../components/shop/Sidebar'
import Pagination from '../../components/common/Pagination'

import './Shop.css'
import { Outlet } from 'react-router-dom'

const index = () => {
    const { list } = useSelector(state => state.products)
    return (
        <section className="shop container">
            <div className="shop__grid grid">
                <Sidebar />
                <div className="shop__container">
                    <div className="shop__action">
                    <div className="filter__toggle">
                        <i className='bx bx-slider' ></i>
                        <span>Filter</span>
                    </div>
                    <div className="sorting">
                        <select className="sorting__container">
                            <option value="">Defaul sorting</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    </div>

                    <div className="shop__content grid">
                        <Outlet />
                    </div>

                    {list && list.count > 0 && (
                        <Pagination />
                    )}
                </div>
            </div>
        </section>
    )
}

export default index