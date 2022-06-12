import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/Configurator.module.css";
import Envelope from "../public/assets/icons/Envelope";
import Cross from "../public/assets/icons/Cross";
import SimilarProductsCard from "../components/Pages/ProductPage/SimilarProductsCard";
import Cart from "../public/assets/icons/Cart";
import ConfiguratorFooter from "../components/Pages/Configurator/ConfiguratorFooter";
import {
  MdOutlinePrint,
  MdBookmarkBorder,
  MdMailOutline,
} from "react-icons/md";
import { Tab, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const ConfiguratorPage5 = () => {
  SwiperCore.use([Navigation]);
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Configurator</title>
      </Head>
      <div>
        <div className="box-sm">
          <div className={st.KonfiHeading}>
            <div className={st.KonfiHeadingLeft}>
              <h4>Übersicht Deiner Konfiguration</h4>
              <p>Individualiserte Lösung, nur für dich gemacht</p>
            </div>
            <div className={st.KonfiHeadingRight}>
              <span>
                <MdOutlinePrint /> Print
              </span>
              <span>
                <MdMailOutline /> Email
              </span>
              <button className="button button-sm button-secondary-green leading-icon">
                <Cart />
                Add to cart
              </button>
            </div>
          </div>
          <div className={st.KonfiMainBox}>
            <div className={st.KonfiMainLeft}>
              <div className="ds-tabs dstabs1">
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
                          <Nav.Link eventKey="a1">
                            Mit Engineering-Unterstützung
                          </Nav.Link>
                        </Nav.Item>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Nav.Item>
                          <Nav.Link eventKey="a2">Do It Yourself</Nav.Link>
                        </Nav.Item>
                      </SwiperSlide>
                    </Swiper>

                    <Nav.Item>
                      <Nav.Link eventKey="a1">
                        Mit Engineering-Unterstützung
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="a2">Do It Yourself</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="a1">
                      <div className={st.MitBoxContent}>
                        <div className={st.MitFirstBox}>
                          <h3>Components</h3>
                          <div className={st.MitBoxProduct}>
                            <div className={st.MitBoxProLeft}>
                              <img src="/assets/img/mitproduct.png" alt="" />
                              <div className={st.MitBoxProPara}>
                                <h4>Universal Robots UR16e</h4>
                              </div>
                            </div>
                            <div className={st.MitBoxProRight}>
                              <h5>39.050,00€</h5>
                              <div className={st.MitBoxParaRight}>
                                <h6>excl. MwSt.</h6>
                                <Cross color="#BDBDBD" />
                              </div>
                            </div>
                          </div>
                          <div className={st.MitBoxProduct}>
                            <div className={st.MitBoxProLeft}>
                              <img src="/assets/img/mitproduct.png" alt="" />
                              <div className={st.MitBoxProPara}>
                                <h4>OnRobot VG10</h4>
                                <p>Universal Robots Kit</p>
                              </div>
                            </div>
                            <div className={st.MitBoxProRight}>
                              <h5>39.050,00€</h5>
                              <div className={st.MitBoxParaRight}>
                                <h6>excl. MwSt.</h6>
                                <Cross color="#BDBDBD" />
                              </div>
                            </div>
                          </div>
                          <div className={st.MitBoxProduct1}>
                            <div className={st.MitBoxProLeft}>
                              <img src="/assets/img/mitproduct.png" alt="" />
                              <div className={st.MitBoxProPara}>
                                <h4>Mech-Mind Mech-Eye Pro L</h4>
                                <p>Universal Robots Kit</p>
                              </div>
                            </div>
                            <div className={st.MitBoxProRight}>
                              <h5>39.050,00€</h5>
                              <div className={st.MitBoxParaRight}>
                                <h6>excl. MwSt.</h6>
                                <Cross color="#BDBDBD" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={st.MitFirstBox}>
                          <h3>Others</h3>
                          <div className={st.MitBoxProduct}>
                            <div className={st.MitBoxProLeft}>
                              <div className={st.MitBoxProPara1}>
                                <h4>Platform, accessories & devices</h4>
                              </div>
                            </div>
                            <div className={st.MitBoxProRight}>
                              <h5>approx 10.000,00€</h5>
                              <div className={st.MitBoxParaRight}>
                                <h6>excl. MwSt.</h6>
                                <Cross color="#BDBDBD" />
                              </div>
                            </div>
                          </div>
                          <div className={st.MitBoxProduct1}>
                            <div className={st.MitBoxProLeft}>
                              <div className={st.MitBoxProPara1}>
                                <h4>
                                  Engineering & Integration Cost (Optional)
                                </h4>
                              </div>
                            </div>
                            <div className={st.MitBoxProRight}>
                              <h5>20.000,00€</h5>
                              <div className={st.MitBoxParaRight}>
                                <h6>excl. MwSt.</h6>
                                <Cross color="#BDBDBD" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={st.MitLastBox}>
                          <h3>Total</h3>
                          <div className={st.MitLastTot}>
                            <h6>Zwischensumme</h6>
                            <p>75.685,00€</p>
                          </div>
                          <div className={st.MitLastTot}>
                            <h6>MwSt.</h6>
                            <p>0€</p>
                          </div>
                          <div className={st.MitLastTot1}>
                            <h6>Gesamtsumme</h6>
                            <h4>75.685,00€</h4>
                          </div>
                          <span>excl. MwSt.</span>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="a2">b</Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
            <div className={st.KonfiMainRight}>
              <h2>Anfrage</h2>
              <p>
                Erkundige dich unverbindlich nach den Produkten. Wir werden uns
                werktags innerhalb von 1 Stunde bei dir melden
              </p>
              <div className={st.KofiRightInput}>
                <label htmlFor="">Name</label>
                <input placeholder="Name" type="text" />
              </div>
              <div className={st.KofiRightInput}>
                <label htmlFor="">Email Adresse</label>
                <input placeholder="Email Adresse" type="text" />
              </div>
              <div className={st.KofiRightInput}>
                <label htmlFor="">Unternehmen</label>
                <input placeholder="Unternehmen" type="text" />
              </div>
              <div className={st.KofiRightInput}>
                <label htmlFor="">Nachricht</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Nachricht"
                ></textarea>
              </div>
              <span>Unverbindlich anfragen</span>
              <h6>
                Diese Seite ist durch reCAPTCHA geschützt und es gelten die
                Google <span>Datenschutzbestimmungen</span> und{" "}
                <span>Nutzungsbedingungen</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <ConfiguratorFooter
        againButton={true}
        previousButton={false}
        skipButton={false}
        nextButton={false}
      />
    </div>
  );
};

export default ConfiguratorPage5;
