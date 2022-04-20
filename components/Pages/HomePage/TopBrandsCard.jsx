import React from "react";
import st from "../../../styles/components/Pages/HomePage/TopBrandsCard.module.css";

const TopBrandsCard = (props) => {
  return (
    <div className={st.topbrandmaingrid}>
      <img src={props.mainimg} alt="" />
      <h4>{props.productname}</h4>
      <h5>{props.num}</h5>
      <div className={st.innertopbrand}>
        <img src={props.logoimg} alt="" />
      </div>
    </div>
  );
};

export default TopBrandsCard;
