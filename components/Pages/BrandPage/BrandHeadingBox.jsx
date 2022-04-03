import React from "react";
import st from "../../../styles/components/Pages/BrandPage/BrandHeadingBox.module.css";
const BrandHeadingBox = () => {
  return (
    <div className={st.brandBox}>
      <main>
        <img src="/assets/img/doosan.png" alt="" />
        <div></div>
        <h6>Doosan</h6>
      </main>
      <p>
        <span>13</span> Products
      </p>
    </div>
  );
};

export default BrandHeadingBox;
