import React from "react";
import st from "../../../styles/components/Pages/HomePage/HomeBanner1.module.css";

const HomeBanner1 = () => {
  return (
    <div className={st.homeecosystem}>
      <div className={st.homeecoleft}>
        <img src="/assets/img/ecoimg.png" alt="" />
      </div>
      <div className={st.homeecoright}>
        <h5>
          One Ecosystem. <br />
          Infinite Possibilities.
        </h5>
        <p>
          With an enormous range of products from leading brands, the Unchained
          Marketplace helps you find the perfect solution to your specific
          needs.{" "}
        </p>
      </div>
    </div>
  );
};

export default HomeBanner1;
