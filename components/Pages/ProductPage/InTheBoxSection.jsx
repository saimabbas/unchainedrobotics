import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/InTheBoxSection.module.css"
import InTheBoxCard from './InTheBoxCard'
import SectionHeading from './SectionHeading'

const InTheBoxSection = () => {
    return (
        <div className={st.InTheBoxSection} id="inthebox">
            <SectionHeading
                headingtext='In the box'
            />
            <div className={st.InTheBoxGrid}>
                <InTheBoxCard
                    img="/assets/img/Robots/rob-2.png"
                    itemname="Robot Arm"
                    itemamount="1x"
                />
                <InTheBoxCard
                    img="/assets/img/Robots/rob-2.png"
                    itemname="Robot Arm"
                    itemamount="1x"
                />
                <InTheBoxCard
                    img="/assets/img/Robots/rob-2.png"
                    itemname="Robot Arm"
                    itemamount="1x"
                />
                <InTheBoxCard
                    img="/assets/img/Robots/rob-2.png"
                    itemname="Robot Arm"
                    itemamount="1x"
                />
                <InTheBoxCard
                    img="/assets/img/Robots/rob-2.png"
                    itemname="Robot Arm"
                    itemamount="1x"
                />
            </div>
        </div>
    )
}

export default InTheBoxSection