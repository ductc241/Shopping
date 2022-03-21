import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../../redux/slices/productSlide'

import ProductList from '../../components/shop/Product/ProductList'

import Sidebar from '../../components/shop/Sidebar'
import './Shop.css'

const index = () => {
    const dispatch = useDispatch()
    
    const { list, isLoading } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

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
                        {isLoading ? (
                            'Loading'
                        ) : list.products.length > 0 ? (
                            <ProductList list={list.products}/>
                        ): (
                            'Not Fount Product'
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index