import React from "react";
import ArrowRight from "../../../public/assets/icons/ArrowRight";
import Tick from "../../../public/assets/icons/Tick";
import st from "../../../styles/pages/About.module.css";

const ChatContainer = () => {
  return (
    <div className={st.ChatBox + " " + st.ChatBox2}>
      <div className={st.ChatLeft}>
        <h4>Chat mit uns</h4>
        <p>
          Du hast eine Frage? Kontaktiere uns über LiveChat! Klicke unten, um
          jetzt mit einem unserer Berater zu chatten. Wir stehen dich zür
          Verfügung für:
        </p>
        <div className={st.ChatPoints}>
          <div className={st.ChatPointsCir}>
            <Tick />
          </div>
          <h6>Fragen zu unseren Produkten</h6>
        </div>
        <div className={st.ChatPoints}>
          <div className={st.ChatPointsCir}>
            <Tick />
          </div>
          <h6>deine Projektanforderungen</h6>
        </div>
        <div className={st.ChatPoints}>
          <div className={st.ChatPointsCir}>
            <Tick />
          </div>
          <h6>Unchained-Partner werden</h6>
        </div>
        <button className="button button-md button-primary-gray">
          Jetzt chat
        </button>
        <h5>
          Oder schick eine E-Mail <ArrowRight color="#313130" />
        </h5>
      </div>
      <div className={st.ChatRight}>
        <img src="/assets/img/ChatPerson.png" alt="" />
      </div>
    </div>
  );
};

export default ChatContainer;
