import React from "react";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";
import Google from "../public/assets/icons/Google";
import Webde from "../public/assets/icons/Webde";
import GMXde from "../public/assets/icons/GMXde";

const ForgotPassword = () => {
  return (
    <div className={customGlobals.app}>
      <div className={st.SignInBox}>
        <div className={st.SignInLeft}>
          <div className="box-lg">
            <img src="/assets/img/Logo.png" alt="" />
            <h2>Forgot Password</h2>
            <p>
              Please enter your email address. We will send a link to reset your
              password.
            </p>
            <div className={st.SIInput}>
              <label htmlFor="">Email address</label>
              <input placeholder="Email address" type="text" />
              <p>Invalid email address format.</p>
            </div>
            <button class="button button-lg button-primary-gray">
              Get reset link
            </button>
            <span>Return to sign in</span>

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
            <div className={st.SetNewPassword}>
              <h2>Set a new password</h2>
              <p>
                A secure password should have more than 6 characters and consist
                of upper and lower case letters, numbers and special characters.
              </p>
              <div className={st.SIInput + " " + st.noerror}>
                <label htmlFor="">New password</label>
                <input placeholder="New password" type="password" />
              </div>
              <div className={st.SIInput + " " + st.noerror}>
                <label htmlFor="">Confirm new password</label>
                <input placeholder="Confirm new password" type="password" />
              </div>
              <button class="button button-lg button-primary-gray">
                Set password
              </button>
            </div>
            <div className={st.PasswordSet}>
              <img src="/assets/img/verifytick.png" alt="" />
              <h2>New password has been set</h2>
              <button class="button button-md button-primary-gray">
                Sign in
              </button>
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

export default ForgotPassword;
