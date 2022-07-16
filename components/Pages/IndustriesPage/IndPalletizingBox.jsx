import React from "react";
import TickCircle from "../../../public/assets/icons/TickCircle";
import Calendar from "../../../public/assets/icons/Calendar";
import ArrowRight from "../../../public/assets/icons/ArrowRight";
import st from "../../../styles/components/Pages/IndustriesPage/IndPalletizingBox.module.css";
import Image from "next/image";
const IndPalletizingBox = () => {
  return (
    <div className={st.IndPalletizingBox}>
      <div className={st.IndPallContent}>
        <div className={st.IndPallHeading}>
          <h4>01. Use Case: Palletizing</h4>
          <p>
            This is an area where robots have shined for a long time and often
            where it makes the most sense to begin automation. Palettization and
            depalletization of boxes and packaged goods can often be automated
            with off-the-shelf parts and limited integration time.{" "}
          </p>
        </div>
        <div className={st.IndPallReq}>
          <h5>Sample Requirements</h5>
          <p>Below is a sample requirement based on a printing business.</p>
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
              <Image
                src="/assets/img/PSol.png"
                alt="usecase img"
                width="150"
                height="150"
              />
              <div className={st.ISContent}>
                <p>Doosan Robotics H2017</p>
                <h3>€ 44.000</h3>
                <span>excl. MwSt</span>
              </div>
            </div>
            <div className={st.IndPalSolText}>
              <h6>A long reach with big capacity</h6>
              <p>
                With a reach of 1700 mm and a whopping capacity of 20 kg, this
                Korean brand robot will be able to efficiently palletize your
                boxes of heavy papers on a small area.
              </p>
            </div>
          </div>
          <div className={st.IndpalSolMain}>
            <div className={st.IndSolImgContent}>
              <Image
                src="/assets/img/material.png"
                alt="usecase img"
                width="150"
                height="150"
              />
              <div className={st.ISContent}>
                <p>OnRobot VGP20</p>
                <h3>€ 4.289</h3>
                <span>excl. MwSt</span>
              </div>
            </div>
            <div className={st.IndPalSolText}>
              <h6>Lightweight with a strong grip</h6>
              <p>
                With its sleek and slender weight of 2550 g, combined with the
                same capacity of the Doosan Robotics, made it the most suitable
                gripper for this use case.
              </p>
            </div>
          </div>
          <div className={st.IndpalSolMain + " " + st.IPNoBorder}>
            <div className={st.IndSolImgContent}>
              <Image
                src="/assets/img/Kamera.png"
                alt="usecase img"
                width="150"
                height="150"
              />
              <div className={st.ISContent}>
                <p>FRAMOS Industrial Depth Camera D435e Starter Kit</p>
                <h3>€ 899</h3>
                <span>excl. MwSt</span>
              </div>
            </div>
            <div className={st.IndPalSolText}>
              <h6>Fast and robust performance</h6>
              <p>
                This newly released FRAMOS camera will add the capability of
                recognizing and sorting different products, as efficiently as a
                human, with a fraction of the time.
              </p>
            </div>
          </div>
        </div>
        <div className={st.IndPallUseCase}>
          <h5>Do you have a similar use case?</h5>
          <p>
            We are committed to help factories find the right automation
            solution fit for their case. Simply get in touch with us, tell us
            about your project, and get free:
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
      <div className={st.IndPalletizingBoxSticky}>
        <Image
          src="/assets/img/Palletizing.jpg"
          alt="Palletizing"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
};

export default IndPalletizingBox;
