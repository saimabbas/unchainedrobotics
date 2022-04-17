import React from 'react'
import Head from "next/head";
import Header from "../components/Theme/Header";
import Footer from "../components/Theme/Footer";
import st from "../styles/pages/Home.module.css";
import customGlobals from "../styles/CustomGlobals.module.css";
import SimilarProductsCard from '../components/Pages/ProductPage/SimilarProductsCard';
import Cart from "../public/assets/icons/Cart";
import ArrowRight from "../public/assets/icons/ArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/free-mode";

const Home = () => {
    return (
        <div className={customGlobals.app}>
            <Header />
            <Head>
                <title>Brand Page</title>
            </Head>
            <div className={st.HomePage}>
                <div className="box-sm">
                    <div className={st.heromain}>
                        <div className={st.heroleft}>
                            <div className={st.herolcontent}>
                                <div className={st.hlcicon}>
                                    <h6>Cobots</h6>
                                    <ArrowRight />
                                </div>
                                <div className={st.hlcicon}>
                                    <h6>Cobots</h6>
                                    <ArrowRight />
                                </div>
                                <div className={st.hlcicon}>
                                    <h6>Cobots</h6>
                                    <ArrowRight />
                                </div>
                                <div className={st.hlcicon}>
                                    <h6>Cobots</h6>
                                    <ArrowRight />
                                </div>
                                <div className={st.hlcicon}>
                                    <h6>Cobots</h6>
                                    <ArrowRight />
                                </div>
                            </div>
                        </div>
                        <div className={st.heroright}>
                            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                <SwiperSlide>
                                    <div className={st.heroslide}>
                                        <div className={st.herosldleft}>
                                            <h3>The biggest <br /> marketplace for <br /> cobots</h3>
                                            <p>Discover, price, compare and purchase from over 20 brands of cobots and equipments.</p>
                                            <button className="button button-lg button-primary-gray trailing-icon">
                                                Browse now <ArrowRight color="#fff" />{" "}
                                            </button>
                                        </div>
                                        <div className={st.herosldright}>
                                            <img src="/assets/img/sliderimg1.png" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className={st.homeshop}>
                        <div className={st.homecontent}>
                            <h2>Why shop at Unchained Robotics</h2>
                        </div>
                        <div className={st.homemainicon}>
                            <div className={st.homeicon}>
                                <Cart color="red" />
                            </div>
                            <h3>Large collection of robot brands</h3>
                        </div>
                        <div className={st.homemainicon}>
                            <div className={st.homeicon}>
                                <Cart color="red" />
                            </div>
                            <h3>Large collection of robot brands</h3>
                        </div>
                        <div className={st.homemainicon}>
                            <div className={st.homeicon}>
                                <Cart color="red" />
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
                    <div className={st.topbrandsgrid}>
                        <div className={st.topbrandmaingrid}>
                            <img src="/assets/img/topbrands.png" alt="" />
                            <h4>Universal Robots</h4>
                            <h5>917+ searches</h5>
                            <div className={st.innertopbrand}>
                                <img src="/assets/img/universalrobots.png" alt="" />
                            </div>
                        </div>
                        <div className={st.topbrandmaingrid}>
                            <img src="/assets/img/topbrands2.png" alt="" />
                            <h4>OnRobot</h4>
                            <h5>833+ searches</h5>
                            <div className={st.innertopbrand}>
                                <img src="/assets/img/onrobot.png" alt="" />
                            </div>
                        </div>
                        <div className={st.topbrandmaingrid}>
                            <img src="/assets/img/topbrands3.png" alt="" />
                            <h4>Schmalz</h4>
                            <h5>743+ searches</h5>
                            <div className={st.innertopbrand}>
                                <img src="/assets/img/schmalz.png" alt="" />
                            </div>
                        </div>
                        <div className={st.topbrandmaingrid}>
                            <img src="/assets/img/topbrands4.png" alt="" />
                            <h4>Schunk</h4>
                            <h5>743+ searches</h5>
                            <div className={st.innertopbrand}>
                                <img src="/assets/img/schunk.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={st.trendingproductsbtn}>
                        <button className="button button-lg button-secondary-gray">
                            View all brands <ArrowRight color="#fff" />
                        </button>
                    </div>
                    <div className={st.homeecosystem}>
                        <div className={st.homeecoleft}>
                            <img src="/assets/img/ecoimg.png" alt="" />
                        </div>
                        <div className={st.homeecoright}>
                            <h5>One Ecosystem. <br />
                                Infinite Possibilities.</h5>
                            <p>With an enormous range of products from leading brands, the Unchained Marketplace helps you find the perfect solution to your specific needs. </p>
                        </div>
                    </div>
                    <div className={st.findrobot}>
                        <h3>Find your robot match</h3>
                        <p>Answer some questions in 5 minutes and we will propose a customized solution with complete pricing.</p>
                        <button className="button button-lg button-primary-gray trailing-icon">
                            Take our quiz now <ArrowRight color="#fff" />{" "}
                        </button>
                        <img src="/assets/img/findrobot.png" alt="" />
                    </div>
                    <div className={st.sayingaboutus}>
                        <div className={st.sayingleft}>
                            <h4>What they’re saying about us</h4>
                            <img src="/assets/img/col.png" alt="" className={st.colimg} />
                            <p>The ability to see prices "right off the bat" and thus at least get a ballpark figure has now improved significantly. This shop lists cobots from Universal Robots, Omron, Doosan, Yuanda and Denso, including prices, and thus offers a fairly broad spectrum.</p>
                            <img src="/assets/img/LogosMedia.png" alt="" />
                        </div>
                        <div className={st.sayingRight}>
                            <img src="/assets/img/Testimonial.png" alt="" className={st.tabsaying} />
                            <img src="/assets/img/mobsaying.png" alt="" className={st.mobsaying} />
                        </div>
                    </div>
                    <div className={st.howitworks}>
                        <div className={st.hiwleft}>
                            <img src="/assets/img/howitworks.png" alt="" />
                        </div>
                        <div className={st.hiwright}>
                            <h4>How it</h4>
                            <h5>works</h5>
                            <p>Whether you want to automate “Do it Yourself” or with our help, we have everything for you. Get your price quote in just a few clicks and a confirmation within 24 hours!</p>
                            <div className={st.switchbox}>
                                <p>Do it yourself</p>
                                {/* <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Form> */}
                                <p>With our engineering support</p>
                            </div>
                            <div className={st.hiwgrid}>
                                <div className={st.hiwlinecir}>
                                    <div className={st.hiwcir}>
                                        <div className={st.hiwinnercir}></div>
                                    </div>
                                    <div className={st.hiwline}></div>
                                </div>
                                <div className={st.hiwghead}>
                                    <h6>Search for suitable solutions</h6>
                                    <p>Discover different products for your automation solution on our website. If something is missing, contact us</p>
                                </div>
                            </div>
                            <div className={st.hiwgrid}>
                                <div className={st.hiwlinecir}>
                                    <div className={st.hiwcir}>
                                        <div className={st.hiwinnercir}></div>
                                    </div>
                                    <div className={st.hiwline}></div>
                                </div>
                                <div className={st.hiwghead}>
                                    <h6>Get in touch with us</h6>
                                    <p>Send us an inquiry through our website or book an appointment for a meeting or consultation</p>
                                </div>
                            </div>
                            <div className={st.hiwgrid}>
                                <div className={st.hiwlinecir}>
                                    <div className={st.hiwcir}>
                                        <div className={st.hiwinnercir}></div>
                                    </div>
                                    <div className={st.hiwline}></div>
                                </div>
                                <div className={st.hiwghead}>
                                    <h6>Find all requirements</h6>
                                    <p>Together with you, we go into a deeper coordination and find the detailed requirements for your solution together with you. We will need pictures and videos of your use case. We might need to visit you on site to discuss all the finer points of the process on the robot</p>
                                </div>
                            </div>
                            <div className={st.hiwgrid}>
                                <div className={st.hiwlinecir}>
                                    <div className={st.hiwcir}>
                                        <div className={st.hiwinnercir}></div>
                                    </div>
                                    <div className={st.hiwline}></div>
                                </div>
                                <div className={st.hiwghead}>
                                    <h6>Requirement catalog</h6>
                                    <p>The result of the joint requirements analysis is the requirements catalog, which serves as the basis for an order, summarizing everything important for the joint project.</p>
                                </div>
                            </div>
                            <div className={st.hiwgrid}>
                                <div className={st.hiwlinecir}>
                                    <div className={st.hiwcir}>
                                        <div className={st.hiwinnercir}></div>
                                    </div>
                                    <div className={st.hiwline}></div>
                                </div>
                                <div className={st.hiwghead}>
                                    <h6>A visualization</h6>
                                    <p>We create a 3D visualization to give you a full picture. <br />
                                        You get an overview of the solution, as well as a simulation for your application.</p>
                                </div>
                            </div>
                            <div className={st.hiwgrid}>
                                <div className={st.hiwlinecir}>
                                    <div className={st.hiwcir}>
                                        <div className={st.hiwinnercir}></div>
                                    </div>
                                    <div className={st.hiwline}></div>
                                </div>
                                <div className={st.hiwghead}>
                                    <h6>Shipping</h6>
                                    <p>Robot is shipped to your preferred location.</p>
                                </div>
                            </div>
                            <span>Done. Time to reap benefits of automation</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home