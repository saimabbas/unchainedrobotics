import React from "react";
import AutoMob from "../../../public/assets/icons/AutoMob";
import Pharma from "../../../public/assets/icons/Pharma";
import Electrical from "../../../public/assets/icons/Electrical";
import Mechanical from "../../../public/assets/icons/Mechanical";
import Chemical from "../../../public/assets/icons/Chemical";
import Metal from "../../../public/assets/icons/Metal";
import Food from "../../../public/assets/icons/Food";
import st from "../../../styles/components/Pages/IndustriesPage/IndMoreIndContent.module.css";
import Image from "next/image";

const IndMoreIndContent = () => {
  return (
    <div className={st.IndMoreIndContent}>
      <h5>More Industries</h5>
      <div className={st.IMPGrid}>
        <div className={st.IMPGridContent}>
          <AutoMob />
          <p>Automobile</p>
        </div>
        <div className={st.IMPGridContent}>
          <Pharma />
          <p>Pharmaceutical</p>
        </div>
        <div className={st.IMPGridContent}>
          <Electrical />
          <p>Electrical Engineering</p>
        </div>
        <div className={st.IMPGridContent}>
          <Mechanical />
          <p>Mechanical Engineering</p>
        </div>
        <div className={st.IMPGridContent}>
          <Chemical />
          <p>Chemical</p>
        </div>
        <div className={st.IMPGridContent}>
          <Metal />
          <p>Metal</p>
        </div>
        <div className={st.IMPGridContent}>
          <Food />
          <p>Food</p>
        </div>
      </div>
    </div>
  );
};

export default IndMoreIndContent;
