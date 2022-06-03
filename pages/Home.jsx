import React, { useRef, useState } from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/Home.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import SimilarProductsCard from "../components/Pages/ProductPage/SimilarProductsCard";
import ColoredCart from "../public/assets/icons/ColoredCart";
import ColoredConsultation from "../public/assets/icons/ColoredConsultation";
import ColoredShipping from "../public/assets/icons/ColoredShipping";
import ArrowRight from "../public/assets/icons/ArrowRight";
import ChevronRight from "../public/assets/icons/ChevronRight";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Form } from "react-bootstrap";
import HomeHeroSection from "../components/Pages/HomePage/HomeHeroSection";
import TopBrandsSection from "../components/Pages/HomePage/TopBrandsSection";
import HomeBanner1 from "../components/Pages/HomePage/HomeBanner1";
import HomeBanner2 from "../components/Pages/HomePage/HomeBanner2";
import Testimonials from "../components/Pages/HomePage/Testimonials";
import HowItWorks from "../components/Pages/HomePage/HowItWorks";
import { Tab, Nav } from "react-bootstrap";

const Home = () => {
  const doIt = useRef();
  const ourSupport = useRef();
  const [showWorkGrid, setShowWorkGrid] = useState(true);
  const selectShortlistedApplicant = (e) => {
    const checked = e.target.checked;
    setShowWorkGrid(false);
    if (checked) {
      doIt.current.style.opacity = 0.25;
      ourSupport.current.style.opacity = 1;
      setShowWorkGrid(false);
    } else {
      doIt.current.style.opacity = 1;
      ourSupport.current.style.opacity = 0.25;
      setShowWorkGrid(true);
    }
  };
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={st.HomePage}>
        <div className={st.herobgcolor}>
          <div className="box-sm">
            <HomeHeroSection />
          </div>
        </div>
        <div className="box-sm">
          <div className={st.homeshop}>
            <div className={st.homecontent}>
              <h2>Why shop at Unchained Robotics</h2>
            </div>
            <div className={st.homemainicon}>
              <div className={st.homeicon}>
                <ColoredCart />
              </div>
              <h3>Large collection of robot brands</h3>
            </div>
            <div className={st.homemainicon}>
              <div className={st.homeicon}>
                <ColoredConsultation />
              </div>
              <h3>Large collection of robot brands</h3>
            </div>
            <div className={st.homemainicon}>
              <div className={st.homeicon}>
                <ColoredShipping />
              </div>
              <h3>Large collection of robot brands</h3>
            </div>
          </div>
          <div className={st.trendingproducts}>
            <h4>Trending Products</h4>
          </div>
          <div className={st.productsGrid}>
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
              isSale={true}
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              variablePrice="28.900,00€ – 32.000,00€"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              beforeSalePrice="44.000 €"
              afterSalePrice="40.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017 can be a very long"
              singlePrice="44.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
            />
          </div>
          <div className={st.trendingproductsbtn}>
            <button className="button button-lg button-primary-gray trailing-icon">
              View all products <ArrowRight color="#fff" />{" "}
            </button>
          </div>
          <div className={st.trendingproducts}>
            <h4>Top brands this months</h4>
          </div>
          <TopBrandsSection />
          <div className={st.trendingproductsbtn}>
            <button className="button button-lg button-secondary-gray">
              View all brands <ArrowRight color="#fff" />
            </button>
          </div>
          <HomeBanner1 />
          <HomeBanner2 />
          <Testimonials />
          <HowItWorks />
        </div>
      </div>

      <Footer />
      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent}>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/CobotsImg.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Cobots</h6>
                <p>Cobot mit ≤ 3 kg Nutzlast</p>
                <p>Cobot mit 3-10 kg Nutzlast</p>
                <p>Cobot mit 10-25 kg Nutzlast</p>
                <p>Cobot mit 25 kg Nutzlast</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/RoboterImg.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Industrial Roboter</h6>
              </div>
            </div>
          </div>
          <div className={st.MMBottomLastContent}>
            <h5>BELIEBTE MARKEN</h5>
            <div className={st.MMBottomLastImg}>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/DropDownImg.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/DropDown2.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/DropDown3.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/DropDown4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent1}>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Greifer.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Greifer</h6>
                <p>Vakuum-Greifer</p>
                <p>Finger-Greifer</p>
                <p>Magnetischer Greifer</p>
                <p>Soft-Gripper</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Effektor.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Effektor</h6>
                <p>Dosiertechnik</p>
                <p>Schleifer</p>
                <p>Schraubendreher</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Assessories.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Accessories</h6>
                <p>Quick Changer</p>
                <p>Force Torque Sensor</p>
              </div>
            </div>
          </div>
          <div className={st.MMBottomLastContent}>
            <h5>BELIEBTE MARKEN</h5>
            <div className={st.MMBottomLastImg}>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/onR.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/SCH.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/SCH2.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/AIM.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent}>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Kamera.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Kamera</h6>
                <p>Identifizierungssystem</p>
                <p>Qualitätskontrolle</p>
                <p>Bestücken & Platzieren</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/isp.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Inspektionslösungen</h6>
              </div>
            </div>
          </div>
          <div className={st.MMBottomLastContent}>
            <h5>BELIEBTE MARKEN</h5>
            <div className={st.MMBottomLastImg}>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/DropDown4.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/fram.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/inspecto.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/DropDown3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent}>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Turnkey.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Turnkey & Pakete</h6>
                <p>Palletierer</p>
                <p>Depalettierer</p>
                <p>Case Erector</p>
                <p>Starter Kits</p>
              </div>
            </div>
          </div>
          <div className={st.MMBottomLastContent}>
            <h5>BELIEBTE MARKEN</h5>
            <div className={st.MMBottomLastImg}>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/IBK.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/SKDK.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/OVISO.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/AGS.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent}>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/CE.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Dienstleistungen</h6>
                <p>Simulation</p>
                <p>CAD Design</p>
                <p>CE Zertifizierung</p>
                <p>Robot Programming</p>
                <p>Robot Installation</p>
              </div>
            </div>
          </div>
          <div className={st.MMBottomLastContent}>
            <h5>BELIEBTE MARKEN</h5>
            <div className={st.MMBottomLastImg}>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/onR.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/robodk.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/Tesseract.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent1}>
          <div className={st.MMBottomDropdownTabs + " " + "MMBottomDDTab"}>
            <Tab.Container defaultActiveKey="a1">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="a1">Komponenten</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a2">Lösungen</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="a1">
                  <div className={st.MMBottomDropdownContent2}>
                    <div className={st.MMBottomTopContent2}>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/Greifer.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Roboter</h6>
                          <p>Cobots</p>
                          <p>Industrial Roboter</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/endofarm.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>End of Arm</h6>
                          <p>Greifer</p>
                          <p>Effektor</p>
                          <p>Accessories</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/vision.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Vision</h6>
                          <p>Kamera</p>
                          <p>Inspektions- lösungen</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/software.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Software</h6>
                          <p>Maintenance</p>
                          <p>Monitoring</p>
                          <p>Simulation</p>
                          <p>SDK</p>
                          <p>PLC</p>
                          <p>App</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/material.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Materialbereit- stellung</h6>
                          <p>Materialzuführung</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/sich.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Sicherheits- technik</h6>
                          <p>Schalter</p>
                          <p>Lichtgitter</p>
                          <p>Messgerät</p>
                          <p>Radarsensor</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/trag.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Tragestruktur</h6>
                          <p>Sockel</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/trag.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Steuerungs- technik</h6>
                          <p>Industrie PC</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/TeachingKit.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Teaching Kit</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a2">
                  <div className={st.MMBottomDropdownContent2}>
                    <div className={st.MMBottomTopContent}>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/Turnkey.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Turnkey Pakete</h6>
                          <p>Palletierer</p>
                          <p>Depalettierer</p>
                          <p>Case Erector</p>
                          <p>Starter Kits</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/CE.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Dienstleistungen</h6>
                          <p>Simulation</p>
                          <p>CAD Design</p>
                          <p>CE Zertifizierung</p>
                          <p>Robot Programming</p>
                          <p>Robot Installation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent3}>
            <div className={st.MMBGridContent}>
              <div className={st.MMBGridRight}>
                <h6>ABB</h6>
                <p>Universal Robots</p>
                <p>Omron</p>
                <p>Doosan Robotics</p>
                <p>Schunk</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <div className={st.MMBGridRight}>
                <h6>Alexander Bürkle</h6>
                <p>PIAB</p>
                <p>Tesseract Solutions</p>
                <p>Mitsubishi Electric</p>
                <p>GRIP GmbH</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <div className={st.MMBGridRight}>
                <h6>FORMHAND Automation</h6>
                <p>CONWEX</p>
                <p>FANUC</p>
                <p>Hans Weber</p>
                <p>Made4CNC</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <div className={st.MMBGridRight}>
                <h6>Hanwha Robotics</h6>
                <p>Mitsubishi Electric</p>
                <p>Lorenscheit</p>
                <p>ifm electronic</p>
                <p>Janz Tec</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent1}>
          <div className={st.MMBottomDropdownTabs2 + " " + "MMBottomDDTab2b"}>
            <Tab.Container defaultActiveKey="a1">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="a1">Produkte</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a2">Hersteller</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a3">Industrien</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a4">Ressourcen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a5">Unternehmen</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="a1">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.ProdukteLeftContent}>
                        <h4>Komponenten</h4>
                        <div className={st.MMBottomTopContent2}>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Roboter</h6>
                              <p>Cobots</p>
                              <p>Industrial Roboter</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>End of Arm</h6>
                              <p>Greifer</p>
                              <p>Effektor</p>
                              <p>Accessories</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Vision</h6>
                              <p>Kamera</p>
                              <p>Inspektions- lösungen</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Software</h6>
                              <p>Maintenance</p>
                              <p>Monitoring</p>
                              <p>Simulation</p>
                              <p>SDK</p>
                              <p>PLC</p>
                              <p>App</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Materialbereit- stellung</h6>
                              <p>Materialzuführung</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Sicherheits- technik</h6>
                              <p>Schalter</p>
                              <p>Lichtgitter</p>
                              <p>Messgerät</p>
                              <p>Radarsensor</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Tragestruktur</h6>
                              <p>Sockel</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Steuerungs- technik</h6>
                              <p>Industrie PC</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Teaching Kit</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={st.ProdukteRightContent}>
                        <h4>Lösungen</h4>
                        <div className={st.MMBottomTopContent}>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Turnkey Pakete</h6>
                              <p>Palletierer</p>
                              <p>Depalettierer</p>
                              <p>Case Erector</p>
                              <p>Starter Kits</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Dienstleistungen</h6>
                              <p>Simulation</p>
                              <p>CAD Design</p>
                              <p>CE Zertifizierung</p>
                              <p>Robot Programming</p>
                              <p>Robot Installation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={st.ProdukteAllButton}>
                      <h6>Alle Produkte</h6>
                      <ArrowRight color="#1BC074" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a2">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.MMBottomTopContent4}>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <h6>ABB</h6>
                            <p>Universal Robots</p>
                            <p>Omron</p>
                            <p>Doosan Robotics</p>
                            <p>Schunk</p>
                          </div>
                        </div>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <h6>Alexander Bürkle</h6>
                            <p>PIAB</p>
                            <p>Tesseract Solutions</p>
                            <p>Mitsubishi Electric</p>
                            <p>GRIP GmbH</p>
                          </div>
                        </div>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <h6>FORMHAND Automation</h6>
                            <p>CONWEX</p>
                            <p>FANUC</p>
                            <p>Hans Weber</p>
                            <p>Made4CNC</p>
                          </div>
                        </div>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <h6>Hanwha Robotics</h6>
                            <p>Mitsubishi Electric</p>
                            <p>Lorenscheit</p>
                            <p>ifm electronic</p>
                            <p>Janz Tec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={st.ProdukteAllButton}>
                      <h6>Alle Hersteller</h6>
                      <ArrowRight color="#1BC074" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a3">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.MMBottomTopContent4}>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <p>Automobil</p>
                            <p>Pharma</p>
                            <p>Elektrotechnik</p>
                            <p>Maschinenbau</p>
                            <p>Lebensmittel</p>
                            <p>Chemie</p>
                            <p>Druck</p>
                            <p>Metall</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={st.ProdukteAllButton}>
                      <h6>Alle Industrien</h6>
                      <ArrowRight color="#1BC074" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a4">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.MMBottomTopContent4}>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <p>UnchainedTV</p>
                            <p>Konfigurator</p>
                            <p>Whitepaper</p>
                            <p>Case Studies</p>
                            <p>Roboter ROI-Berechnung</p>
                            <p>Robotics News</p>
                            <p>FAQ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a5">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.MMBottomTopContent4}>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Kontakt</p>
                            <p>Presse</p>
                            <p>Karriere</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;