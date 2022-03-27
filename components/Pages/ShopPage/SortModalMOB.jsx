import React from 'react'
import CloseIcon from '../../../public/assets/icons/CloseIcon';
import st from "../../../styles/components/Pages/ShopPage/FiltersMob.module.css";
const SortModalMOB = (props) => {
    return (
        <div className={st.sortModalMOB}>
            <div className={st.sortModalMOBBox}>
                <div className="box-sm">
                    <div className={st.filtersMobHead}>
                        <h1>Sort by</h1>
                        <span onClick={props.closeSortModal}><CloseIcon color="#828282" /></span>
                    </div>
                    <div className={st.sortModalMOBGrid}>
                        <div className="checkbox">
                            <input type="radio" name="sortfilter" id="1" />
                            <label htmlFor="1">Price (low to high)</label>
                        </div>
                        <div className="checkbox">
                            <input type="radio" name="sortfilter" id="2" />
                            <label htmlFor="2">Name (A to Z)</label>
                        </div>
                        <div className="checkbox">
                            <input type="radio" name="sortfilter" id="3" />
                            <label htmlFor="3">Recently added</label>
                        </div>
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
        </div>
    )
}

export default SortModalMOB