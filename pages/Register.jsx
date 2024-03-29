import React from "react";
import TickCircle from "../public/assets/icons/TickCircle";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/SignIn.module.css";
import DSCheckBox from "../components/Theme/DSCheckBox";
import ChevronLeft from "../public/assets/icons/ChevronLeft";
import Image from "next/image";

const Register = () => {
  return (
    <div className={customGlobals.app}>
      <div className="box-lg">
        <div className={st.SignInBox}>
          <div className={st.SignInLeft}>
            <Image
              src="/assets/img/Logo.png"
              alt="Logo"
              width="150"
              height="50"
            />
            <h2>Register</h2>
            <p>
              Already have an account?<span> Sign in</span>
            </p>
            <div className={st.SIInput + " " + st.noerror}>
              <label htmlFor="">Work email address</label>
              <input placeholder="Work email address" type="text" />
              <p className={st.errMsg}>Invalid email address format.</p>
            </div>
            <div className={st.SIInput + " " + st.noerror}>
              <label htmlFor="">Password</label>
              <input placeholder="Password" type="text" />
              <p className={st.errMsg}>
                Password needs to be between x-y characters, contain at least
                one uppercase and one lowercase letter (A, z), one numeric
                character (0-9), and one special character (such as !, %, @, or
                #).
              </p>
            </div>
            <button class="button button-lg button-primary-gray">Next</button>
            {/* <h6>Email address has already been taken.</h6> */}
            <div className={st.RegisterStepsBox}>
              <div className={st.RegisterSteps}>
                <div className={st.RegFirstStep}>
                  <p>Step 1: Account Detail</p>
                  <div className={st.RFSPre}></div>
                </div>
                <div className={st.RegSecondStep}>
                  <p>Step 2 Personal Detail</p>
                  <div className={st.RFSPost}></div>
                </div>
              </div>
              <div className={st.SIInput + " " + st.noerror}>
                <label htmlFor="">
                  First name <span>*</span>
                </label>
                <input placeholder="First name" type="text" />
                <p className={st.errMsg}>First name required.</p>
              </div>
              <div className={st.SIInput + " " + st.noerror}>
                <label htmlFor="">
                  Last name <span>*</span>
                </label>
                <input placeholder="Last name" type="text" />
                <p className={st.errMsg}>Last name required.</p>
              </div>
              <div className={st.SIInput + " " + st.noerror}>
                <label htmlFor="">
                  Company <span>*</span>
                </label>
                <input placeholder="Company" type="text" />
                <p className={st.errMsg}>Company required.</p>
              </div>
              <div className={st.SIInput + " " + st.noerror}>
                <label htmlFor="">Phone number</label>
                <input placeholder="E.g. +4912345678910" type="text" />
              </div>
              <div className="checkbox mb-5">
                <DSCheckBox id="idopt" name="typefilter" />
                <label htmlFor="idopt">
                  I consent to receive calls and text messages in regard to my
                  inquiries and orders. (Optional)
                </label>
              </div>
              <div className="checkbox mb-5">
                <DSCheckBox id="idopt2" name="typefilter" />
                <label htmlFor="idopt2">
                  I am interested in receiving emails from time to time about
                  new products, brands, news from the marketplace and the
                  automation industry. If I want to cancel my subscription, I
                  can do so at any time. (Optional)
                </label>
              </div>
              <div className={st.BackAccountBtn}>
                <div className={st.BABackOpt}>
                  <ChevronLeft /> <p>Back</p>
                </div>
                <button class="button button-md button-primary-gray">
                  Create an account
                </button>
              </div>
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
              <Image
                src="/assets/img/registerpic.png"
                alt=""
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
