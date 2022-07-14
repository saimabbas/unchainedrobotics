import React from "react";
import st from "../../../styles/components/Pages/IndustriesPage/IndCollabBox.module.css";
import IndCollabGrid from "./IndCollabGrid";

const IndCollabBox = () => {
  return (
    <div className={st.IndCollabBox}>
      <div className={st.IndCollabHeading}>
        <h4>
          Why printing companies need to use collaborative robots (cobots)
        </h4>
        <p>Benefits of collaborative robots</p>
      </div>
      <IndCollabGrid />
    </div>
  );
};

export default IndCollabBox;
