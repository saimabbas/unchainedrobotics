import React from "react";
import ArrowRight from "../../../public/assets/icons/ArrowRight";
import st from "../../../styles/components/Pages/IndustriesPage/IndCustomSolution.module.css";

const IndCustomSolution = () => {
  return (
    <div className={st.IndCustomSolution}>
      <div className={st.IndCSText}>
        <h4>Find custom solution</h4>
        <h5>for Printing Industry</h5>
        <p>
          Answer some questions in 5 minutes and we will propose a customized
          solution in the configurator
        </p>
        <button className="button button-lg button-primary-gray trailing-icon">
          Find your solution <ArrowRight color="#fff" />
        </button>
      </div>
      <img src="./assets/img/IC.jpg" alt="" />
    </div>
  );
};

export default IndCustomSolution;
