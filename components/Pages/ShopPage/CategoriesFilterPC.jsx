import React from 'react'
import { Accordion } from "react-bootstrap";
import ChevronUp from '../../../public/assets/icons/ChevronUp';
import st from '../../../styles/components/Pages/ShopPage/CategoriesFilterPC.module.css'

const CategoriesFilterPC = () => {
    return (
        <div className={st.categoriesFilterPC}>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>
                        <div className={st.filterHeader}>
                            <h6>Categories</h6>
                            <ChevronUp color="#313130" />
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className={st.categoriesAccBody}>
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
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default CategoriesFilterPC