import React from 'react'
import { Accordion } from "react-bootstrap";
import ChevronUp from '../../../public/assets/icons/ChevronUp';
import st from '../../../styles/components/Pages/ShopPage/PriceFilterPC.module.css'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'
const PriceFilterPC = () => {
    return (
        <div className={st.priceFilterPC}>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>
                        <div className={st.filterHeader}>
                            <h6>Price</h6>
                            <ChevronUp color="#313130" />
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className={st.priceFilterAccBody}>
                            <Slider
                                range
                                defaultValue={[20, 50]}
                                min={25}
                                max={35}
                                allowCross={false}
                            />
                            <div className={st.priceRangeBox}>
                                <span>
                                    <i>€</i> <input defaultValue={0} className='ds-input' type="number" />
                                </span>
                                <p>-</p>
                                <span>
                                    <i>€</i> <input defaultValue={15000} className='ds-input' type="number" />
                                </span>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default PriceFilterPC