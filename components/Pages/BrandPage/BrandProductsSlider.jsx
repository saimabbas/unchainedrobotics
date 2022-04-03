import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import st from "../../../styles/components/Pages/BrandPage/BrandProductsSlider.module.css";
const BrandProductsSlider = () => {
  return (
    <div className="shop-page-tabs-slider">
      <Nav variant="tabs" defaultActiveKey={"a1"}>
        <div className={st.shopPageTabsSliderBox}>
          <Swiper slidesPerView={"auto"} freeMode={true} spaceBetween={20}>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a1">
                  <div className="ds-chip">Cobots</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a2">
                  <div className="ds-chip">Grippers</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a3">
                  <div className="ds-chip">End of arm accessories</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a4">
                  <div className="ds-chip">Starter Kits</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a5">
                  <div className="ds-chip">Cameras</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a6">
                  <div className="ds-chip">Cobots</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a7">
                  <div className="ds-chip">Grippers</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a8">
                  <div className="ds-chip">End of arm accessories</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a9">
                  <div className="ds-chip">Starter Kits</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
            <SwiperSlide>
              <Nav.Item>
                <Nav.Link eventKey="a10">
                  <div className="ds-chip">Cameras</div>
                </Nav.Link>
              </Nav.Item>
            </SwiperSlide>
          </Swiper>
        </div>
      </Nav>
    </div>
  );
};

export default BrandProductsSlider;
