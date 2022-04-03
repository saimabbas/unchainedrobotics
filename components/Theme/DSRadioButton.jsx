import React from "react";
import st from "../../styles/components/DSRadioButton.module.css";

const DSRadioButton = (props) => {
  return (
    <div className={st.DSRadioButton}>
      <input
        type="radio"
        name={props.name}
        id={props.id}
        disabled={props.disabled == !"" ? props.disabled : null}
        checked={props.checked == !"" ? props.checked : null}
      />
      <span></span>
    </div>
  );
};

export default DSRadioButton;
