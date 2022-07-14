import React from "react";
import Safe from "../../../public/assets/icons/Safe";
import Puzzle from "../../../public/assets/icons/Puzzle";
import Adaptable from "../../../public/assets/icons/Adaptable";
import st from "../../../styles/components/Pages/IndustriesPage/IndCollabGrid.module.css";

const IndCollabGrid = () => {
  return (
    <div className={st.IndCollabGrid}>
      <div className={st.IndCollabGridContent}>
        <Safe />
        <h6>Safe</h6>
        <p>
          Cobots meet strict safety requirements that allow for their
          utilization in close proximity to people or even work directly with
          them as part of a hybrid process. This allows the robot to perform
          more human-like tasks or simply make a current human worker more
          efficient.{" "}
        </p>
      </div>
      <div className={st.IndCollabGridContent}>
        <Puzzle />
        <h6>Easy to integrate</h6>
        <p>
          Thanks to this capacity for collaboration, printers do not need to
          completely rebuild their processes and lines around robots themselves,
          as they often would with traditional industrial robots. This means
          that previous investments in machinery, be it presses, cutters,
          folding equipment, etc. can be partially or fully automated without
          massive changes to the production line or the deprecation recently
          purchased machinery.
        </p>
      </div>
      <div className={st.IndCollabGridContent}>
        <Adaptable />
        <h6>Adaptable</h6>
        <p>
          Collaborative robots are in general much easier to program and
          repurpose than traditional industrial robots, allowing for much
          greater adaptability. 
        </p>
      </div>
    </div>
  );
};

export default IndCollabGrid;
