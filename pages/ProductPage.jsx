import React, { useState } from 'react'
import BreadCrumbs from '../components/Theme/BreadCrumbs'
import Header from '../components/Theme/Header'
import Footer from '../components/Theme/Footer'
import customGlobals from "../styles/CustomGlobals.module.css"
import st from "../styles/pages/ProductPage.module.css"
import { Accordion } from "react-bootstrap";
import Head from 'next/head'
import SimilarProductsCard from '../components/Pages/ProductPage/SimilarProductsCard'
import FeaturedOnTVCard from '../components/Pages/ProductPage/FeaturedOnTVCard'
import DownloadCard from '../components/Pages/ProductPage/DownloadCard'
import FAQCard from '../components/Pages/ProductPage/FAQCard'
import InTheBoxSection from '../components/Pages/ProductPage/InTheBoxSection'
import CompareSection from '../components/Pages/ProductPage/CompareSection'
import UseCaseCombinationSection from '../components/Pages/ProductPage/UseCaseCombinationSection'
import { Nav } from 'react-bootstrap'
import ProductDescription from '../components/Pages/ProductPage/ProductDescription'
import TalkToExpert from '../components/Pages/ProductPage/TalkToExpert'
import ProductDetailsMenu from '../components/Pages/ProductPage/ProductDetailsMenu'
import ProductDescriptionAccHeader from '../components/Pages/ProductPage/ProductDescriptionAccHeader'
import SimilarProductsSection from '../components/Pages/ProductPage/SimilarProductsSection'
import FAQSection from '../components/Pages/ProductPage/FAQSection'
import DownloadSection from '../components/Pages/ProductPage/DownloadSection'
import ProductSpecificationSection from '../components/Pages/ProductPage/ProductSpecificationSection'
import FeaturedOnTVSection from '../components/Pages/ProductPage/featuredOnTVSection'
import OverviewSection from '../components/Pages/ProductPage/OverviewSection'
const ProductPage = () => {
    return (
        <div className={customGlobals.app}>
            <Header />
            <Head>
                <title>Product Details</title>
            </Head>
            <div className={st.productPage}>
                <div className={st.productDetailsMassiveParent}>
                    <div className="box-sm">
                        <BreadCrumbs />
                        <div className={st.productGrid}>
                            <div className={st.productGridLeft}></div>
                            <div className={st.productGridRight}>
                                <div className={st.productDetailsHead}>
                                    <h1>Doosan Robotics H2515</h1>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.3333 21.1666C16.9812 21.1669 16.6433 21.0279 16.3933 20.78L12 16.38L7.64 20.7266C7.45556 20.9238 7.21562 21.0603 6.95192 21.1181C6.68822 21.1759 6.41318 21.1523 6.16317 21.0505C5.91317 20.9486 5.69998 20.7732 5.5518 20.5475C5.40363 20.3219 5.32745 20.0565 5.33333 19.7866V4.16665C5.33333 3.81302 5.47381 3.47389 5.72386 3.22384C5.97391 2.97379 6.31304 2.83331 6.66667 2.83331H17.3333C17.687 2.83331 18.0261 2.97379 18.2761 3.22384C18.5262 3.47389 18.6667 3.81302 18.6667 4.16665V19.8333C18.6667 20.1869 18.5262 20.5261 18.2761 20.7761C18.0261 21.0262 17.687 21.1666 17.3333 21.1666ZM17.3333 19.8333V4.16665H6.66667V19.7866L12 14.5L17.3333 19.8333Z" fill="#313130" />
                                    </svg>
                                </div>
                                <div className={st.textDetailsBoxParent}>
                                    <div className={st.textDetailsBox}>
                                        <span>RANGE</span>
                                        <p>1.500 mm</p>
                                    </div>
                                    <div className={st.textDetailsBox}>
                                        <span>PAYLOAD</span>
                                        <p>25 kg</p>
                                    </div>
                                </div>
                                <p className={st.productDescription}>This new workhorse from Doosan Robotics is one of the most powerful robots on the market. The H2515 transports products weighing up to 25 kg and has a long reach of 1500 mm and is ideal for handling heavy objects! With its 6 torque sensors, this Cobot greatly expands the range of applications. </p>
                                <div className={st.productPrice}>
                                    <h6>50.500 €</h6>
                                    <span>excl. MwSt</span>
                                </div>
                                <div className={st.descLinksBox}>
                                    <a href="#">Discussion (6)</a>
                                    <span>|</span>
                                    <a href="#">Delivery Information</a>
                                </div>
                                <h6 className={st.addToCompare}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 20V12M12 12V4M12 12H20M12 12H4" stroke="#313130" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <a href="#">Add to compare</a>
                                </h6>
                                <div className="inputBox">
                                    <label htmlFor="model">Model</label>
                                    <select name="model" id="model">
                                        <option value="">Choose an option</option>
                                        <option value="">Model 1</option>
                                        <option value="">Model 2</option>
                                        <option value="">Model 3</option>
                                    </select>
                                </div>
                                <div className={st.descBtnBox}>
                                    <button className='button button-lg button-secondary-gray width-100'>Add to cart</button>
                                    <button className='button button-lg button-primary-gray width-100'>Add to cart</button>
                                </div>
                                <div className={st.learnMoreTag}>
                                    <main>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.0492 4.43282C18.9672 4.25965 18.8226 4.12404 18.6445 4.05336C18.4664 3.98268 18.2681 3.9822 18.0897 4.05201L16.5443 4.65894C16.4483 4.69656 16.3609 4.75352 16.2878 4.82629C16.2147 4.89907 16.1573 4.98609 16.1192 5.08197C16.0811 5.17785 16.0632 5.28053 16.0664 5.38365C16.0697 5.48676 16.0941 5.5881 16.1382 5.68138L16.3523 6.13387L16.1812 6.20657C15.5655 6.33519 15.139 6.3179 14.5053 6.14038L12.9614 5.70782C12.525 5.58514 12.0623 5.5926 11.6301 5.72929L10.1401 6.19912C9.83825 6.29437 9.55901 6.45025 9.31952 6.65723C9.05795 6.56123 8.55874 6.43794 7.87422 6.53662L8.07695 6.15182C8.16599 5.98209 8.187 5.78481 8.13573 5.60013C8.08446 5.41544 7.96474 5.25724 7.80095 5.15769L6.38209 4.29693C6.29391 4.24342 6.19571 4.20853 6.09353 4.19442C5.99135 4.18031 5.88737 4.18727 5.78798 4.21487C5.6886 4.24247 5.59591 4.29013 5.51565 4.35491C5.43538 4.41969 5.36923 4.50022 5.32127 4.59154L1.321 12.2261C1.22924 12.3994 1.20911 12.6018 1.26494 12.7898C1.32076 12.9778 1.44808 13.1364 1.61955 13.2315L3.04727 14.0335C3.15979 14.0972 3.28685 14.1307 3.41613 14.1308C3.48913 14.1308 3.56175 14.1202 3.63175 14.0995C3.72854 14.0713 3.81863 14.0238 3.89663 13.9599C3.97462 13.8961 4.03891 13.8171 4.08564 13.7278L4.30595 13.3093L5.01339 13.8975L3.9948 15.3066C3.90331 15.4332 3.83771 15.5766 3.80178 15.7285C3.76584 15.8805 3.76026 16.038 3.78537 16.1922C3.81048 16.3463 3.86577 16.4939 3.94809 16.6266C4.0304 16.7593 4.13811 16.8744 4.26503 16.9654L4.38874 17.0542C4.59089 17.1998 4.83374 17.2779 5.08281 17.2776C5.18079 17.2775 5.27839 17.2654 5.37344 17.2416C5.37602 17.2744 5.37967 17.3072 5.38502 17.3403C5.40972 17.4946 5.46485 17.6425 5.54722 17.7754C5.62958 17.9083 5.73752 18.0234 5.86478 18.1142L5.98849 18.2033C6.19064 18.3488 6.43349 18.4269 6.68256 18.4266C6.78054 18.4265 6.87814 18.4144 6.97319 18.3906C6.97581 18.4235 6.97942 18.4563 6.98477 18.4893C7.00946 18.6437 7.06459 18.7916 7.14696 18.9244C7.22932 19.0573 7.33727 19.1725 7.46453 19.2632L7.58824 19.3523C7.79041 19.4978 8.03324 19.5759 8.28231 19.5756C8.38029 19.5755 8.47789 19.5634 8.57294 19.5396C8.57556 19.5725 8.57917 19.6053 8.58452 19.6381C8.60921 19.7924 8.66434 19.9403 8.74671 20.0732C8.82907 20.2061 8.93702 20.3212 9.06428 20.412L9.18798 20.5011C9.44439 20.6847 9.76303 20.7595 10.0744 20.709C10.3857 20.6585 10.6644 20.4869 10.8497 20.2317L11.2495 19.6786L11.8802 20.1809C12.0759 20.3486 12.3152 20.4572 12.5703 20.4943C12.8253 20.5314 13.0857 20.4954 13.321 20.3904C13.5564 20.2855 13.7572 20.1159 13.9001 19.9014C14.0429 19.6868 14.122 19.4362 14.1281 19.1785C14.3929 19.2897 14.6859 19.3144 14.9656 19.2491C15.2452 19.1839 15.4971 19.032 15.6853 18.8152C15.8932 18.5768 16.0105 18.2728 16.0166 17.9565C16.2814 18.0676 16.5745 18.0923 16.8541 18.0271C17.1337 17.9618 17.3856 17.81 17.5738 17.5932C17.7724 17.3652 17.8885 17.0771 17.9035 16.7751C18.1765 16.918 18.4898 16.9644 18.7925 16.9069C19.0953 16.8493 19.3697 16.6912 19.5713 16.4581L19.5891 16.4376C19.7035 16.3058 19.7906 16.1526 19.8456 15.987C19.9006 15.8213 19.9224 15.6465 19.9096 15.4724C19.8968 15.2984 19.8498 15.1285 19.7712 14.9727C19.6926 14.8169 19.584 14.6781 19.4516 14.5644L19.0063 14.181C19.3183 13.991 19.5932 13.746 19.8177 13.4578L19.8245 13.4721C19.8851 13.6014 19.9813 13.7108 20.1018 13.7874C20.2223 13.864 20.3621 13.9047 20.5049 13.9047C20.6087 13.9046 20.7114 13.8832 20.8067 13.8418L22.3104 13.1924C22.4031 13.1525 22.4868 13.0944 22.5565 13.0215C22.6263 12.9486 22.6806 12.8624 22.7164 12.7681C22.7522 12.6737 22.7686 12.5731 22.7647 12.4723C22.7609 12.3715 22.7368 12.2725 22.6938 12.1812L19.0492 4.43282ZM3.58778 13.4655C3.57571 13.4882 3.55921 13.5083 3.53926 13.5245C3.51931 13.5408 3.49631 13.5529 3.47161 13.5601C3.44691 13.5673 3.42102 13.5696 3.39546 13.5666C3.36989 13.5637 3.34517 13.5557 3.32275 13.5431L1.89503 12.741C1.85169 12.717 1.81948 12.677 1.80531 12.6295C1.79114 12.5821 1.79614 12.5309 1.81924 12.4871L5.81964 4.85268C5.83173 4.8294 5.84852 4.80888 5.86894 4.79241C5.88936 4.77595 5.91297 4.76389 5.93828 4.75701C5.95534 4.75222 5.97297 4.74978 5.99069 4.74974C6.02589 4.74975 6.06041 4.75949 6.09044 4.77787L7.50939 5.63863C7.5508 5.66371 7.5811 5.70364 7.59411 5.75027C7.60712 5.79691 7.60187 5.84675 7.57942 5.88965L3.58778 13.4655ZM4.71686 16.5974L4.59316 16.5085C4.52635 16.4607 4.46965 16.4002 4.42631 16.3304C4.38298 16.2606 4.35385 16.183 4.34062 16.1019C4.32739 16.0209 4.3303 15.938 4.3492 15.858C4.3681 15.7781 4.40261 15.7027 4.45075 15.6361L6.02697 13.4553C6.12485 13.3206 6.27206 13.23 6.43647 13.2034C6.60088 13.1768 6.76914 13.2163 6.90452 13.3133L7.02827 13.4024C7.09506 13.4502 7.15176 13.5107 7.19509 13.5805C7.23843 13.6503 7.26755 13.7279 7.28078 13.809C7.29401 13.89 7.2911 13.9729 7.2722 14.0528C7.25331 14.1328 7.2188 14.2082 7.17067 14.2747L6.7622 14.8399L6.76169 14.8406L5.5945 16.4556C5.49659 16.5903 5.34935 16.6808 5.18492 16.7074C5.02049 16.734 4.85222 16.6944 4.71686 16.5974ZM6.31652 17.7462L6.19281 17.6571C6.12601 17.6093 6.06931 17.5488 6.02597 17.479C5.98263 17.4092 5.95351 17.3316 5.94028 17.2505C5.92704 17.1694 5.92996 17.0866 5.94886 17.0066C5.96776 16.9267 6.00227 16.8513 6.05041 16.7847L7.2182 15.1689C7.31619 15.0344 7.46337 14.9441 7.62766 14.9177C7.79195 14.8912 7.96004 14.9308 8.09528 15.0277L8.21899 15.1168C8.28579 15.1646 8.34248 15.2251 8.38582 15.2949C8.42915 15.3647 8.45827 15.4423 8.4715 15.5234C8.48473 15.6045 8.48181 15.6874 8.4629 15.7673C8.444 15.8472 8.40948 15.9226 8.36134 15.9892L7.19416 17.6042C7.09628 17.739 6.94905 17.8295 6.78461 17.8561C6.62018 17.8827 6.4519 17.8432 6.31652 17.7462ZM7.91617 18.895L7.79247 18.8059C7.72567 18.7581 7.66898 18.6976 7.62564 18.6278C7.58231 18.558 7.55319 18.4804 7.53995 18.3993C7.52672 18.3183 7.52964 18.2354 7.54853 18.1555C7.56743 18.0755 7.60193 18.0001 7.65006 17.9336L8.4827 16.7814C8.58061 16.6467 8.72784 16.5561 8.89227 16.5295C9.05669 16.503 9.22495 16.5425 9.36034 16.6395L9.48409 16.7286C9.55089 16.7764 9.60758 16.8369 9.65091 16.9067C9.69424 16.9764 9.72336 17.0541 9.73658 17.1351C9.74981 17.2162 9.74689 17.2991 9.72799 17.379C9.70909 17.4589 9.67459 17.5343 9.62645 17.6009L8.79377 18.753C8.69587 18.8878 8.54865 18.9783 8.38423 19.0049C8.21981 19.0315 8.05155 18.992 7.91617 18.895ZM10.3934 19.9018C10.2955 20.0366 10.1483 20.1272 9.98382 20.1538C9.81935 20.1804 9.65104 20.1409 9.51564 20.0438L9.39194 19.9547C9.32513 19.9069 9.26843 19.8464 9.2251 19.7766C9.18176 19.7069 9.15263 19.6292 9.1394 19.5481C9.12617 19.4671 9.12908 19.3842 9.14798 19.3042C9.16688 19.2243 9.20139 19.1489 9.24953 19.0823L9.74763 18.3933C9.84551 18.2585 9.99273 18.168 10.1571 18.1414C10.3215 18.1148 10.4898 18.1543 10.6252 18.2513L10.7489 18.3404C10.8157 18.3882 10.8724 18.4487 10.9158 18.5185C10.9591 18.5883 10.9882 18.6659 11.0015 18.747C11.0147 18.8281 11.0118 18.9109 10.9929 18.9909C10.974 19.0708 10.9395 19.1462 10.8913 19.2128L10.3934 19.9018ZM19.3483 15.5134C19.3559 15.6135 19.3435 15.7142 19.3119 15.8095C19.2802 15.9049 19.2299 15.9929 19.1638 16.0686L19.146 16.0892C19.0069 16.2503 18.8096 16.3497 18.5974 16.3659C18.3852 16.382 18.1752 16.3135 18.0133 16.1754C17.8331 16.0201 17.6365 15.8508 17.4382 15.6801L17.4331 15.6754L15.9656 14.4117L15.9445 14.3934L15.9201 14.3724L15.9025 14.3573C15.8459 14.3093 15.7727 14.2857 15.6987 14.2915C15.6247 14.2973 15.556 14.3321 15.5075 14.3883C15.4591 14.4446 15.4349 14.5177 15.4401 14.5917C15.4454 14.6657 15.4796 14.7347 15.5355 14.7836L15.5593 14.8041C15.6932 14.9194 16.3904 15.5197 17.0687 16.1039C17.1475 16.1722 17.2122 16.2553 17.2589 16.3486C17.3056 16.4418 17.3335 16.5434 17.3409 16.6475C17.3484 16.7515 17.3352 16.856 17.3022 16.955C17.2693 17.0539 17.2171 17.1454 17.1487 17.2242C17.0095 17.3842 16.8127 17.4826 16.6012 17.4979C16.3898 17.5133 16.1808 17.4444 16.0199 17.3063L15.5449 16.8973L14.4891 15.9884C14.4611 15.964 14.4286 15.9453 14.3935 15.9335C14.3583 15.9217 14.3211 15.9169 14.2841 15.9196C14.2471 15.9222 14.2109 15.9321 14.1777 15.9488C14.1446 15.9654 14.115 15.9885 14.0908 16.0166C14.0666 16.0447 14.0482 16.0774 14.0366 16.1126C14.0251 16.1479 14.0206 16.1851 14.0235 16.2221C14.0264 16.2591 14.0366 16.2952 14.0536 16.3282C14.0705 16.3613 14.0937 16.3906 14.122 16.4146L15.1778 17.3236C15.2571 17.3918 15.3222 17.475 15.3693 17.5684C15.4164 17.6618 15.4446 17.7635 15.4523 17.8679C15.4599 17.9722 15.4469 18.077 15.4139 18.1763C15.381 18.2755 15.3287 18.3673 15.2601 18.4463C15.1209 18.6063 14.9241 18.7047 14.7126 18.7201C14.5011 18.7355 14.2922 18.6666 14.1313 18.5285L13.0757 17.6195C13.0477 17.5954 13.0152 17.577 12.9801 17.5655C12.945 17.5539 12.908 17.5494 12.8712 17.5521C12.8344 17.5549 12.7984 17.5649 12.7655 17.5815C12.7325 17.5981 12.7031 17.6211 12.679 17.6491C12.6549 17.6771 12.6366 17.7095 12.625 17.7446C12.6134 17.7797 12.6089 17.8167 12.6117 17.8535C12.6144 17.8904 12.6244 17.9263 12.641 17.9593C12.6577 17.9923 12.6806 18.0216 12.7086 18.0457L13.0508 18.3403L13.2893 18.5457C13.3687 18.6138 13.4338 18.697 13.4809 18.7904C13.528 18.8838 13.5562 18.9856 13.5638 19.0899C13.5715 19.1942 13.5585 19.299 13.5255 19.3983C13.4925 19.4976 13.4402 19.5894 13.3717 19.6684C13.2325 19.8283 13.0357 19.9267 12.8242 19.9421C12.6127 19.9575 12.4038 19.8886 12.2429 19.7505C12.2402 19.7481 12.2374 19.7458 12.2346 19.7436L11.5255 19.1791C11.5938 18.9433 11.5874 18.6921 11.5071 18.4601C11.4268 18.2281 11.2767 18.0266 11.0772 17.8834L10.9535 17.7944C10.7512 17.6489 10.5083 17.5709 10.2592 17.5713C10.3286 17.3351 10.3229 17.0831 10.2428 16.8502C10.1627 16.6173 10.0123 16.4151 9.81222 16.2715L9.68847 16.1825C9.48619 16.037 9.24324 15.959 8.99411 15.9595C9.06353 15.7232 9.0578 15.4712 8.97772 15.2383C8.89764 15.0055 8.74716 14.8032 8.54711 14.6596L8.42341 14.5706C8.23185 14.4327 8.00351 14.3552 7.76763 14.3479C7.86546 14.1017 7.87812 13.8298 7.8036 13.5755C7.72908 13.3213 7.57166 13.0993 7.35639 12.9448L7.23264 12.8558C6.97624 12.6722 6.65761 12.5974 6.3463 12.6479C6.03499 12.6984 5.75629 12.8699 5.57102 13.1251L5.34377 13.4405L4.57408 12.8006L7.53442 7.18204C8.15177 7.01127 8.62033 7.05215 8.91011 7.11955C8.82676 7.2431 8.75542 7.37434 8.69706 7.51148L8.24172 8.6173C8.12594 8.89855 8.01925 9.18716 7.92442 9.47558L7.47006 10.858C7.4483 10.9243 7.4519 10.9962 7.48018 11.0599C7.50846 11.1236 7.5594 11.1746 7.62311 11.2029L7.72094 11.2463C8.0666 11.404 8.44659 11.4716 8.82542 11.4426C9.20425 11.4136 9.56956 11.2891 9.88722 11.0807C10.1612 10.9005 10.3914 10.6613 10.5608 10.3805C10.7303 10.0998 10.8347 9.78467 10.8665 9.45829C10.8688 9.43377 10.8712 9.40907 10.8728 9.38404C10.8927 9.28626 11.0516 8.59143 11.5384 8.55726L12.1947 8.7418C12.4495 8.8136 12.682 8.94858 12.8707 9.13424L16.9351 13.1397C16.9398 13.1441 16.9445 13.1484 16.9492 13.1526L19.0848 14.9901C19.1612 15.0555 19.2239 15.1354 19.2691 15.2252C19.3144 15.3151 19.3413 15.413 19.3483 15.5134ZM18.551 13.7891L17.3229 12.7324L13.2656 8.7336C13.0092 8.4813 12.6932 8.29787 12.3469 8.20035L11.6485 8.00399C11.6237 7.99701 11.5981 7.99346 11.5723 7.99344H11.5712C11.1359 7.99527 10.7781 8.23213 10.5364 8.67847C10.4326 8.87382 10.3584 9.08348 10.3161 9.3006C10.3145 9.30998 10.3134 9.31935 10.3128 9.32873C10.311 9.35437 10.3089 9.37963 10.3066 9.40448C10.2827 9.64755 10.2047 9.8822 10.0783 10.0912C9.9519 10.3002 9.7803 10.4782 9.57611 10.6123C9.35747 10.7531 9.10947 10.842 8.85114 10.8722C8.5928 10.9024 8.33099 10.873 8.08577 10.7863L8.4588 9.65141C8.54927 9.37598 8.65099 9.10021 8.7618 8.83171L9.21602 7.72851C9.31548 7.49369 9.46478 7.2833 9.65359 7.11189C9.8424 6.94048 10.0662 6.81215 10.3095 6.73579L11.7995 6.26596C12.1275 6.16234 12.4785 6.15667 12.8097 6.24965L14.3537 6.68221C15.0868 6.88766 15.6027 6.90576 16.3249 6.75135C16.3425 6.7476 16.3596 6.74219 16.3762 6.73518L16.5932 6.64302L19.5393 12.8699C19.3021 13.2626 18.9597 13.581 18.551 13.7891ZM22.1901 12.5677C22.1811 12.5917 22.1673 12.6136 22.1496 12.6322C22.1319 12.6507 22.1106 12.6654 22.087 12.6755L20.5833 13.3249C20.5375 13.345 20.4857 13.3465 20.4389 13.329C20.392 13.3114 20.3539 13.2764 20.3326 13.2312L20.1371 12.8181C20.1282 12.7712 20.1074 12.7274 20.0769 12.6908L16.6466 5.44087C16.6355 5.41727 16.6294 5.39163 16.6286 5.36555C16.6278 5.33948 16.6324 5.31351 16.642 5.28928C16.6517 5.26505 16.6663 5.24307 16.6848 5.22471C16.7033 5.20634 16.7255 5.19199 16.7498 5.18254L18.2953 4.57555C18.3408 4.55769 18.3914 4.55774 18.4368 4.57567C18.4823 4.59361 18.5192 4.6281 18.5403 4.67221L22.1844 12.4201C22.1953 12.443 22.2014 12.4679 22.2024 12.4933C22.2034 12.5187 22.1992 12.544 22.1901 12.5677Z" fill="#313130" />
                                        </svg>
                                        <p>From 1.000 € a month with lease buy or installment.</p>
                                    </main>
                                    <a href="#">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className={st.productSectionalDetails}>
                            <ProductDetailsMenu>
                                <Nav navbarScroll defaultActiveKey="#overview" id="abc" className='nav-tabs'>
                                    <Nav.Item>
                                        <Nav.Link href="#overview">Overview</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#compare" className={st.secondarySectionLink}>Compare</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#inthebox" className={st.secondarySectionLink}>In the box</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#usecasecombination" className={st.secondarySectionLink}>Use case combination</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#technicalData">Technical Data</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#downloads">Downloads</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#faq">FAQ</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#similarrobots">Similar cobats</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </ProductDetailsMenu>
                            <div className={st.productDetailsContentContainer} >
                                <div className={st.overview} id="overview">
                                    <Accordion>
                                        <Accordion.Item>
                                            <Accordion.Header>
                                                <ProductDescriptionAccHeader
                                                    headertext="Overview"
                                                />
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <OverviewSection />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>

                                <div className={st.technicalData} id="technicalData">
                                    <Accordion>
                                        <Accordion.Item>
                                            <Accordion.Header>
                                                <ProductDescriptionAccHeader
                                                    headertext="Technical Data"
                                                />
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ProductSpecificationSection />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className={st.downloads} id="downloads">
                                    <Accordion>
                                        <Accordion.Item>
                                            <Accordion.Header>
                                                <ProductDescriptionAccHeader
                                                    headertext="Downloads"
                                                />
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {/* <div className={st.downloadsContent}>
                                                    <div className={st.downloadsGrid}>
                                                        <DownloadCard
                                                            img="/assets/img/downloads-1.png"
                                                            heading="Doosan H2515 Datasheet"
                                                            subHeading="Download the Doosan Robots datasheet here"
                                                        />
                                                        <DownloadCard
                                                            img="/assets/img/downloads-2.png"
                                                            heading="Doosan H2515 Datasheet"
                                                            subHeading="Download the Doosan Robots datasheet here"
                                                        />
                                                    </div>
                                                    <div className={st.didntFindBox}>
                                                        <h1>Did not find what you’re looking for? </h1>
                                                        <button className="button button-lg button-primary-gray">Contact us</button>
                                                    </div>
                                                </div> */}
                                                <DownloadSection />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </div>
                                <div className={st.faq} id='faq'>
                                    <Accordion>
                                        <Accordion.Item>
                                            <Accordion.Header>
                                                <ProductDescriptionAccHeader
                                                    headertext="FAQ"
                                                />
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className={st.faqContent}>
                                                    <Accordion alwaysOpen>
                                                        {/* 
                                                        <FAQCard
                                                            eventKey="0"
                                                            question="How can I place an order?"
                                                            answer="To place an order, send us an inquiry through the button at the top of the page or contact us through the chat."
                                                        />
                                                        <FAQCard
                                                            eventKey="1"
                                                            question="What is Unchained Robotics?"
                                                            answer="Unchained Robotics is the biggest marketplace for all things automation. We have over 36 brands with 9 different categories such as cobots, grippers, cameras, starter kits, end-of-arm accessories, teaching kits, turnkey solutions, cobot platforms, and even services. For more information, check out our About page."
                                                        />
                                                        <FAQCard
                                                            eventKey="2"
                                                            question="How can I place an order?"
                                                            answer="To place an order, send us an inquiry through the button at the top of the page or contact us through the chat."
                                                        />
                                                     */}
                                                        <FAQSection />
                                                    </Accordion>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <div className={st.similarRobots} id="similarrobots">
                                    <Accordion>
                                        <Accordion.Item>
                                            <Accordion.Header>
                                                <ProductDescriptionAccHeader
                                                    headertext="Similar Cobots"
                                                />
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <SimilarProductsSection />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TalkToExpert />
                <ProductDescription>
                    <p>
                        H-Series is the most powerful cobot in the market. Outstanding 25
                        kg payload and 6 torque sensors brings safe work environment for
                        any kind of application.
                    </p>
                    <h6>SUPER SAFE</h6>
                    <ul>
                        <li>
                            <b>Five workspace settings to fully protect the operator</b>
                            <p>
                                Five workspace settings protect the operator’s safety and
                                improve work efficiency.
                            </p>
                            <ul>
                                <li>Collaborate zone</li>
                                <li>Collision detection mute zone</li>
                                <li>Protected zone</li>
                                <li>Limited tool Orientation zone</li>
                                <li>Customized collision sensitivity zone</li>
                            </ul>
                        </li>
                        <li>
                            <b>
                                Outstanding product safety certified by international
                                organization
                            </b>
                            <p>
                                Doosan robots have received prestigious safety certifications
                                worldwide as well as safety certifications from NRTL in the
                                US, CE in Europe and KCs in Korea.
                            </p>
                        </li>
                    </ul>
                    <h6>SUPER EASY</h6>
                    <ul>
                        <li>
                            <b>One-touch programming in just 20 seconds</b>
                            <p>
                                Doosan robots automatically recognize attached peripherals and
                                suggest ideal work process in forms of various templates from
                                simple material handling to machine tending. It also provides
                                pre-programmed skills, commonly used in the field, which make
                                it very easy to teach the robots even for beginners.
                            </p>
                        </li>
                        <li>
                            <b>Cockpit to quickly and easily teach robots</b>
                            <p>
                                Through the cockpit (Direct teaching button) on Doosan robots,
                                it is possible to select various teaching modes as well as to
                                save coordinates with simple button operations, allowing easy
                                direct teaching.
                            </p>
                        </li>
                    </ul>
                    <h6>SUPER FLEXIBLE</h6>
                    <ul>
                        <li>
                            <b>Doosan Mate maximizing the utilization of Doosan robots</b>
                            <p>
                                Doosan Mate is comprising of a variety of industry leading
                                partner products from grippers to electric tools machines,
                                sensors and software, providing the best automation solutions
                                optimized for customer needs. All registered products are
                                highly compatible with Doosan robots, allowing easy and fast
                                set-up and immediate operation.
                            </p>
                        </li>
                        <li>
                            <b>Convenient communication connections</b>
                            <p>
                                Doosan robot supports the latest communication technologies,
                                even without a gateway, allowing seamless connections with
                                various types of industrial equipment and systems.
                            </p>
                            <p>
                                Supported Communications: RS232/485, TCP/IP, Modbus TCP
                                (Master/Slave), Modbus RTU (Master), PROFINET IO Device,
                                EtherNet/IP Adapter
                            </p>
                        </li>
                    </ul>
                </ProductDescription>
            </div>
            <Footer />
        </div >
    )
}

export default ProductPage;