import React from 'react'
import st from "../../../styles/pages/ProductPage.module.css"

const SimilarCobotCard = (props) => {
    return (
        <div className={st.similarRobotsCard}>
            <img src={props.img} alt="Robot Image" />
            <button className="button button-lg button-primary-gray w-100">Compare</button>
            <i>{props.robotType}</i>
            <h1>{props.robotName}</h1>
            <h2>{props.robotPrice}</h2>
        </div>
    )
}

export default SimilarCobotCard