import React from "react";
import st from "../../../styles/components/Pages/IndustriesPage/IndPallCaseStudy.module.css";
import Image from "next/image";

const IndPallCaseStudy = () => {
  return (
    <div className={st.IPCStudyContent}>
      <h4>Case Study</h4>
      <div className={st.IPCSBox}>
        <Image src="/assets/img/SS3.png" alt=" Img" width="700" height="400" />
        <div className={st.IPStoryText}>
          <span>Use Cases</span>
          <h5>The integration of a robot for palletizing at Media Print</h5>
        </div>
      </div>
    </div>
  );
};

export default IndPallCaseStudy;
