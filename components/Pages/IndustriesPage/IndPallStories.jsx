import React from "react";
import st from "../../../styles/components/Pages/IndustriesPage/IndPallStories.module.css";
import Image from "next/image";

const IndPallStories = () => {
  return (
    <div className={st.IndPallStories}>
      <h4>Success Stories</h4>
      <h5>from our partner</h5>
      <div className={st.IPStoriesGrid}>
        <div className={st.IPStoryContent}>
          <Image
            src="/assets/img/SS1.png"
            alt=" Img"
            width="600"
            height="340"
          />
          <div className={st.IPStoryText}>
            <span>Use Cases</span>
            <h5>
              Freeing up 150 hours in four months at Danish printing company
            </h5>
          </div>
        </div>
        <div className={st.IPStoryContent}>
          <Image
            src="/assets/img/SS2.png"
            alt=" Img"
            width="600"
            height="340"
          />
          <div className={st.IPStoryText}>
            <span>Use Cases</span>
            <h5>
              Increasing efficiency by 217 % at Germany’s oldest puublisher
            </h5>
          </div>
        </div>
        <div className={st.IPStoryContent}>
          <Image
            src="/assets/img/SS3.png"
            alt=" Img"
            width="600"
            height="340"
          />
          <div className={st.IPStoryText}>
            <span>Use Cases</span>
            <h5>Digital transformation at local printing business in Siegen</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndPallStories;
