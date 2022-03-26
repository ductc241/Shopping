import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/slices/productSlide'

import ProductList from '../../components/shop/Product/ProductList'

const ProductShop = () => {
    const dispatch = useDispatch()
    const { list, isLoading } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <React.Fragment>
            {isLoading ? (
                'Loading'
            ) : list.products && list.products.length > 0 ? (
                <ProductList list={list.products}/>
            ): (
                'Not Fount Product'
            )}
        </React.Fragment>
    )
}

export default ProductShop