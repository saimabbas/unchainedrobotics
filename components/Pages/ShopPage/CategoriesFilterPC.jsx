import React from 'react'
import { Accordion } from "react-bootstrap";
import ChevronUp from '../../../public/assets/icons/ChevronUp';
import st from '../../../styles/components/Pages/ShopPage/CategoriesFilterPC.module.css'

const CategoriesFilterPC = (props) => {
    return (
        <div className={st.categoriesFilterPC}>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>
                        <div className={st.filterHeader}>
                            <h6>{props.filterName}</h6>
                            <ChevronUp color="#313130" />
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className={st.categoriesAccBody}>
                            {props.children}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default CategoriesFilterPC