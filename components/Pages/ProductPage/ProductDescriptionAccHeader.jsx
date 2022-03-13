import React from "react";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../../../public/assets/icons/ChevronUp";
import st from "../../../styles/components/Pages/ProductPage/ProductDescriptionAccHeader.module.css";

const ProductDescriptionAccHeader = (props) => {
  return (
    <Accordion.Header>
      <div className={st.detailsSectionHead}>
        <ChevronUp color="#313130" />
        <h1>{props.headertext}</h1>
      </div>
    </Accordion.Header>
  );
};

export default ProductDescriptionAccHeader;
