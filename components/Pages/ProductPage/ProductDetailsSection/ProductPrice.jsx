import React from 'react'
import st from "../../../../styles/components/Pages/ProductPage/ProductDetailsSection/ProductPrice.module.css"
const ProductPrice = (props) => {
    return (
        <div className={st.productPrice}>
            <h6>{props.price} €</h6>
            <span>excl. MwSt</span>
        </div>
    )
}

export default ProductPrice