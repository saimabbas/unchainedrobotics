import React from "react";
import Envelope from "../../../public/assets/icons/Envelope";
import st from "../../../styles/components/Pages/IndustriesPage/IndPallPack.module.css";

const IndPallPack = (props) => {
  return (
    <div className={st.IndPallPack}>
      <h4>{props.ippHeading}</h4>
      <p>{props.ippPara}</p>
      <h5>{props.ippQues}</h5>
      <p>{props.ippPara2}</p>
      <button className="button button-sm button-secondary-gray leading-icon">
        <Envelope /> Send us a message
      </button>
    </div>
  );
};

export default IndPallPack;
