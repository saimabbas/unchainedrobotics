import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/Configurator.module.css";
import ChevronRight from "../public/assets/icons/ChevronRight";

const ConfiguratorPage1 = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Configurator</title>
      </Head>
      <div className={st.Configurator}>
        <div className={st.ConfiguratorSteps}>
          <div className={st.configuratorGreen}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
        </div>
        <div className="box-sm">
          <div className={st.WelcharOptions}>
            <p>In welcher Branche möchtest Du automatisieren?</p>
            <div className={st.WelcharGrid}>
              <div className={st.WGMainBox}>
                <input type="checkbox" name="abcID" id="id1" />
                <label htmlFor="id1">
                  <div className={st.WGMaincontent}>
                    <img src="/assets/img/autoMobile.png" alt="AutoMobile" />
                    <h6>AutoMobile</h6>
                  </div>
                </label>
              </div>
              <div className={st.WGMainBox}>
                <input type="checkbox" name="abcID1" id="id2" />
                <label htmlFor="id2">
                  <div className={st.WGMaincontent}>
                    <img src="/assets/img/pharma.png" alt="AutoMobile" />
                    <h6>Pharma</h6>
                  </div>
                </label>
              </div>
              <div className={st.WGMainBox}>
                <input type="checkbox" name="abcID2" id="id3" />
                <label htmlFor="id3">
                  <div className={st.WGMaincontent}>
                    <img src="/assets/img/electrotech.png" alt="AutoMobile" />
                    <h6>Elektro- technik</h6>
                  </div>
                </label>
              </div>
              <div className={st.WGMainBox}>
                <input type="checkbox" name="abcID3" id="id4" />
                <label htmlFor="id4">
                  <div className={st.WGMaincontent}>
                    <img src="/assets/img/setting.png" alt="AutoMobile" />
                    <h6>Maschinen- bau</h6>
                  </div>
                </label>
              </div>
              <div className={st.WGMainBox}>
                <input type="checkbox" name="abcID4" id="id5" />
                <label htmlFor="id5">
                  <div className={st.WGMaincontent}>
                    <img src="/assets/img/leben.png" alt="AutoMobile" />
                    <h6>Lebensmittel</h6>
                  </div>
                </label>
              </div>
              <div className={st.WGMainBox}>
                <input type="checkbox" name="abcID5" id="id6" />
                <label htmlFor="id6">
                  <div className={st.WGMaincontent}>
                    <img src="/assets/img/chemie.png" alt="AutoMobile" />
                    <h6>Chemie</h6>
                  </div>
                </label>
              </div>
              <div className={st.WGMainBox}>
                <input type="checkbox" name="abcID6" id="id7" />
                <label htmlFor="id7">
                  <div className={st.WGMaincontent}>
                    <img src="/assets/img/druck.png" alt="AutoMobile" />
                    <h6>Druck</h6>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={st.ConfiguratorFooter}>
        <div className={st.ConfiFooterbtn}>
          <span>Überspringen</span>
          <button className="button button-lg button-primary-green trailing-icon">
            Nächste
            <ChevronRight color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorPage1;
