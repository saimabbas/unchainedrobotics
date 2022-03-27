import React from 'react'
import st from '../../../styles/components/Pages/ShopPage/AllProductsSliderCard.module.css'

const AllProductsSliderCard = (props) => {
    return (
        <div className={st.allProductsSliderCard}>
            <img src={props.imgSrc} alt="Robot Image" />
            <p>{props.categoryName}</p>
        </div>
    )
}

export default AllProductsSliderCard