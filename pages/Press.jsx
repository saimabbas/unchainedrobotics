import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/Press.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import ArrowRight from "../public/assets/icons/ArrowRight";
import ProductDetailsMenu from "../components/Pages/ProductPage/ProductDetailsMenu";
import Scrollspy from "react-scrollspy";
import Commas from "../public/assets/icons/Commas";
import ArrowDown from "../public/assets/icons/ArrowDown";
import Download from "../public/assets/icons/Download";

const Press = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>About Page</title>
      </Head>
      <div className="box-sm">
        <div className={st.PressHeading}>
          <div className={st.PressHeadingLeft}>
            <h4>Willkommen in unserem Pressebereich</h4>
            <h6>Ihr direkter Kontakt zu uns</h6>
            <p>
              Im Pressebereich finden Sie aktuelle Meldungen, alle relevante
              Informationen zum Unternehmen sowie Ihre persönlichen
              Ansprechpartner.
            </p>
          </div>
          <div className={st.PressHeadingRight}>
            <div className={st.PHRsub}>
              <img src="/assets/img/pressRoy.png" alt="" />
            </div>
            <div className={st.PHRpara}>
              <span>PRESSEKONTAKT</span>
              <h5>Royal Montgomery</h5>
              <h6>presse@unchainedrobotics.de</h6>
              <div className={st.PHRBtn}>
                <button className="button button-sm button-secondary-gray trailing-icon">
                  Sende E-mail
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={st.PressMainBox}>
          <div className={st.productSectionalDetails}>
            <ProductDetailsMenu>
              <Scrollspy
                offset={-25}
                items={[
                  "overview",
                  "compare",
                  "inthebox",
                  "usecasecombination",
                  "technicalData",
                  "downloads",
                  "faq",
                  "similarrobots",
                ]}
                currentClassName="active"
              >
                <li>
                  <a href="#downloads">Unsere Mission</a>
                </li>
                <li>
                  <a href="#faq">Die Köpfe hinter Unchained Robotics</a>
                </li>
                <li>
                  <a href="#similarrobots">Unternehmensfakten</a>
                </li>
                <li>
                  <a href="#similarrobots">Bildmarke</a>
                </li>
                <li>
                  <a href="#overview">Bildergalerie</a>
                </li>
                <li>
                  <a href="#compare" className={st.secondarySectionLink}>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#inthebox" className={st.secondarySectionLink}>
                    Mladen Milicevic
                  </a>
                </li>
                <li>
                  <a
                    href="#usecasecombination"
                    className={st.secondarySectionLink}
                  >
                    Kevin Freise
                  </a>
                </li>
                <li>
                  <a href="#technicalData">Pressspiegel</a>
                </li>
              </Scrollspy>
            </ProductDetailsMenu>
          </div>
          <div className={st.PressMainBoxRight}>
            <div className={st.Unsere}>
              <h5>Unchained Robotics - Unsere Mission</h5>
              <p>
                Unchained Robotics ist eine unabhängige Plattform für
                Automatisierungstechnik für Fertigungsprozesse in Unternehmen.
                Wir sind ein Technologie-Startup aus Paderborn und verstehen uns
                als Problemlöser für die deutsche Wirtschaft. Warum? Weil wir
                die Automatisierungstechnik und Robotik für alle öffnen!
                <br />
                <br />
                Unsere Plattform bietet maßgeschneiderte Lösungen, aber auch
                fertige Musterlösungen an, die bereits in Unternehmen
                erfolgreich eingesetzt wurden. Als Vermittler der Technologie
                sind wir – anders als der Wettbewerb – selbst nicht am
                Engineering beteiligt. Nur bei Unchained Robotics können
                Kund:innen unabhängig sehen, welche Automatisierungs-Technologie
                für welchen Preis zur Verfügung steht und welche Technologie zu
                den Bedürfnissen des Unternehmens passt. Automatisierungstechnik
                ist dank Unchained Robotics einfach, flexibel und transparent.
              </p>
            </div>
            <div className={st.PMRobotics}>
              <h5>Die Köpfe hinter Unchained Robotics</h5>
              <div className={st.PMRImgBox}>
                <img src="/assets/img/URImg.png" alt="" />
                <div className={st.PMRPara}>
                  <h5>Mladen Milicevic</h5>
                  <div className={st.PMRParaMain}>
                    <Commas />
                    <p>
                      „Robotik ist keine Raketen-Wissenschaft und sollte allen
                      zug nglich sein. Wir wollen allen Unternehmen die
                      Innovationen der Robotik und Automatisierung ermöglichen.
                      Damit die deutsche Wirtschaft wettbewerbs- und
                      zukunftsfähig bleibt!”
                    </p>
                  </div>
                  <h6>
                    <ArrowDown /> Mehr zu Mladen
                  </h6>
                </div>
              </div>
              <div className={st.PMRImgBox}>
                <img src="/assets/img/URImg2.png" alt="" />
                <div className={st.PMRPara}>
                  <h5>Kevin Freise</h5>
                  <div className={st.PMRParaMain}>
                    <Commas />
                    <p>
                      “Wir glauben an eine Welt, in der Robotics den
                      Arbeitsalltag aller Menschen unterstützt. Gerade im
                      Hinblick auf den akuten Fachkräftemangel der Industrie
                      brauchen wir innovative Lösungen und die Zusammenarbeit
                      von Mensch und Maschine.”
                    </p>
                  </div>
                  <h6>
                    <ArrowDown /> Mehr zu Mladen
                  </h6>
                </div>
              </div>
            </div>
            <div className={st.Unter}>
              <h5>Unternehmensfakten</h5>
              <div className={st.UnterGrid}>
                <div className={st.UnterMain}>
                  <span>2019</span>
                  <p>Gründung</p>
                </div>
                <div className={st.UnterMain}>
                  <span>9</span>
                  <p>Mitarbeitende</p>
                </div>
                <div className={st.UnterMain}>
                  <span>8</span>
                  <p>Industrien</p>
                </div>
                <div className={st.UnterMain}>
                  <span>9</span>
                  <p>Produktkategorien</p>
                </div>
                <div className={st.UnterMain}></div>
                <div className={st.UnterMain}>
                  <span>+170</span>
                  <p>Produkte</p>
                </div>
                <div className={st.UnterMain}>
                  <span>+37</span>
                  <p>Marken</p>
                </div>
                <div className={st.UnterMain}></div>
              </div>
            </div>
            <div className={st.Bildmarke}>
              <h5>Bildmarke</h5>
              <img src="/assets/img/logo-black.svg" alt="" />
              <button className="button button-md button-secondary-gray leading-icon">
                <ArrowRight color="#313130" />
                Download logo pack
              </button>
            </div>
            <div className={st.Bildergal}>
              <h5>Bildergalerie</h5>
              <div className={st.BildergalContent}>
                <p>Team</p>
                <div className={st.BilderFlex}>
                  <div className={st.BilderFContent}>
                    <img src="/assets/img/About.png" alt="" />
                    <h6>
                      <Download /> Download
                    </h6>
                  </div>
                  <div className={st.BilderFContent}>
                    <img src="/assets/img/About.png" alt="" />
                    <h6>
                      <Download /> Download
                    </h6>
                  </div>
                  <div className={st.BilderFContent}>
                    <img src="/assets/img/About.png" alt="" />
                    <h6>
                      <Download /> Download
                    </h6>
                  </div>
                </div>
                <button className="button button-md button-secondary-gray leading-icon">
                  <Download />
                  Download all
                </button>
              </div>
            </div>
            <div className={st.MladenMili}>
              <p>Mladen Milicevic</p>
              <div className={st.MladenGrid}>
                <div className={st.MladenGContent}>
                  <img src="/assets/img/Mladen_1.png" alt="" />
                  <h6>
                    <Download /> Download
                  </h6>
                </div>
                <div className={st.MladenGContent}>
                  <img src="/assets/img/Mladen_2.png" alt="" />
                  <h6>
                    <Download /> Download
                  </h6>
                </div>
                <div className={st.MladenGFContent}>
                  <div className={st.MGFMainBox}>
                    <img src="/assets/img/Mladen_3.png" alt="" />
                    <h6>
                      <Download /> Download
                    </h6>
                  </div>
                  <div className={st.MGFMainBox}>
                    <img src="/assets/img/Mladen_4.png" alt="" />
                    <h6>
                      <Download /> Download
                    </h6>
                  </div>
                </div>
              </div>
              <button className="button button-md button-secondary-gray leading-icon">
                <Download />
                Download all
              </button>
            </div>
            <div className={st.MladenMili}>
              <p>Mladen Milicevic</p>
              <div className={st.MladenGrid}>
                <div className={st.MladenGContent}>
                  <img src="/assets/img/Mladen_12.png" alt="" />
                  <h6>
                    <Download /> Download
                  </h6>
                </div>
                <div className={st.MladenGContent}>
                  <img src="/assets/img/Mladen_22.png" alt="" />
                  <h6>
                    <Download /> Download
                  </h6>
                </div>
                <div className={st.MladenGFContent}>
                  <div className={st.MGFMainBox}>
                    <img src="/assets/img/Mladen_32.png" alt="" />
                    <h6>
                      <Download /> Download
                    </h6>
                  </div>
                  <div className={st.MGFMainBox}>
                    <img src="/assets/img/Mladen_42.png" alt="" />
                    <h6>
                      <Download /> Download
                    </h6>
                  </div>
                </div>
              </div>
              <button className="button button-md button-secondary-gray leading-icon">
                <Download />
                Download all
              </button>
            </div>
            <div className={st.Pressespiegel}>
              <h5>Pressespiegel</h5>
              <div className={st.PresseInnerBox}>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                <p>BusinessPunk</p>
              </div>
              <div className={st.PresseInnerBox}>
                <h6>
                  Donec sit amet dui a metus suscipit scelerisque at non justo
                </h6>
                <p>Wirtschaftswoche</p>
              </div>
              <div className={st.PresseInnerBox}>
                <h6>Podcast</h6>
                <p>Wirtschaftswoche</p>
              </div>
              <h3>
                <ArrowDown /> Mehr zu Mladen
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Press;
