import React from 'react'
import SimilarProductsCard from './SimilarProductsCard'
import st from "../../../styles/components/Pages/ProductPage/SimilarProductsSection.module.css"
const SimilarProductsSection = () => {
    return (
        <div className={st.similarRobotsContent}>
            <div className={st.similarRobotsGrid}>
                <SimilarProductsCard
                    hoverImg="/assets/img/Robots/rob-2.png"
                    defaultImg="/assets/img/Robots/rob-3.png"
                    robotType="Cobot, Dooson"
                    robotName="Doosan Robotics H2017"
                    singlePrice="44.000 €"
                    isSale={true}
                />
                <SimilarProductsCard
                    hoverImg="/assets/img/Robots/rob-2.png"
                    defaultImg="/assets/img/Robots/rob-3.png"
                    robotType="Cobot, Dooson"
                    robotName="Doosan Robotics H2017"
                    variablePrice="28.900,00€ – 32.000,00€"
                />
                <SimilarProductsCard
                    hoverImg="/assets/img/Robots/rob-2.png"
                    defaultImg="/assets/img/Robots/rob-3.png"
                    robotType="Cobot, Dooson"
                    robotName="Doosan Robotics H2017"
                    beforeSalePrice="44.000 €"
                    afterSalePrice="40.000 €"
                />
                <SimilarProductsCard
                    hoverImg="/assets/img/Robots/rob-2.png"
                    defaultImg="/assets/img/Robots/rob-3.png"
                    robotType="Cobot, Dooson"
                    robotName="Doosan Robotics H2017 can be a very long"
                    singlePrice="44.000 €"
                />
            </div>
        </div>
    )
}

export default SimilarProductsSection