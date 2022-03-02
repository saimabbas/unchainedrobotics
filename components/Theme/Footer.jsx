import React from 'react'
import st from "../../styles/components/Footer.module.css"
const Footer = () => {
    return (
        <>
            <footer className={st.footer}>
                <div className="box-slg">
                    <div className={st.footerTopGrid}>
                        <main>
                            <h6>Products</h6>
                            <a href="#">Robots</a>
                            <a href="#">Grippers</a>
                            <a href="#">Cameras</a>
                            <a href="#">Starter Kits</a>
                            <a href="#">End of Arm Accessories</a>
                            <a href="#">Teaching Kits</a>
                            <a href="#">Tuenkey Solutions</a>
                        </main>
                        <main>
                            <h6>Brands</h6>
                            <a href="#">All Brands</a>
                            <a href="#">Universal Robots</a>
                            <a href="#">Omron</a>
                            <a href="#">Doosan</a>
                            <a href="#">OnRobot</a>
                            <a href="#">Hanwha</a>
                        </main>
                        <main>
                            <h6>Industry</h6>
                            <a href="#">All Industries</a>
                            <a href="#">Automobile</a>
                            <a href="#">Pharmaceuticals</a>
                            <a href="#">Electronics</a>
                            <a href="#">Mechanical Engineering</a>
                            <a href="#">Food & Beverages</a>
                            <a href="#">Chemicals</a>
                            <a href="#">Printing</a>
                            <a href="#">Metal</a>
                        </main>
                        <main>
                            <h6>Resources</h6>
                            <a href="#">Unchained.TV</a>
                            <a href="#">Configurator</a>
                            <a href="#">Whitepaper</a>
                            <a href="#">ROI Calculator</a>
                            <a href="#">Case Studies</a>
                            <a href="#">FAQ</a>
                        </main>
                        <main>
                            <h6>Company</h6>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </main>
                        <main>
                            <h6>Alternative Payment Methods</h6>
                            <a href="#">Leasing</a>
                            <a href="#">Installment Plan</a>
                        </main>
                    </div>
                    <div className={st.footerCenterGrid}>
                        <div className={st.footerCenterGridLeft}>
                            <div className="inputBox">
                                <label htmlFor="model">Never miss an update  </label>
                                <main>
                                    <input placeholder='Email Address' type="text" />
                                    <button className="button button-lg button-primary-gray">Subscribe</button>
                                </main>
                            </div>
                        </div>
                        <div className={st.footerCenterGridRight}>
                            <div className="inputBox">
                                <label htmlFor="">Connect with us</label>
                                <main>
                                    <a>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.983 7.19704C6.1914 7.19704 7.171 6.21744 7.171 5.00904C7.171 3.80065 6.1914 2.82104 4.983 2.82104C3.7746 2.82104 2.795 3.80065 2.795 5.00904C2.795 6.21744 3.7746 7.19704 4.983 7.19704Z" fill="black" />
                                            <path d="M9.237 8.85493V20.9939H13.006V14.9909C13.006 13.4069 13.304 11.8729 15.268 11.8729C17.205 11.8729 17.229 13.6839 17.229 15.0909V20.9949H21V14.3379C21 11.0679 20.296 8.55493 16.474 8.55493C14.639 8.55493 13.409 9.56193 12.906 10.5149H12.855V8.85493H9.237ZM3.095 8.85493H6.87V20.9939H3.095V8.85493Z" fill="black" />
                                        </svg>

                                    </a>
                                    <a>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.859 21V12.5539H7.62567V9.51287H9.859V6.91545C9.859 4.87438 11.1782 3 14.218 3C15.4488 3 16.3589 3.11799 16.3589 3.11799L16.2872 5.95778C16.2872 5.95778 15.359 5.94874 14.3462 5.94874C13.25 5.94874 13.0744 6.45391 13.0744 7.29237V9.51287H16.3743L16.2308 12.5539H13.0744V21H9.859Z" fill="#333333" />
                                        </svg>

                                    </a>
                                </main>
                            </div>
                        </div>
                    </div>

                </div>

            </footer><div className={st.footerBottomGridParent}>
                <div className="box-lga">
                    <div className={st.footerBottomGrid}>
                        <main>
                            <img src="/assets/img/logo-icon-white.svg" alt="" />
                            <h6>© 2020 Unchained Robotics</h6>
                        </main>
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Imprint</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer