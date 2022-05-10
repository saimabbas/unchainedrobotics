import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/Configurator.module.css";
import ChevronRight from "../public/assets/icons/ChevronRight";
import ChevronLeft from "../public/assets/icons/ChevronLeft";

const ConfiguratorPage3 = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Configurator</title>
      </Head>
      <div className={st.Configurator}>
        <div className={st.ConfiguratorSteps}>
          <div className={st.configuratorGreen}></div>
          <div className={st.configuratorGreen}></div>
          <div className={st.configuratorGreen}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
          <div className={st.configuratorGrey}></div>
        </div>
        <div className="box-sm">
          <div className={st.WelcharOptions}>
            <p>Wie schwer ist das zu verarbeitende Element?</p>
            <div className={st.WieGrid}>
              <div className={st.WieMainBox}>
                <input type="checkbox" name="abcID" id="id1" />
                <label htmlFor="id1">
                  <div className={st.WieMaincontent}>
                    <div className={st.WieCircle}>
                      <div className={st.WieInnerCircle}></div>
                    </div>
                    <span>Bis 0,5 kg</span>
                  </div>
                </label>
              </div>
              <div className={st.WieMainBox}>
                <input type="checkbox" name="abcID" id="id2" />
                <label htmlFor="id2">
                  <div className={st.WieMaincontent}>
                    <div className={st.WieCircle}>
                      <div className={st.WieInnerCircle}></div>
                    </div>
                    <span>6,5kg – 8,5kg</span>
                  </div>
                </label>
              </div>
              <div className={st.WieMainBox}>
                <input type="checkbox" name="abcID" id="id3" />
                <label htmlFor="id3">
                  <div className={st.WieMaincontent}>
                    <div className={st.WieCircle}>
                      <div className={st.WieInnerCircle}></div>
                    </div>
                    <span>0,5kg – 2,5kg</span>
                  </div>
                </label>
              </div>
              <div className={st.WieMainBox}>
                <input type="checkbox" name="abcID" id="id4" />
                <label htmlFor="id4">
                  <div className={st.WieMaincontent}>
                    <div className={st.WieCircle}>
                      <div className={st.WieInnerCircle}></div>
                    </div>
                    <span>8,5kg – 9,5kg</span>
                  </div>
                </label>
              </div>
              <div className={st.WieMainBox}>
                <input type="checkbox" name="abcID" id="id5" />
                <label htmlFor="id5">
                  <div className={st.WieMaincontent}>
                    <div className={st.WieCircle}>
                      <div className={st.WieInnerCircle}></div>
                    </div>
                    <span>2,5kg – 4,5kg</span>
                  </div>
                </label>
              </div>
              <div className={st.WieMainBox}>
                <input type="checkbox" name="abcID" id="id6" />
                <label htmlFor="id6">
                  <div className={st.WieMaincontent}>
                    <div className={st.WieCircle}>
                      <div className={st.WieInnerCircle}></div>
                    </div>
                    <span>9,5kg – 11,5kg</span>
                  </div>
                </label>
              </div>
              <div className={st.WieMainBox}>
                <input type="checkbox" name="abcID" id="id7" />
                <label htmlFor="id7">
                  <div className={st.WieMaincontent}>
                    <div className={st.WieCircle}>
                      <div className={st.WieInnerCircle}></div>
                    </div>
                    <span>4,5kg – 6,5kg</span>
                  </div>
                </label>
              </div>
              <div className={st.WieMainBox}>
                <input type="checkbox" name="abcID" id="id8" />
                <label htmlFor="id8">
                  <div className={st.WieMaincontent}>
                    <div className={st.WieCircle}>
                      <div className={st.WieInnerCircle}></div>
                    </div>
                    <span>11,5kg – 14,5kg</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={st.ConfiguratorFooterUM}>
        <button className="button button-lg button-secondary-gray leading-icon">
          <ChevronLeft />
          Vorherige
        </button>
        <div className={st.ConfiFooterbtnUM}>
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

export default ConfiguratorPage3;
