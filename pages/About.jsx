import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/About.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import Eye from "../public/assets/icons/Eye";
import AeroIcon from "../public/assets/icons/AeroIcon";
import HeartIcon from "../public/assets/icons/HeartIcon";
import Tick from "../public/assets/icons/Tick";
import ArrowRight from "../public/assets/icons/ArrowRight";
import UseCaseCombinationContainer from "../components/Pages/ProductPage/UseCaseCombinationContainer";
import { Tabs } from "react-bootstrap";
import { Tab, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import ArrowLeft from "../public/assets/icons/ArrowLeft";

const About = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>About Page</title>
      </Head>
      <div className="box-sm">
        <div className={st.AboutMainBox}>
          <div className={st.AboutMainLeft}>
            <h6>Über Uns</h6>
            <h4>Wer wir sind</h4>
            <p>
              Unchained Robotics wurde 2019 gegründet und hat seinen Sitz in
              Paderborn, Deutschland, mit dem Ziel, die Industrieautomatisierung
              zu vereinfachen und zu beschleunigen.
            </p>
          </div>
          <div className={st.AboutMainRight}>
            <img
              src="/assets/img/About.png"
              alt=""
              className={st.DeskTeamImg}
            />
            <img
              src="/assets/img/MobTeam.png"
              alt=""
              className={st.MobTeamImg}
            />
          </div>
        </div>
        <div className={st.UnserPara}>
          <h4>Unser Auftrag</h4>
          <div className={st.AboutMainBox1}>
            <div className={st.AboutMainLeft1}>
              <p>
                Wir bei Unchained Robotics sind der Meinung, dass die
                Automatisierungstechnologie der Akzeptanz weit voraus ist. Wir
                haben die Technologie, um eine Vielzahl an sich
                zyklisch-wiederholender und risikobehafteter Prozesse, zu
                automatisieren. Dennoch werden viele dieser Prozesse manuell
                durchgeführt - selbst in Ländern, in denen ein hoher
                Arbeitskräftemangel herrscht.
              </p>
            </div>
            <div className={st.AboutMainRight1}>
              <p>
                Wir gehen davon aus, dass die Ursache hierfür in dem
                gedrosselten, verzwickten und undurchsichtigen Prozess, von dem
                Problem bis zur implementierten Lösung, liegt. Insbesondere für
                kleine und mittlere Unternehmen ist dies ein entscheidender
                Faktor.{" "}
              </p>
              <p>
                Aber genau für dieses Problem gibt es eine Lösung. Wir haben es
                uns zur Aufgabe gemacht, die industrielle Automatisierung , die
                gebraucht wird, für die zahlreichen Unternehmen in ganz Europa,
                welche noch nicht den Schritt in Richtung industrielle
                Automatisierung gewagt haben, zugänglich zu machen und ihnen
                näher zu bringen.
              </p>
              <h5>Das ist vereinfachte Automatisierung.</h5>
            </div>
          </div>
        </div>
        <div className={st.AboutGrid}>
          <div className={st.AboutGridContent}>
            <h4>Die Werte, die uns antreiben </h4>
            <p>
              Ein Unternehmen wird durch seine Werte definiert. Hier sind
              unsere.
            </p>
          </div>
          <div className={st.AboutGridBox}>
            <div className={st.AGIcon}>
              <Eye />
            </div>
            <h6>Transparenz</h6>
            <p>
              Es liegt uns am Herzen, die für dich beste Lösung für dein
              individuelles Problem zu finden. Taucht ein in die Preise,
              Produktspezifikationen und zahlreichen Alternativen.
            </p>
          </div>
          <div className={st.AboutGridBox}>
            <div className={st.AGIcon}>
              <AeroIcon />
            </div>
            <h6>Innovation</h6>
            <p>
              Wir arbeiten daran, jeden Teil des Automatisierungsprozesses zu
              verbessern. Über die Suche nach dem perfekten Produkt bis hin zur
              endgültigen Installation.
            </p>
          </div>
          <div className={st.AboutGridBox}>
            <div className={st.AGIcon}>
              <HeartIcon />
            </div>
            <h6>Engagement</h6>
            <p>
              Unsere Beziehung endet nicht mit dem Abschluss des Projekts. Wir
              schätzen die Beziehungen zu unseren Kunden und unser Bemühen um
              den Dienst des Kunden.
            </p>
          </div>
        </div>
        <div className={st.MobAboutGrid}>
          <h4>We’re driven by our values</h4>
          <p>
            Culture is an incredibly important part of how we operate. We stand
            by four key pillars to success.
          </p>
          <Swiper
            slidesPerView={1}
            freeMode={true}
            spaceBetween={30}
            className={st.MobAboutSwiper}
          >
            <SwiperSlide>
              <div className={st.AboutGridBox}>
                <div className={st.AGIcon}>
                  <Eye />
                </div>
                <h6>Transparenz</h6>
                <p>
                  Es liegt uns am Herzen, die für dich beste Lösung für dein
                  individuelles Problem zu finden. Taucht ein in die Preise,
                  Produktspezifikationen und zahlreichen Alternativen.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={st.AboutGridBox}>
                <div className={st.AGIcon}>
                  <AeroIcon />
                </div>
                <h6>Innovation</h6>
                <p>
                  Wir arbeiten daran, jeden Teil des Automatisierungsprozesses
                  zu verbessern. Über die Suche nach dem perfekten Produkt bis
                  hin zur endgültigen Installation.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={st.AboutGridBox}>
                <div className={st.AGIcon}>
                  <HeartIcon />
                </div>
                <h6>Engagement</h6>
                <p>
                  Unsere Beziehung endet nicht mit dem Abschluss des Projekts.
                  Wir schätzen die Beziehungen zu unseren Kunden und unser
                  Bemühen um den Dienst des Kunden.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={st.ProductsSwiper}>
          <div className={st.UseCaseCombinationSection} id="usecasecombination">
            <h4>Our Products</h4>
            <div className="ds-tabs">
              <Tab.Container defaultActiveKey="1">
                <Nav variant="tabs">
                  <Swiper
                    slidesPerView={"auto"}
                    freeMode={true}
                    spaceBetween={0}
                    className="ds-tabs-nav"
                  >
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="1">Konfigurator</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="2">Marktplatz</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Nav.Item>
                        <Nav.Link eventKey="3">Turnkey Solutions</Nav.Link>
                      </Nav.Item>
                    </SwiperSlide>
                  </Swiper>

                  <Nav.Item>
                    <Nav.Link eventKey="1">Konfigurator</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">Marktplatz</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">Turnkey Solutions</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="1">
                    <div className={st.uccSwiper}>
                      <div className={st.KonfiTabContent}>
                        <div className={st.KonfiTabLeft}>
                          <h5>Konfigurator</h5>
                          <p>
                            Der Konfigurator ist ein Online-Tool, das es dem
                            Benutzer ermöglicht, durch einfache Eingabe der
                            Projektparameter, Automatisierungslösungen zu
                            erstellen und zu bewerten. Die Produktliste wird
                            durch speziell entwickelte Algorithmen erstellt. Die
                            Ergebnisse enthalten reale Preise für die
                            Einzelteile. Du kannst davon ausgehen, dass das
                            System der Einzelteile funktionieren wird.
                          </p>
                          <h6>
                            Ideal für:
                            <span>
                              Anfangsphase eines Projekts, Ideenfindung,
                              Kostenvoranschläge
                            </span>
                          </h6>
                        </div>
                        <div className={st.KonfiTabRight}>
                          <img src="./assets/img/PTab1.png" alt="" />
                        </div>
                      </div>
                      <div className={st.uccSwiperBtnBox}>
                        <button className="uccSwiperPrev">
                          <ArrowLeft color="#313130" />
                        </button>
                        <button className="uccSwiperNext">
                          <ArrowRight color="#313130" />
                        </button>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="2">
                    <div className={st.uccSwiper}>
                      <div className={st.KonfiTabContent}>
                        <div className={st.KonfiTabLeft}>
                          <h5>Marktplatz</h5>
                          <p>
                            Unser markenübergreifender Marktplatz umfasst eine
                            große Bandbreite an Robotern, Greifern, Kameras und
                            noch vielem mehr. Die Produkte stammen von
                            zahlreichen, führenden Herstellern. Mit dem Fokus
                            auf Transparenz, sind technische Daten, Dokumente
                            und Preise für alle Produkte verfügbar und
                            übersichtlich dargestellt. Unsere Auswahl an
                            Produkten und Partnern wird ständig erweitert!
                          </p>
                          <h6>
                            Ideal für:
                            <span>
                              Suche nach neuen Lösungen, Preisvergleiche,
                              Erstellung kundenspezifischer Lösungen
                            </span>
                          </h6>
                        </div>
                        <div className={st.KonfiTabRight}>
                          <img src="./assets/img/PTab2.png" alt="" />
                        </div>
                      </div>
                      <div className={st.uccSwiperBtnBox}>
                        <button className="uccSwiperPrev">
                          <ArrowLeft color="#313130" />
                        </button>
                        <button className="uccSwiperNext">
                          <ArrowRight color="#313130" />
                        </button>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="3">
                    <div className={st.uccSwiper}>
                      <div className={st.KonfiTabContent}>
                        <div className={st.KonfiTabLeft}>
                          <h5>Turnkey Solutions</h5>
                          <p>
                            Bei unseren schlüsselfertigen Lösungen handelt es
                            sich um vorgefertigte Roboterzellen, die für viele
                            gängige Anwendungsfälle der Industrieautomation
                            konzipiert wurden. Diese Lösungen sind effektiv,
                            zuverlässig und können in wenigen Stunden,anstatt
                            Wochen, installiert werden. Unsere schlüsselfertigen
                            Lösungen werden von den Unchained Partnern, oder
                            komplett im eigenen Haus entwickelt und bringen dich
                            auf die Überholspur der Automatisierung.
                          </p>
                          <h6>
                            Ideal für:
                            <span>
                              Allgemeine Anwendungsfälle, dringende Bedürfnisse
                            </span>
                          </h6>
                        </div>
                        <div className={st.KonfiTabRight}>
                          <img src="./assets/img/PTab3.png" alt="" />
                        </div>
                      </div>
                      <div className={st.uccSwiperBtnBox}>
                        <button className="uccSwiperPrev">
                          <ArrowLeft color="#313130" />
                        </button>
                        <button className="uccSwiperNext">
                          <ArrowRight color="#313130" />
                        </button>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
        <div className={st.AboutFeatured}>
          <div className={st.AFeaturedleft}>
            <h4>Featured On</h4>
            <img src="/assets/img/col.png" alt="" className={st.colimg} />
            <p>
              Die Möglichkeit Preise auf “Anhieb” zu sehen und so zumindest
              einen Richtwert zu erhalten, hat sich nun deutlich verbessert. Die
              als Bildverarbeitungs-Startup für die Robotik gestartete Unchained
              Robotics GmbH betreibt nun zusätzlich einen Shop. Dieser listet
              Cobots der Marken Universal Robots, Omron, Doosan, Yuanda und
              Denso samt Preis und somit ein recht breites Spektrum. —
              MRK-blog.de
            </p>
          </div>
          <div className={st.AFeaturedRight}>
            <img src="/assets/img/LogosMedia.png" alt="" />
          </div>
        </div>
        <div className={st.ChatBox}>
          <div className={st.ChatLeft}>
            <h4>Chat mit uns</h4>
            <p>
              Du hast eine Frage? Kontaktiere uns über LiveChat! Klicke unten,
              um jetzt mit einem unserer Berater zu chatten. Wir stehen dich zür
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
