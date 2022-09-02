import React from "react";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";
import Image from "next/image";

const ForgotPassword = () => {
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

export default ForgotPassword;
