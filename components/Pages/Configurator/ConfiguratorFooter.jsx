import React from "react";
import ChevronLeft from "../../../public/assets/icons/ChevronLeft";
import ChevronRight from "../../../public/assets/icons/ChevronRight";
import Reload from "../../../public/assets/icons/Reload";
import st from "../../../styles/components/Pages/Configurator/ConfiguratorFooter.module.css";

const ConfiguratorFooter = (props) => {
  return (
    <div className={st.ConfiguratorFooter}>
      {props.previousButton ? (
        <button className="button button-md button-secondary-gray leading-icon vorsvg">
          <ChevronLeft />
          <span>Vorherige</span>
        </button>
      ) : null}
      {props.againButton ? (
        <button className="button button-md button-secondary-gray leading-icon vorsvg">
          <Reload />
          <span>Erneut konfigurieren</span>
        </button>
      ) : null}
      <div className={st.ConfiFooterbtn}>
        {props.skipButton ? <span>Überspringen</span> : null}
        {props.nextButton ? (
          <button className="button button-md button-primary-green trailing-icon">
            Nächste
            <ChevronRight color="#fff" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ConfiguratorFooter;
