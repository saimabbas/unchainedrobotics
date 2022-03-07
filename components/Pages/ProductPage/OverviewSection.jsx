import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/OverviewSection.module.css"
import CompareSection from './CompareSection'
import FeaturedOnTVSection from './featuredOnTVSection'
import InTheBoxSection from './InTheBoxSection'
import UseCaseCombinationSection from './UseCaseCombinationSection'

const OverviewSection = () => {
    return (
        <div className={st.overviewContent}>
            <div className={st.overviewContentMainGrid}>
                <div className={st.overviewGrid1}>
                    <div className={st.overviewGrid1Left}>
                        <div className={st.grid1boxOverlay}>
                            <h1>High payload</h1>
                            <p>The impressive payload capacity allows for the easy handling of heavy objects up to 25 kg. Stacking andof heavy objects up to 25 kg. Stacking andof heavy objects up to 25 kg. Stacking and palletizing heavy objects in logistics and automation processes becomes child's play.</p>
                        </div>
                        <img src="/assets/img/Robots/rob-1.png" alt="Robot Image" />

                    </div>
                    <div className={st.overviewGrid1Right}>
                        <h1>High safety</h1>
                        <p>Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism.</p>
                        <img src="/assets/img/Robots/rob-2.png" alt="Robot Image" />
                    </div>
                </div>
                <video controls src="https://unchainedrobotics.de/wp-content/uploads/2020/11/The-new-cobot-H-SERIES-Doosan-Robotics.mp4"></video>
                <div className={st.overviewGrid2}>
                    <div className={st.overviewGrid1Right}>
                        <h1>Low dead weight low dead</h1>
                        <p>The Cobot has a low tare weight and is therefore only half as heavy as comparable Cobots in its class. This has numerous benefits for payload, speed, and possible deployment areas.</p>
                        <img src="/assets/img/Robots/rob-3.png" alt="Robot Image" />
                    </div>
                    <div className={st.overviewGrid1Left}>
                        <div className={st.grid1boxOverlay}>
                            <h1>High flexibility</h1>
                            <p>The shorter cycle time and cost effectiveness maximize efficiency and productivity, ensuring the fastest possible payback.</p>
                        </div>
                        <img src="/assets/img/Robots/rob-4.png" alt="Robot Image" />
                    </div>
                </div>
                <video controls src="https://unchainedrobotics.de/wp-content/uploads/2020/11/Doosan-H-SERIES-High-Payload-26-Reach-Palletizing.mp4"></video>
            </div>
            <FeaturedOnTVSection />
            <CompareSection />
            <InTheBoxSection />
            <UseCaseCombinationSection />
        </div>
    )
}

export default OverviewSection