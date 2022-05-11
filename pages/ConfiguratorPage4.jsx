import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import customGlobals from "../styles/CustomGlobals.module.css";
import st from "../styles/pages/Configurator.module.css";
import ChevronRight from "../public/assets/icons/ChevronRight";
import ChevronLeft from "../public/assets/icons/ChevronLeft";
import SimilarProductsCard from "../components/Pages/ProductPage/SimilarProductsCard";
import Reload from "../public/assets/icons/Reload";
import ConfiguratorFooter from "../components/Pages/Configurator/ConfiguratorFooter";

const ConfiguratorPage4 = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Configurator</title>
      </Head>
      <div className={st.Configurator}>
        <div className="box-sm">
          <div className={st.PassendeBox}>
            <p>Deine passende Lösung</p>
            <div className={st.PassendeGrid}>
              <SimilarProductsCard
                hoverImg="/assets/img/Robots/rob-2.png"
                defaultImg="/assets/img/Robots/rob-3.png"
                robotType="Cobot, Universal Robots"
                robotName="Universal Robots UR16e"
                singlePrice="39.050,00€"
              />
              <SimilarProductsCard
                hoverImg="/assets/img/Robots/rob-2.png"
                defaultImg="/assets/img/Robots/rob-3.png"
                robotType="Greifer, OnRobot"
                robotName="OnRobot VG10"
                singlePrice="3.915,00€"
                varient={true}
              />
              <SimilarProductsCard
                hoverImg="/assets/img/Robots/rob-2.png"
                defaultImg="/assets/img/Robots/rob-3.png"
                robotType="Kamera, Mech-Mind"
                robotName="Mech-Mind Mech-Eye Pro L"
                singlePrice="11.000,00€"
              />
            </div>
          </div>
        </div>
      </div>

      <ConfiguratorFooter
        againButton={true}
        previousButton={false}
        skipButton={false}
        nextButton={true}
      />
    </div>
  );
};

export default ConfiguratorPage4;
