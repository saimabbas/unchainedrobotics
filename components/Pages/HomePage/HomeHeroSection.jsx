import React from "react";
import st from "../../../styles/components/Pages/HomePage/HomeHeroSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import ArrowRight from "../../../public/assets/icons/ArrowRight";
import ChevronRight from "../../../public/assets/icons/ChevronRight";
import HomeHeroNavigation from "./HomeHeroNavigation";
const HomeHeroSection = () => {
  return (
    <div className={st.heromain}>
      <div className={st.heroleft}>
        <HomeHeroNavigation />
      </div>
      <div className={st.heroright}>
        <div className="hero-right-swiper">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <div className={st.heroslide}>
                <img
                  className={st.sliderBanner}
                  src="/assets/img/sliderbanner1.png"
                  alt="#"
                />
                <div className={st.herosldleft}>
                  <h3>The biggest marketplace sfor cobots</h3>
                  <p>
                    Discover, price, compare and purchase from over 20 brands of
                    cobots and equipments.
                  </p>
                  <button className="button button-lg button-primary-gray trailing-icon">
                    Browse now <ArrowRight color="#fff" />{" "}
                  </button>
                </div>
                <div className={st.herosldright}>
                  <img src="/assets/img/sliderimg1.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={st.heroslide}>
                <img
                  className={st.sliderBanner}
                  src="/assets/img/sliderbanner1.png"
                  alt="#"
                />
                <div className={st.herosldleft}>
                  <h3>The biggest marketplace for cobots</h3>
                  <p>
                    Discover, price, compare and purchase from over 20 brands of
                    cobots and equipments.
                  </p>
                  <button className="button button-lg button-primary-gray trailing-icon">
                    Browse now <ArrowRight color="#fff" />{" "}
                  </button>
                </div>
                <div className={st.herosldright}>
                  <img src="/assets/img/sliderimg1.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={st.heroslide}>
                <img
                  className={st.sliderBanner}
                  src="/assets/img/sliderbanner1.png"
                  alt="#"
                />
                <div className={st.herosldleft}>
                  <h3>The biggest marketplace for cobots</h3>
                  <p>
                    Discover, price, compare and purchase from over 20 brands of
                    cobots and equipments.
                  </p>
                  <button className="button button-lg button-primary-gray trailing-icon">
                    Browse now <ArrowRight color="#fff" />{" "}
                  </button>
                </div>
                <div className={st.herosldright}>
                  <img src="/assets/img/sliderimg1.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={st.heroslide}>
                <img
                  className={st.sliderBanner}
                  src="/assets/img/sliderbanner1.png"
                  alt="#"
                />
                <div className={st.herosldleft}>
                  <h3>The biggest marketplace for cobots</h3>
                  <p>
                    Discover, price, compare and purchase from over 20 brands of
                    cobots and equipments.
                  </p>
                  <button className="button button-lg button-primary-gray trailing-icon">
                    Browse now <ArrowRight color="#fff" />{" "}
                  </button>
                </div>
                <div className={st.herosldright}>
                  <img src="/assets/img/sliderimg1.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
