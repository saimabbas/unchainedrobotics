import React from 'react'
import BreadCrumbs from "../components/Theme/BreadCrumbs";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import customGlobals from "../styles/CustomGlobals.module.css";
import Head from "next/head";
import st from "../styles/pages/ShopPage.module.css";
import AllProductsSlider from '../components/Pages/ShopPage/AllProductsSlider';
import SimilarProductsCard from '../components/Pages/ProductPage/SimilarProductsCard';
import TakeOutQuizBanner from '../components/Pages/ShopPage/TakeOutQuizBanner';
import CategoriesFilterPC from '../components/Pages/ShopPage/CategoriesFilterPC';
import TypeFilterPC from '../components/Pages/ShopPage/TypeFilterPC';
import BrandsFilterPC from '../components/Pages/ShopPage/BrandsFilterPC';
import PriceFilterPC from '../components/Pages/ShopPage/PriceFilterPC';
const ShopPage = () => {
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
                        </div>
                        <div className={st.ShopPageGridRight}>
                            <h2 className={st.ShopPageHeading}>All Products <span>141</span></h2>
                            <AllProductsSlider />
                            <div className={st.sortByBox}>
                                <label htmlFor="">Sort By</label>
                                <select fillRule className='ds-input' name="" id="">
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

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ShopPage