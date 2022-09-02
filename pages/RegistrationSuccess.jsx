import React from "react";
import TickCircle from "../public/assets/icons/TickCircle";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";
import Image from "next/image";

const RegistrationSuccess = () => {
  return (
    <div className={customGlobals.app}>
      <div className="box-lg">
        <div className={st.SignInBox}>
          <div className={st.SignInLeft}>
            <Image
              src="/assets/img/Logo.png"
              alt="Logo"
              width="150"
              height="50"
            />
            <div className={st.VerifyEmailBox}>
              <img src="/assets/img/verifytick.png" alt="" />
              <h3>Registration success</h3>
              <p>Dyah, welcome to Unchained Robotics marketplace.</p>
              <button class="button button-md button-primary-gray">
                Sign in
              </button>
            </div>
          </div>
          <div className={st.RegisterRight}>
            <div className={st.RegisterRTop}>
              <p>Register for free to: </p>
              <div className={st.RTopPoints}>
                <div className={st.RPoint}>
                  <TickCircle /> <h5>save your favorite robots & components</h5>
                </div>
                <div className={st.RPoint}>
                  <TickCircle /> <h5>get updates on new products</h5>
                </div>
                <div className={st.RPoint}>
                  <TickCircle /> <h5>download STEP files of 200++ products</h5>
                </div>
              </div>
            </div>
            <div className={st.RegisterBottom}>
              <img src="/assets/img/registerpic.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
