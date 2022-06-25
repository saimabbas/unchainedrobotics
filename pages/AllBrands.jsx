import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/AllBrands.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import { Tab, Nav } from "react-bootstrap";
import ArrowRight from "../public/assets/icons/ArrowRight";
import Tick from "../public/assets/icons/Tick";
import ChatContainer from "../components/Pages/AboutPage/ChatContainer";

const AllBrands = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>All Brands</title>
      </Head>
      <div className={st.AllBrands}>
        <div className="box-sm">
          <div className={st.FaqHeading}>
            <h4>All Partners</h4>
            <h6>
              We partner with industry pioneers in the field of automation to
              provide the best solution for you.
            </h6>
          </div>
          <Tab.Container defaultActiveKey="a1">
            <div className={st.AllBrandsMainGrid}>
              <div
                className={st.AllBrandsMainGridLeft + " " + "all-brands-tabs"}
              >
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="a1">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="a2">Robots</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="a3">Grippers</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="a4">Cameras</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="a5">Starter Kits</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className={st.AllBrandsMainGridLeftMob}>
                <select name="model" id="model" className="ds-input">
                  <option value="">All Partners</option>
                  <option value="">Robots</option>
                  <option value="">Grippers</option>
                  <option value="">Cameras</option>
                </select>
              </div>
              <div className={st.AllBrandsMainGridRight}>
                <Tab.Content>
                  <Tab.Pane eventKey="a1">
                    <div className={st.AllBrandsGrid}>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/SCH.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/onR.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/OVISO.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/schmalz.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img
                          src="./assets/img/universalrobots.png"
                          alt="Brand Logo"
                        />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/inspecto.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/schmalz.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/OVISO.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/SCH.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/onR.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/OVISO.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/schmalz.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img
                          src="./assets/img/universalrobots.png"
                          alt="Brand Logo"
                        />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/inspecto.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/schmalz.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/OVISO.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="a2">
                    <div className={st.AllBrandsGrid}>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/SCH.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/onR.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/OVISO.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/schmalz.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img
                          src="./assets/img/universalrobots.png"
                          alt="Brand Logo"
                        />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/inspecto.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/schmalz.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/OVISO.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/SCH.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/onR.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/OVISO.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/schmalz.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="a3">
                    <div className={st.AllBrandsGrid}>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/SCH.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/onR.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/OVISO.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="a4">
                    <div className={st.AllBrandsGrid}>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/SCH.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/onR.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="a5">
                    <div className={st.AllBrandsGrid}>
                      <div className={st.AllBrandsGridCard}>
                        <img src="./assets/img/SCH.png" alt="Brand Logo" />
                        <a href="#">
                          Universal Robots <ArrowRight color="#4F4F4F" />
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
        <div className={st.becomePartnerSection}>
          <div className="box-sm">
            <div className={st.FaqHeading}>
              <h4>Become a Partner</h4>
              <h6>Join us on our quest to make automation accessible.</h6>
            </div>
            <div className={st.TextInfoGrid}>
              <div className="TextInfoGridCard">
                <img src="./assets/img/Icon_Free.png" alt="Icon" />
                <h2>No Cost</h2>
                <p>
                  There is absolutely no cost for becoming an Unchained Partner.
                  Display your products on our Marketplace and Configurator for
                  free.
                </p>
              </div>
              <div className="TextInfoGridCard">
                <img src="./assets/img/Icon_Target.png" alt="Icon" />
                <h2>Targeted Customers</h2>
                <p>
                  Get your products in front of customers actively searching for
                  automation solutions.
                </p>
              </div>
              <div className="TextInfoGridCard">
                <img src="./assets/img/Icon_Network2.png" alt="Icon" />
                <h2>Extensive Network</h2>
                <p>
                  Excellent global brands are already on the platform. Add your
                  products to our ranks to leverage this extensive network.
                </p>
              </div>
              <div className="TextInfoGridCard">
                <img src="./assets/img/Icon_Network.png" alt="Icon" />
                <h2>Total Transparency</h2>
                <p>
                  We are striving to make automation a more transparent
                  industry. At Unchained, we are completely transparent with
                  partners and customers, alike.
                </p>
              </div>
            </div>
            <div className={st.reachMoreCustomers}>
              <img
                src="./assets/img/reachMoreCustomersCover.png"
                alt="reachMoreCustomersCover"
              />
              <div className={st.reachMoreCustomersBoxContainer}>
                <div className={st.reachMoreCustomersBox}>
                  <span>ROBOT LEASING PROGRAM</span>
                  <h3>Reach more customers with our robot leasing program</h3>
                  <p>
                    In collaboration with Deutsche Verrechnungsstelle GmbH (DV)
                    we are offering small and medium-sized companies various
                    financing options such as leasing, installment plan and
                    loans. What’s in it for your company?
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <img
                        src="./assets/img/green-check-img.png"
                        alt="check"
                      />{" "}
                      Remove barrier to owning automation solution
                    </li>
                    <li>
                      <img src="./assets/img/green-check-img.png" alt="check" />{" "}
                      Reach more customers like never before
                    </li>
                    <li>
                      <img src="./assets/img/green-check-img.png" alt="check" />{" "}
                      Benefit from DV’s 50 years of financing experience
                    </li>
                  </ul>
                  <button className="button button-sm button-secondary-gray trailing-icon">
                    Learn more <ArrowRight color="#313130" />
                  </button>
                </div>
              </div>
            </div>
            <ChatContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBrands;
