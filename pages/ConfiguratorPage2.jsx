import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/Configurator.module.css";
import ChevronRight from "../public/assets/icons/ChevronRight";
import ChevronLeft from "../public/assets/icons/ChevronLeft";

const ConfiguratorPage2 = () => {
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
            <p>Um welchen Prozess handelt es sich?</p>
            <div className={st.UMGrid}>
              <div className={st.UMMainBox}>
                <input type="checkbox" name="abcID" id="id5" />
                <label htmlFor="id5">
                  <div className={st.UMMaincontent}>
                    <img src="/assets/img/FeaturedIcon.png" alt="AutoMobile" />
                    <div className={st.UMPara}>
                      <h6>Maschinenbestückung</h6>
                      <p>
                        Prozess der Maschinenbeladung, z.B. Verpackungsanlage
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              <div className={st.UMMainBox}>
                <input type="checkbox" name="abcID" id="id1" />
                <label htmlFor="id1">
                  <div className={st.UMMaincontent}>
                    <img src="/assets/img/FeaturedIcon1.png" alt="AutoMobile" />
                    <div className={st.UMPara}>
                      <h6>Maschinenbestückung</h6>
                      <p>Entgraten, Schleifen, Polieren, Bohren, Fräsen</p>
                    </div>
                  </div>
                </label>
              </div>
              <div className={st.UMMainBox}>
                <input type="checkbox" name="abcID" id="id2" />
                <label htmlFor="id2">
                  <div className={st.UMMaincontent}>
                    <img src="/assets/img/FeaturedIcon2.png" alt="AutoMobile" />
                    <div className={st.UMPara}>
                      <h6>Materialhandhabung</h6>
                      <p>Transferieren, Sortieren, Verpacken, Palettieren</p>
                    </div>
                  </div>
                </label>
              </div>
              <div className={st.UMMainBox}>
                <input type="checkbox" name="abcID" id="id3" />
                <label htmlFor="id3">
                  <div className={st.UMMaincontent}>
                    <img src="/assets/img/FeaturedIcon3.png" alt="AutoMobile" />
                    <div className={st.UMPara}>
                      <h6>Montage</h6>
                      <p>
                        Einfügen, Montage, Positio-nierung, Schraubendrehen,
                        Mutterndrehen
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              <div className={st.UMMainBox}>
                <input type="checkbox" name="abcID" id="id4" />
                <label htmlFor="id4">
                  <div className={st.UMMaincontent}>
                    <img src="/assets/img/FeaturedIcon4.png" alt="AutoMobile" />
                    <div className={st.UMPara}>
                      <h6>Andere</h6>
                    </div>
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

export default ConfiguratorPage2;
