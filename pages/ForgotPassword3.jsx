import React from "react";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";

const ForgotPassword3 = () => {
  return (
    <div className={customGlobals.app}>
      <div className={st.SignInBox}>
        <div className={st.SignInLeft}>
          <div className="box-lg">
            <img src="/assets/img/Logo.png" alt="" />
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
          </div>
        </div>
        <div className={st.SignInRight}>
          <img src="/assets/img/SignIn.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword3;
