import React from "react";
import st from "../../../styles/components/Pages/HomePage/Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={st.sayingaboutus}>
      <div className={st.sayingleft}>
        <h4>What they’re saying about us</h4>
        <img src="/assets/img/col.png" alt="" className={st.colimg} />
        <p>
          The ability to see prices "right off the bat" and thus at least get a
          ballpark figure has now improved significantly. This shop lists cobots
          from Universal Robots, Omron, Doosan, Yuanda and Denso, including
          prices, and thus offers a fairly broad spectrum.
        </p>
        <img src="/assets/img/LogosMedia.png" alt="" />
      </div>
      <div className={st.sayingRight}>
        <img
          src="/assets/img/Testimonial.png"
          alt=""
          className={st.tabsaying}
        />
        <img src="/assets/img/mobsaying.png" alt="" className={st.mobsaying} />
      </div>
    </div>
  );
};

export default Testimonials;
