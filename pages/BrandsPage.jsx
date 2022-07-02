import React, { useState } from "react";
import Head from "next/head";
import BrandsFilterPC from "../components/Pages/ShopPage/BrandsFilterPC";
import CategoriesFilterPC from "../components/Pages/ShopPage/CategoriesFilterPC";
import PriceFilterPC from "../components/Pages/ShopPage/PriceFilterPC";
import TypeFilterPC from "../components/Pages/ShopPage/TypeFilterPC";
import BreadCrumbs from "../components/Theme/BreadCrumbs";
import Header from "../components/Theme/Header";
import st from "../styles/pages/BrandsPage.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import Footer from "../components/Theme/Footer";
import BrandHeadingBox from "../components/Pages/BrandPage/BrandHeadingBox";
import BrandProductsSlider from "../components/Pages/BrandPage/BrandProductsSlider";
import { Tab } from "react-bootstrap";
import SimilarProductsCard from "../components/Pages/ProductPage/SimilarProductsCard";
import CompareSection from "../components/Pages/ProductPage/CompareSection";
import SectionHeading from "../components/Pages/ProductPage/SectionHeading";
import OverviewCard from "../components/Pages/ProductPage/OverviewCard";
import ArrowRight from "../public/assets/icons/ArrowRight";
import AllProductsSlider from "../components/Pages/ShopPage/AllProductsSlider";
import SortFilterBoxMOB from "../components/Pages/ShopPage/SortFilterBoxMOB";
import SortModalMOB from "../components/Pages/ShopPage/SortModalMOB";
import Search from "../public/assets/icons/Search";
import DSCheckBox from "../components/Theme/DSCheckBox";
const BrandsPage = () => {
  const [sortMob, setSortMob] = useState(false);
  return (
    <div className={customGlobals.app}>
      <Header />
      <Head>
        <title>Brand Page</title>
      </Head>
      <div className={st.BrandPage}>
        <div className="box-sm">
          <BreadCrumbs />
          <BrandHeadingBox />
          <div className={st.brandPageContentBox}>
            <div className={st.BrandPageGrid}>
              <div className={st.BrandPageGridLeft}>
                <CategoriesFilterPC filterName="Categories">
                  <a href="#">
                    <i>Cobots</i> <span>2</span>
                  </a>
                  <a href="#">
                    <i>Grippers</i> <span>21</span>
                  </a>
                  <a href="#">
                    <i>Cameras</i> <span>17</span>
                  </a>
                  <a href="#">
                    <i>Starter kit</i> <span>4</span>
                  </a>
                  <a href="#">
                    <i>Turnkey solutions</i> <span>5</span>
                  </a>
                  <a href="#">
                    <i>Industrial robots</i>
                    <span>14</span>
                  </a>
                  <a href="#">
                    <i>Autonomous mobile robots</i>
                    <span></span>
                  </a>
                  <a href="#">
                    <i>End of arm accessories</i>
                    <span>7</span>
                  </a>
                  <a href="#">
                    <i>Conveyor belts</i>
                    <span>4</span>
                  </a>
                  <a href="#">
                    <i>Robot software</i>
                    <span>2</span>
                  </a>
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
              <div className={st.BrandPageGridRight}>
                <Tab.Container defaultActiveKey={"a1"}>
                  <BrandProductsSlider />
                  <SortFilterBoxMOB
                    openSortModalMob={() => {
                      setSortMob(true);
                    }}
                  />
                  <div className={st.brandsProductDetailsBox}>
                    <div className={st.sortByBox}>
                      <label htmlFor="">Sort By</label>
                      <select className="ds-input" name="" id="">
                        <option value="Relevance">Relevance</option>
                        <option value="Best Selling">Best Selling</option>
                      </select>
                    </div>
                    <Tab.Content>
                      <Tab.Pane eventKey="a1">
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="a2">
                        <div className={st.productsGrid}>
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="a3">
                        <div className={st.productsGrid}>
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="a4">
                        <div className={st.productsGrid}>
                          <SimilarProductsCard
                            hoverImg="/assets/img/Robots/rob-2.png"
                            defaultImg="/assets/img/Robots/rob-3.png"
                            robotType="Cobot, Dooson"
                            robotName="Doosan Robotics H2017"
                            singlePrice="44.000 €"
                          />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="a5">
                        <div className={st.productsGrid}>
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="a6">
                        <div className={st.productsGrid}>
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="a7">
                        <div className={st.productsGrid}>
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="a8">
                        <div className={st.productsGrid}>
                          <SimilarProductsCard
                            hoverImg="/assets/img/Robots/rob-2.png"
                            defaultImg="/assets/img/Robots/rob-3.png"
                            robotType="Cobot, Dooson"
                            robotName="Doosan Robotics H2017"
                            singlePrice="44.000 €"
                          />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="a9">
                        <div className={st.productsGrid}>
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="a10">
                        <div className={st.productsGrid}>
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
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </div>
            <CompareSection />
            <div className={st.brandPageThreeCards}>
              <SectionHeading headingtext="Discover Doosan Cobot Lineup" />
              <div className="box-xs">
                <div className={st.brandPageThreeCardsGrid}>
                  <OverviewCard
                    heading="High safety 2"
                    subheading="Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism."
                    img="/assets/img/Robots/rob-2.png"
                  />
                  <OverviewCard
                    heading="High safety 2"
                    subheading="Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism."
                    img="/assets/img/Robots/rob-2.png"
                  />
                  <OverviewCard
                    heading="High safety 2"
                    subheading="Guarantees outstanding safety with the industry best collision sensitivity, made possible by 6 torque sensors and a compensation mechanism."
                    img="/assets/img/Robots/rob-2.png"
                  />
                </div>
              </div>
            </div>
            <div className={st.aboutBrand}>
              <SectionHeading headingtext="About Doosan" />
              <div className="box-xs">
                <div className={st.aboutBrandSpecsGrid}>
                  <main>
                    <p>Country of origin</p>
                    <h6>South Korea</h6>
                  </main>
                  <main>
                    <p>YEAR FOUNDED</p>
                    <h6>2015</h6>
                  </main>
                  <main>
                    <p>HEADCOUNT</p>
                    <h6>201-500</h6>
                  </main>
                  <main>
                    <p>SPECIALIZING IN</p>
                    <h6>
                      Collaborative Robots, Automation, Robotics, Software
                    </h6>
                  </main>
                </div>
                <div className={st.aboutBrandTextBox}>
                  <h1>The ideal partner for human-robot collaboration</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt porro nemo a voluptatibus natus illum quidem
                    consequatur, ipsa quas provident non distinctio architecto
                    qui ducimus, repellat, harum et iusto nulla amet eos.
                    Voluptate non rem id, in, totam modi, explicabo quasi soluta
                    a nisi cupiditate cumque et quas cum qui! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Incidunt porro nemo a
                    voluptatibus natus illum quidem consequatur, ipsa quas
                    provident non distinctio architecto qui ducimus, repellat,
                    harum et iusto nulla amet eos. Voluptate non rem id, in,
                    totam modi, explicabo quasi soluta a nisi cupiditate cumque
                    et quas cum qui! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Incidunt porro nemo a voluptatibus natus
                    illum quidem consequatur, ipsa quas provident non distinctio
                    architecto qui ducimus, repellat, harum et iusto nulla amet
                    eos. Voluptate non rem id, in, totam modi, explicabo quasi
                    soluta a nisi cupiditate cumque et quas cum qui!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt porro nemo a voluptatibus natus illum quidem
                    consequatur, ipsa quas provident non distinctio architecto
                    qui ducimus, repellat, harum et iusto nulla amet eos.
                    Voluptate non rem id, in, totam modi, explicabo quasi soluta
                    a nisi cupiditate cumque et quas cum qui!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt porro nemo a voluptatibus natus illum quidem
                    consequatur, ipsa quas provident non distinctio architecto
                    qui ducimus, repellat, harum et iusto nulla amet eos.
                    Voluptate non rem id, in, totam modi, explicabo quasi soluta
                    a nisi cupiditate cumque et quas cum qui! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Incidunt porro nemo a
                    voluptatibus natus illum quidem consequatur, ipsa quas
                    provident non distinctio architecto qui ducimus, repellat,
                    harum et iusto nulla amet eos. Voluptate non rem id, in,
                    totam modi, explicabo quasi soluta a nisi cupiditate cumque
                    et quas cum qui!
                  </p>
                </div>
              </div>
            </div>
            <div className={st.brandUseCases}>
              <SectionHeading headingtext="OnRobot Use Cases" />
              <div className="box-xs">
                <div className={st.useCaseGrdBox}>
                  <div className={st.useCaseGrdBoxLeft}>
                    <h3>100+ use case videos</h3>
                    <p>Watch OnRobot use case videos on our Unchained TV</p>
                    <button className="button button-lg button-primary-gray trailing-icon">
                      Watch Now <ArrowRight color="#fff" />{" "}
                    </button>
                  </div>
                  <div className={st.useCaseGrdBoxRight}>
                    <img src="/assets/img/Robots/rob-2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={st.ProductsUsingBox}>
              <SectionHeading headingtext="Products Using OnRobot Component" />
              <div className={st.ProductsUsingBoxGrid}>
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

export default BrandsPage;
