import React from "react";
import st from "../../../styles/components/Pages/Configurator/ConfiguratorSteps.module.css";

const ConfiguratorSteps = (props) => {
  return (
    <div className={st.ConfiguratorSteps}>
      <div
        className={`${st.configuratorGrey} ${
          props.step1Active ? "configuratorActiveStep" : null
        }`}
      ></div>
      <div
        className={`${st.configuratorGrey} ${
          props.step2Active ? "configuratorActiveStep" : null
        }`}
      ></div>
      <div
        className={`${st.configuratorGrey} ${
          props.step3Active ? "configuratorActiveStep" : null
        }`}
      ></div>
      <div
        className={`${st.configuratorGrey} ${
          props.step4Active ? "configuratorActiveStep" : null
        }`}
      ></div>
      <div
        className={`${st.configuratorGrey} ${
          props.step5Active ? "configuratorActiveStep" : null
        }`}
      ></div>
      <div
        className={`${st.configuratorGrey} ${
          props.step6Active ? "configuratorActiveStep" : null
        }`}
      ></div>
      <div
        className={`${st.configuratorGrey} ${
          props.step7Active ? "configuratorActiveStep" : null
        }`}
      ></div>
      <div
        className={`${st.configuratorGrey} ${
          props.step8Active ? "configuratorActiveStep" : null
        }`}
      ></div>
      <div
        className={`${st.configuratorGrey} ${
          props.step9Active ? "configuratorActiveStep" : null
        }`}
      ></div>
    </div>
  );
};

export default ConfiguratorSteps;
