import React, { useState } from 'react'
import st from "../../../../styles/components/Pages/ProductPage/ProductDetailsSection/ProductThumbsGallery.module.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Thumbs } from "swiper";

import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";

const ProductThumbsGallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={st.productThumbsGallery}>
            <div className={st.productBoxTop + " " + "product-box-top-swiper-box"}>
                <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <div className={st.tgTopBoxImg}>
                            {/* <Magnifier
                                imageSrc="/assets/img/Robots/rob-2.png"
                                imageAlt="Example"
                                largeImageSrc="/assets/img/Robots/rob-2-large.png" // Optional
                                mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                            /> */}
                            <GlassMagnifier
                                imageSrc="/assets/img/Robots/rob-2.png"
                                imageAlt="Example"
                                largeImageSrc="/assets/img/Robots/rob-2-large.png" // Optional
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={st.tgTopBoxImg}><img src="/assets/img/Robots/rob-2.png" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={st.tgTopBoxImg}><img src="/assets/img/Robots/rob-2.png" /></div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className={st.productBoxBottom + " " + "product-box-bottom-swiper-box"}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={st.tgBottomBoxImg}><img src="/assets/img/Robots/rob-2.png" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={st.tgBottomBoxImg}><img src="/assets/img/Robots/rob-2.png" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={st.tgBottomBoxImg}><img src="/assets/img/Robots/rob-2.png" /></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ProductThumbsGallery