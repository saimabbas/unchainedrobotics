import React from "react";
import st from "../../../styles/components/Pages/Configurator/ConfiguratorSmallCard.module.css";

const ConfiguratorSmallCard = (props) => {
  return (
    <div className={st.WGMainBox}>
      <input type="checkbox" name="abcID" id={props.cardID} />
      <label htmlFor={props.cardID}>
        <div className={st.WGMaincontent}>
          <img src={props.cardImg} alt="AutoMobile" />
          <h6>{props.cardTitle}</h6>
        </div>
      </label>
    </div>
  );
};

export default ConfiguratorSmallCard;
