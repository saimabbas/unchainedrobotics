import React, { useRef, useState } from "react";
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/Home.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import SimilarProductsCard from "../components/Pages/ProductPage/SimilarProductsCard";
import ColoredCart from "../public/assets/icons/ColoredCart";
import ColoredConsultation from "../public/assets/icons/ColoredConsultation";
import ColoredShipping from "../public/assets/icons/ColoredShipping";
import ArrowRight from "../public/assets/icons/ArrowRight";
import ChevronRight from "../public/assets/icons/ChevronRight";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Form } from "react-bootstrap";
import HomeHeroSection from "../components/Pages/HomePage/HomeHeroSection";
import TopBrandsSection from "../components/Pages/HomePage/TopBrandsSection";
import HomeBanner1 from "../components/Pages/HomePage/HomeBanner1";
import HomeBanner2 from "../components/Pages/HomePage/HomeBanner2";
import Testimonials from "../components/Pages/HomePage/Testimonials";
import HowItWorks from "../components/Pages/HomePage/HowItWorks";

const Home = () => {
  const doIt = useRef();
  const ourSupport = useRef();
  const [showWorkGrid, setShowWorkGrid] = useState(true);
  const selectShortlistedApplicant = (e) => {
    const checked = e.target.checked;
    setShowWorkGrid(false);
    if (checked) {
      doIt.current.style.opacity = 0.25;
      ourSupport.current.style.opacity = 1;
      setShowWorkGrid(false);
    } else {
      doIt.current.style.opacity = 1;
      ourSupport.current.style.opacity = 0.25;
      setShowWorkGrid(true);
    }
  };
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={st.HomePage}>
        <div className={st.herobgcolor}>
          <div className="box-sm">
            <HomeHeroSection />
          </div>
        </div>
        <div className="box-sm">
          <div className={st.homeshop}>
            <div className={st.homecontent}>
              <h2>Why shop at Unchained Robotics</h2>
            </div>
            <div className={st.homemainicon}>
              <div className={st.homeicon}>
                <ColoredCart />
              </div>
              <h3>Large collection of robot brands</h3>
            </div>
            <div className={st.homemainicon}>
              <div className={st.homeicon}>
                <ColoredConsultation />
              </div>
              <h3>Large collection of robot brands</h3>
            </div>
            <div className={st.homemainicon}>
              <div className={st.homeicon}>
                <ColoredShipping />
              </div>
              <h3>Large collection of robot brands</h3>
            </div>
          </div>
          <div className={st.trendingproducts}>
            <h4>Trending Products</h4>
          </div>
          <div className={st.productsGrid}>
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
              isSale={true}
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              variablePrice="28.900,00€ – 32.000,00€"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              beforeSalePrice="44.000 €"
              afterSalePrice="40.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017 can be a very long"
              singlePrice="44.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
            />
            <SimilarProductsCard
              hoverImg="/assets/img/Robots/rob-2.png"
              defaultImg="/assets/img/Robots/rob-3.png"
              robotType="Cobot, Dooson"
              robotName="Doosan Robotics H2017"
              singlePrice="44.000 €"
            />
          </div>
          <div className={st.trendingproductsbtn}>
            <button className="button button-lg button-primary-gray trailing-icon">
              View all products <ArrowRight color="#fff" />{" "}
            </button>
          </div>
          <div className={st.trendingproducts}>
            <h4>Top brands this months</h4>
          </div>
          <TopBrandsSection />
          <div className={st.trendingproductsbtn}>
            <button className="button button-lg button-secondary-gray">
              View all brands <ArrowRight color="#fff" />
            </button>
          </div>
          <HomeBanner1 />
          <HomeBanner2 />
          <Testimonials />
          <HowItWorks />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
