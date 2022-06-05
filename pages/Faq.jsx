import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/Faq.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import ArrowRight from "../public/assets/icons/ArrowRight";
import ProductDetailsMenu from "../components/Pages/ProductPage/ProductDetailsMenu";
import ProductDescriptionAccHeader from "../components/Pages/ProductPage/ProductDescriptionAccHeader";
import FAQSection from "../components/Pages/ProductPage/FAQSection";
import Scrollspy from "react-scrollspy";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>FAQ</title>
      </Head>
      <div className="box-sm">
        <div className={st.FaqHeading}>
          <h4>Automation FAQ</h4>
          <h6>
            If you’re new to automation or looking to improve your existing
            processes, this guide will help you learn more and answer pressing
            questions.
            <br /> <br /> Don’t find your answer here?
            <span>
              Contact us <ArrowRight color="#4F4F4F" />
            </span>
          </h6>
        </div>
        <div className={st.MainFaqSection}>
          <div className={st.FaqSectionLeft}>
            <div className={st.productSectionalDetails}>
              <ProductDetailsMenu>
                <Scrollspy
                  offset={-25}
                  items={["overview", "compare", "inthebox"]}
                  currentClassName="active"
                >
                  <li>
                    <h6>Table of Content</h6>
                  </li>
                  <li>
                    <a href="#overview">Step by Step</a>
                  </li>
                  <li>
                    <a href="#compare">Industry-related</a>
                  </li>
                  <li>
                    <a href="#inthebox">Process-related</a>
                  </li>
                </Scrollspy>
              </ProductDetailsMenu>
            </div>
          </div>
          <div className={st.FaqSectionRight}>
            <div className={st.productDetailsContentContainer}>
              <div className={st.faq} id="overview">
                <h4>Step by Step</h4>
                <div className={st.faqContent}>
                  <Accordion alwaysOpen>
                    <FAQSection />
                  </Accordion>
                </div>
              </div>
            </div>
            <div className={st.productDetailsContentContainer}>
              <div className={st.faq} id="compare">
                <h4>Industry-related</h4>
                <div className={st.faqContent}>
                  <Accordion alwaysOpen>
                    <FAQSection />
                  </Accordion>
                </div>
              </div>
            </div>
            <div className={st.productDetailsContentContainer}>
              <div className={st.faq} id="inthebox">
                <h4>Process-related</h4>
                <div className={st.faqContent}>
                  <Accordion alwaysOpen>
                    <FAQSection />
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
