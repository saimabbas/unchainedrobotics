import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/SectionHeading.module.css"
const SectionHeading = (props) => {
    return (
        <h1 className={st.sectionheading}>{props.headingtext}</h1>
    )
}

export default SectionHeading