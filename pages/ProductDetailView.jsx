import React from 'react'
import Head from "next/head";
import BreadCrumbs from "../components/Theme/BreadCrumbs";
import Header from "../components/Theme/Header";
import customGlobals from "../styles/CustomGlobals.module.css";
import FeaturedOnTVCard from '../components/Pages/ProductPage/FeaturedOnTVCard';
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/ProductDetailView.module.css";
import SimilarProductsCard from "../components/Pages/ProductPage/SimilarProductsCard";
import Envelope from '../public/assets/icons/Envelope';
import {
    Button, DropdownButton, MenuItem, Modal,
    OverlayTrigger, Tooltip
} from 'react-bootstrap';
import Youtube from '../public/assets/icons/Youtube';

const ProductDetailView = () => {
    return (
        <div className={customGlobals.app}>
            <Header />
            <Head>
                <title>Product Detail View</title>
            </Head>
            <div className={st.productdetailview}>
                <div className="box-sm">
                    <BreadCrumbs />
                    <div className={st.ProductDetailContent}>
                        <div className={st.ProductDetailLeft}>
                            <div className={st.ProductYoutubeVideo}>
                                <div className={st.ProductYouVideo}>
                                    <video src="https://youtu.be/g8Qav3vIv9s"></video>
                                    <div className={st.ProductVideoButton}>
                                        <button>
                                            <Youtube color="#fff" />
                                        </button>
                                    </div>
                                </div>
                                <div className={st.ProductYoutubetext}>
                                    <span>Palletizing</span>
                                    <h6>Robots opens new doors for worker safety and productivity at New Zealand lock manufacturer</h6>
                                </div>
                            </div>
                            <div className={st.ProductVideoInfo}>
                                <p>In the video</p>
                                <div className={st.ProductVideoInfobox}>
                                    <SimilarProductsCard
                                        hoverImg="/assets/img/Robots/rob-2.png"
                                        defaultImg="/assets/img/Robots/rob-3.png"
                                        robotType="Cobot, Dooson"
                                        robotName="Universal Robots UR16e"
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

                                </div>
                            </div>
                            <div className={st.ProductTooltip}>
                                <p>Share video</p>
                                <div className={st.ProductMainTooltip}>
                                    <div className={st.MessageTooltip}>
                                        {['bottom'].map((placement) => (
                                            <OverlayTrigger
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Tooltip id={`tooltip-${placement}`}>
                                                        Send by email
                                                    </Tooltip>
                                                }
                                            >
                                                <Button>
                                                    <Envelope color="#313130" />
                                                </Button>
                                            </OverlayTrigger>
                                        ))}
                                    </div>
                                    <div className={st.LinkTooltip}>
                                        {['bottom'].map((placement) => (
                                            <OverlayTrigger
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Tooltip id={`tooltip-${placement}`}>
                                                        Tooltip on <strong>{placement}</strong>.
                                                    </Tooltip>
                                                }
                                            >
                                                <Button>
                                                    <Envelope color="#313130" />
                                                </Button>
                                            </OverlayTrigger>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={st.ProductDetailRight}>
                            <h6>You might be interested in...</h6>
                            <div className={st.ProductDetailOptions}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProductDetailView