import React from "react";
import st from "../../styles/components/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Cross from "../../public/assets/icons/Cross";
import Cart from "../../public/assets/icons/Cart";
import Globe from "../../public/assets/icons/Globe";
import User from "../../public/assets/icons/User";
import ChevronDown from "../../public/assets/icons/ChevronDown";
import ArrowRight from "../../public/assets/icons/ArrowRight";
import Menu from "../../public/assets/icons/Menu";
import Search from "../../public/assets/icons/Search";
import { MdMenu } from "react-icons/md";
import BookmarkOutlined from "../../public/assets/icons/BookmarkOutlined";
import Envelope from "../../public/assets/icons/Envelope";

const Header = () => {
  return (
    <header className={st.MainMenuHeader}>
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
            <MdMenu className={st.HeaderMenuIcon} />
            <div className={st.headerContentBottom}>
              <ul>
                <li className={st.MMCRessourcen}>
                  <a href="#">
                    Ressourcen
                    <ChevronDown color="#313130" />
                  </a>
                  <div className={st.RessourcenOptions}>
                    <a href="#">UnchainedTV</a>
                    <a href="#">Konfigurator</a>
                    <a href="#">Whitepaper</a>
                    <a href="#">Case Studies</a>
                    <a href="#">Roboter ROI-Berechnung</a>
                    <a href="#">Robotics News</a>
                    <a href="#">FAQ</a>
                  </div>
                </li>
                <li className={st.MMCRessourcen}>
                  <a href="#">
                    Unternehmen
                    <ChevronDown color="#313130" />
                  </a>
                  <div className={st.RessourcenOptions}>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Kontakt</a>
                    <a href="#">Presse</a>
                    <a href="#">Karriere</a>
                  </div>
                </li>
              </ul>
            </div>
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
          </div>
          <div className={st.MMCenterRightHeader}>
            <span className={st.headerLinksPC}>
              <div className={st.MMCLanguage}>
                <a className={st.headerLink}>
                  <Globe color="#313130" />
                  <i>DE</i>
                </a>
                <div className={st.LanguageOptions}>
                  <a href="#">DE (Deutsch)</a>
                  <a href="#">EN (English)</a>
                </div>
              </div>
            </span>
            <span className={st.headerLinksPC}>
              <Link href="#">
                <a className={st.headerLink}>
                  <User color="#313130" />
                </a>
              </Link>
            </span>
            <span className={st.headerLinksPC}>
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
                <div className={st.CartOptions}>
                  <h4>Cart</h4>
                  <div className={st.CartCenterContent}>
                    <div className={st.CCCProduct}>
                      <img src="/assets/img/AddToCart.png" alt="Product Img" />
                      <div className={st.CCCProductInfo}>
                        <h5>Doosan Robotics M1013</h5>
                        <h6>
                          32,000 € <span>excl. MwSt.</span>
                        </h6>
                      </div>
                      <Cross />
                    </div>
                    <div className={st.CCCProduct}>
                      <img src="/assets/img/AddToCart.png" alt="Product Img" />
                      <div className={st.CCCProductInfo}>
                        <h5>Doosan Robotics M1013</h5>
                        <h6>
                          32,000 € <span>excl. MwSt.</span>
                        </h6>
                      </div>
                      <Cross />
                    </div>
                    <div className={st.CCCProduct}>
                      <img src="/assets/img/AddToCart.png" alt="Product Img" />
                      <div className={st.CCCProductInfo}>
                        <h5>Doosan Robotics M1013</h5>
                        <h6>
                          32,000 € <span>excl. MwSt.</span>
                        </h6>
                      </div>
                      <Cross />
                    </div>
                    <div className={st.CCCProduct}>
                      <img src="/assets/img/AddToCart.png" alt="Product Img" />
                      <div className={st.CCCProductInfo}>
                        <h5>Doosan Robotics M1013</h5>
                        <h6>
                          32,000 € <span>excl. MwSt.</span>
                        </h6>
                      </div>
                      <Cross />
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
            </span>
          </div>
        </div>
        <div className={st.MainMenuBottomHeader}>
          <h5 className={st.MMBottomActive}>Roboter</h5>
          <h5>End of Arm</h5>
          <h5>Vision</h5>
          <h5>Turnkey & Pakete</h5>
          <h5>Dienstleistungen</h5>
          <h5>Alle Produkte</h5>
          <h5>Hersteller</h5>
        </div>
      </div>
    </header>
    //   <header className={st.header}>
    //   <div className="bsox-lg">
    //     <div className={st.headerContent}>
    //       <div className={st.headerContentTop}>
    //         {/* <Image
    //                       src="/assets/img/logo-white.svg"
    //                       alt="Logo Black"
    //                       width={150}
    //                       height={40}
    //                   /> */}
    //         <img src="/assets/img/logo-white.svg" alt="Logo Black" />
    //         <div className={st.headerSearchBar}>
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               clipRule="evenodd"
    //               d="M13.7492 5.18126C12.7343 4.50429 11.5414 4.14355 10.3215 4.14467C8.68914 4.15355 7.12628 4.80632 5.97256 5.9611C4.81883 7.11588 4.16749 8.67933 4.1601 10.3117C4.1601 11.5316 4.52193 12.7242 5.19982 13.7385C5.87771 14.7527 6.84119 15.5432 7.9684 16.0098C9.0956 16.4764 10.3359 16.5982 11.5323 16.3598C12.7287 16.1214 13.8276 15.5334 14.6898 14.6704C15.5521 13.8074 16.139 12.708 16.3763 11.5113C16.6136 10.3147 16.4907 9.07453 16.0231 7.94776C15.5554 6.82098 14.7641 5.85822 13.7492 5.18126ZM6.25383 4.22402C7.45786 3.41951 8.8734 2.99011 10.3215 2.99011C12.2633 2.99011 14.1255 3.76149 15.4986 5.13455C16.8717 6.50761 17.643 8.36987 17.643 10.3117C17.643 11.7597 17.2136 13.1753 16.4091 14.3793C15.6046 15.5833 14.4612 16.5218 13.1233 17.0759C11.7855 17.6301 10.3134 17.7751 8.89311 17.4926C7.47286 17.21 6.16829 16.5127 5.14435 15.4888C4.12041 14.4649 3.4231 13.1603 3.14059 11.74C2.85809 10.3198 3.00308 8.84767 3.55723 7.50983C4.11138 6.17199 5.04981 5.02852 6.25383 4.22402ZM16.6856 15.8704L20.8364 20.0493C20.8885 20.1019 20.9298 20.1641 20.9579 20.2326C20.9859 20.3011 21.0003 20.3744 21 20.4484C20.9997 20.5224 20.9849 20.5956 20.9563 20.6639C20.9278 20.7321 20.8861 20.7941 20.8335 20.8463C20.781 20.8984 20.7188 20.9397 20.6503 20.9678C20.5818 20.9958 20.5085 21.0102 20.4345 21.0099C20.3605 21.0096 20.2873 20.9948 20.219 20.9662C20.1507 20.9377 20.0888 20.896 20.0366 20.8434L15.8859 16.6645L16.6856 15.8704Z"
    //               fill="#828282"
    //             />
    //           </svg>

    //           <input placeholder="Search Unchained Robotics" type="text" />
    //         </div>

    //         <main>
    //           <span className={st.headerLinksPC}>
    //             <Link href="#">
    //               <a className={st.headerLink}>
    //                 <Globe color="#fff" />
    //                 <i>DE</i>
    //               </a>
    //             </Link>
    //           </span>
    //           <span className={st.headerLinksPC}>
    //             <Link href="#">
    //               <a className={st.headerLink}>
    //                 <User color="#fff" />
    //                 <i>Login</i>
    //               </a>
    //             </Link>
    //           </span>
    //           <span className={st.headerLinksMob}>
    //             <Link href="#">
    //               <a className={st.headerLink}>
    //                 <Search color="#fff" />
    //                 <i>Search</i>
    //               </a>
    //             </Link>
    //           </span>

    //           <span className={st.headerLinksBoth}>
    //             <Link href="#">
    //               <a className={st.headerLink}>
    //                 <Cart color="#fff" />
    //                 <i>Cart (0)</i>
    //               </a>
    //             </Link>
    //           </span>
    //           <span className={st.headerLinksMob}>
    //             <Link href="#">
    //               <a className={st.headerLink}>
    //                 <Menu color="#fff" />
    //                 <i>Menu</i>
    //               </a>
    //             </Link>
    //           </span>
    //         </main>
    //       </div>
    //       <div className={st.headerContentBottom}>
    //         <ul>
    //           <li>
    //             <a href="#">
    //               Products
    //               <ChevronDown color="#fff" />
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#">
    //               Brands
    //               <ChevronDown color="#fff" />
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#">
    //               Industry
    //               <ChevronDown color="#fff" />
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#">
    //               Resources
    //               <ChevronDown color="#fff" />
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#">
    //               Company
    //               <ChevronDown color="#fff" />
    //             </a>
    //           </li>
    //         </ul>
    //         <a className={st.takeOurQuiz} href="#">
    //           <p>Take our quiz</p>
    //           <ArrowRight color="#1fdb84" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
