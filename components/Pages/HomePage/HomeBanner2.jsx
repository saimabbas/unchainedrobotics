import React from "react";
import ArrowRight from "../../../public/assets/icons/ArrowRight";
import st from "../../../styles/components/Pages/HomePage/HomeBanner2.module.css";

const HomeBanner2 = () => {
  return (
    <div className={st.findrobot}>
      <h3>Find your robot match</h3>
      <p>
        Answer some questions in 5 minutes and we will propose a customized
        solution with complete pricing.
      </p>
      <button className="button button-lg button-primary-gray trailing-icon">
        Take our quiz now <ArrowRight color="#fff" />{" "}
      </button>
      <img src="/assets/img/findrobot.png" alt="" />
    </div>
  );
};

export default HomeBanner2;
