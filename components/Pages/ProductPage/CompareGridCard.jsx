import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/CompareGridCard.module.css"
const CompareGridCard = (props) => {
    return (
        <div className={st.compareGridCard}>
            <main>
                <img src={props.img} alt="Robot Image" />
                <h1>{props.name}</h1>
                <h2>{props.price}   </h2>
                <h3>{props.excl}</h3>
            </main>
            <p>{props.infodata1}</p>
            <p>{props.infodata2}</p>
            <p>{props.infodata3}</p>
            <p>{props.infodata4}</p>
        </div>
    )
}

export default CompareGridCard