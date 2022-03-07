import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/InTheBoxCard.module.css"

const InTheBoxCard = (props) => {
    return (
        <div className={st.InTheBoxCard}>
            <img src={props.img} alt="Robot Image" />
            <h1>{props.itemname}</h1>
            <p>{props.itemamount}</p>
        </div>
    )
}

export default InTheBoxCard