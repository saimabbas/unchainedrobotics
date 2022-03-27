import React, { useState } from 'react'
import AddToCompare from '../../../public/assets/icons/AddToCompare'
import AddToWishlist from '../../../public/assets/icons/AddToWishlist'
import RemoveFromWishlist from '../../../public/assets/icons/RemoveFromWishlist'
import RemoveFromCompare from '../../../public/assets/icons/RemoveFromCompare'
import st from "../../../styles/components/Pages/ProductPage/SimilarProductsCard.module.css"

const SimilarProductsCard = (props) => {
    const [compare, setCompare] = useState(true)
    const [wishlist, setWishlist] = useState(true)
    return (
        <div className={st.similarRobotsCard}>
            <div className={st.compareBox}>
                {compare ?
                    <main onClick={() => {
                        setCompare(false)
                    }}>
                        <span>Compare</span>  <AddToCompare fill='#313130' />
                    </main>
                    :
                    <main onClick={() => {
                        setCompare(true)
                    }}>
                        <span>Remove from Compare</span>  <RemoveFromCompare fill='#313130' />
                    </main>
                }


            </div>
            <div className={st.wishlistBox}>
                {wishlist ?
                    <main onClick={() => {
                        setWishlist(false)
                    }}>
                        <span>Add to Wishlist</span>  <AddToWishlist fill='#313130' />
                    </main>
                    :
                    <main onClick={() => {
                        setWishlist(true)
                    }}>
                        <span>Remove from Wishlist</span>  <RemoveFromWishlist fill='#313130' />
                    </main>
                }
            </div>
            {props.isSale ? <div className={st.sale}>SALE</div> : null}
            <div className={st.imgBox}>
                <img className={st.defaultImg} src={props.defaultImg} alt="Robot Image" />
                <img className={st.hoverImg} src={props.hoverImg} alt="Robot Image" />

            </div>
            <i>{props.robotType}</i>
            <h1>{props.robotName}</h1>
            {props.singlePrice !== "" ? <h2 className={st.price}> {props.singlePrice}</h2> : null}
            {props.variablePrice !== "" ? <h2 className={st.price}> {props.variablePrice}</h2> : null}
            {props.beforeSalePrice !== "" ? <h2 className={st.price}> <del>{props.beforeSalePrice}</del> {props.afterSalePrice} </h2> : null}

        </div >
    )
}

export default SimilarProductsCard