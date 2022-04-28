import React from "react";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../../../public/assets/icons/ChevronUp";
import Search from "../../../public/assets/icons/Search";
import st from "../../../styles/components/Pages/ShopPage/BrandsFilterPC.module.css";
import DSCheckBox from "../../Theme/DSCheckBox";

const BrandsFilterPC = (props) => {
  return (
    <div className={st.brandsFilterPC}>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>
            <div className={st.filterHeader}>
              <h6>{props.brandName}</h6>
              <ChevronUp color="#313130" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className={st.brandsAccBody}>
              {props.children}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default BrandsFilterPC;
