import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/Configurator.module.css";
import ChevronRight from "../public/assets/icons/ChevronRight";
import ConfiguratorSteps from "../components/Pages/Configurator/ConfiguratorSteps";
import ConfiguratorSmallCard from "../components/Pages/Configurator/ConfiguratorSmallCard";
import ConfiguratorFooter from "../components/Pages/Configurator/ConfiguratorFooter";
const ConfiguratorPage1 = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Configurator</title>
      </Head>
      <div className={st.Configurator}>
        <ConfiguratorSteps step1Active={true} />
        <div className="box-sm">
          <div className={st.WelcharOptions}>
            <p>In welcher Branche möchtest Du automatisieren?</p>
            <div className={st.WelcharGrid}>
              <ConfiguratorSmallCard
                cardImg="/assets/img/autoMobile.png"
                cardTitle="AutoMobile"
                cardID="ConfiguratorSmallCardID1"
              />
              <ConfiguratorSmallCard
                cardImg="/assets/img/autoMobile.png"
                cardTitle="AutoMobile"
                cardID="ConfiguratorSmallCardID1"
              />
              <ConfiguratorSmallCard
                cardImg="/assets/img/autoMobile.png"
                cardTitle="AutoMobile"
                cardID="ConfiguratorSmallCardID1"
              />
              <ConfiguratorSmallCard
                cardImg="/assets/img/autoMobile.png"
                cardTitle="AutoMobile"
                cardID="ConfiguratorSmallCardID1"
              />
              <ConfiguratorSmallCard
                cardImg="/assets/img/autoMobile.png"
                cardTitle="AutoMobile"
                cardID="ConfiguratorSmallCardID1"
              />
              <ConfiguratorSmallCard
                cardImg="/assets/img/autoMobile.png"
                cardTitle="AutoMobile"
                cardID="ConfiguratorSmallCardID1"
              />
              <ConfiguratorSmallCard
                cardImg="/assets/img/autoMobile.png"
                cardTitle="AutoMobile"
                cardID="ConfiguratorSmallCardID1"
              />
            </div>
          </div>
        </div>
      </div>

      <ConfiguratorFooter
        againButton={false}
        previousButton={false}
        skipButton={true}
        nextButton={true}
      />
    </div>
  );
};

export default ConfiguratorPage1;
