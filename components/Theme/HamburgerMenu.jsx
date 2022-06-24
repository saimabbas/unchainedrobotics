import React from "react";
import st from "../../styles/components/Header.module.css";
import { Tab, Nav } from "react-bootstrap";
import ArrowRight from "../../public/assets/icons/ArrowRight";

const HamburgerMenu = () => {
  return (
    <div className={st.MMBottomDropdownContent1Box}>
      <div className={st.MMBottomDropdownContent1}>
        <div className="box-lg">
          <div
            className={
              st.MMBottomDropdownTabs2 +
              " " +
              "MMBottomDDTab2b ds-overflow-header"
            }
          >
            <Tab.Container defaultActiveKey="a1">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="a1">Produkte</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a2">Hersteller</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a3">Industrien</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a4">Ressourcen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a5">Unternehmen</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="a1">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.ProdukteLeftContent}>
                        <h4>Komponenten</h4>
                        <div className={st.MMBottomTopContent2}>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Roboter</h6>
                              <p>Cobots</p>
                              <p>Industrial Roboter</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>End of Arm</h6>
                              <p>Greifer</p>
                              <p>Effektor</p>
                              <p>Accessories</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Vision</h6>
                              <p>Kamera</p>
                              <p>Inspektions- lösungen</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Software</h6>
                              <p>Maintenance</p>
                              <p>Monitoring</p>
                              <p>Simulation</p>
                              <p>SDK</p>
                              <p>PLC</p>
                              <p>App</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Materialbereit- stellung</h6>
                              <p>Materialzuführung</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Sicherheits- technik</h6>
                              <p>Schalter</p>
                              <p>Lichtgitter</p>
                              <p>Messgerät</p>
                              <p>Radarsensor</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Tragestruktur</h6>
                              <p>Sockel</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Steuerungs- technik</h6>
                              <p>Industrie PC</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Teaching Kit</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={st.ProdukteRightContent}>
                        <h4>Lösungen</h4>
                        <div className={st.MMBottomTopContent}>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Turnkey Pakete</h6>
                              <p>Palletierer</p>
                              <p>Depalettierer</p>
                              <p>Case Erector</p>
                              <p>Starter Kits</p>
                            </div>
                          </div>
                          <div className={st.MMBGridContent}>
                            <div className={st.MMBGridRight}>
                              <h6>Dienstleistungen</h6>
                              <p>Simulation</p>
                              <p>CAD Design</p>
                              <p>CE Zertifizierung</p>
                              <p>Robot Programming</p>
                              <p>Robot Installation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={st.ProdukteAllButton}>
                      <h6>Alle Produkte</h6>
                      <ArrowRight color="#1BC074" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a2">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.MMBottomTopContent4}>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <h6>ABB</h6>
                            <p>Universal Robots</p>
                            <p>Omron</p>
                            <p>Doosan Robotics</p>
                            <p>Schunk</p>
                          </div>
                        </div>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <h6>Alexander Bürkle</h6>
                            <p>PIAB</p>
                            <p>Tesseract Solutions</p>
                            <p>Mitsubishi Electric</p>
                            <p>GRIP GmbH</p>
                          </div>
                        </div>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <h6>FORMHAND Automation</h6>
                            <p>CONWEX</p>
                            <p>FANUC</p>
                            <p>Hans Weber</p>
                            <p>Made4CNC</p>
                          </div>
                        </div>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <h6>Hanwha Robotics</h6>
                            <p>Mitsubishi Electric</p>
                            <p>Lorenscheit</p>
                            <p>ifm electronic</p>
                            <p>Janz Tec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={st.ProdukteAllButton}>
                      <h6>Alle Hersteller</h6>
                      <ArrowRight color="#1BC074" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a3">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.MMBottomTopContent4}>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <p>Automobil</p>
                            <p>Pharma</p>
                            <p>Elektrotechnik</p>
                            <p>Maschinenbau</p>
                            <p>Lebensmittel</p>
                            <p>Chemie</p>
                            <p>Druck</p>
                            <p>Metall</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={st.ProdukteAllButton}>
                      <h6>Alle Industrien</h6>
                      <ArrowRight color="#1BC074" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a4">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.MMBottomTopContent4}>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <p>UnchainedTV</p>
                            <p>Konfigurator</p>
                            <p>Whitepaper</p>
                            <p>Case Studies</p>
                            <p>Roboter ROI-Berechnung</p>
                            <p>Robotics News</p>
                            <p>FAQ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a5">
                  <div className={st.ProdukteMainContent}>
                    <div className={st.ProdukteContent}>
                      <div className={st.MMBottomTopContent4}>
                        <div className={st.MMBGridContent}>
                          <div className={st.MMBGridRight}>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Kontakt</p>
                            <p>Presse</p>
                            <p>Karriere</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
