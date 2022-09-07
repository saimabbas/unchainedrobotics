import React from "react";
import st from "../../../styles/components/pages/LoggedIn/LoggedInOverview.module.css";
import ArrowRight from "../../../public/assets/icons/ArrowRight";

const LoggedInOverview = () => {
  return (
    <div className={st.LITabContent}>
      <h3>Overview</h3>
      <h5>No new updates yet.</h5>
      <p>New information about your account will appear here.</p>
      <button className="button button-md button-primary-gray trailing-icon">
        Continue exploring
        <ArrowRight color="#fff" />
      </button>
    </div>
  );
};

export default LoggedInOverview;
