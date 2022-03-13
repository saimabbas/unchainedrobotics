import React from 'react'
import st from "../../../../styles/components/Pages/ProductPage/ProductDetailsSection/ProductBriefDescription.module.css"
const ProductBriefDescription = (props) => {
    return (
        <p className={st.ProductBriefDescription}>{props.description}</p>
    )
}

export default ProductBriefDescription