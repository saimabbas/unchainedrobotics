import React from 'react'
import st from "../../../../styles/components/Pages/ProductPage/ProductDetailsSection/ProductName.module.css"
const ProductName = (props) => {
    return (
        <h1 className={st.productName}>{props.productname}</h1>
    )
}

export default ProductName