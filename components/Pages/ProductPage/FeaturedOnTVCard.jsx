import React from "react";
import st from "../../../styles/components/Pages/ProductPage/FeaturedOnTVCard.module.css";
const FeaturedOnTVCard = (props) => {
  return (
    <div className={st.featuredGridCard}>
      <img src={props.img} alt="Robot Image" />
      <iframe
        src={props.iframe}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <main>
        <span>{props.tag}</span>
        <p>{props.description}</p>
        <i>{props.time}</i>
      </main>
    </div>
  );
};

export default FeaturedOnTVCard;
