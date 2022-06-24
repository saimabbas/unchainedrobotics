import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/AllBrands.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import { Tab, Nav } from "react-bootstrap";
import ArrowRight from "../public/assets/icons/ArrowRight";

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
      </div>
      <Footer />
    </div>
  );
};

export default AllBrands;
