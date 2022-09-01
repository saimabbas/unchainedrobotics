import React from "react";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/LoggedIn.module.css";
import { Tab, Nav } from "react-bootstrap";
import ArrowRight from "../public/assets/icons/ArrowRight";
import DSRadioButton from "../components/Theme/DSRadioButton";
import DSCheckBox from "../components/Theme/DSCheckBox";

const LoggedIn = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <div className="box-sm">
        <div className={st.LoggedInBox}>
          <Tab.Container defaultActiveKey="a1">
            <div className={st.LoggedInLeft}>
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="a1">Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a2">Manage your store ↗</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a3">Newsletter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a4">Saved</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a5">Account settings</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className={st.LoggedInRight}>
              <Tab.Content>
                <Tab.Pane eventKey="a1">
                  <div className={st.LITabContent}>
                    <h3>Overview</h3>
                    <h5>No new updates yet.</h5>
                    <p>New information about your account will appear here.</p>
                    <button className="button button-md button-primary-gray trailing-icon">
                      Continue exploring
                      <ArrowRight color="#fff" />
                    </button>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a3">
                  <div className={st.LITabContent}>
                    <h3>Newsletter</h3>
                    <h5>Would you like to receive updates from us?</h5>
                    <div className="checkbox">
                      <DSRadioButton name="nosub" id="1" />
                      <label htmlFor="1">
                        Yes, send me emails about updates on products, brands,
                        news from the marketplace and the automation industry.
                      </label>
                    </div>
                    <div className="checkbox mt-3">
                      <DSRadioButton name="nosub" id="2" />
                      <label htmlFor="2">No, I’d like to unsubscribe.</label>
                    </div>
                    <button className="button button-md button-primary-gray">
                      Save
                    </button>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a5">
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
                          I consent to receive calls and text messages in
                          regards to my inquiries and orders.
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
                          <h4>Invalid email address format.</h4>
                        </div>
                        <div className={st.LIInput + " " + st.noerror}>
                          <label htmlFor="">Current password</label>

                          <input
                            placeholder="Current password"
                            type="password"
                          />
                          <h4>
                            Current password is incorrect. A valid password is
                            required when changing your email.
                          </h4>
                        </div>
                      </div>
                      <div className={st.SCCancelBtn}>
                        <button className="button button-md button-primary-gray">
                          Save changes
                        </button>
                        <button class="button button-md button-secondary-gray">
                          Cancel
                        </button>
                      </div>
                      <span>Change</span>
                      <div className={st.EmailChangeOpt}>
                        <h5>Email change</h5>
                        <p>
                          Check your email{" "}
                          <b>dyahpalupi@student.uni-siegen.de</b> to verify your
                          new address. The change won’t take effect until
                          verified.
                        </p>
                        <ul>
                          <li>
                            Don’t see a verification email?{" "}
                            <span> Send it again</span>
                          </li>
                          <li>
                            Don’t want to change your email?{" "}
                            <span> Cancel this change</span>
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
                          <input
                            placeholder="Current password"
                            type="password"
                          />
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
                        <button class="button button-md button-secondary-gray">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoggedIn;
