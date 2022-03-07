import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/CompareSection.module.css"
import SectionHeading from './SectionHeading'
import { Tabs, Tab } from 'react-bootstrap'
import CompareGridHeadings from './CompareGridHeadings'
import CompareGridCard from './CompareGridCard'

const CompareSection = () => {
    return (
        <div className={st.compareSection} id="compare">
            <SectionHeading
                headingtext="Compare"
            />
            <div className="ds-tabs">
                <Tabs
                    defaultActiveKey="1"
                    transition={true}
                >
                    <Tab eventKey="1" title="Same brand">
                        <div className={st.compareGrid}>
                            <CompareGridHeadings />
                            <CompareGridCard
                                img="/assets/img/Robots/rob-2.png"
                                name="Doosan Robotics H2515"
                                price="50.500 €"
                                excl="excl. MwSt"
                                infodata1="1.500 mm"
                                infodata2="5.000 g"
                                infodata3="0.1 mm"
                                infodata4="72.999 g"
                            />
                            <CompareGridCard
                                img="/assets/img/Robots/rob-2.png"
                                name="Doosan Robotics H2515"
                                price="50.500 €"
                                excl="excl. MwSt"
                                infodata1="1.500 mm"
                                infodata2="5.000 g"
                                infodata3="0.1 mm"
                                infodata4="72.999 g"
                            />
                            <CompareGridCard
                                img="/assets/img/Robots/rob-2.png"
                                name="Doosan Robotics H2515"
                                price="50.500 €"
                                excl="excl. MwSt"
                                infodata1="1.500 mm"
                                infodata2="5.000 g"
                                infodata3="0.1 mm"
                                infodata4="72.999 g"
                            />
                            <CompareGridCard
                                img="/assets/img/Robots/rob-2.png"
                                name="Doosan Robotics H2515"
                                price="50.500 €"
                                excl="excl. MwSt"
                                infodata1="1.500 mm"
                                infodata2="5.000 g"
                                infodata3="0.1 mm"
                                infodata4="72.999 g"
                            />
                        </div>
                    </Tab>
                    <Tab eventKey="2" title="Other cobots">
                        <h6 className={st.CStabDescription}>Cobots with reach upto 1.200 mm</h6>
                        <div className={st.compareGrid}>
                            <CompareGridHeadings />
                            <CompareGridCard
                                img="/assets/img/Robots/rob-2.png"
                                name="Omron TM12"
                                price="50.500 €"
                                excl="excl. MwSt"
                                infodata1="1.500 mm"
                                infodata2="5.000 g"
                                infodata3="0.1 mm"
                                infodata4="72.999 g"
                            />
                            <CompareGridCard
                                img="/assets/img/Robots/rob-2.png"
                                name="Omron TM12"
                                price="50.500 €"
                                excl="excl. MwSt"
                                infodata1="1.500 mm"
                                infodata2="5.000 g"
                                infodata3="0.1 mm"
                                infodata4="72.999 g"
                            />
                            <CompareGridCard
                                img="/assets/img/Robots/rob-2.png"
                                name="Omron TM12"
                                price="50.500 €"
                                excl="excl. MwSt"
                                infodata1="1.500 mm"
                                infodata2="5.000 g"
                                infodata3="0.1 mm"
                                infodata4="72.999 g"
                            />
                            <CompareGridCard
                                img="/assets/img/Robots/rob-2.png"
                                name="Omron TM12"
                                price="50.500 €"
                                excl="excl. MwSt"
                                infodata1="1.500 mm"
                                infodata2="5.000 g"
                                infodata3="0.1 mm"
                                infodata4="72.999 g"
                            />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default CompareSection