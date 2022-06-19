import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/Faq.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import ArrowRight from "../public/assets/icons/ArrowRight";
import ProductDetailsMenu from "../components/Pages/ProductPage/ProductDetailsMenu";
import ProductDescriptionAccHeader from "../components/Pages/ProductPage/ProductDescriptionAccHeader";
import FAQCard from "../components/Pages/ProductPage/FAQCard";
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
              <br />
              Contact us <ArrowRight color="#4F4F4F" />
            </span>
          </h6>
        </div>
        <div className={st.MainFaqSection}>
          <div className={st.FaqSectionLeft}>
            <div className={st.productSectionalDetails}>
              <ProductDetailsMenu>
                <Scrollspy
                  offset={125}
                  items={["step-by-step", "compare", "inthebox"]}
                  currentClassName="active"
                >
                  <li>
                    <h6>Table of Content</h6>
                  </li>
                  <li>
                    <a href="#step-by-step">Step by Step</a>
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
              <div className={st.faq} id="step-by-step">
                <h4>Step by Step</h4>
                <div className={st.faqContent}>
                  <Accordion alwaysOpen>
                    <FAQCard
                      eventKey="0"
                      question="What are the 5 steps of automation?"
                    >
                      The 5 steps of automation are:
                      <ul className={st.Faqcardli}>
                        <li>The three R’s - Research, Robot, ROI</li>
                        <li>Designing a concept</li>
                        <li>Production and Setup</li>
                        <li>The Handover</li>
                        <li>Use and Services</li>
                      </ul>
                    </FAQCard>
                    <FAQCard
                      eventKey="1"
                      question="What are the three R’s of automation?"
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                    <FAQCard
                      eventKey="2"
                      question="What needs to be prepared when designing a concept? "
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                    <FAQCard
                      eventKey="3"
                      question="How do I get started with production and setup?"
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                    <FAQCard
                      eventKey="4"
                      question="What is the handover process?"
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className={st.productDetailsContentContainer}>
              <div className={st.faq} id="compare">
                <h4>Industry-related</h4>
                <div className={st.faqContent}>
                  <Accordion alwaysOpen>
                    <FAQCard
                      eventKey="5"
                      question="What are the 5 steps of automation?"
                    >
                      The 5 steps of automation are:
                      <ul className={st.Faqcardli}>
                        <li>The three R’s - Research, Robot, ROI</li>
                        <li>Designing a concept</li>
                        <li>Production and Setup</li>
                        <li>The Handover</li>
                        <li>Use and Services</li>
                      </ul>
                    </FAQCard>
                    <FAQCard
                      eventKey="6"
                      question="What are the three R’s of automation?"
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                    <FAQCard
                      eventKey="7"
                      question="What needs to be prepared when designing a concept? "
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                    <FAQCard
                      eventKey="8"
                      question="How do I get started with production and setup?"
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                    <FAQCard
                      eventKey="9"
                      question="What is the handover process?"
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className={st.productDetailsContentContainer}>
              <div className={st.faq} id="inthebox">
                <h4>Process-related</h4>
                <div className={st.faqContent}>
                  <Accordion alwaysOpen>
                    <FAQCard
                      eventKey="10"
                      question="What are the 5 steps of automation?"
                    >
                      The 5 steps of automation are:
                      <ul className={st.Faqcardli}>
                        <li>The three R’s - Research, Robot, ROI</li>
                        <li>Designing a concept</li>
                        <li>Production and Setup</li>
                        <li>The Handover</li>
                        <li>Use and Services</li>
                      </ul>
                    </FAQCard>
                    <FAQCard
                      eventKey="11"
                      question="What are the three R’s of automation?"
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                    <FAQCard
                      eventKey="12"
                      question="What needs to be prepared when designing a concept? "
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                    <FAQCard
                      eventKey="13"
                      question="How do I get started with production and setup?"
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
                    <FAQCard
                      eventKey="14"
                      question="What is the handover process?"
                    >
                      To place an order, send us an <a href="#">inquiry</a>{" "}
                      through the button at the top of the page or contact us
                      through the chat.
                    </FAQCard>
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
