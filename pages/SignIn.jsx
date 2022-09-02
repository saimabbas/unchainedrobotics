import React from "react";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";

const SignIn = () => {
  return (
    <div className={customGlobals.app}>
      <div className={st.SignInBox}>
        <div className={st.SignInLeft}>
          <div className="box-lg">
            <img src="/assets/img/Logo.png" alt="" />
            <h2>Sign in</h2>
            <p>
              Don’t have an account yet? <span>Register</span>
            </p>
            <div className={st.SIInput + " " + st.noerror}>
              <label htmlFor="">Email address ass</label>
              <input placeholder="Email address" type="text" />
              <p className={st.errMsg}>Email address must not be empty.</p>
            </div>
            <div className={st.SIInput}>
              <label htmlFor="">Password</label>
              <input placeholder="Password" type="text" />
              <p>Email address must not be empty.</p>
            </div>
            <button class="button button-lg button-primary-gray">
              Sign in
            </button>
            <span>Forgot password?</span>
            <h5>
              Your email address or password is incorrect. Please try again.
            </h5>
          </div>
        </div>
        <div className={st.SignInRight}>
          <img src="/assets/img/SignIn.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
