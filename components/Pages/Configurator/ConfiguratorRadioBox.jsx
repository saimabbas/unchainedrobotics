import React from "react";
import st from "../../../styles/components/Pages/Configurator/ConfiguratorRadioBox.module.css";

const ConfiguratorRadioBox = (props) => {
  return (
    <div className={st.WieMainBox}>
      <input type="checkbox" name="abcID" id={props.cardID} />
      <label htmlFor={props.cardID}>
        <div className={st.WieMaincontent}>
          <div className={st.WieCirclse}>
            <div className={st.WieInnerCircle}></div>
          </div>
          <span>{props.cardTitle}</span>
        </div>
      </label>
    </div>
  );
};

export default ConfiguratorRadioBox;
