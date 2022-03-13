import React from "react";
import ArrowRight from "../../public/assets/icons/ArrowRight";
import st from "../../styles/components/BreadCrumbs.module.css";
const BreadCrumbs = () => {
  return (
    <div className={st.breadcrumbs}>
      <a>Home</a>
      <ArrowRight color="#313130" />

      <a>Products</a>
      <ArrowRight color="#313130" />

      <a>Cobots</a>
      <ArrowRight color="#313130" />

      <a>Doosan</a>
      <ArrowRight color="#313130" />

      <a>Doosan Robotics H2515</a>
    </div>
  );
};

export default BreadCrumbs;
