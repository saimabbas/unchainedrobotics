import React from 'react'
import st from "../../../styles/pages/ProductPage.module.css"

const DownloadCard = (props) => {
    return (
        <div className={st.downloadsGridCard}>
            <img src={props.img} alt="Robot Image" />
            <main>
                <h1>{props.heading}</h1>
                <p>{props.subHeading}</p>
            </main>
        </div>
    )
}

export default DownloadCard