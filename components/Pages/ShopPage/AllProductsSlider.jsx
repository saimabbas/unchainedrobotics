import React from 'react'
import st from '../../../styles/components/Pages/ShopPage/AllProductsSlider.module.css'
import AllProductsSliderCard from './AllProductsSliderCard'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/free-mode";
import ArrowLeft from '../../../public/assets/icons/ArrowLeft';
import ArrowRight from '../../../public/assets/icons/ArrowRight';
const AllProductsSlider = () => {
    SwiperCore.use([Navigation]);
    return (
        <div className={st.allProductsSlider}>
            <Swiper
                slidesPerView={6.75}
                freeMode={true}
                navigation={{
                    nextEl: ".ALSnextBtn",
                    prevEl: ".ALSprevBtn",
                }}
                spaceBetween={20}
                className='all-products-slider swiper'
            >
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AllProductsSliderCard
                        imgSrc="/assets/img/all-products-cobots.jpg"
                        categoryName="Cobots"
                    />
                </SwiperSlide>
            </Swiper>
            <span className={st.ALSnextBox + " " + 'ALSnextBtn'}>
                <button className="button btn-icon-sm btn-icon-gray ">
                    <ArrowRight />
                </button>
            </span>
            <span className={st.ALSprevBox + " " + 'ALSprevBtn'}>
                <button className="button btn-icon-sm btn-icon-gray ">
                    <ArrowLeft />
                </button>
            </span>
        </div>
    )
}

export default AllProductsSlider