import React from "react";
import ArrowNorthEast from "../../../public/assets/icons/ArrowNorthEast";
import ArrowRight from "../../../public/assets/icons/ArrowRight";
import Envelope from "../../../public/assets/icons/Envelope";
import Telephone from "../../../public/assets/icons/Telephone";
import st from "../../../styles/components/Pages/ProductPage/TalkToExpert.module.css";

const TalkToExpert = () => {
  return (
    <div className={st.TalkToExpert}>
      <div className="box-sm">
        <div className={st.TalkToExpertContent}>
          <div className={st.tteLeft}>
            <h1>
              Talk to an <br /> automation expert
            </h1>
            <p>
              Have questions about this product, pricing, or your automation
              projects? Fill out the form and an automation expert from our team
              will be in touch within 1x24 hours.
              <br />
              Alternatively, you can contact us through the following:
            </p>
            <div className={st.talkToPhone}>
              <Telephone color="#313130" />
              <main>
                <i>Phone </i>
                <h3>Mladen Milicevic</h3>
                <h4>+49 xx</h4>
                <button className="button button-md button-secondary-gray trailing-icon">
                  Call
                  <ArrowNorthEast color="#313130" />
                </button>
              </main>
            </div>
            <div className={st.talkToPhone}>
              <Envelope color="#313130" />
              <main>
                <i>Email </i>
                <h3>info@unchainedrobotics.de</h3>
                <h4>+49 xx</h4>
                <button className="button button-md button-secondary-gray trailing-icon">
                  Send Email <ArrowNorthEast color="#313130" />
                </button>
              </main>
            </div>
          </div>
          <div className={st.tteRight}>
            <main>
              <h1>Talk to us</h1>
              <div className={st.talkToUsGrid}>
                <div className="inputBox">
                  <label htmlFor="model">
                    Name <span>*</span>
                  </label>
                  <input placeholder="First and last name" type="text" />
                </div>
                <div className="inputBox">
                  <label htmlFor="model">
                    Email <span>*</span>
                  </label>
                  <input placeholder="Email Address" type="text" />
                </div>
                <div className="inputBox">
                  <label htmlFor="model">Company</label>
                  <input placeholder="Company name" type="text" />
                </div>
                <div className="inputBox">
                  <label htmlFor="model">
                    Message <span>*</span>
                  </label>
                  <input
                    placeholder="Your message to Unchained Robotics"
                    type="text"
                  />
                </div>
              </div>
            </main>
            <main>
              <button className="button button-md button-primary-gray trailing-icon">
                Send Message <ArrowRight color="#fff" />
              </button>
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#">Privacy Policy</a> and{" "}
                <a href="#">Terms of Service</a> apply
              </p>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToExpert;
