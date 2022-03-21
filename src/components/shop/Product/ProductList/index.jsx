import React from 'react'
import ProductItem from '../ProductItem/'

const ProductList = ({ list }) => {
    
    return (
       <React.Fragment>
           {list.map((item, index) => {
               return <ProductItem key={index} product={item}/>
           })}
       </React.Fragment>
    )
}

export default ProductList