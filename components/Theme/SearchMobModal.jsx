import React from "react";
import CloseIcon from "../../public/assets/icons/CloseIcon";
import st from "../../styles/components/Pages/ShopPage/FiltersMob.module.css";
import stt from "../../styles/components/Header.module.css";
const LanuagesMobModal = (props) => {
  return (
    <div className={st.sortModalMOB}>
      <div className={st.SearchModalMOBBox}>
        <div className="box-sm">
          <div className={st.filtersMobHead}>
            <h1>Sprache</h1>
            <span onClick={props.closelanmobModal}>
              <CloseIcon color="#828282" />
            </span>
          </div>
          <div className={stt.SearchBarResultBox}>
            <div className={stt.SearchBarResultContent}>
              <h5>16 RESULTS</h5>
              <div className={stt.SearchBarResultsScroll + " " + "ds-overflow"}>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R1.png" alt="" />
                  <div className={stt.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R2.png" alt="" />
                  <div className={stt.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R3.png" alt="" />
                  <div className={stt.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R4.png" alt="" />
                  <div className={stt.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R5.png" alt="" />
                  <div className={stt.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R1.png" alt="" />
                  <div className={stt.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R2.png" alt="" />
                  <div className={stt.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R3.png" alt="" />
                  <div className={stt.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R4.png" alt="" />
                  <div className={stt.SBRMainPara}>
                    <h6>OnRobot 3FG15</h6>
                    <p>3,530 €</p>
                  </div>
                </div>
                <div className={stt.SBRMainBox}>
                  <img src="/assets/img/R5.png" alt="" />
                  <div className={stt.SBRMainPara}>
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

export default LanuagesMobModal;
