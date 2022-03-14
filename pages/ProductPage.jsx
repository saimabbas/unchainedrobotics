import React, { useState, useEffect } from "react";
import BreadCrumbs from "../components/Theme/BreadCrumbs";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/ProductPage.module.css";
import { Accordion } from "react-bootstrap";
import Head from "next/head";
import { Nav } from "react-bootstrap";
import ProductDescription from "../components/Pages/ProductPage/ProductDescription";
import TalkToExpert from "../components/Pages/ProductPage/TalkToExpert";
import ProductDetailsMenu from "../components/Pages/ProductPage/ProductDetailsMenu";
import ProductDescriptionAccHeader from "../components/Pages/ProductPage/ProductDescriptionAccHeader";
import SimilarProductsSection from "../components/Pages/ProductPage/SimilarProductsSection";
import FAQSection from "../components/Pages/ProductPage/FAQSection";
import DownloadSection from "../components/Pages/ProductPage/DownloadSection";
import ProductSpecificationSection from "../components/Pages/ProductPage/ProductSpecificationSection";
import OverviewSection from "../components/Pages/ProductPage/OverviewSection";
import Scrollspy from "react-scrollspy";
import ProductName from "../components/Pages/ProductPage/ProductDetailsSection/ProductName";
import ProductBookmark from "../components/Pages/ProductPage/ProductDetailsSection/ProductBookmark";
import ProductDimensionsDataBox from "../components/Pages/ProductPage/ProductDetailsSection/ProductDimensionsDataBox";
import ProductBriefDescription from "../components/Pages/ProductPage/ProductDetailsSection/ProductDescription";
import ProductPrice from "../components/Pages/ProductPage/ProductDetailsSection/ProductPrice";
import ProductModalSelect from "../components/Pages/ProductPage/ProductDetailsSection/ProductModalSelect";
import ProductAddToCartBtn from "../components/Pages/ProductPage/ProductDetailsSection/ProductAddToCartBtn";
import EnquireNowBtn from "../components/Pages/ProductPage/ProductDetailsSection/EnquireNowBtn";
import ProductThumbsGallery from "../components/Pages/ProductPage/ProductDetailsSection/ProductThumbsGallery";
import Plus from "../public/assets/icons/Plus";
import Handshake from "../public/assets/icons/Handshake";
import FeaturedOnTVSection from "../components/Pages/ProductPage/featuredOnTVSection";
const ProductPage = () => {
  useEffect(() => {
    return null;
  }, []);

  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Product Details</title>
      </Head>
      <div className={st.productPage}>
        <div className={st.productDetailsMassiveParent}>
          <div className="box-sm">
            <BreadCrumbs />
            <div className={st.productGrid}>
              <div className={st.productGridLeft}>
                <ProductThumbsGallery />
              </div>
              <div className={st.productGridRight}>
                <div className={st.productDetailsHead}>
                  <ProductName productname="Doosan Robotics H2515" />
                  <ProductBookmark />
                </div>
                <div className={st.textDetailsBoxParent}>
                  <ProductDimensionsDataBox
                    dataheading="RANGE"
                    datavalue="1.500 mm"
                  />
                  <ProductDimensionsDataBox
                    dataheading="PAYLOAD"
                    datavalue="25 kg"
                  />
                </div>
                <ProductBriefDescription description="This new workhorse from Doosan Robotics is one of the most powerful robots on the market. The H2515 transports products weighing up to 25 kg and has a long reach of 1500 mm and is ideal for handling heavy objects! With its 6 torque sensors, this Cobot greatly expands the range of applications. " />

                <ProductPrice price="50.500" />
                <div className={st.descLinksBox}>
                  <a href="#">Discussion (6)</a>
                  <span>|</span>
                  <a href="#">Delivery Information</a>
                </div>
                <h6 className={st.addToCompare}>
                  <Plus color="#313130" />
                  <a href="#">Add to compare</a>
                </h6>
                <ProductModalSelect />
                <div className={st.descBtnBox}>
                  <ProductAddToCartBtn />
                  <EnquireNowBtn />
                </div>
                <div className={st.learnMoreTag}>
                  <main>
                    <Handshake color="#313130" />
                    <p>From 1.000 € a month with lease buy or installment.</p>
                  </main>
                  <a href="#">Learn more</a>
                </div>
              </div>
            </div>
            <div className={st.productSectionalDetails}>
              <ProductDetailsMenu>
                <Scrollspy
                  offset={-25}
                  items={[
                    "overview",
                    "compare",
                    "inthebox",
                    "usecasecombination",
                    "technicalData",
                    "downloads",
                    "faq",
                    "similarrobots",
                  ]}
                  currentClassName="active"
                >
                  <li>
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#compare" className={st.secondarySectionLink}>
                      Compare
                    </a>
                  </li>
                  <li>
                    <a href="#inthebox" className={st.secondarySectionLink}>
                      In the box
                    </a>
                  </li>
                  <li>
                    <a
                      href="#usecasecombination"
                      className={st.secondarySectionLink}
                    >
                      Use case combination
                    </a>
                  </li>
                  <li>
                    <a href="#technicalData">Technical Data</a>
                  </li>
                  <li>
                    <a href="#downloads">Downloads</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="#similarrobots">Similar cobats</a>
                  </li>
                </Scrollspy>
              </ProductDetailsMenu>
              <div className={st.productDetailsContentContainer}>
                <div className={st.overview}>
                  <Accordion>
                    <Accordion.Item>
                      <Accordion.Header>
                        <ProductDescriptionAccHeader headertext="Overview" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <OverviewSection />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className={st.technicalData} id="technicalData">
                  <Accordion>
                    <Accordion.Item>
                      <Accordion.Header>
                        <ProductDescriptionAccHeader headertext="Technical Data" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <ProductSpecificationSection />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className={st.downloads} id="downloads">
                  <Accordion>
                    <Accordion.Item>
                      <Accordion.Header>
                        <ProductDescriptionAccHeader headertext="Downloads" />
                      </Accordion.Header>
                      <Accordion.Body>
                        {/* <div className={st.downloadsContent}>
                                                    <div className={st.downloadsGrid}>
                                                        <DownloadCard
                                                            img="/assets/img/downloads-1.png"
                                                            heading="Doosan H2515 Datasheet"
                                                            subHeading="Download the Doosan Robots datasheet here"
                                                        />
                                                        <DownloadCard
                                                            img="/assets/img/downloads-2.png"
                                                            heading="Doosan H2515 Datasheet"
                                                            subHeading="Download the Doosan Robots datasheet here"
                                                        />
                                                    </div>
                                                    <div className={st.didntFindBox}>
                                                        <h1>Did not find what you’re looking for? </h1>
                                                        <button className="button button-lg button-primary-gray">Contact us</button>
                                                    </div>
                                                </div> */}
                        <DownloadSection />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className={st.faq} id="faq">
                  <Accordion>
                    <Accordion.Item>
                      <Accordion.Header>
                        <ProductDescriptionAccHeader headertext="FAQ" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={st.faqContent}>
                          <Accordion alwaysOpen>
                            {/* 
                                                        <FAQCard
                                                            eventKey="0"
                                                            question="How can I place an order?"
                                                            answer="To place an order, send us an inquiry through the button at the top of the page or contact us through the chat."
                                                        />
                                                        <FAQCard
                                                            eventKey="1"
                                                            question="What is Unchained Robotics?"
                                                            answer="Unchained Robotics is the biggest marketplace for all things automation. We have over 36 brands with 9 different categories such as cobots, grippers, cameras, starter kits, end-of-arm accessories, teaching kits, turnkey solutions, cobot platforms, and even services. For more information, check out our About page."
                                                        />
                                                        <FAQCard
                                                            eventKey="2"
                                                            question="How can I place an order?"
                                                            answer="To place an order, send us an inquiry through the button at the top of the page or contact us through the chat."
                                                        />
                                                     */}
                            <FAQSection />
                          </Accordion>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className={st.similarRobots} id="similarrobots">
                  <Accordion>
                    <Accordion.Item>
                      <Accordion.Header>
                        <ProductDescriptionAccHeader headertext="Similar Cobots" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <SimilarProductsSection />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TalkToExpert />
        <ProductDescription>
          <p>
            H-Series is the most powerful cobot in the market. Outstanding 25 kg
            payload and 6 torque sensors brings safe work environment for any
            kind of application.
          </p>
          <h6>SUPER SAFE</h6>
          <ul>
            <li>
              <b>Five workspace settings to fully protect the operator</b>
              <p>
                Five workspace settings protect the operator’s safety and
                improve work efficiency.
              </p>
              <ul>
                <li>Collaborate zone</li>
                <li>Collision detection mute zone</li>
                <li>Protected zone</li>
                <li>Limited tool Orientation zone</li>
                <li>Customized collision sensitivity zone</li>
              </ul>
            </li>
            <li>
              <b>
                Outstanding product safety certified by international
                organization
              </b>
              <p>
                Doosan robots have received prestigious safety certifications
                worldwide as well as safety certifications from NRTL in the US,
                CE in Europe and KCs in Korea.
              </p>
            </li>
          </ul>
          <h6>SUPER EASY</h6>
          <ul>
            <li>
              <b>One-touch programming in just 20 seconds</b>
              <p>
                Doosan robots automatically recognize attached peripherals and
                suggest ideal work process in forms of various templates from
                simple material handling to machine tending. It also provides
                pre-programmed skills, commonly used in the field, which make it
                very easy to teach the robots even for beginners.
              </p>
            </li>
            <li>
              <b>Cockpit to quickly and easily teach robots</b>
              <p>
                Through the cockpit (Direct teaching button) on Doosan robots,
                it is possible to select various teaching modes as well as to
                save coordinates with simple button operations, allowing easy
                direct teaching.
              </p>
            </li>
          </ul>
          <h6>SUPER FLEXIBLE</h6>
          <ul>
            <li>
              <b>Doosan Mate maximizing the utilization of Doosan robots</b>
              <p>
                Doosan Mate is comprising of a variety of industry leading
                partner products from grippers to electric tools machines,
                sensors and software, providing the best automation solutions
                optimized for customer needs. All registered products are highly
                compatible with Doosan robots, allowing easy and fast set-up and
                immediate operation.
              </p>
            </li>
            <li>
              <b>Convenient communication connections</b>
              <p>
                Doosan robot supports the latest communication technologies,
                even without a gateway, allowing seamless connections with
                various types of industrial equipment and systems.
              </p>
              <p>
                Supported Communications: RS232/485, TCP/IP, Modbus TCP
                (Master/Slave), Modbus RTU (Master), PROFINET IO Device,
                EtherNet/IP Adapter
              </p>
            </li>
          </ul>
        </ProductDescription>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
