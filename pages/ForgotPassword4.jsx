import React from "react";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";
import Image from "next/image";

const ForgotPassword4 = () => {
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

export default ForgotPassword4;
