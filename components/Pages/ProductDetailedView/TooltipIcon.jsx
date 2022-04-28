import React from "react";
import st from "../../../styles/components/Pages/ProductDetailedView/TooltipIcon.module.css";

const TooltipIcon = (props) => {
  return (
    <div className={st.LinkTooltip}>
      {props.children}
      <div className={st.LinkTooltipBox}>{props.tooltip}</div>
    </div>
  );
};

export default TooltipIcon;
