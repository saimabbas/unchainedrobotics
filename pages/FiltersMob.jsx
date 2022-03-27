import React from 'react'
import st from "../styles/components/Pages/ShopPage/FiltersMob.module.css";
import CategoriesFilterPC from '../components/Pages/ShopPage/CategoriesFilterPC';
import TypeFilterPC from '../components/Pages/ShopPage/TypeFilterPC';
import BrandsFilterPC from '../components/Pages/ShopPage/BrandsFilterPC';
import PriceFilterPC from '../components/Pages/ShopPage/PriceFilterPC';
import CloseIcon from '../public/assets/icons/CloseIcon';
import Link from "next/link";
const FiltersMob = () => {
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
                    <CategoriesFilterPC />
                    <BrandsFilterPC />
                    <PriceFilterPC />
                    <TypeFilterPC />
                </div>
                <div className={st.filterBtnBox}>
                    <main>
                        <button className='button button-md button-link-gray'> Reset </button>
                    </main>
                    <main>
                        <button className='button button-lg button-primary-gray'>Apply</button>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default FiltersMob