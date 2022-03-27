import React from 'react'
import { Accordion } from "react-bootstrap";
import ChevronUp from '../../../public/assets/icons/ChevronUp';
import Search from '../../../public/assets/icons/Search';
import st from '../../../styles/components/Pages/ShopPage/BrandsFilterPC.module.css'

const BrandsFilterPC = () => {
    return (
        <div className={st.brandsFilterPC}>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>
                        <div className={st.filterHeader}>
                            <h6>Brands</h6>
                            <ChevronUp color="#313130" />
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className={st.brandsAccBody}>
                            <div className="ds-input-icon">
                                <Search color="#9c9c9c" />
                                <input placeholder='Search Brand' type="text" />
                            </div>
                            <main className={st.brandsAccBodyGrid + " " + 'ds-overflow'}>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="1" />
                                    <label htmlFor="1">Universal Robots <span>14</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="2" />
                                    <label htmlFor="2">Omron <span>3</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="3" />
                                    <label htmlFor="3">Doosan <span>7</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="4" />
                                    <label htmlFor="4">Hanwha <span>3</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="5" />
                                    <label htmlFor="5">OnRobot <span>5</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="6" />
                                    <label htmlFor="6">Dobot <span>2</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="1" />
                                    <label htmlFor="1">Universal Robots <span>14</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="2" />
                                    <label htmlFor="2">Omron <span>3</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="3" />
                                    <label htmlFor="3">Doosan <span>7</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="4" />
                                    <label htmlFor="4">Hanwha <span>3</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="5" />
                                    <label htmlFor="5">OnRobot <span>5</span></label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="typefilter" id="6" />
                                    <label htmlFor="6">Dobot <span>2</span></label>
                                </div>
                            </main>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default BrandsFilterPC