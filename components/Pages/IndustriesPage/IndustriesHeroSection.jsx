import React from "react";
import st from "../../../styles/components/Pages/IndustriesPage/IndustriesHeroSection.module.css";
import Image from "next/image";

const IndustriesHeroSection = () => {
  return (
    <div className={st.IndustriesHeroSection}>
      <Image
        src="/assets/img/IndHero.png"
        alt="Hero Img"
        width="500"
        height="500"
      />
      <div className={st.IndHeroContent}>
        <p>Automation solution for Printing Industry</p>
        <h4>
          Automate end processes for a more efficient & competitive printing
          business
        </h4>
        <p>
          Unchained Robotics provides solution kits of cobot, camera and
          grippers for various printing industry use cases, such as palletizing,
          inspecting, sorting and packaging.
        </p>
        <div className={st.IndHeroPoints}>
          <h6>Palletizing</h6>
          <h6>Packaging</h6>
          <h6>Inspecting & Sorting</h6>
        </div>
      </div>
    </div>
  );
};

export default IndustriesHeroSection;
