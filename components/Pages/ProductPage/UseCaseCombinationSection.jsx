import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/UseCaseCombinationSection.module.css"
import SectionHeading from './SectionHeading'
import { Tabs, Tab } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/css';
import UseCaseCombinationContainer from './UseCaseCombinationContainer';

const UseCaseCombinationSection = () => {
    SwiperCore.use([Navigation]);
    return (
        <div className={st.UseCaseCombinationSection} id='usecasecombination'>
            <SectionHeading
                headingtext="Use case combination"
            />
            <div className="ds-tabs">
                <Tabs
                    defaultActiveKey="1"
                    transition={true}
                >
                    <Tab eventKey="1" title="Palletizing">
                        <div className={st.uccSwiper}>
                            <Swiper
                                className='ucc-swiper-container mySwiper'
                                navigation={{
                                    nextEl: ".uccSwiperNext",
                                    prevEl: ".uccSwiperPrev",
                                }}
                                sliderPerView="1"
                            >
                                <SwiperSlide>
                                    <UseCaseCombinationContainer />
                                </SwiperSlide>

                            </Swiper>
                            <div className={st.uccSwiperBtnBox}>
                                <button className="uccSwiperPrev">
                                    <img src="/assets/icons/arrow-left.svg" alt="arrow-left" />
                                </button>
                                <button className="uccSwiperNext"><img src="/assets/icons/arrow-right.svg" alt="arrow-right" /></button>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="2" title="Machine Trending">
                        <div className={st.uccSwiper}>
                            <Swiper
                                navigation={{
                                    nextEl: ".uccSwiperNext",
                                    prevEl: ".uccSwiperPrev",
                                }}
                            >
                                <SwiperSlide>
                                    <div>
                                        <UseCaseCombinationContainer />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className={st.uccSwiperBtnBox}>
                                <button className="uccSwiperPrev">
                                    <img src="/assets/icons/arrow-left.svg" alt="arrow-left" />
                                </button>
                                <button className="uccSwiperNext"><img src="/assets/icons/arrow-right.svg" alt="arrow-right" /></button>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="3" title="Heavy Object Handling">
                        <div className={st.uccSwiper}>
                            <Swiper
                                navigation={{
                                    nextEl: ".uccSwiperNext",
                                    prevEl: ".uccSwiperPrev",
                                }}
                            >
                                <SwiperSlide>
                                    <div>
                                        <UseCaseCombinationContainer />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className={st.uccSwiperBtnBox}>
                                <button className="uccSwiperPrev">
                                    <img src="/assets/icons/arrow-left.svg" alt="arrow-left" />
                                </button>
                                <button className="uccSwiperNext"><img src="/assets/icons/arrow-right.svg" alt="arrow-right" /></button>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default UseCaseCombinationSection