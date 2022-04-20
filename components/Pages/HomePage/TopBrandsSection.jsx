import React from "react";
import st from "../../../styles/components/Pages/HomePage/TopBrandsSection.module.css";
import TopBrandsCard from "./TopBrandsCard";

const TopBrandsSection = () => {
  return (
    <div className={st.topbrandsgrid}>
      <TopBrandsCard
        mainimg="/assets/img/topbrands.png"
        logoimg="/assets/img/onrobot.png"
        productname="OnRobot"
        num="833+ searches"
      />
      <TopBrandsCard
        mainimg="/assets/img/topbrands2.png"
        logoimg="/assets/img/onrobot.png"
        productname="OnRobot"
        num="833+ searches"
      />
      <TopBrandsCard
        mainimg="/assets/img/topbrands3.png"
        logoimg="/assets/img/onrobot.png"
        productname="OnRobot"
        num="833+ searches"
      />
      <TopBrandsCard
        mainimg="/assets/img/topbrands4.png"
        logoimg="/assets/img/onrobot.png"
        productname="OnRobot"
        num="833+ searches"
      />
    </div>
  );
};

export default TopBrandsSection;
