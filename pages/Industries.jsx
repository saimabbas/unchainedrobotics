import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/Industries.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import { Tab, Nav } from "react-bootstrap";
import ArrowRight from "../public/assets/icons/ArrowRight";
import Envelope from "../public/assets/icons/Envelope";
import CheckIcon from "../public/assets/icons/CheckIcon";
import CloseIcon from "../public/assets/icons/CloseIcon";
import ChatContainer from "../components/Pages/AboutPage/ChatContainer";
import FAQCard from "../components/Pages/ProductPage/FAQCard";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Safe from "../public/assets/icons/Safe";
import Puzzle from "../public/assets/icons/Puzzle";
import Adaptable from "../public/assets/icons/Adaptable";
import TickCircle from "../public/assets/icons/TickCircle";
import Calendar from "../public/assets/icons/Calendar";
import AutoMob from "../public/assets/icons/AutoMob";
import Pharma from "../public/assets/icons/Pharma";
import Electrical from "../public/assets/icons/Electrical";
import Mechanical from "../public/assets/icons/Mechanical";
import Chemical from "../public/assets/icons/Chemical";
import Metal from "../public/assets/icons/Metal";
import Food from "../public/assets/icons/Food";

const Industries = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Lease Page</title>
      </Head>
      <div className={st.AllBrands}>
        <div className="box-sm">
          <div className={st.IndustriesHeroSection}>
            <img src="./assets/img/IndHero.png" alt="" />
            <div className={st.IndHeroContent}>
              <p>Automation solution for Printing Industry</p>
              <h4>
                Automate end processes for a more efficient & competitive
                printing business
              </h4>
              <p>
                Unchained Robotics provides solution kits of cobot, camera and
                grippers for various printing industry use cases, such as
                palletizing, inspecting, sorting and packaging.
              </p>
              <div className={st.IndHeroPoints}>
                <h6>Palletizing</h6>
                <h6>Packaging</h6>
                <h6>Inspecting & Sorting</h6>
              </div>
            </div>
          </div>
          <div className={st.PioneerBox}>
            <h4>Printing Industry as a Pioneer in Industry 4.0</h4>
            <p>
              As the Print Industry adapts to a digital world, it has become a
              fervent adopter of automation and a pioneer in Industry 4.0. A
              combination of factors has been driving this change, chief among
              them the advent of digital and a rapidly aging workforce in many
              factories. Rising to meet these challenges has not always been
              easy, but the print industry has proven time and again and ability
              to adapt to a variety of technological revolutions. Robotics and
              automation are already helping innumerable businesses in the print
              industry rise to the challenges of today.{" "}
            </p>
          </div>
          <div className={st.IndCollabBox}>
            <div className={st.IndCollabHeading}>
              <h4>
                Why printing companies need to use collaborative robots (cobots)
              </h4>
              <p>Benefits of collaborative robots</p>
            </div>
            <div className={st.IndCollabGrid}>
              <div className={st.IndCollabGridContent}>
                <Safe />
                <h6>Safe</h6>
                <p>
                  Cobots meet strict safety requirements that allow for their
                  utilization in close proximity to people or even work directly
                  with them as part of a hybrid process. This allows the robot
                  to perform more human-like tasks or simply make a current
                  human worker more efficient.{" "}
                </p>
              </div>
              <div className={st.IndCollabGridContent}>
                <Puzzle />
                <h6>Easy to integrate</h6>
                <p>
                  Thanks to this capacity for collaboration, printers do not
                  need to completely rebuild their processes and lines around
                  robots themselves, as they often would with traditional
                  industrial robots. This means that previous investments in
                  machinery, be it presses, cutters, folding equipment, etc. can
                  be partially or fully automated without massive changes to the
                  production line or the deprecation recently purchased
                  machinery.
                </p>
              </div>
              <div className={st.IndCollabGridContent}>
                <Adaptable />
                <h6>Adaptable</h6>
                <p>
                  Collaborative robots are in general much easier to program and
                  repurpose than traditional industrial robots, allowing for
                  much greater adaptability. 
                </p>
              </div>
            </div>
          </div>
          <div className={st.IndPalletizingBox}>
            <div className={st.IndPallContent}>
              <div className={st.IndPallHeading}>
                <h4>01. Use Case: Palletizing</h4>
                <p>
                  This is an area where robots have shined for a long time and
                  often where it makes the most sense to begin automation.
                  Palettization and depalletization of boxes and packaged goods
                  can often be automated with off-the-shelf parts and limited
                  integration time.{" "}
                </p>
              </div>
              <div className={st.IndPallReq}>
                <h5>Sample Requirements</h5>
                <p>
                  Below is a sample requirement based on a printing business.
                </p>
                <div className={st.IndPallReqGrid}>
                  <div className={st.IndPalGridContent}>
                    <span>ELEMENT</span>
                    <h5>Small boxes</h5>
                    <p>300 x 300 x 200 mm</p>
                  </div>
                  <div className={st.IndPalGridContent}>
                    <span>CAPACITY</span>
                    <h5>
                      15 <br /> boxes/minute
                    </h5>
                    <p></p>
                  </div>
                  <div className={st.IndPalGridContent}>
                    <span>WEIGHT</span>
                    <h5>9 kg</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className={st.IndPallSolution}>
                <h5>Proposed Solution</h5>
                <div className={st.IndpalSolMain}>
                  <div className={st.IndSolImgContent}>
                    <img src="./assets/img/PSol.png" alt="" />
                    <div className={st.ISContent}>
                      <p>Doosan Robotics H2017</p>
                      <h3>€ 44.000</h3>
                      <span>excl. MwSt</span>
                    </div>
                  </div>
                  <div className={st.IndPalSolText}>
                    <h6>A long reach with big capacity</h6>
                    <p>
                      With a reach of 1700 mm and a whopping capacity of 20 kg,
                      this Korean brand robot will be able to efficiently
                      palletize your boxes of heavy papers on a small area.
                    </p>
                  </div>
                </div>
                <div className={st.IndpalSolMain}>
                  <div className={st.IndSolImgContent}>
                    <img src="./assets/img/material.png" alt="" />
                    <div className={st.ISContent}>
                      <p>OnRobot VGP20</p>
                      <h3>€ 4.289</h3>
                      <span>excl. MwSt</span>
                    </div>
                  </div>
                  <div className={st.IndPalSolText}>
                    <h6>Lightweight with a strong grip</h6>
                    <p>
                      With its sleek and slender weight of 2550 g, combined with
                      the same capacity of the Doosan Robotics, made it the most
                      suitable gripper for this use case.
                    </p>
                  </div>
                </div>
                <div className={st.IndpalSolMain + " " + st.IPNoBorder}>
                  <div className={st.IndSolImgContent}>
                    <img src="./assets/img/Kamera.png" alt="" />
                    <div className={st.ISContent}>
                      <p>FRAMOS Industrial Depth Camera D435e Starter Kit</p>
                      <h3>€ 899</h3>
                      <span>excl. MwSt</span>
                    </div>
                  </div>
                  <div className={st.IndPalSolText}>
                    <h6>Fast and robust performance</h6>
                    <p>
                      This newly released FRAMOS camera will add the capability
                      of recognizing and sorting different products, as
                      efficiently as a human, with a fraction of the time.
                    </p>
                  </div>
                </div>
              </div>
              <div className={st.IndPallUseCase}>
                <h5>Do you have a similar use case?</h5>
                <p>
                  We are committed to help factories find the right automation
                  solution fit for their case. Simply get in touch with us, tell
                  us about your project, and get free:
                </p>
                <div className={st.IPUseCasePoints}>
                  <div className={st.IPUCPointText}>
                    <TickCircle />
                    <p>consultation</p>
                  </div>
                  <div className={st.IPUCPointText}>
                    <TickCircle />
                    <p>3D simulation</p>
                  </div>
                  <div className={st.IPUCPointText}>
                    <TickCircle />
                    <p>feasibility report</p>
                  </div>
                </div>
                <button className="button button-lg button-primary-gray leading-icon">
                  <Calendar /> Book a call
                </button>
                <h2>
                  Or, send a message <ArrowRight color="#313130" />{" "}
                </h2>
              </div>
            </div>
            <img src="./assets/img/Palletizing.jpg" alt="" />
          </div>
          <div className={st.IndPallPack}>
            <h4>02. Use Case: Packaging</h4>
            <p>
              In the same vein as palettizing, the packaging of bunched
              brochures, magazines, flyers, etc. is also a frequently automated
              solution. Modern robots can prepare a box, package the goods, seal
              it, and send it on its way.{" "}
            </p>
            <h5>Do you have a similar use case?</h5>
            <p>
              We are committed to help factories find the right automation
              solution fit for their case. Simply get in touch with us, tell us
              about your project, and get free consultation, 3D simulation, plus
              a feasibility report.
            </p>
            <button className="button button-sm button-secondary-gray leading-icon">
              <Envelope /> Send us a message
            </button>
          </div>
          <div className={st.IndPallPack}>
            <h4>03. Use Case: Inspection and Sorting</h4>
            <p>
              Thanks to modern Machine Vision solutions, many quality control
              and sorting tasks can be automated. This can free up personnel for
              more “human” tasks that can be more difficult to automate.
            </p>
            <h5>Have a project in mind?</h5>
            <p>
              If the process at your factory is anything like inspection and
              sorting, we can help you get started. Simply get in touch with us,
              tell us about your project, and get free consultation, 3D
              simulation, plus a feasibility report.
            </p>
            <button className="button button-sm button-secondary-gray leading-icon">
              <Envelope /> Send us a message
            </button>
          </div>
          <div className={st.IndPallStories}>
            <h4>Success Stories</h4>
            <h5>from our partner</h5>
            <div className={st.IPStoriesGrid}>
              <div className={st.IPStoryContent}>
                <img src="./assets/img/SS1.png" alt="" />
                <div className={st.IPStoryText}>
                  <span>Use Cases</span>
                  <h5>
                    Freeing up 150 hours in four months at Danish printing
                    company
                  </h5>
                </div>
              </div>
              <div className={st.IPStoryContent}>
                <img src="./assets/img/SS2.png" alt="" />
                <div className={st.IPStoryText}>
                  <span>Use Cases</span>
                  <h5>
                    Increasing efficiency by 217 % at Germany’s oldest
                    puublisher
                  </h5>
                </div>
              </div>
              <div className={st.IPStoryContent}>
                <img src="./assets/img/SS3.png" alt="" />
                <div className={st.IPStoryText}>
                  <span>Use Cases</span>
                  <h5>
                    Digital transformation at local printing business in Siegen
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={st.IndPallCaseStudy}>
          <div className="box-sm">
            <div className={st.IPCStudyContent}>
              <h4>Case Study</h4>
              <div className={st.IPStoryContent + " " + st.IPCSBox}>
                <img src="./assets/img/SS4.png" alt="" />
                <div className={st.IPStoryText}>
                  <span>Use Cases</span>
                  <h5>
                    The integration of a robot for palletizing at Media Print
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-sm">
          <div className={st.IndCustomSolution}>
            <div className={st.IndCSText}>
              <h4>Find custom solution</h4>
              <h5>for Printing Industry</h5>
              <p>
                Answer some questions in 5 minutes and we will propose a
                customized solution in the configurator
              </p>
              <button className="button button-lg button-primary-gray trailing-icon">
                Find your solution <ArrowRight color="#fff" />
              </button>
            </div>
            <img src="./assets/img/IC.jpg" alt="" />
          </div>
        </div>
        <div className={st.IndMoreInd}>
          <div className="box-sm">
            <div className={st.IndMoreIndContent}>
              <h5>More Industries</h5>
              <div className={st.IMPGrid}>
                <div className={st.IMPGridContent}>
                  <AutoMob />
                  <p>Automobile</p>
                </div>
                <div className={st.IMPGridContent}>
                  <Pharma />
                  <p>Pharmaceutical</p>
                </div>
                <div className={st.IMPGridContent}>
                  <Electrical />
                  <p>Electrical Engineering</p>
                </div>
                <div className={st.IMPGridContent}>
                  <Mechanical />
                  <p>Mechanical Engineering</p>
                </div>
                <div className={st.IMPGridContent}>
                  <Chemical />
                  <p>Chemical</p>
                </div>
                <div className={st.IMPGridContent}>
                  <Metal />
                  <p>Metal</p>
                </div>
                <div className={st.IMPGridContent}>
                  <Food />
                  <p>Food</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Industries;
