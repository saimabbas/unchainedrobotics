import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/CompareSection.module.css"
import SectionHeading from './SectionHeading'
import { Tab, Nav } from 'react-bootstrap'
import CompareGridHeadings from './CompareGridHeadings'
import CompareGridCard from './CompareGridCard'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";

const CompareSection = () => {
    return (
        <div className={st.compareSection} id="compare">
            <SectionHeading
                headingtext="Compare"
            />
            <div className="ds-tabs">
                <Tab.Container defaultActiveKey="a1">
                    <Nav variant="tabs" >
                        <Nav.Item>
                            <Nav.Link eventKey="a1">Same brand</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="a2">Other cobots</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="a1">
                            <div className={st.compareGrid}>
                                <CompareGridHeadings />
                                <Swiper
                                    slidesPerView={1.35}
                                    freeMode={true}
                                >
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                </Swiper>
                                <div className={st.compareGridCardBox}>
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
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="a2">
                            <h6 className={st.CStabDescription}>Cobots with reach upto 1.200 mm</h6>
                            <div className={st.compareGrid}>
                                <CompareGridHeadings />
                                <Swiper
                                    slidesPerView={1.35}
                                    freeMode={true}
                                >
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                </Swiper>
                                <div className={st.compareGridCardBox}>
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
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div >
    )
}

export default CompareSection