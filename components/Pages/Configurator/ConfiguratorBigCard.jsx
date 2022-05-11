import React from "react";
import st from "../../../styles/components/Pages/Configurator/ConfiguratorBigCard.module.css";

const ConfiguratorBigCard = (props) => {
  return (
    <div className={st.UMMainBox}>
      <input type="checkbox" name="abcID" id={props.cardID} />
      <label htmlFor={props.cardID}>
        <div className={st.UMMaincontent}>
          <img src={props.cardImg} alt="AutoMobile" />
          <div className={st.UMPara}>
            <h6>{props.cardTitle}</h6>
            <p>{props.cardDescription}</p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ConfiguratorBigCard;
