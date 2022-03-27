import React from 'react'
import st from "../../../styles/components/Pages/ShopPage/TakeOutQuizBanner.module.css"
const TakeOutQuizBanner = () => {
    return (
        <div className={st.takeOutQuizBanner}>
            <main>
                <p>Find your automation solution now with our configurator</p>
                <button className="button button-lg button-secondary-green">Take our quiz</button>
            </main>
        </div>
    )
}

export default TakeOutQuizBanner