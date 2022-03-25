import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../../../redux/slices/productSlide'
import './Pagination.css'

const Pagination = () => {
    const dispatch = useDispatch()
    const { list } = useSelector(state => state.products)
    const [totalPage, setTotalPage] = useState();
    const [currentPage, setCurrenPage] = useState(1);

    useEffect(() => {
        if(list.count){
            const pageArr = [...Array(Math.ceil(list.count / 3))].map((_, i) => i+ 1)
            setTotalPage(pageArr)
        }
    }, [list])

    const handleSetPage = (page) => {
        setCurrenPage(page)
        dispatch(getProducts(page))
    }

    const handleUpPage = () => {
        const current = currentPage + 1
        if(currentPage > current) return

        setCurrenPage(current)
        dispatch(getProducts(current))
    }

    const handleDownPage = () => {
        setCurrenPage(page)
        dispatch(getProducts(page))
    }

    return (
        <div className="pagination">
            <div className="pagination__container">
                <div className="pagination__item arrow">
                    <span>
                        <i className='bx bx-chevron-left' ></i>
                    </span>
                </div>


                {totalPage && totalPage.map((page, index) => {
                    return (
                        <div 
                            className= {page === currentPage ? 'pagination__item active' : 'pagination__item'}
                            key={index}
                            onClick={() => handleSetPage(page)}
                        >
                            <span>
                                {page}
                            </span>
                        </div>
                    )
                })}

                <div className="pagination__item arrow" onClick={handleUpPage}>
                    <span>
                        <i className='bx bx-chevron-right' ></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Pagination