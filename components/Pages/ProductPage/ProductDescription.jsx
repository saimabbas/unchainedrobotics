import React from 'react'
import st from '../../../styles/components/Pages/ProductPage/ProductDescription.module.css'
const ProductDescription = (props) => {
    return (
        <div className="box-sm">
            <div className={st.richText}>
                {props.children}
            </div>
        </div>
    )
}

export default ProductDescription