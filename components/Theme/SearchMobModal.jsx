import React from "react";
import CloseIcon from "../../public/assets/icons/CloseIcon";
import st from "../../styles/components/Header.module.css";

const SearchMobModal = (props) => {
  return (
    <div className={st.sortModalMOB}>
      <div className={st.LangModalMOBBox}>
        <div className="box-sm">
          <div className={st.filtersMobHead}>
            <h1>Sprache</h1>
            <span onClick={props.closelanmobModal}>
              <CloseIcon color="#828282" />
            </span>
          </div>
          <div className={st.SearchBarResultBox}>
            <div className={st.SearchBarResultContent}>
              <h5>16 RESULTS</h5>
              <div className={st.SearchBarResultsScroll + " " + "ds-overflow"}>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R1.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R2.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R3.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R4.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R5.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R1.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R2.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R3.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R4.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={st.SBRMainBox}>
                  <img src="/assets/img/R5.png" alt="" />
                  <div className={st.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobModal;
