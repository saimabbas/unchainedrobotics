import React, { useEffect } from "react";
import st from "../../../styles/components/Pages/ProductPage/CompareSection.module.css";
import SectionHeading from "./SectionHeading";
import { Tab, Nav } from "react-bootstrap";
import CompareGridHeadings from "./CompareGridHeadings";
import CompareGridCard from "./CompareGridCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const CompareSection = () => {
  return (
    <div className={st.compareSection} id="compare">
      <SectionHeading headingtext="Compare" />
      <div className="ds-tabs">
        <Tab.Container defaultActiveKey="a1">
          <Nav variant="tabs">
            <Swiper
              slidesPerView={"auto"}
              freeMode={true}
              spaceBetween={0}
              className="ds-tabs-nav"
            >
              <SwiperSlide>
                <Nav.Item>
                  <Nav.Link eventKey="a1">Same brand</Nav.Link>
                </Nav.Item>
              </SwiperSlide>
              <SwiperSlide>
                <Nav.Item>
                  <Nav.Link eventKey="a2">Other cobots</Nav.Link>
                </Nav.Item>
              </SwiperSlide>
            </Swiper>
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
                  slidesPerView={"auto"}
                  freeMode={true}
                  className={
                    st.compareGridHeadingsMob + " " + "compareCardSlider"
                  }
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
                </Swiper>
                {/* <div className={st.compareGridCardBox}>
                </div> */}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="a2">
              <h6 className={st.CStabDescription}>
                Cobots with reach upto 1.200 mm
              </h6>
              <div className={st.compareGrid}>
                <CompareGridHeadings />
                <Swiper
                  slidesPerView={"auto"}
                  freeMode={true}
                  className={
                    st.compareGridHeadingsMob + " " + "compareCardSlider"
                  }
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
                {/* <div className={st.compareGridCardBox}>
                </div> */}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default CompareSection;
