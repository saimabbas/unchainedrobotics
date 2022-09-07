import React from "react";
import st from "../../../styles/components/pages/LoggedIn/LoggedInSetting.module.css";
import DSCheckBox from "../../../components/Theme/DSRadioButton";

const AccountSetting = () => {
  return (
    <div className={st.LITabContent + " " + st.AccountContent}>
      <h3>Account settings</h3>
      <h5>Personal details</h5>
      <div className={st.LITInput}>
        <div className={st.LIInput + " " + st.noerror}>
          <label htmlFor="">First name</label>
          <input placeholder="First name" type="text" />
        </div>
        <div className={st.LIInput + " " + st.noerror}>
          <label htmlFor="">Last name</label>
          <input placeholder="Last name" type="text" />
        </div>
      </div>
      <div className={st.LITInput}>
        <div className={st.LIInput + " " + st.noerror}>
          <label htmlFor="">Company</label>
          <input placeholder="Company" type="text" />
        </div>
      </div>
      <div className={st.LITInput}>
        <div className={st.LIInput + " " + st.noerror}>
          <label htmlFor="">Phone number</label>
          <input placeholder="+4912345678910" type="text" />
        </div>
        <div className="checkbox">
          <DSCheckBox id="idopt3" name="typefilter" />
          <label htmlFor="idopt3">
            I consent to receive calls and text messages in regards to my
            inquiries and orders.
          </label>
        </div>
      </div>
      <button className="button button-md button-primary-gray">
        Save changes
      </button>
      <div className={st.AccountInfoBox}>
        <h5>Account information</h5>
        <p>Email address</p>
        <h6>dyahpalupi@hotmail.com</h6>
        <div className={st.LITInput}>
          <div className={st.LIInput + " " + st.noerror}>
            <label htmlFor="">New email address</label>
            <input placeholder="New email address" type="text" />
            <h4 className={st.errMsg}>Invalid email address format.</h4>
          </div>
          <div className={st.LIInput + " " + st.noerror}>
            <label htmlFor="">Current password</label>

            <input placeholder="Current password" type="password" />
            <h4>
              Current password is incorrect. A valid password is required when
              changing your email.
            </h4>
          </div>
        </div>
        <div className={st.SCCancelBtn}>
          <button className="button button-md button-primary-gray">
            Save changes
          </button>
          <button class="button button-md button-secondary-gray">Cancel</button>
        </div>
        <span>Change</span>
        <div className={st.EmailChangeOpt}>
          <h5>Email change</h5>
          <p>
            Check your email <b>dyahpalupi@student.uni-siegen.de</b> to verify
            your new address. The change won’t take effect until verified.
          </p>
          <ul>
            <li>
              Don’t see a verification email? <span> Send it again</span>
            </li>
            <li>
              Don’t want to change your email? <span> Cancel this change</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={st.PasswordOpt}>
        <div className={st.LIInput + " " + st.noerror}>
          <label htmlFor="">Password</label>
          <input placeholder="" type="password" />
        </div>

        <span>Change</span>
        <div className={st.LITInput}>
          <div className={st.LIInput + " " + st.noerror}>
            <label htmlFor="">Current password</label>
            <input placeholder="Current password" type="password" />
          </div>
          <div className={st.LIInput + " " + st.noerror}>
            <label htmlFor="">New email address</label>
            <input placeholder="New email address" type="text" />
          </div>
        </div>
        <div className={st.SCCancelBtn}>
          <button className="button button-md button-primary-gray">
            Save changes
          </button>
          <button class="button button-md button-secondary-gray">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
