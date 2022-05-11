import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/Configurator.module.css";
import ChevronRight from "../public/assets/icons/ChevronRight";
import ChevronLeft from "../public/assets/icons/ChevronLeft";
import ConfiguratorBigCard from "../components/Pages/Configurator/ConfiguratorBigCard";
import ConfiguratorSteps from "../components/Pages/Configurator/ConfiguratorSteps";
import ConfiguratorFooter from "../components/Pages/Configurator/ConfiguratorFooter";

const ConfiguratorPage2 = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Configurator</title>
      </Head>
      <div className={st.Configurator}>
        <ConfiguratorSteps step1Active={true} step2Active={true} />
        <div className="box-sm">
          <div className={st.WelcharOptions}>
            <p>Um welchen Prozess handelt es sich?</p>
            <div className={st.UMGrid}>
              <ConfiguratorBigCard
                cardID="ConfiguratorBigCardID1"
                cardImg="/assets/img/FeaturedIcon.png"
                cardTitle="Maschinenbestückung"
                cardDescription="Prozess der Maschinenbeladung, z.B. Verpackungsanlage"
              />
              <ConfiguratorBigCard
                cardID="ConfiguratorBigCardID1"
                cardImg="/assets/img/FeaturedIcon.png"
                cardTitle="Maschinenbestückung"
                cardDescription="Prozess der Maschinenbeladung, z.B. Verpackungsanlage"
              />
              <ConfiguratorBigCard
                cardID="ConfiguratorBigCardID1"
                cardImg="/assets/img/FeaturedIcon.png"
                cardTitle="Maschinenbestückung"
                cardDescription="Prozess der Maschinenbeladung, z.B. Verpackungsanlage"
              />
              <ConfiguratorBigCard
                cardID="ConfiguratorBigCardID1"
                cardImg="/assets/img/FeaturedIcon.png"
                cardTitle="Maschinenbestückung"
                cardDescription="Prozess der Maschinenbeladung, z.B. Verpackungsanlage"
              />
              <ConfiguratorBigCard
                cardID="ConfiguratorBigCardID1"
                cardImg="/assets/img/FeaturedIcon.png"
                cardTitle="Maschinenbestückung"
                cardDescription="Prozess der Maschinenbeladung, z.B. Verpackungsanlage"
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

export default ConfiguratorPage2;
