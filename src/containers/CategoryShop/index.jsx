import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductsByCate } from '../../redux/slices/productSlide';

import ProductList from '../../components/shop/Product/ProductList';



const CategoryShop = () => {
    const dispatch = useDispatch()
    const { list, isLoading } = useSelector(state => state.products)
    let params = useParams();

    useEffect(() => {
        dispatch(getProductsByCate(params.slug))
    }, [params]);

    return (
        <React.Fragment>
            {isLoading ? (
                'Loading'
            ) : list && list.length > 0 ? (
                <ProductList list={list}/>
            ): (
                'Not Fount Product'
            )}
        </React.Fragment>
    )
}

export default CategoryShop