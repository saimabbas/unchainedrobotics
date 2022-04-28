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
              <CategoriesFilterPC filterName="Categories">
                <a href="#"><i>Cobots</i> <span>2</span></a>
                <a href="#"><i>Grippers</i> <span>21</span></a>
                <a href="#"><i>Cameras</i> <span>17</span></a>
                <a href="#"><i>Starter kit</i> <span>4</span></a>
                <a href="#"><i>Turnkey solutions</i> <span>5</span></a>
                <a href="#"><i>Industrial robots</i><span>14</span></a>
                <a href="#"><i>Autonomous mobile robots</i><span></span></a>
                <a href="#"><i>End of arm accessories</i><span>7</span></a>
                <a href="#"><i>Conveyor belts</i><span>4</span></a>
                <a href="#"><i>Robot software</i><span>2</span></a>
              </CategoriesFilterPC>
              <BrandsFilterPC brandName="Brands">
                <div className="ds-input-icon">
                  <Search color="#9c9c9c" />
                  <input placeholder="Search Brand" type="text" />
                </div>
                <main className={st.brandsAccBodyGrid + " " + "ds-overflow"}>
                  <div className="checkbox">
                    <DSCheckBox id="abcid1" name="typefilter" checked />
                    <label htmlFor="abcid1">
                      Universal Robots <span>14</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid2" name="typefilter" checked />
                    <label htmlFor="abcid2">
                      Omron <span>3</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid3" name="typefilter" checked />
                    <label htmlFor="abcid3">
                      Doosan <span>7</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid4" name="typefilter" checked />
                    <label htmlFor="abcid4">
                      Hanwha <span>3</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid5" name="typefilter" />
                    <label htmlFor="abcid5">
                      OnRobot <span>5</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid6" name="typefilter" />
                    <label htmlFor="abcid6">
                      Dobot <span>2</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid1" name="typefilter" />
                    <label htmlFor="abcid1">
                      Universal Robots <span>14</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid2" name="typefilter" />
                    <label htmlFor="abcid2">
                      Omron <span>3</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid3" name="typefilter" />
                    <label htmlFor="abcid3">
                      Doosan <span>7</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid4" name="typefilter" />
                    <label htmlFor="abcid4">
                      Hanwha <span>3</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid5" name="typefilter" />
                    <label htmlFor="abcid5">
                      OnRobot <span>5</span>
                    </label>
                  </div>
                  <div className="checkbox">
                    <DSCheckBox id="abcid6" name="typefilter" />
                    <label htmlFor="abcid6">
                      Dobot <span>2</span>
                    </label>
                  </div>
                </main>
              </BrandsFilterPC>
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
