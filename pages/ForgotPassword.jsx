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
            <div className={st.SIInput + " " + st.noerror}>
              <label htmlFor="">Email address</label>
              <input placeholder="Email address" type="text" />
              <p className={st.errMsg}>Invalid email address format.</p>
            </div>
            <button class="button button-lg button-primary-gray">
              Get reset link
            </button>
            <span>Return to sign in</span>
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
