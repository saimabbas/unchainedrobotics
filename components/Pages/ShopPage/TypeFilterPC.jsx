import React from "react";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../../../public/assets/icons/ChevronUp";
import st from "../../../styles/components/Pages/ShopPage/TypeFilterPC.module.css";
import DSCheckBox from "../../Theme/DSCheckBox";

const TypeFilterPC = () => {
  return (
    <div className={st.TypeFilterPC}>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>
            <div className={st.filterHeader}>
              <h6>Type</h6>
              <ChevronUp color="#313130" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className={st.typeFilterAccBody}>
              <div className="checkbox">
                <DSCheckBox id="id1" name="typefilter" disabled />
                <label htmlFor="id1">Pneumatic</label>
              </div>
              <div className="checkbox">
                <DSCheckBox id="id2" name="typefilter" />
                <label htmlFor="id2">Electric</label>
              </div>
              <div className="checkbox">
                <DSCheckBox id="id3" name="typefilter" />
                <label htmlFor="id3">Vacuum</label>
              </div>
              <div className="checkbox">
                <DSCheckBox id="id4" name="typefilter" />
                <label htmlFor="id4">Soft gripper</label>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TypeFilterPC;
