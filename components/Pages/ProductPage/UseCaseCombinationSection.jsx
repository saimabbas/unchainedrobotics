import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/UseCaseCombinationSection.module.css"
import SectionHeading from './SectionHeading'
import UseCaseCombinationContainer from './UseCaseCombinationContainer';
import { Tabs } from 'react-bootstrap'
import { Tab, Nav } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/free-mode";
import ArrowLeft from "../../../public/assets/icons/ArrowLeft"
import ArrowRight from "../../../public/assets/icons/ArrowRight"
const UseCaseCombinationSection = () => {
    SwiperCore.use([Navigation]);
    return (
        <div className={st.UseCaseCombinationSection} id='usecasecombination'>
            <SectionHeading
                headingtext="Use case combination"
            />
            <div className="ds-tabs">
                <Tab.Container defaultActiveKey="1">
                    <Nav variant="tabs" >
                        <Swiper
                            slidesPerView={"auto"}
                            freeMode={true}
                            spaceBetween={0}
                            className="ds-tabs-nav"
                        >
                            <SwiperSlide>
                                <Nav.Item>
                                    <Nav.Link eventKey="1">Palletizing</Nav.Link>
                                </Nav.Item>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Nav.Item>
                                    <Nav.Link eventKey="2">Machine Trending</Nav.Link>
                                </Nav.Item>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Nav.Item>
                                    <Nav.Link eventKey="3">Heavy Object Handling</Nav.Link>
                                </Nav.Item>
                            </SwiperSlide>
                        </Swiper>

                        <Nav.Item>
                            <Nav.Link eventKey="1">Palletizing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2">Machine Trending</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3">Heavy Object Handling</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="1">
                            <div className={st.uccSwiper}>
                                <Swiper
                                    className='ucc-swiper-container mySwiper'
                                    navigation={{
                                        nextEl: ".uccSwiperNext",
                                        prevEl: ".uccSwiperPrev",
                                    }}
                                    sliderPerView="1"
                                    spaceBetween={20}
                                >
                                    <SwiperSlide>
                                        <UseCaseCombinationContainer />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <UseCaseCombinationContainer />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <UseCaseCombinationContainer />
                                    </SwiperSlide>

                                </Swiper>
                                <div className={st.uccSwiperBtnBox}>
                                    <button className="uccSwiperPrev">
                                        <ArrowLeft color="#313130" />
                                    </button>
                                    <button className="uccSwiperNext">
                                        <ArrowRight color="#313130" />
                                    </button>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                            <div className={st.uccSwiper}>
                                <Swiper
                                    className='ucc-swiper-container mySwiper'
                                    navigation={{
                                        nextEl: ".uccSwiperNext",
                                        prevEl: ".uccSwiperPrev",
                                    }}
                                    sliderPerView="1"
                                    spaceBetween={20}
                                >
                                    <SwiperSlide>
                                        <UseCaseCombinationContainer />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <UseCaseCombinationContainer />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <UseCaseCombinationContainer />
                                    </SwiperSlide>

                                </Swiper>
                                <div className={st.uccSwiperBtnBox}>
                                    <button className="uccSwiperPrev">
                                        <ArrowLeft color="#313130" />
                                    </button>
                                    <button className="uccSwiperNext">
                                        <ArrowRight color="#313130" />
                                    </button>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                            <div className={st.uccSwiper}>
                                <Swiper
                                    className='ucc-swiper-container mySwiper'
                                    navigation={{
                                        nextEl: ".uccSwiperNext",
                                        prevEl: ".uccSwiperPrev",
                                    }}
                                    sliderPerView="1"
                                    spaceBetween={20}
                                >
                                    <SwiperSlide>
                                        <UseCaseCombinationContainer />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <UseCaseCombinationContainer />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <UseCaseCombinationContainer />
                                    </SwiperSlide>

                                </Swiper>
                                <div className={st.uccSwiperBtnBox}>
                                    <button className="uccSwiperPrev">
                                        <ArrowLeft color="#313130" />
                                    </button>
                                    <button className="uccSwiperNext">
                                        <ArrowRight color="#313130" />
                                    </button>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    )
}

export default UseCaseCombinationSection