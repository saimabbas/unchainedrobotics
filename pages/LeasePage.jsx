import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/LeasePage.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import { Tab, Nav } from "react-bootstrap";
import ArrowRight from "../public/assets/icons/ArrowRight";
import Envelope from "../public/assets/icons/Envelope";
import CheckIcon from "../public/assets/icons/CheckIcon";
import CloseIcon from "../public/assets/icons/CloseIcon";
import ChatContainer from "../components/Pages/AboutPage/ChatContainer";
import FAQCard from "../components/Pages/ProductPage/FAQCard";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
const LeasePage = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Lease Page</title>
      </Head>
      <div className={st.AllBrands}>
        <div className="box-sm">
          <div className={st.leaseHeroSection}>
            <div className={st.leaseHeroSectionLeft}>
              <img src="./assets/img/LeaseBuy_Hero_Customer.png" alt="" />
            </div>
            <div className={st.leaseHeroSectionRight}>
              <h6>Owning robots is now easier & more affordable than ever</h6>
              <h2>Leasing and installment program at Unchained Robotics</h2>
              <p>
                Want to automate but are leery about the cost? Then the
                Unchained Leasing or installment program might be for you!
                Scroll down below to find out more.
                <br />
                <br />
                Have a question for us?
              </p>
              <button className="button button-md button-primary-gray leading-icon">
                <Envelope color="#fff" /> Get in touch
              </button>
            </div>
          </div>
          <div className={st.anchorsBox + " " + "lease-page-anchors-slider"}>
            <Swiper slidesPerView={"auto"} freeMode={true} spaceBetween={20}>
              <SwiperSlide>
                <a href="#">BENEFITS</a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">PROCESS</a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">COMPARISON</a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">TESTIMONIALS</a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">OUR PARTNER</a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">OUR FAQ</a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={st.benefitsSections}>
          <div className="box-sm">
            <div className={st.leaseheadingBox}>
              <h3>Benefits of</h3>
              <h4>Our Programs</h4>
            </div>
            <Tab.Container defaultActiveKey="a1">
              <div
                className={
                  st.leasebenefitsTabsBox + " " + "leasebenefitsTabsBoxEdits"
                }
              >
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="a1">Leasing</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="a2">Installment Plan</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="a1">
                  <div className={st.benefitsGrid}>
                    <div className={st.benefitsGridCard}>
                      <h3>No capital investment or collateral needed</h3>
                      <p>
                        Start automating and lease any robots you want without
                        having to spend a substantial amount of money that hurts
                        your cash flow.
                      </p>
                    </div>
                    <div className={st.benefitsGridCard}>
                      <h3>Convenient & time saving</h3>
                      <p>
                        You can avoid the restrictions & long wait approval time
                        that are involved in long-term loan from other financial
                        institutions like banks.
                      </p>
                    </div>
                    <div className={st.benefitsGridCard}>
                      <h3>Lower your debt-to-equity ratio</h3>
                      <p>
                        In your company balance sheet, unlike loans, lease
                        obligations are not reported as a liability. As a
                        result, leasing helps your company in reporting a lower
                        debt-to-equity ratio.
                      </p>
                    </div>
                    <div className={st.benefitsGridCard}>
                      <h3>Stay agile</h3>
                      <p>
                        The leasing plan can be adapted to fit your company’s
                        needs. The term can go from 1 up to 84 months. <br />{" "}
                        Also when your robotics equipment becomes outdated due
                        to changing requirements or availability of more
                        sophisticated solution, easily lease a new one with us.
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a2">
                  <div className={st.benefitsGrid}>
                    <div className={st.benefitsGridCard}>
                      <h3>Convenient & time saving</h3>
                      <p>
                        You can avoid the restrictions & long wait approval time
                        that are involved in long-term loan from other financial
                        institutions like banks.
                      </p>
                    </div>
                    <div className={st.benefitsGridCard}>
                      <h3>Stay agile</h3>
                      <p>
                        The leasing plan can be adapted to fit your company’s
                        needs. The term can go from 1 up to 84 months. <br />{" "}
                        Also when your robotics equipment becomes outdated due
                        to changing requirements or availability of more
                        sophisticated solution, easily lease a new one with us.
                      </p>
                    </div>
                    <div className={st.benefitsGridCard}>
                      <h3>No capital investment or collateral needed</h3>
                      <p>
                        Start automating and lease any robots you want without
                        having to spend a substantial amount of money that hurts
                        your cash flow.
                      </p>
                    </div>
                    <div className={st.benefitsGridCard}>
                      <h3>Lower your debt-to-equity ratio</h3>
                      <p>
                        In your company balance sheet, unlike loans, lease
                        obligations are not reported as a liability. As a
                        result, leasing helps your company in reporting a lower
                        debt-to-equity ratio.
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
        <div className={st.comparisonSection}>
          <div className="box-sm">
            <div className={st.leaseheadingBox}>
              <h3>Comparison with</h3>
              <h5>Conventional Bank Loan</h5>
            </div>
            <div className={st.comparisonGrid}>
              <div className={st.comparisonGridHeadBox}>
                <p>Financing requests independent of your house bank</p>
                <p>
                  Direct financing check with several financial institutions
                </p>
                <p>Multiple financing offers to choose from</p>
                <p>Quick financing commitment for the planned investment</p>
                <p>Individual term</p>
              </div>
              <div
                className={
                  st.comparisonGridDetailsBox +
                  " " +
                  st.comparisonGridDetailsBox2
                }
              >
                <div className={st.comparisonBrandsBox}>
                  <img src="./assets/img/UR-logo.png" alt="logo" />
                  <img src="./assets/img/sc-logo.png" alt="logo" />
                </div>
                <h3>Unchained Robotics & DV Financing Plus</h3>
                <span>
                  <CheckIcon color="#1FDB84" />
                </span>
                <span>
                  <CheckIcon color="#1FDB84" />
                </span>
                <span>
                  <CheckIcon color="#1FDB84" />
                </span>
                <span>
                  <CheckIcon color="#1FDB84" />
                </span>
                <span>
                  <CheckIcon color="#1FDB84" />
                </span>
              </div>
              <div className={st.comparisonGridDetailsBox}>
                <h4>
                  Conventional <br /> bank loan
                </h4>
                <span>
                  <CloseIcon color="#FC5A5A" />
                </span>
                <span>
                  <CloseIcon color="#FC5A5A" />
                </span>
                <span>
                  <CloseIcon color="#FC5A5A" />
                </span>
                <span>
                  <CloseIcon color="#FC5A5A" />
                </span>
                <span>
                  <CloseIcon color="#FC5A5A" />
                </span>
              </div>
            </div>
            <div
              className={st.comparisonGridMob + " " + "comparisonGridMobStyles"}
            >
              <Tab.Container defaultActiveKey="b1">
                <div
                  className={
                    st.leaseMobComparisonnavLinksBox +
                    " " +
                    "lease-comparison-tabs"
                  }
                >
                  <Nav variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="b1">
                        Unchained Robotics & DV Financing Plus
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="b2">Conventional Bank Loan</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="b1">
                      <div className={st.leaseMobComparisonGrid}>
                        <div className={st.leaseMobComparisonGridCard}>
                          <p>
                            Financing requests independent of your house bank
                          </p>
                          <CheckIcon color="#1FDB84" />
                        </div>
                        <div className={st.leaseMobComparisonGridCard}>
                          <p>
                            Financing requests independent of your house bank
                          </p>
                          <CheckIcon color="#1FDB84" />
                        </div>
                        <div className={st.leaseMobComparisonGridCard}>
                          <p>
                            Financing requests independent of your house bank
                          </p>
                          <CheckIcon color="#1FDB84" />
                        </div>
                        <div className={st.leaseMobComparisonGridCard}>
                          <p>
                            Financing requests independent of your house bank
                          </p>
                          <CheckIcon color="#1FDB84" />
                        </div>
                        <div className={st.leaseMobComparisonGridCard}>
                          <p>
                            Financing requests independent of your house bank
                          </p>
                          <CheckIcon color="#1FDB84" />
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
        <div className="box-sm">
          <div className={st.leaseChatBox}>
            <ChatContainer />
          </div>
          <div className={st.leaseheadingBox}>
            <h3>The</h3>
            <h4>Process</h4>
          </div>
          <div className={st.theProcessBox}>
            <div className={st.theProcessBoxLine}></div>
            <div className={st.theProcessBoxRight}>
              <div className={st.theProcessBoxRightContent}>
                <div className={st.theProcessBoxCircleBox}>
                  <div className={st.theProcessBoxCircleBoxInner}></div>
                </div>
                <div className={st.theProcessBoxTextBox}>
                  <h3>Get in touch with us</h3>
                  <span>5 DAYS</span>
                  <p>
                    We help you choose the right automation solution for your
                    company. You tell us about your financing needs, whether you
                    need a leasing or installment plan, and we tell you the
                    document requirements to submit.
                  </p>
                </div>
              </div>
            </div>
            <div className={st.theProcessBoxLeft}>
              <div className={st.theProcessBoxLeftContent}>
                <div className={st.theProcessBoxTextBox}>
                  <h3>Financing process, deeper understanding</h3>
                  <span>2 WEEKS</span>
                  <p>
                    Submit your documents as requested. Our partner at DVAG will
                    be checking for your applications. Other documents might be
                    required. This process takes maximum 11 working days. Learn
                    more
                  </p>
                </div>
                <div className={st.theProcessBoxCircleBox}>
                  <div className={st.theProcessBoxCircleBoxInner}></div>
                </div>
              </div>
            </div>
            <div className={st.theProcessBoxRight}>
              <div className={st.theProcessBoxRightContent}>
                <div className={st.theProcessBoxCircleBox}>
                  <div className={st.theProcessBoxCircleBoxInner}></div>
                </div>
                <div className={st.theProcessBoxTextBox}>
                  <h3>Approval & Shipping</h3>
                  <span>1 WEEK</span>
                  <p>
                    As soon as DVAG approves your application, we will ship the
                    robots & equipments to your preferred location.
                  </p>
                </div>
              </div>
            </div>
            <div className={st.theProcessBoxLeft}>
              <div className={st.theProcessBoxLeftContent}>
                <div className={st.theProcessBoxTextBox}>
                  <h3>Deployment</h3>
                  <span>3-4 WEEKS</span>
                  <p>We deploy the robot at your factory.</p>
                </div>
                <div className={st.theProcessBoxCircleBox}>
                  <div className={st.theProcessBoxCircleBoxInner}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={st.theProcessBoxCenter}>
            <div className={st.theProcessBoxCenterText}>
              <h3>Start</h3>
              <p>
                Start reaping benefits of automation, including: increased
                competitiveness, more profitability, higher growth in the
                company.
              </p>
            </div>
          </div>
          <div className={st.marketLeaderSection}>
            <iframe
              width="885"
              height="498"
              src="https://www.youtube.com/embed/xHn2HiZInSQ"
              title="The ULTIMATE Dual Monitor Laptop Setup - 2022!"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className={st.marketLeaderSectionBoxContainer}>
              <div className={st.marketLeaderSectionBox}>
                <span>ABOUT OUR FINANCING PARTNER</span>
                <div className={st.marketLeaderlogoBox}>
                  <img src="./assets/img/sc-logo.png" alt="logo" />
                  <h3>Deutsche Vermögensberatung</h3>
                </div>
                <h4>A Market Leader</h4>
                <p>
                  A family business with over 45 years of experience, a turnover
                  of almost 2 billion euros and a contract portfolio of over 220
                  billion euros in 2020 - making us Germany's largest
                  independent financial advisor.
                </p>
              </div>
            </div>
          </div>
          <div className={st.leaseFaq}>
            <div className={st.leaseheadingBox}>
              <h3>Frequently Asked Questions</h3>
            </div>
            <div className={st.leaseFaqContent}>
              <Accordion>
                <FAQCard eventKey="0" question="What is robot leasing?">
                  Leasing is a form of financing that offers many advantages
                  over a traditional loan, especially for vehicles, machinery,
                  technical equipment or IT.
                  <br />
                  With this type of financing, the capital goods (robots) are
                  not purchased but used for a fixed period of time in return
                  for a fee.
                </FAQCard>
                <FAQCard
                  eventKey="1"
                  question="What is the agreement related to robot leasing?"
                >
                  Leasing is a form of financing that offers many advantages
                  over a traditional loan, especially for vehicles, machinery,
                  technical equipment or IT.
                  <br />
                  With this type of financing, the capital goods (robots) are
                  not purchased but used for a fixed period of time in return
                  for a fee.
                </FAQCard>
                <FAQCard
                  eventKey="2"
                  question="Do I own the robot after leasing period is over?"
                >
                  Leasing is a form of financing that offers many advantages
                  over a traditional loan, especially for vehicles, machinery,
                  technical equipment or IT.
                  <br />
                  With this type of financing, the capital goods (robots) are
                  not purchased but used for a fixed period of time in return
                  for a fee.
                </FAQCard>
                <FAQCard
                  eventKey="3"
                  question="What if I want to have ownership of the robot?"
                >
                  Leasing is a form of financing that offers many advantages
                  over a traditional loan, especially for vehicles, machinery,
                  technical equipment or IT.
                  <br />
                  With this type of financing, the capital goods (robots) are
                  not purchased but used for a fixed period of time in return
                  for a fee.
                </FAQCard>
                <FAQCard eventKey="4" question="What is an installment plan?">
                  Leasing is a form of financing that offers many advantages
                  over a traditional loan, especially for vehicles, machinery,
                  technical equipment or IT.
                  <br />
                  With this type of financing, the capital goods (robots) are
                  not purchased but used for a fixed period of time in return
                  for a fee.
                </FAQCard>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeasePage;
