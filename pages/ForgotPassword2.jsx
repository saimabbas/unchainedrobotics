import React from "react";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";
import Google from "../public/assets/icons/Google";
import Webde from "../public/assets/icons/Webde";
import GMXde from "../public/assets/icons/GMXde";

const ForgotPassword2 = () => {
  return (
    <div className={customGlobals.app}>
      <div className={st.SignInBox}>
        <div className={st.SignInLeft}>
          <div className="box-lg">
            <img src="/assets/img/Logo.png" alt="" />
            <div className={st.VerifyEmailBox}>
              <img src="/assets/img/verifyemail.png" alt="" />
              <h3>Check your email</h3>
              <p>
                If we found a matching user, we’ve sent a password reset link to{" "}
                <b>dyahpalupi@hotmail.com</b>
              </p>
              <div className={st.EmailButton}>
                <button className="button button-md button-secondary-gray leading-icon FPBtn">
                  <Google />
                  Open Gmail
                </button>
                <button className="button button-md button-secondary-gray leading-icon FPBtn">
                  <Webde />
                  Open Web.de
                </button>
                <button className="button button-md button-secondary-gray leading-icon FPBtn">
                  <GMXde />
                  Open GMX.de
                </button>
              </div>
              <span>Return to sign in</span>
            </div>
          </div>
        </div>
        <div className={st.SignInRight}>
          <img src="/assets/img/SignIn.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword2;
