import React, { useState } from "react";
import BreadCrumbs from "../components/Theme/BreadCrumbs";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import customGlobals from "../styles/CustomGlobals.module.css";
import Head from "next/head";
import Link from "next/link";
import st from "../styles/pages/ShopPage.module.css";
import AllProductsSlider from "../components/Pages/ShopPage/AllProductsSlider";
import SimilarProductsCard from "../components/Pages/ProductPage/SimilarProductsCard";
import TakeOutQuizBanner from "../components/Pages/ShopPage/TakeOutQuizBanner";
import CategoriesFilterPC from "../components/Pages/ShopPage/CategoriesFilterPC";
import TypeFilterPC from "../components/Pages/ShopPage/TypeFilterPC";
import BrandsFilterPC from "../components/Pages/ShopPage/BrandsFilterPC";
import PriceFilterPC from "../components/Pages/ShopPage/PriceFilterPC";
import SortIcon from "../public/assets/icons/SortIcon";
import FilterIcon from "../public/assets/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import SortModalMOB from "../components/Pages/ShopPage/SortModalMOB";
import SortFilterBoxMOB from "../components/Pages/ShopPage/SortFilterBoxMOB";
const ShopPage = () => {
  const [sortMob, setSortMob] = useState(false);
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Shop Details</title>
      </Head>
      <div className={st.ShopPage}>
        <div className="box-sm">
          <BreadCrumbs />
          <div className={st.ShopPageGrid}>
            <div className={st.ShopPageGridLeft}>
              <CategoriesFilterPC />
              <BrandsFilterPC />
              <PriceFilterPC />
              <TypeFilterPC />
              <button className="button button-lg button-secondary-gray">
                Reset
              </button>
            </div>
            <div className={st.ShopPageGridRight}>
              <h2 className={st.ShopPageHeading}>
                All Products <span>141</span>
              </h2>
              <AllProductsSlider />
              <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                spaceBetween={20}
                className="ds-product-categories-slider"
              >
                <SwiperSlide>
                  <div className="ds-chip active">Cobots</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ds-chip">Grippers</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ds-chip">End of arm accessories</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ds-chip">Starter Kits</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ds-chip">Cameras</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ds-chip">Cobots</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ds-chip">Grippers</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ds-chip">Cameras</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ds-chip">Starters</div>
                </SwiperSlide>
              </Swiper>
              <SortFilterBoxMOB
                openSortModalMob={() => {
                  setSortMob(true);
                }}
              />
              <div className={st.sortByBox}>
                <label htmlFor="">Sort By</label>
                <select fillRule className="ds-input" name="" id="">
                  <option value="Relevance">Relevance</option>
                  <option value="Best Selling">Best Selling</option>
                </select>
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
              <TakeOutQuizBanner />
            </div>
          </div>
          {sortMob ? (
            <SortModalMOB
              closeSortModal={() => {
                setSortMob(false);
              }}
            />
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
