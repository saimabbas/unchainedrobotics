import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/ProductDetailsMenu.module.css"
import { Nav } from 'react-bootstrap'
const ProductDetailsMenu = (props) => {
    return (
        <div className={st.productDetailsMenu + " " + "productDetailsMenuAnchor"}>
            {props.children}
        </div>
    )
}

export default ProductDetailsMenu