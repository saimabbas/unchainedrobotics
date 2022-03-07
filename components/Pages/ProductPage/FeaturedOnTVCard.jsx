import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/FeaturedOnTVCard.module.css"
const FeaturedOnTVCard = (props) => {
    return (
        <div className={st.featuredGridCard}>
            <img
                src={props.img}
                alt="Robot Image"
            />
            <main>
                <span>{props.tag}</span>
                <p>
                    {props.description}
                </p>
                <i>{props.time}</i>
            </main>
        </div>
    )
}

export default FeaturedOnTVCard