import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/OverviewCard.module.css"

const OverviewCard = (props) => {
    return (
        <div className={st.overviewGrid1Right + " " + props.className}>
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
            <img src={props.img} alt="Robot Image" />
        </div>
    )
}

export default OverviewCard