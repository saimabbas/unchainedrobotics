import React from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/Industries.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import IndustriesHeroSection from "../components/Pages/IndustriesPage/IndustriesHeroSection";
import PioneerBox from "../components/Pages/IndustriesPage/PioneerBox";
import IndCollabBox from "../components/Pages/IndustriesPage/IndCollabBox";
import IndPalletizingBox from "../components/Pages/IndustriesPage/IndPalletizingBox";
import IndPallPack from "../components/Pages/IndustriesPage/IndPallPack";
import IndPallStories from "../components/Pages/IndustriesPage/IndPallStories";
import IndPallCaseStudy from "../components/Pages/IndustriesPage/IndPallCaseStudy";
import IndCustomSolution from "../components/Pages/IndustriesPage/IndCustomSolution";
import IndMoreIndContent from "../components/Pages/IndustriesPage/IndMoreIndContent";

const Industries = () => {
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Industries Page</title>
      </Head>
      <div className={st.AllBrands}>
        <div className="box-sm">
          <IndustriesHeroSection />
          <PioneerBox />
          <IndCollabBox />
          <IndPalletizingBox />
          <IndPallPack
            ippHeading="02. Use Case: Packaging"
            ippPara="In the same vein as palettizing, the packaging of bunched
          brochures, magazines, flyers, etc. is also a frequently automated
          solution. Modern robots can prepare a box, package the goods, seal
          it, and send it on its way."
            ippQues="Do you have a similar use case?"
            ippPara2="We are committed to help factories find the right automation
          solution fit for their case. Simply get in touch with us, tell us
          about your project, and get free consultation, 3D simulation, plus
          a feasibility report."
          />
          <IndPallPack
            ippHeading="03. Use Case: Inspection and Sorting"
            ippPara=" Thanks to modern Machine Vision solutions, many quality control
            and sorting tasks can be automated. This can free up personnel for
            more “human” tasks that can be more difficult to automate."
            ippQues="Have a project in mind?"
            ippPara2="If the process at your factory is anything like inspection and
            sorting, we can help you get started. Simply get in touch with us,
            tell us about your project, and get free consultation, 3D
            simulation, plus a feasibility report."
          />
          <IndPallStories />
        </div>
        <div className={st.IndPallCaseStudy}>
          <div className="box-sm">
            <IndPallCaseStudy />
          </div>
        </div>

        <div className="box-sm">
          <IndCustomSolution />
        </div>
        <div className={st.IndMoreInd}>
          <div className="box-sm">
            <IndMoreIndContent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Industries;
