import React from 'react'
import DownloadCard from './DownloadCard'
import st from "../../../styles/components/Pages/ProductPage/DownloadSection.module.css"

const DownloadSection = () => {
    return (
        <div className={st.downloadsContent}>
            <div className={st.downloadsGrid}>
                <DownloadCard
                    img="/assets/img/downloads-1.png"
                    heading="Doosan H2515 Datasheet"
                    subHeading="Download the Doosan Robots datasheet here"
                />
                <DownloadCard
                    img="/assets/img/downloads-2.png"
                    heading="Doosan H2515 Datasheet"
                    subHeading="Download the Doosan Robots datasheet here"
                />
            </div>
            <div className={st.didntFindBox}>
                <h1>Did not find what you’re looking for? </h1>
                <button className="button button-lg button-primary-gray">Contact us</button>
            </div>
        </div>
    )
}

export default DownloadSection