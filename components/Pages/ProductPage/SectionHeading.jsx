import React from "react";
import st from "../../../styles/components/Pages/ProductPage/SectionHeading.module.css";
const SectionHeading = (props) => {
  return <h2 className={st.sectionheading}>{props.headingtext}</h2>;
};

export default SectionHeading;
