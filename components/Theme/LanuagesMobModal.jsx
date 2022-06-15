import React from "react";
import CloseIcon from "../../public/assets/icons/CloseIcon";
import st from "../../styles/components/Pages/ShopPage/FiltersMob.module.css";
const LanuagesMobModal = (props) => {
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
          <div className={st.filterBtnBox}>
            <main>
              <button className="button button-md button-secondary-gray">
                DE (Deutsch)
              </button>
            </main>
            <main>
              <button className="button button-md button-secondary-gray">
                EN (English)
              </button>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanuagesMobModal;
