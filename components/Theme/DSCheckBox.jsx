import React from "react";
import CheckIcon from "../../public/assets/icons/CheckIcon";
import st from "../../styles/components/DSCheckBox.module.css";
const DSCheckBox = (props) => {
  return (
    <div className={st.DSCheckBox}>
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        disabled={props.disabled == !"" ? props.disabled : null}
        checked={props.checked == !"" ? props.checked : null}
      />
      <CheckIcon color="#1fdb84" />
    </div>
  );
};

export default DSCheckBox;
