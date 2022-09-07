import React from "react";
import st from "../../../styles/components/pages/LoggedIn/LoggedInOverview.module.css";
import DSRadioButton from "../../../components/Theme/DSRadioButton";

const Newsletter = () => {
  return (
    <div className={st.LITabContent}>
      <h3>Newsletter</h3>
      <h5>Would you like to receive updates from us?</h5>
      <div className="checkbox">
        <DSRadioButton name="nosub" id="1" />
        <label htmlFor="1">
          Yes, send me emails about updates on products, brands, news from the
          marketplace and the automation industry.
        </label>
      </div>
      <div className="checkbox mt-3">
        <DSRadioButton name="nosub" id="2" />
        <label htmlFor="2">No, I’d like to unsubscribe.</label>
      </div>
      <button className="button button-md button-primary-gray">Save</button>
    </div>
  );
};

export default Newsletter;
