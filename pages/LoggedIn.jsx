import React from "react";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/LoggedIn.module.css";
import { Tab, Nav } from "react-bootstrap";
import DSRadioButton from "../components/Theme/DSRadioButton";
import DSCheckBox from "../components/Theme/DSCheckBox";
import DashboardIcon from "../public/assets/icons/DashboardIcon";
import Store from "../public/assets/icons/Store";
import Paper from "../public/assets/icons/Paper";
import Person from "../public/assets/icons/Person";
import BookmarkOutlined from "../public/assets/icons/BookmarkOutlined";
import LoggedInOverview from "../components/Pages/LoggedIn/LoggedInOverview";
import Newsletter from "../components/Pages/LoggedIn/Newsletter";
import AccountSetting from "../components/Pages/LoggedIn/AccountSetting";

const LoggedIn = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <div className="box-sm">
        <div className={st.LoggedInBox}>
          <Tab.Container defaultActiveKey="a1">
            <div className={st.LoggedInLeft + " " + "loggedInLeftTabs"}>
              <select className={st.LoggedInSelect} name="" id="">
                <option value="Overview">
                  <p>Overview</p>
                </option>
                <option value="Universal Robots Kit">
                  Universal Robots Kit
                </option>
              </select>
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="a1">
                    <div className={st.LoggedInTabBox}>
                      <DashboardIcon /> <span>Overview</span>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a2">
                    <a href="https://webexhaust.com/">
                      <div className={st.LoggedInTabBox}>
                        <Store /> <span>Manage your store ↗</span>
                      </div>
                    </a>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a3">
                    <div className={st.LoggedInTabBox}>
                      <Paper /> <span>Newsletter</span>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a4">
                    <div className={st.LoggedInTabBox}>
                      <BookmarkOutlined /> <span>Saved</span>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a5">
                    <div className={st.LoggedInTabBox}>
                      <Person /> <span>Account settings</span>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className={st.LoggedInRight}>
              <Tab.Content>
                <Tab.Pane eventKey="a1">
                  <LoggedInOverview />
                </Tab.Pane>
                <Tab.Pane eventKey="a3">
                  <Newsletter />
                </Tab.Pane>
                <Tab.Pane eventKey="a5">
                  <AccountSetting />
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
