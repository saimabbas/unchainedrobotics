import React, { useState } from "react";
import st from "../../styles/components/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Cross from "../../public/assets/icons/Cross";
import Cart from "../../public/assets/icons/Cart";
import Globe from "../../public/assets/icons/Globe";
import User from "../../public/assets/icons/User";
import ChevronDown from "../../public/assets/icons/ChevronDown";
import ChevronRight from "../../public/assets/icons/ChevronRight";
import ChevronLeft from "../../public/assets/icons/ChevronLeft";
import ArrowRight from "../../public/assets/icons/ArrowRight";
import Menu from "../../public/assets/icons/Menu";
import Search from "../../public/assets/icons/Search";
import BookmarkOutlined from "../../public/assets/icons/BookmarkOutlined";
import Envelope from "../../public/assets/icons/Envelope";
import { Dropdown } from "react-bootstrap";
import LanuagesMobModal from "../../components/Theme/LanuagesMobModal";
import SearchMobModal from "../../components/Theme/SearchMobModal";
import $ from "jquery";
import { Tab, Nav } from "react-bootstrap";
import HamburgerMenu from "./HamburgerMenu";
import DashboardIcon from "../../public/assets/icons/DashboardIcon";
import Store from "../../public/assets/icons/Store";
import Paper from "../../public/assets/icons/Paper";
import Person from "../../public/assets/icons/Person";
const Header = () => {
  const [showMainDrop, setShowMainDrop] = useState(false);
  const [showMobHeader, setShowMobHeader] = useState(false);
  const [lanMobModal, setLanMobModal] = useState(false);
  const [SeaMobModal, setSearchMobModal] = useState(false);
  return (
    <header className={st.MainMenuHeader + " " + "headerMainStickyTop"}>
      <div className="box-lg">
        <div className={st.MainMenuTopHeader}>
          <img src="/assets/img/logo-black.svg" alt="Logo Black" />
          <div className={st.MMTopRightHeader}>
            <h6>UnchainedTV</h6>
            <h6>Konfigurator</h6>
          </div>
        </div>
        <div className={st.MainMenuCenterHeader}>
          <div className={st.MMCenterLeftHeader}>
            {showMainDrop ? (
              <div
                onClick={() => {
                  setShowMainDrop(false);
                  $(".headerMain").addClass("headerMainStickyBottom");
                }}
              >
                <Cross className={st.HeaderMenuIcon} color="#313130" />
              </div>
            ) : (
              <div
                onClick={() => {
                  setShowMainDrop(true);
                  $(".headerMain").removeClass("headerMainStickyBottom");
                }}
              >
                <Menu className={st.HeaderMenuIcon} color="#313130" />
              </div>
            )}

            <div className={st.headerContentBottom}>
              <ul>
                <li className={st.MMCRessourcen}>
                  <a href="#">
                    Ressourcen
                    <ChevronDown color="#313130" />
                  </a>
                  <div className={st.RessourcenOptionsBox}>
                    <div className={st.RessourcenOptions}>
                      <a href="#">UnchainedTV</a>
                      <a href="#">Konfigurator</a>
                      <a href="#">Whitepaper</a>
                      <a href="#">Case Studies</a>
                      <a href="#">Roboter ROI-Berechnung</a>
                      <a href="#">Robotics News</a>
                      <a href="#">FAQ</a>
                    </div>
                  </div>
                </li>
                <li className={st.MMCRessourcen}>
                  <a href="#">
                    Unternehmen
                    <ChevronDown color="#313130" />
                  </a>
                  <div className={st.RessourcenOptionsBox}>
                    <div className={st.RessourcenOptions}>
                      <a href="#">About</a>
                      <a href="#">Blog</a>
                      <a href="#">Kontakt</a>
                      <a href="#">Presse</a>
                      <a href="#">Karriere</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={st.headerSearchBarBox}>
              <div className={st.headerSearchBar}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7492 5.18126C12.7343 4.50429 11.5414 4.14355 10.3215 4.14467C8.68914 4.15355 7.12628 4.80632 5.97256 5.9611C4.81883 7.11588 4.16749 8.67933 4.1601 10.3117C4.1601 11.5316 4.52193 12.7242 5.19982 13.7385C5.87771 14.7527 6.84119 15.5432 7.9684 16.0098C9.0956 16.4764 10.3359 16.5982 11.5323 16.3598C12.7287 16.1214 13.8276 15.5334 14.6898 14.6704C15.5521 13.8074 16.139 12.708 16.3763 11.5113C16.6136 10.3147 16.4907 9.07453 16.0231 7.94776C15.5554 6.82098 14.7641 5.85822 13.7492 5.18126ZM6.25383 4.22402C7.45786 3.41951 8.8734 2.99011 10.3215 2.99011C12.2633 2.99011 14.1255 3.76149 15.4986 5.13455C16.8717 6.50761 17.643 8.36987 17.643 10.3117C17.643 11.7597 17.2136 13.1753 16.4091 14.3793C15.6046 15.5833 14.4612 16.5218 13.1233 17.0759C11.7855 17.6301 10.3134 17.7751 8.89311 17.4926C7.47286 17.21 6.16829 16.5127 5.14435 15.4888C4.12041 14.4649 3.4231 13.1603 3.14059 11.74C2.85809 10.3198 3.00308 8.84767 3.55723 7.50983C4.11138 6.17199 5.04981 5.02852 6.25383 4.22402ZM16.6856 15.8704L20.8364 20.0493C20.8885 20.1019 20.9298 20.1641 20.9579 20.2326C20.9859 20.3011 21.0003 20.3744 21 20.4484C20.9997 20.5224 20.9849 20.5956 20.9563 20.6639C20.9278 20.7321 20.8861 20.7941 20.8335 20.8463C20.781 20.8984 20.7188 20.9397 20.6503 20.9678C20.5818 20.9958 20.5085 21.0102 20.4345 21.0099C20.3605 21.0096 20.2873 20.9948 20.219 20.9662C20.1507 20.9377 20.0888 20.896 20.0366 20.8434L15.8859 16.6645L16.6856 15.8704Z"
                    fill="#828282"
                  />
                </svg>

                <input placeholder="Suche" type="text" />
              </div>
              {/* <div className={st.SearchBarResultBox}>
                <div className={st.SearchBarResultContent}>
                  <h5>16 RESULTS</h5>
                  <div
                    className={st.SearchBarResultsScroll + " " + "ds-overflow"}
                  >
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
              </div> */}
              {/* <div className={st.SearchBarResultBox}>
                <div className={st.SearchNotFoundBox}>
                  <div className={st.SearchNotFoundContent}>
                    <img src="/assets/img/Robot2.png" alt="" />
                    <h5>No results for ‘KUKA’</h5>
                    <p>Try a different search term or check the spelling.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className={st.MMCenterRightHeader}>
            <span className={st.MMCRessourcen}>
              <a className={st.headerLink}>
                <Globe color="#313130" />
                <i>DE</i>
              </a>
              <div className={st.RessourcenOptionsBox}>
                <div className={st.RessourcenOptions}>
                  <a href="#">DE (Deutsch)</a>
                  <a href="#">EN (English)</a>
                </div>
              </div>
            </span>
            <span className={st.MMCRessourcen}>
              <a className={st.headerLink}>
                <User color="#313130" /> Dyah
              </a>
              <div className={st.RessourcenLoggedIn}>
                <div className={st.RessourcenOptions}>
                  <div className={st.RessourcenOptionsLoggedIn}>
                    <a href="#">
                      <DashboardIcon color="#4f4f4f" /> Overview
                    </a>
                    <a href="#">
                      <Store color="#4f4f4f" />
                      Manage your shop ↗
                    </a>
                    <a href="#">
                      <Paper color="#4f4f4f" />
                      Newsletter
                    </a>
                    <a href="#">
                      <BookmarkOutlined color="#4f4f4f" />
                      Saved
                    </a>
                    <a href="#">
                      {" "}
                      <Person color="#4f4f4f" />
                      Account settings
                    </a>
                    <a href="#" className={st.ROLOut}>
                      Log out
                    </a>
                  </div>
                  <div className={st.RessourcenOptionsLoggedOut}>
                    <button className="button button-md button-primary-gray">
                      Log in
                    </button>
                    <button
                      class={
                        st.ROLBtn +
                        " " +
                        "button button-md button-secondary-gray"
                      }
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </span>
            <span className={st.headerLinksBoth}>
              <Link href="#">
                <a className={st.headerLink}>
                  <BookmarkOutlined color="#313130" />
                </a>
              </Link>
            </span>
            <span className={st.headerLinksBoth}>
              <div className={st.MMCRessourcen}>
                <a className={st.headerLink}>
                  <Cart color="#313130" />
                </a>
                <div className={st.RessourcenOptionsCart}>
                  <div className={st.RessourcenOptions}>
                    <div className={st.CartOptions}>
                      <h4>Cart</h4>
                      <div className={st.CartCenterContentBox}>
                        <div
                          className={st.CartCenterContent + " " + "ds-overflow"}
                        >
                          <div className={st.CCCProduct}>
                            <img
                              src="/assets/img/AddToCart.png"
                              alt="Product Img"
                            />
                            <div className={st.CCCProductInfo}>
                              <h5>Doosan Robotics M1013</h5>
                              <h6>
                                32,000 € <span>excl. MwSt.</span>
                              </h6>
                            </div>
                            <Cross color="#313130" />
                          </div>
                          <div className={st.CCCProduct}>
                            <img
                              src="/assets/img/AddToCart.png"
                              alt="Product Img"
                            />
                            <div className={st.CCCProductInfo}>
                              <h5>Doosan Robotics M1013</h5>
                              <h6>
                                32,000 € <span>excl. MwSt.</span>
                              </h6>
                            </div>
                            <Cross color="#313130" />
                          </div>
                          <div className={st.CCCProduct}>
                            <img
                              src="/assets/img/AddToCart.png"
                              alt="Product Img"
                            />
                            <div className={st.CCCProductInfo}>
                              <h5>Doosan Robotics M1013</h5>
                              <h6>
                                32,000 € <span>excl. MwSt.</span>
                              </h6>
                            </div>
                            <Cross color="#313130" />
                          </div>
                          <div className={st.CCCProduct}>
                            <img
                              src="/assets/img/AddToCart.png"
                              alt="Product Img"
                            />
                            <div className={st.CCCProductInfo}>
                              <h5>Doosan Robotics M1013</h5>
                              <h6>
                                32,000 € <span>excl. MwSt.</span>
                              </h6>
                            </div>
                            <Cross color="#313130" />
                          </div>
                        </div>
                      </div>

                      <div className={st.CartBottomContent}>
                        <div className={st.CBCinfo}>
                          <h6>Total</h6>
                          <h3>96,900 €</h3>
                        </div>
                        <button className="button button-lg button-primary-gray leading-icon">
                          <Envelope color="#fff" />
                          Enquire about cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className={st.MainMenuMobileBox}>
        <div className="box-sm">
          <div className={st.HeaderMobContentBox}>
            <div className={st.HeaderMobTopBox}>
              <img src="/assets/img/logo-black.svg" alt="Logo Black" />
              <div className={st.MMCenterRightHeader}>
                <span className={st.headerLinksBoth}>
                  <div className={st.MMCLanguage}>
                    <a
                      className={st.headerLink}
                      onClick={() => {
                        setLanMobModal(true);
                      }}
                    >
                      <Globe color="#313130" />
                      <i>DE</i>
                    </a>
                  </div>
                </span>
                <span className={st.headerLinksBoth}>
                  <Link href="#">
                    <a className={st.headerLink}>
                      <User color="#313130" />
                    </a>
                  </Link>
                </span>
                <span className={st.headerLinksBoth}>
                  <Link href="#">
                    <a className={st.headerLink}>
                      <BookmarkOutlined color="#313130" />
                    </a>
                  </Link>
                </span>
                <span className={st.headerLinksBoth}>
                  <div className={st.MMCCart}>
                    <a className={st.headerLink}>
                      <Cart color="#313130" />
                    </a>
                  </div>
                </span>
              </div>
            </div>
            <div className={st.HeaderMobBottomBox}>
              <div className={st.headerSearchBar}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7492 5.18126C12.7343 4.50429 11.5414 4.14355 10.3215 4.14467C8.68914 4.15355 7.12628 4.80632 5.97256 5.9611C4.81883 7.11588 4.16749 8.67933 4.1601 10.3117C4.1601 11.5316 4.52193 12.7242 5.19982 13.7385C5.87771 14.7527 6.84119 15.5432 7.9684 16.0098C9.0956 16.4764 10.3359 16.5982 11.5323 16.3598C12.7287 16.1214 13.8276 15.5334 14.6898 14.6704C15.5521 13.8074 16.139 12.708 16.3763 11.5113C16.6136 10.3147 16.4907 9.07453 16.0231 7.94776C15.5554 6.82098 14.7641 5.85822 13.7492 5.18126ZM6.25383 4.22402C7.45786 3.41951 8.8734 2.99011 10.3215 2.99011C12.2633 2.99011 14.1255 3.76149 15.4986 5.13455C16.8717 6.50761 17.643 8.36987 17.643 10.3117C17.643 11.7597 17.2136 13.1753 16.4091 14.3793C15.6046 15.5833 14.4612 16.5218 13.1233 17.0759C11.7855 17.6301 10.3134 17.7751 8.89311 17.4926C7.47286 17.21 6.16829 16.5127 5.14435 15.4888C4.12041 14.4649 3.4231 13.1603 3.14059 11.74C2.85809 10.3198 3.00308 8.84767 3.55723 7.50983C4.11138 6.17199 5.04981 5.02852 6.25383 4.22402ZM16.6856 15.8704L20.8364 20.0493C20.8885 20.1019 20.9298 20.1641 20.9579 20.2326C20.9859 20.3011 21.0003 20.3744 21 20.4484C20.9997 20.5224 20.9849 20.5956 20.9563 20.6639C20.9278 20.7321 20.8861 20.7941 20.8335 20.8463C20.781 20.8984 20.7188 20.9397 20.6503 20.9678C20.5818 20.9958 20.5085 21.0102 20.4345 21.0099C20.3605 21.0096 20.2873 20.9948 20.219 20.9662C20.1507 20.9377 20.0888 20.896 20.0366 20.8434L15.8859 16.6645L16.6856 15.8704Z"
                    fill="#828282"
                  />
                </svg>

                <input placeholder="Suche" type="text" />
              </div>
              {showMobHeader ? (
                <div
                  onClick={() => {
                    setShowMobHeader(false);
                    $(".headerMain").addClass("remove-sticky-p");
                  }}
                >
                  <Cross className={st.HeaderMenuIcon} color="#313130" />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setShowMobHeader(true);
                    $(".headerMain").removeClass("remove-sticky-p");
                  }}
                >
                  <Menu className={st.HeaderMenuIcon} color="#313130" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent1}>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Greifer.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Greifer</h6>
                <p>Vakuum-Greifer</p>
                <p>Finger-Greifer</p>
                <p>Magnetischer Greifer</p>
                <p>Soft-Gripper</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Effektor.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Effektor</h6>
                <p>Dosiertechnik</p>
                <p>Schleifer</p>
                <p>Schraubendreher</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Assessories.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Accessories</h6>
                <p>Quick Changer</p>
                <p>Force Torque Sensor</p>
              </div>
            </div>
          </div>
          <div className={st.MMBottomLastContent}>
            <h5>BELIEBTE MARKEN</h5>
            <div className={st.MMBottomLastImg}>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/onR.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/SCH.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/SCH2.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/AIM.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent}>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Kamera.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Kamera</h6>
                <p>Identifizierungssystem</p>
                <p>Qualitätskontrolle</p>
                <p>Bestücken & Platzieren</p>
              </div>
            </div>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/isp.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Inspektionslösungen</h6>
              </div>
            </div>
          </div>
          <div className={st.MMBottomLastContent}>
            <h5>BELIEBTE MARKEN</h5>
            <div className={st.MMBottomLastImg}>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/DropDown4.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/fram.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/inspecto.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/DropDown3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent}>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/Turnkey.png" alt="" />
              <div className={st.MMBGridRight}>
                <h6>Turnkey & Pakete</h6>
                <p>Palletierer</p>
                <p>Depalettierer</p>
                <p>Case Erector</p>
                <p>Starter Kits</p>
              </div>
            </div>
          </div>
          <div className={st.MMBottomLastContent}>
            <h5>BELIEBTE MARKEN</h5>
            <div className={st.MMBottomLastImg}>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/IBK.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/SKDK.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/OVISO.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/AGS.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent}>
            <div className={st.MMBGridContent}>
              <img src="/assets/img/CE.png" alt="" />
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
          <div className={st.MMBottomLastContent}>
            <h5>BELIEBTE MARKEN</h5>
            <div className={st.MMBottomLastImg}>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/onR.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/robodk.png" alt="" />
              </div>
              <div className={st.MMBottomImgBox}>
                <img src="/assets/img/Tesseract.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent1}>
          <div className={st.MMBottomDropdownTabs + " " + "MMBottomDDTab"}>
            <Tab.Container defaultActiveKey="a1">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="a1">Komponenten</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a2">Lösungen</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="a1">
                  <div className={st.MMBottomDropdownContent2}>
                    <div className={st.MMBottomTopContent2}>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/Greifer.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Roboter</h6>
                          <p>Cobots</p>
                          <p>Industrial Roboter</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/endofarm.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>End of Arm</h6>
                          <p>Greifer</p>
                          <p>Effektor</p>
                          <p>Accessories</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/vision.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Vision</h6>
                          <p>Kamera</p>
                          <p>Inspektions- lösungen</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/software.png" alt="" />
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
                        <img src="/assets/img/material.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Materialbereit- stellung</h6>
                          <p>Materialzuführung</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/sich.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Sicherheits- technik</h6>
                          <p>Schalter</p>
                          <p>Lichtgitter</p>
                          <p>Messgerät</p>
                          <p>Radarsensor</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/trag.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Tragestruktur</h6>
                          <p>Sockel</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/trag.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Steuerungs- technik</h6>
                          <p>Industrie PC</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/TeachingKit.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Teaching Kit</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="a2">
                  <div className={st.MMBottomDropdownContent2}>
                    <div className={st.MMBottomTopContent}>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/Turnkey.png" alt="" />
                        <div className={st.MMBGridRight}>
                          <h6>Turnkey Pakete</h6>
                          <p>Palletierer</p>
                          <p>Depalettierer</p>
                          <p>Case Erector</p>
                          <p>Starter Kits</p>
                        </div>
                      </div>
                      <div className={st.MMBGridContent}>
                        <img src="/assets/img/CE.png" alt="" />
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
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>

      <div className={st.MainMenuBottomDropdown}>
        <div className={st.MMBottomDropdownContent}>
          <div className={st.MMBottomTopContent3}>
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
      </div>
      {showMainDrop ? (
        <>
          {/* <div className={st.MMBottomDropdownContent1Box}>
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
          </div> */}
          <HamburgerMenu />
        </>
      ) : null}

      <div className={st.MainMenuBottomHeader}>
        <div className="bodx-lg">
          <div className={st.MainMenuBottomContent}>
            <div className={st.HMegaDropDown}>
              <h5 className="header-menu-link">Roboter</h5>
              <div className={st.MainMenuBottomDropdown}>
                <div className={st.MMBottomDropdownContent}>
                  <div className={st.MMBottomTopContent}>
                    <div className={st.MMBGridContent}>
                      <img src="/assets/img/CobotsImg.png" alt="" />
                      <div className={st.MMBGridRight}>
                        <h6>Cobots</h6>
                        <p>Cobot mit ≤ 3 kg Nutzlast</p>
                        <p>Cobot mit 3-10 kg Nutzlast</p>
                        <p>Cobot mit 10-25 kg Nutzlast</p>
                        <p>Cobot mit 25 kg Nutzlast</p>
                      </div>
                    </div>
                    <div className={st.MMBGridContent}>
                      <img src="/assets/img/RoboterImg.png" alt="" />
                      <div className={st.MMBGridRight}>
                        <h6>Industrial Roboter</h6>
                      </div>
                    </div>
                  </div>
                  <div className={st.MMBottomLastContent}>
                    <h5>BELIEBTE MARKEN</h5>
                    <div className={st.MMBottomLastImg}>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/DropDownImg.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/DropDown2.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/DropDown3.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/DropDown4.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={st.MainMenuBottomBackDrop}></div>
            </div>
            <div className={st.HMegaDropDown}>
              <h5 className="header-menu-link">End of Arm</h5>
              <div className={st.MainMenuBottomDropdown}>
                <div className={st.MMBottomDropdownContent}>
                  <div className={st.MMBottomTopContent1}>
                    <div className={st.MMBGridContent}>
                      <img src="/assets/img/Greifer.png" alt="" />
                      <div className={st.MMBGridRight}>
                        <h6>Greifer</h6>
                        <p>Vakuum-Greifer</p>
                        <p>Finger-Greifer</p>
                        <p>Magnetischer Greifer</p>
                        <p>Soft-Gripper</p>
                      </div>
                    </div>
                    <div className={st.MMBGridContent}>
                      <img src="/assets/img/Effektor.png" alt="" />
                      <div className={st.MMBGridRight}>
                        <h6>Effektor</h6>
                        <p>Dosiertechnik</p>
                        <p>Schleifer</p>
                        <p>Schraubendreher</p>
                      </div>
                    </div>
                    <div className={st.MMBGridContent}>
                      <img src="/assets/img/Assessories.png" alt="" />
                      <div className={st.MMBGridRight}>
                        <h6>Accessories</h6>
                        <p>Quick Changer</p>
                        <p>Force Torque Sensor</p>
                      </div>
                    </div>
                  </div>
                  <div className={st.MMBottomLastContent}>
                    <h5>BELIEBTE MARKEN</h5>
                    <div className={st.MMBottomLastImg}>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/onR.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/SCH.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/SCH2.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/AIM.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={st.MainMenuBottomBackDrop}></div>
            </div>
            <div className={st.HMegaDropDown}>
              <h5 className="header-menu-link">Vision</h5>
              <div className={st.MainMenuBottomDropdown}>
                <div className={st.MMBottomDropdownContent}>
                  <div className={st.MMBottomTopContent}>
                    <div className={st.MMBGridContent}>
                      <img src="/assets/img/Kamera.png" alt="" />
                      <div className={st.MMBGridRight}>
                        <h6>Kamera</h6>
                        <p>Identifizierungssystem</p>
                        <p>Qualitätskontrolle</p>
                        <p>Bestücken & Platzieren</p>
                      </div>
                    </div>
                    <div className={st.MMBGridContent}>
                      <img src="/assets/img/isp.png" alt="" />
                      <div className={st.MMBGridRight}>
                        <h6>Inspektionslösungen</h6>
                      </div>
                    </div>
                  </div>
                  <div className={st.MMBottomLastContent}>
                    <h5>BELIEBTE MARKEN</h5>
                    <div className={st.MMBottomLastImg}>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/DropDown4.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/fram.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/inspecto.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/DropDown3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={st.MainMenuBottomBackDrop}></div>
            </div>
            <div className={st.HMegaDropDown}>
              <h5 className="header-menu-link">Turnkey & Pakete</h5>
              <div className={st.MainMenuBottomDropdown}>
                <div className={st.MMBottomDropdownContent}>
                  <div className={st.MMBottomTopContent}>
                    <div className={st.MMBGridContent}>
                      <img src="/assets/img/Turnkey.png" alt="" />
                      <div className={st.MMBGridRight}>
                        <h6>Turnkey & Pakete</h6>
                        <p>Palletierer</p>
                        <p>Depalettierer</p>
                        <p>Case Erector</p>
                        <p>Starter Kits</p>
                      </div>
                    </div>
                  </div>
                  <div className={st.MMBottomLastContent}>
                    <h5>BELIEBTE MARKEN</h5>
                    <div className={st.MMBottomLastImg}>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/IBK.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/SKDK.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/OVISO.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/AGS.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={st.MainMenuBottomBackDrop}></div>
            </div>
            <div className={st.HMegaDropDown}>
              <h5 className="header-menu-link">Dienstleistungen</h5>
              <div className={st.MainMenuBottomDropdown}>
                <div className={st.MMBottomDropdownContent}>
                  <div className={st.MMBottomTopContent}>
                    <div className={st.MMBGridContent}>
                      <img src="/assets/img/CE.png" alt="" />
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
                  <div className={st.MMBottomLastContent}>
                    <h5>BELIEBTE MARKEN</h5>
                    <div className={st.MMBottomLastImg}>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/onR.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/robodk.png" alt="" />
                      </div>
                      <div className={st.MMBottomImgBox}>
                        <img src="/assets/img/Tesseract.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={st.MainMenuBottomBackDrop}></div>
            </div>
            <div className={st.HMegaDropDown}>
              <h5 className="header-menu-link">Alle Produkte</h5>
              <div className={st.MainMenuBottomDropdown}>
                <div className={st.MMBottomDropdownContent1}>
                  <div
                    className={st.MMBottomDropdownTabs + " " + "MMBottomDDTab"}
                  >
                    <Tab.Container defaultActiveKey="a1">
                      <Nav variant="tabs">
                        <Nav.Item>
                          <Nav.Link eventKey="a1">Komponenten</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="a2">Lösungen</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="a1">
                          <div className={st.MMBottomDropdownContent2}>
                            <div className={st.MMBottomTopContent2}>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/Greifer.png" alt="" />
                                <div className={st.MMBGridRight}>
                                  <h6>Roboter</h6>
                                  <p>Cobots</p>
                                  <p>Industrial Roboter</p>
                                </div>
                              </div>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/endofarm.png" alt="" />
                                <div className={st.MMBGridRight}>
                                  <h6>End of Arm</h6>
                                  <p>Greifer</p>
                                  <p>Effektor</p>
                                  <p>Accessories</p>
                                </div>
                              </div>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/vision.png" alt="" />
                                <div className={st.MMBGridRight}>
                                  <h6>Vision</h6>
                                  <p>Kamera</p>
                                  <p>Inspektions- lösungen</p>
                                </div>
                              </div>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/software.png" alt="" />
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
                                <img src="/assets/img/material.png" alt="" />
                                <div className={st.MMBGridRight}>
                                  <h6>Materialbereit- stellung</h6>
                                  <p>Materialzuführung</p>
                                </div>
                              </div>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/sich.png" alt="" />
                                <div className={st.MMBGridRight}>
                                  <h6>Sicherheits- technik</h6>
                                  <p>Schalter</p>
                                  <p>Lichtgitter</p>
                                  <p>Messgerät</p>
                                  <p>Radarsensor</p>
                                </div>
                              </div>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/trag.png" alt="" />
                                <div className={st.MMBGridRight}>
                                  <h6>Tragestruktur</h6>
                                  <p>Sockel</p>
                                </div>
                              </div>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/trag.png" alt="" />
                                <div className={st.MMBGridRight}>
                                  <h6>Steuerungs- technik</h6>
                                  <p>Industrie PC</p>
                                </div>
                              </div>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/TeachingKit.png" alt="" />
                                <div className={st.MMBGridRight}>
                                  <h6>Teaching Kit</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="a2">
                          <div className={st.MMBottomDropdownContent2}>
                            <div className={st.MMBottomTopContent}>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/Turnkey.png" alt="" />
                                <div className={st.MMBGridRight}>
                                  <h6>Turnkey Pakete</h6>
                                  <p>Palletierer</p>
                                  <p>Depalettierer</p>
                                  <p>Case Erector</p>
                                  <p>Starter Kits</p>
                                </div>
                              </div>
                              <div className={st.MMBGridContent}>
                                <img src="/assets/img/CE.png" alt="" />
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
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              <div className={st.MainMenuBottomBackDrop}></div>
            </div>
            <div className={st.HMegaDropDown}>
              <h5 className="header-menu-link">Hersteller</h5>
              <div className={st.MainMenuBottomDropdown}>
                <div className={st.MMBottomDropdownContent}>
                  <div className={st.MMBottomTopContent3}>
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
              </div>
              <div className={st.MainMenuBottomBackDrop}></div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER  */}
      {showMobHeader ? (
        <div className={st.mobHeaderOpenBoxContainer}>
          <div className="box-sm">
            <div className={st.HeaderMobDropdownOpt}>
              <div className={st.HeaderMobDDContent}>
                <h6>Produkte</h6>
                <ChevronRight color="#313130" />
              </div>
              <div className={st.HeaderMobDDContent}>
                <h6>Hersteller</h6>
                <ChevronRight color="#313130" />
              </div>
              <div className={st.HeaderMobDDContent}>
                <h6>Industrien</h6>
                <ChevronRight color="#313130" />
              </div>
              <div className={st.HeaderMobDDContent}>
                <h6>Ressourcen</h6>
                <ChevronRight color="#313130" />
              </div>
              <div className={st.HeaderMobDDContent1}>
                <h6>Unternehmen</h6>
                <ChevronRight color="#313130" />
              </div>
              <div className={st.HeaderMobDDContent}>
                <h6>UnchainedTV</h6>
              </div>
              <div className={st.HeaderMobDDContent}>
                <h6>Konfigurator</h6>
              </div>
              <div className={st.HeaderMobDDContent}>
                <h6>Integration Service</h6>
              </div>
            </div>
          </div>

          <div className={st.HeaderMobBackIconOpt}>
            <div className={st.HeaderMobBackOpt}>
              <div className="box-sm">
                <div className={st.HeaderMobBackOptContent}>
                  <ChevronLeft color="#313130" />
                  <h6>Zurück</h6>
                </div>
              </div>
            </div>
            <div className={st.HeaderMobSelectedOptContent}>
              <div className="box-sm">
                <div className={st.HeaderMobSelectedOpt}>
                  <h6>Produkte</h6>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Alle Produkte</h5>
                    <ArrowRight color="#313130" />
                  </div>
                </div>
                <div className={st.HeaderMobDropdownOpt}>
                  <h4>Komponenten</h4>
                  <div className={st.HeaderMobDDContent}>
                    <h6>Roboter</h6>
                    <ChevronRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobDDContent}>
                    <h6>End of Arm</h6>
                    <ChevronRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobDDContent}>
                    <h6>Vision</h6>
                    <ChevronRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobDDContent}>
                    <h6>Materialbereitstellung</h6>
                    <ChevronRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobDDContent}>
                    <h6>Sicherheitstechnik</h6>
                    <ChevronRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobDDContent}>
                    <h6>Tragestruktur</h6>
                    <ChevronRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobDDContent}>
                    <h6>Steuerungstechnik</h6>
                    <ChevronRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobDDContent}>
                    <h6>Teaching Kit</h6>
                    <ChevronRight color="#313130" />
                  </div>
                  <h4>Lösungen</h4>
                  <div className={st.HeaderMobDDContent}>
                    <h6>Turnkey & Pakete</h6>
                    <ChevronRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobDDContent}>
                    <h6>Dienstleistungen</h6>
                    <ChevronRight color="#313130" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={st.HeaderMobBackIconOpt}>
            <div className={st.HeaderMobBackOpt}>
              <div className="box-sm">
                <div className={st.HeaderMobBackOptContent}>
                  <ChevronLeft color="#313130" />
                  <h6>Zurück</h6>
                </div>
              </div>
            </div>
            <div className={st.HeaderMobSelectedOptContent}>
              <div className="box-sm">
                <div className={st.HeaderMobSelectedOpt}>
                  <h6>End of Arm</h6>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Alle End of Arm</h5>
                    <ArrowRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Greifer</h5>
                    <ArrowRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Effektor</h5>
                    <ArrowRight color="#313130" />
                  </div>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Accessories</h5>
                    <ArrowRight color="#313130" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={st.HeaderMobBackIconOpt}>
            <div className={st.HeaderMobBackOpt}>
              <div className="box-sm">
                <div className={st.HeaderMobBackOptContent}>
                  <ChevronLeft color="#313130" />
                  <h6>Zurück</h6>
                </div>
              </div>
            </div>
            <div className={st.HeaderMobSelectedOptContent}>
              <div className="box-sm">
                <div className={st.HeaderMobSelectedOpt}>
                  <h6>Ressourcen</h6>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>UnchainedTV</h5>
                  </div>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Konfigurator</h5>
                  </div>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Whitepaper</h5>
                  </div>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Case Studies</h5>
                  </div>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Roboter ROI-Berechnung</h5>
                  </div>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>Robotics News</h5>
                  </div>
                  <div className={st.HeaderMobSelectedContent}>
                    <h5>FAQ</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {lanMobModal ? (
        <LanuagesMobModal
          closelanmobModal={() => {
            setLanMobModal(false);
          }}
        />
      ) : null}
      <div className={st.SMMModal}>
        {SeaMobModal ? (
          <SearchMobModal
            closelanmobModal={() => {
              setSearchMobModal(false);
            }}
          />
        ) : null}
      </div>
    </header>
  );
};

export default Header;
