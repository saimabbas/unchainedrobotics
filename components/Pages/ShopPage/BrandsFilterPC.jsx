import React from "react";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../../../public/assets/icons/ChevronUp";
import Search from "../../../public/assets/icons/Search";
import st from "../../../styles/components/Pages/ShopPage/BrandsFilterPC.module.css";
import DSCheckBox from "../../Theme/DSCheckBox";

const BrandsFilterPC = () => {
  return (
    <div className={st.brandsFilterPC}>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>
            <div className={st.filterHeader}>
              <h6>Brands</h6>
              <ChevronUp color="#313130" />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className={st.brandsAccBody}>
              <div className="ds-input-icon">
                <Search color="#9c9c9c" />
                <input placeholder="Search Brand" type="text" />
              </div>
              <main className={st.brandsAccBodyGrid + " " + "ds-overflow"}>
                <div className="checkbox">
                  <DSCheckBox id="abcid1" name="typefilter" checked />
                  <label htmlFor="abcid1">
                    Universal Robots <span>14</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid2" name="typefilter" checked />
                  <label htmlFor="abcid2">
                    Omron <span>3</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid3" name="typefilter" checked />
                  <label htmlFor="abcid3">
                    Doosan <span>7</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid4" name="typefilter" checked />
                  <label htmlFor="abcid4">
                    Hanwha <span>3</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid5" name="typefilter" />
                  <label htmlFor="abcid5">
                    OnRobot <span>5</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid6" name="typefilter" />
                  <label htmlFor="abcid6">
                    Dobot <span>2</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid1" name="typefilter" />
                  <label htmlFor="abcid1">
                    Universal Robots <span>14</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid2" name="typefilter" />
                  <label htmlFor="abcid2">
                    Omron <span>3</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid3" name="typefilter" />
                  <label htmlFor="abcid3">
                    Doosan <span>7</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid4" name="typefilter" />
                  <label htmlFor="abcid4">
                    Hanwha <span>3</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid5" name="typefilter" />
                  <label htmlFor="abcid5">
                    OnRobot <span>5</span>
                  </label>
                </div>
                <div className="checkbox">
                  <DSCheckBox id="abcid6" name="typefilter" />
                  <label htmlFor="abcid6">
                    Dobot <span>2</span>
                  </label>
                </div>
              </main>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default BrandsFilterPC;
