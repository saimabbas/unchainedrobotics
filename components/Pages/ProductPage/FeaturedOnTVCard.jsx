import React from 'react'
import st from "../../../styles/pages/ProductPage.module.css"

const FeaturedOnTVCard = (props) => {
    return (
        <div className={st.featuredGridCard}>
            <img
                src={props.img}
                alt="Robot Image"
            />
            <span>{props.tag}</span>
            <p>
                {props.description}
            </p>
            <i>{props.time}</i>
        </div>
    )
}

export default FeaturedOnTVCard