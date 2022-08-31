import React from "react";
import TickCircle from "../public/assets/icons/TickCircle";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";

const Register = () => {
  return (
    <div className={customGlobals.app}>
      <div className={st.SignInBox}>
        <div className={st.SignInLeft}>
          <div className="box-lg">
            <img src="/assets/img/Logo.png" alt="" />
            <h2>Register</h2>
            <p>
              Already have an account?<span> Sign in</span>
            </p>
            <div className={st.SIInput}>
              <label htmlFor="">Work email address</label>
              <input placeholder="Work email address" type="text" />
              <p>Invalid email address format.</p>
            </div>
            <div className={st.SIInput}>
              <label htmlFor="">Password</label>
              <input placeholder="Password" type="text" />
              <p>
                Password needs to be between x-y characters, contain at least
                one uppercase and one lowercase letter (A, z), one numeric
                character (0-9), and one special character (such as !, %, @, or
                #).
              </p>
            </div>
            <button class="button button-lg button-primary-gray">Next</button>
            <h6>Email address has already been taken.</h6>
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
  );
};

export default Register;
