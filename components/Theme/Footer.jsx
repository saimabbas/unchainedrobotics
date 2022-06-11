import React from "react";
import Facebook from "../../public/assets/icons/Facebook";
import LinkedIn from "../../public/assets/icons/LinkedIn";
import Xing from "../../public/assets/icons/Xing";
import st from "../../styles/components/Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={st.footer}>
        <div className="box-slg">
          <div className={st.footerTopGrid}>
            <main className={st.FooterEmail}>
              <div className={st.footerCenterGrid}>
                <div className={st.footerCenterGridLeft}>
                  <div className="inputBox">
                    <label htmlFor="model">Never miss an update </label>
                    <main>
                      <input placeholder="Email Address" type="text" />
                      <button className="button button-lg button-primary-gray">
                        Abonnieren
                      </button>
                    </main>
                  </div>
                </div>
                <div className={st.footerCenterGridRight}>
                  <div className="inputBox">
                    <label htmlFor="">Connect with us</label>
                    <main>
                      <button className="button btn-icon-md btn-icon-gray">
                        <a href="">
                          <LinkedIn color="#313130" />
                        </a>
                      </button>
                      <button className="button btn-icon-md btn-icon-gray">
                        <a href="">
                          <Facebook color="#313130" />
                        </a>
                      </button>
                      <button className="button btn-icon-md btn-icon-gray">
                        <a href="">
                          <Xing />
                        </a>
                      </button>
                    </main>
                  </div>
                </div>
              </div>
            </main>
            <main className={st.FooterLink1}>
              <h6>Resources</h6>
              <a href="#">Unchained.TV</a>
              <a href="#">Configurator</a>
              <a href="#">Whitepaper</a>
              <a href="#">ROI Calculator</a>
              <a href="#">Case Studies</a>
              <a href="#">FAQ</a>
            </main>
            <main className={st.FooterLink2}>
              <h6>Unternehmen</h6>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Kontakt</a>
              <a href="#">Presse</a>
              <a href="#">Karriere</a>
            </main>
          </div>
        </div>
      </footer>
      <div className={st.footerBottomGridParent}>
        <div className="box-lga">
          <div className={st.footerBottomGrid}>
            <main>
              <img src="/assets/img/GreenLogo.png" alt="" />
              <h6>© 2020 Unchained Robotics</h6>
            </main>
            <div className={st.footerBottomRightBox}>
              <a href="#">Nutzungsbedingungen</a>
              <a href="#">Datenschutz</a>
              <a href="#">Impressum</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
