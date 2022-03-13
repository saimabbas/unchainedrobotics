import React from 'react'
import st from "../../../../styles/components/Pages/ProductPage/ProductDetailsSection/ProductDimensionsDataBox.module.css"
const ProductDimensionsDataBox = (props) => {
    return (
        <div className={st.ProductDimensionsDataBox}>
            <span>{props.dataheading}</span>
            <p>{props.datavalue}</p>
        </div>
    )
}

export default ProductDimensionsDataBox