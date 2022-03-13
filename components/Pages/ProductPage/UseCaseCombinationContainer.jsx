import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/UseCaseCombinationContainer.module.css"

const UseCaseCombinationContainer = () => {
    return (
        <div className={st.useCaseCombinationContainer}>
            <section>
                <div className={st.useCaseCombinationCard}>
                    <img src="/assets/img/Robots/rob-2.png" alt="Robot Image" />
                    <main>
                        <h1>Cobot, Doosan</h1>
                        <h2>Doosan Robotics H2515</h2>
                        <h3>50.500 €</h3>
                    </main>
                </div>
                <span>+</span>
                <div className={st.useCaseCombinationCard}>
                    <img src="/assets/img/Robots/rob-2.png" alt="Robot Image" />
                    <main>
                        <h1>Cobot, Doosan</h1>
                        <h2>Doosan Robotics H2515</h2>
                        <h3>50.500 €</h3>
                    </main>
                </div>
                <span>+</span>
                <div className={st.useCaseCombinationCard}>
                    <img src="/assets/img/Robots/rob-2.png" alt="Robot Image" />
                    <main>
                        <h1>Cobot, Doosan</h1>
                        <h2>Doosan Robotics H2515</h2>
                        <h3>50.500 €</h3>
                    </main>
                </div>

            </section>
            <div className={st.useCaseCombinationResult}>
                <main>
                    <h1>Palletizing</h1>
                    <h2>Lorem ipsum dolor sit imos doloremque  tempora eaque assumenda.</h2>
                </main>
                <main>
                    <h3>50.500 € </h3>
                    <h4>excl. MwSt</h4>
                    <button className="button button-md button-secondary-gray width-100">Add to cart</button>
                </main>
            </div>
        </div>
    )
}

export default UseCaseCombinationContainer