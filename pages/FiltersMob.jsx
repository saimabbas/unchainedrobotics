import React from "react";
import st from "../styles/components/Pages/ShopPage/FiltersMob.module.css";
import CategoriesFilterPC from "../components/Pages/ShopPage/CategoriesFilterPC";
import TypeFilterPC from "../components/Pages/ShopPage/TypeFilterPC";
import BrandsFilterPC from "../components/Pages/ShopPage/BrandsFilterPC";
import PriceFilterPC from "../components/Pages/ShopPage/PriceFilterPC";
import CloseIcon from "../public/assets/icons/CloseIcon";
import Link from "next/link";
const FiltersMob = (props) => {
  return (
    <div className={st.FiltersMob}>
      <div className="box-sm">
        <div className={st.filtersMobHead}>
          <h1>Filters</h1>
          <Link href={"/ShopPage"}>
            <a>
              <CloseIcon color="#828282" />
            </a>
          </Link>
        </div>
        <div className={st.filtersMobGrid}>
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
        </div>
        <div className={st.filterBtnBox}>
          <main>
            <button className="button button-md button-link-gray">Reset</button>
          </main>
          <main>
            <button className="button button-lg button-primary-gray">
              Apply
            </button>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FiltersMob;
