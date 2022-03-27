import React from 'react'
import { Accordion } from "react-bootstrap";
import ChevronUp from '../../../public/assets/icons/ChevronUp';
import st from '../../../styles/components/Pages/ShopPage/TypeFilterPC.module.css'

const TypeFilterPC = () => {
    return (
        <div className={st.TypeFilterPC}>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>
                        <div className={st.filterHeader}>
                            <h6>Type</h6>
                            <ChevronUp color="#313130" />
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className={st.typeFilterAccBody}>
                            <div className="checkbox">
                                <input type="checkbox" name="typefilter" id="1" />
                                <label htmlFor="1">Pneumatic</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="typefilter" id="2" />
                                <label htmlFor="2">Electric</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="typefilter" id="3" />
                                <label htmlFor="3">Vacuum</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="typefilter" id="4" />
                                <label htmlFor="4">Soft gripper</label>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default TypeFilterPC