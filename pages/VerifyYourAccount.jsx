import React from "react";
import TickCircle from "../public/assets/icons/TickCircle";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";

const VerifyYourAccount = () => {
  return (
    <div className={customGlobals.app}>
      <div className="box-lg">
        <div className={st.SignInBox}>
          <div className={st.SignInLeft}>
            <img src="/assets/img/Logo.png" alt="" />
            <div className={st.VerifyEmailBox}>
              <img src="/assets/img/verifyemail.png" alt="" />
              <h3>Verify your email</h3>
              <p>
                An account activation link has been sent to <br />
                <b>dyahpalupi@hotmail.com</b> <br /> Please click on the link to
                activate your account.
              </p>
              <div className={st.VerifyLine}></div>
              <p>
                Didn’t get the mail? <span> Send it again</span>
              </p>
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

export default VerifyYourAccount;
