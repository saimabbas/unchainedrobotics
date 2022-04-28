import React, { useState } from "react";
import Head from "next/head";
import BreadCrumbs from "../components/Theme/BreadCrumbs";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/ProductGridView.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import CategoriesFilterPC from "../components/Pages/ShopPage/CategoriesFilterPC";
import BrandsFilterPC from "../components/Pages/ShopPage/BrandsFilterPC";
import Search from "../public/assets/icons/Search";
import FeaturedOnTVCard from "../components/Pages/ProductPage/FeaturedOnTVCard";
import DSCheckBox from "../components/Theme/DSCheckBox";
import SortFilterBoxMOB from "../components/Pages/ShopPage/SortFilterBoxMOB";
import SortModalMOB from "../components/Pages/ShopPage/SortModalMOB";

const ProductGridView = () => {
  const [sortMob, setSortMob] = useState(false);
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Product Grid View</title>
      </Head>
      <div className={st.productgridview}>
        <div className="box-sm">
          <BreadCrumbs />
          <div className={st.productgridhead}>
            <h6>
              Videos <span> 141</span>
            </h6>
          </div>
          <SortFilterBoxMOB
            openSortModalMob={() => {
              setSortMob(true);
            }}
          />
          <div className={st.brandPageContentBox}>
            <div className={st.BrandPageGrid}>
              <div className={st.BrandPageGridLeft}>
                <CategoriesFilterPC filterName="Industry Categories">
                  <a href="#">
                    <i>Automobile</i> <span>2</span>
                  </a>
                  <a href="#">
                    <i>Pharmaceutical</i> <span>21</span>
                  </a>
                  <a href="#">
                    <i>Electrical Engineering</i> <span>17</span>
                  </a>
                  <a href="#">
                    <i>Mechanical Engineering</i> <span>4</span>
                  </a>
                  <a href="#">
                    <i>Chemical</i> <span>5</span>
                  </a>
                  <a href="#">
                    <i>Metal</i>
                    <span>14</span>
                  </a>
                  <a href="#">
                    <i>Food</i>
                    <span>3</span>
                  </a>
                </CategoriesFilterPC>
                <CategoriesFilterPC filterName="Use Case Categories">
                  <a href="#">
                    <i>Palletizing</i> <span>4</span>
                  </a>
                  <a href="#">
                    <i>Use Case X</i> <span>2</span>
                  </a>
                  <a href="#">
                    <i>Use Case Y</i> <span>21</span>
                  </a>
                  <a href="#">
                    <i>Use Case Z</i> <span>17</span>
                  </a>
                  <a href="#">
                    <i>Pick & Place</i> <span>4</span>
                  </a>
                </CategoriesFilterPC>

                <BrandsFilterPC brandName="Brands">
                  <div className="ds-input-icon">
                    <Search color="#9c9c9c" />
                    <input placeholder="Search Brand" type="text" />
                  </div>
                  <main className={st.brandsAccBodyGrid + " " + "ds-overflow"}>
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
                  </main>
                </BrandsFilterPC>
                <BrandsFilterPC brandName="Search">
                  <div className="ds-input-icon">
                    <Search color="#9c9c9c" />
                    <input placeholder="Search Video" type="text" />
                  </div>
                </BrandsFilterPC>
                <button className="button button-lg button-secondary-gray">
                  Reset
                </button>
              </div>
              <div className={st.BrandPageGridRight}>
                <div className={st.sortByBox}>
                  <label htmlFor="">Sort By</label>
                  <select className="ds-input" name="" id="">
                    <option value="Relevance">Relevance</option>
                    <option value="Best Selling">Best Selling</option>
                  </select>
                </div>
                <div className={st.productgridbox}>
                  <FeaturedOnTVCard
                    img="/assets/img/Robots/rob-1.png"
                    tag="Palletizing"
                    description="Palletizing ... "
                    time="4:35"
                  />
                  <FeaturedOnTVCard
                    img="/assets/img/Robots/rob-1.png"
                    tag="Use Case X"
                    description="UR10 Cobot Solves Labor Shortage and Automates Production"
                    time="4:35"
                  />
                  <FeaturedOnTVCard
                    img="/assets/img/Robots/rob-1.png"
                    tag="Use Case Y"
                    description="Maintenance free UR cobots operate continuously in harsh environment"
                    time="4:35"
                  />
                  <FeaturedOnTVCard
                    img="/assets/img/Robots/rob-1.png"
                    tag="Use Case Z"
                    description="The most innovative camera control system by ARCAM ROBOTIC SYSTEM"
                    time="4:35"
                  />
                  <FeaturedOnTVCard
                    img="/assets/img/Robots/rob-1.png"
                    tag="Pick & Place"
                    description="Ardor closes the profitability gap with UR cobots"
                    time="4:35"
                  />
                  <FeaturedOnTVCard
                    img="/assets/img/Robots/rob-1.png"
                    tag="Palletizing"
                    description="Robots opens new doors for worker safety and productivity at New Zealand lock manufacturer"
                    time="4:35"
                  />
                </div>
              </div>
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

export default ProductGridView;
