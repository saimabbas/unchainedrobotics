import React from "react";
import st from "../../../styles/components/Pages/ProductPage/FAQCard.module.css";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../../../public/assets/icons/ChevronUp";

const FAQCard = (props) => {
  return (
    <Accordion.Item eventKey={props.eventKey} className={st.faqItem}>
      <Accordion.Header>
        <div className={st.faqheader}>
          <h1>{props.question}</h1>
          <ChevronUp color="#313130" />
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className={st.faqbody}>
          <p>{props.children}</p>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default FAQCard;
