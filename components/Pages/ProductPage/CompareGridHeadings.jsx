import React from 'react'
import st from '../../../styles/components/Pages/ProductPage/compareGridHeadings.module.css'
const CompareGridHeadings = () => {
    return (
        <div className={st.compareGridHeadings}>
            <p>Reach</p>
            <p>Payload</p>
            <p>Repeatability</p>
            <p>Weight</p>
        </div>
    )
}

export default CompareGridHeadings