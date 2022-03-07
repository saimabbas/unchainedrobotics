import React from 'react'
import SimilarProductsCard from './SimilarProductsCard'
import st from "../../../styles/components/Pages/ProductPage/SimilarProductsSection.module.css"
const SimilarProductsSection = () => {
    return (
        <div className={st.similarRobotsContent}>
            <div className={st.similarRobotsGrid}>
                <SimilarProductsCard
                    img="/assets/img/Robots/rob-2.png"
                    robotType="Cobot, Dooson"
                    robotName="Doosan Robotics H2017"
                    robotPrice="44.000 €"
                />
                <SimilarProductsCard
                    img="/assets/img/Robots/rob-2.png"
                    robotType="Cobot, Dooson"
                    robotName="Doosan   H2017"
                    robotPrice="250-.000 €"
                />
                <SimilarProductsCard
                    img="/assets/img/Robots/rob-2.png"
                    robotType="Cobot, Dooson"
                    robotName="Doosan Robotics  "
                    robotPrice="12.000 €"
                />
                <SimilarProductsCard
                    img="/assets/img/Robots/rob-2.png"
                    robotType="Cobot, Dooson"
                    robotName="  Robotics H2017"
                    robotPrice="4.000 €"
                />
            </div>
        </div>
    )
}

export default SimilarProductsSection