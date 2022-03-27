import React from "react";
import Facebook from "../../public/assets/icons/Facebook";
import LinkedIn from "../../public/assets/icons/LinkedIn";
import st from "../../styles/components/Footer.module.css";
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
                <label htmlFor="model">Never miss an update </label>
                <main>
                  <input placeholder="Email Address" type="text" />
                  <button className="button button-lg button-primary-gray">
                    Subscribe
                  </button>
                </main>
              </div>
            </div>
            <div className={st.footerCenterGridRight}>
              <div className="inputBox">
                <label htmlFor="">Connect with us</label>
                <main>
                  <button className="button btn-icon-md btn-icon-gray"><a href=""><LinkedIn color="#313130" /></a></button>
                  <button className="button btn-icon-md btn-icon-gray"><a href=""><Facebook color="#313130" /></a></button>
                </main>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={st.footerBottomGridParent}>
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
  );
};

export default Footer;
