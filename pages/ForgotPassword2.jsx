import React from "react";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";
import Google from "../public/assets/icons/Google";
import Webde from "../public/assets/icons/Webde";
import GMXde from "../public/assets/icons/GMXde";
import Image from "next/image";

const ForgotPassword2 = () => {
  return (
    <div className={customGlobals.app}>
      <div className={st.SignInBox}>
        <div className={st.SignInLeft}>
          <div className="box-lg">
            <Image
              src="/assets/img/Logo.png"
              alt="Logo"
              width="150"
              height="50"
            />
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
          <Image
            src="/assets/img/SignIn.png"
            alt="Sign In"
            width="1000"
            height="820"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword2;
