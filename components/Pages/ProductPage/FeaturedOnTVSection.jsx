import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/FeaturedOnTVSection.module.css"
import FeaturedOnTVCard from './FeaturedOnTVCard'
import SectionHeading from './SectionHeading'

const FeaturedOnTVSection = () => {
    return (
        <div className={st.featuredonTVSection}>
            <SectionHeading
                headingtext="   Featured on Unchained TV"
            />
            <div className={st.featuredGrid}>
                <FeaturedOnTVCard
                    img="/assets/img/Robots/rob-1.png"
                    tag="Machine Trending"
                    description="Cobot from Doosan Robotics automates the
                assembly of vehicle transmissions"
                    time="4:35"
                />
                <FeaturedOnTVCard
                    img="/assets/img/Robots/rob-1.png"
                    tag="Assembly"
                    description="Cobot from Doosan Robotics automates the
                assembly of ve ions"
                    time="4:35"
                />
                <FeaturedOnTVCard
                    img="/assets/img/Robots/rob-1.png"
                    tag="Machine Trending"
                    description="Cobot f  Robotics automates the
                assembly of vehicle transmissions"
                    time="4:35"
                />
            </div>
        </div>
    )
}

export default FeaturedOnTVSection