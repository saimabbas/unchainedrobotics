import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/OverviewSection.module.css"
import CompareSection from './CompareSection'
import FeaturedOnTVSection from './featuredOnTVSection'
import InTheBoxSection from './InTheBoxSection'
import OverviewCard from './OverviewCard'
import UseCaseCombinationSection from './UseCaseCombinationSection'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";

const OverviewSection = () => {
    SwiperCore.use([FreeMode]);
    return (
        <div className={st.overviewContent}>
            <div className={st.overviewContentMainGrid} id="overview">
                <Swiper
                    slidesPerView={1.25}
                    freeMode={true}
                    spaceBetween={15}
                    className={st.overviewSwiperMob}
                >
                    <SwiperSlide>
                        <OverviewCard
                            heading="High safety 1"
                            subheading="Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism."
                            img="/assets/img/Robots/rob-1.png"
                            className='overview-card-bg'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <OverviewCard
                            heading="High safety 1"
                            subheading="Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism."
                            img="/assets/img/Robots/rob-2.png"
                        />
                    </SwiperSlide>
                </Swiper>
                <div className={st.overviewGrid1}>
                    <OverviewCard
                        heading="High safety 1"
                        subheading="Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism."
                        img="/assets/img/Robots/rob-1.png"
                        className='overview-card-bg'
                    />
                    <OverviewCard
                        heading="High safety 1"
                        subheading="Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism."
                        img="/assets/img/Robots/rob-2.png"
                    />
                </div>
                <video controls src="https://unchainedrobotics.de/wp-content/uploads/2020/11/The-new-cobot-H-SERIES-Doosan-Robotics.mp4"></video>
                <div className={st.overviewGrid2}>
                    <OverviewCard
                        heading="High safety 2"
                        subheading="Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism."
                        img="/assets/img/Robots/rob-2.png"
                    />
                    <OverviewCard
                        heading="High safety 1"
                        subheading="Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism."
                        img="/assets/img/Robots/rob-1.png"
                        className='overview-card-bg'
                    />
                </div>
                <video controls src="https://unchainedrobotics.de/wp-content/uploads/2020/11/Doosan-H-SERIES-High-Payload-26-Reach-Palletizing.mp4"></video>
            </div>
            <FeaturedOnTVSection />
            <CompareSection />
            <InTheBoxSection />
            <UseCaseCombinationSection />
        </div>
    )
}

export default OverviewSection