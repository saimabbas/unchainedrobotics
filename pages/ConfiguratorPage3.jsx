import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/Configurator.module.css";
import ChevronRight from "../public/assets/icons/ChevronRight";
import ChevronLeft from "../public/assets/icons/ChevronLeft";
import ConfiguratorSteps from "../components/Pages/Configurator/ConfiguratorSteps";
import ConfiguratorRadioBox from "../components/Pages/Configurator/ConfiguratorRadioBox";
import ConfiguratorFooter from "../components/Pages/Configurator/ConfiguratorFooter";

const ConfiguratorPage3 = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Configurator</title>
      </Head>
      <div className={st.Configurator}>
        <ConfiguratorSteps
          step1Active={true}
          step2Active={true}
          step3Active={true}
        />
        <div className="box-sm">
          <div className={st.WelcharOptions}>
            <p>Wie schwer ist das zu verarbeitende Element?</p>
            <div className={st.WieGrid}>
              <ConfiguratorRadioBox
                cardTitle="Bis 0,5 kg"
                cardID="ConfiguratorRadioBoxID1"
              />
              <ConfiguratorRadioBox
                cardTitle="Bis 0,5 kg"
                cardID="ConfiguratorRadioBoxID1"
              />
              <ConfiguratorRadioBox
                cardTitle="Bis 0,5 kg"
                cardID="ConfiguratorRadioBoxID1"
              />
              <ConfiguratorRadioBox
                cardTitle="Bis 0,5 kg"
                cardID="ConfiguratorRadioBoxID1"
              />
              <ConfiguratorRadioBox
                cardTitle="Bis 0,5 kg"
                cardID="ConfiguratorRadioBoxID1"
              />
              <ConfiguratorRadioBox
                cardTitle="Bis 0,5 kg"
                cardID="ConfiguratorRadioBoxID1"
              />
              <ConfiguratorRadioBox
                cardTitle="Bis 0,5 kg"
                cardID="ConfiguratorRadioBoxID1"
              />
              <ConfiguratorRadioBox
                cardTitle="Bis 0,5 kg"
                cardID="ConfiguratorRadioBoxID1"
              />
            </div>
          </div>
        </div>
      </div>
      <ConfiguratorFooter
        againButton={false}
        previousButton={true}
        skipButton={true}
        nextButton={true}
      />
    </div>
  );
};

export default ConfiguratorPage3;
