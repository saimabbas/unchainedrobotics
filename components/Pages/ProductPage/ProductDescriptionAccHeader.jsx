import React from 'react'
import { Accordion } from "react-bootstrap"
import st from "../../../styles/components/Pages/ProductPage/ProductDescriptionAccHeader.module.css"

const ProductDescriptionAccHeader = (props) => {
    return (
        <Accordion.Header>
            <div className={st.detailsSectionHead}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5257 7.50639C11.5879 7.44401 11.6618 7.39451 11.7432 7.36074C11.8246 7.32696 11.9119 7.30958 12 7.30958C12.0881 7.30958 12.1753 7.32696 12.2567 7.36074C12.3381 7.39451 12.412 7.44401 12.4743 7.50639L20.5132 15.5453C20.639 15.6711 20.7097 15.8417 20.7097 16.0196C20.7097 16.1975 20.639 16.3682 20.5132 16.4939C20.3874 16.6197 20.2168 16.6904 20.0389 16.6904C19.861 16.6904 19.6904 16.6197 19.5646 16.4939L12 8.92795L4.43532 16.4939C4.30953 16.6197 4.13892 16.6904 3.96102 16.6904C3.78313 16.6904 3.61252 16.6197 3.48672 16.4939C3.36093 16.3682 3.29026 16.1975 3.29026 16.0196C3.29026 15.8417 3.36093 15.6711 3.48672 15.5453L11.5257 7.50639Z" fill="#313130" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.43532 16.4939C4.30953 16.6197 4.13892 16.6904 3.96102 16.6904C3.78313 16.6904 3.61252 16.6197 3.48672 16.4939C3.36093 16.3682 3.29026 16.1975 3.29026 16.0196C3.29026 15.8417 3.36093 15.6711 3.48672 15.5453L11.5257 7.50639C11.5879 7.44401 11.6618 7.39451 11.7432 7.36074C11.8246 7.32696 11.9119 7.30958 12 7.30958C12.0881 7.30958 12.1753 7.32696 12.2567 7.36074C12.3381 7.39451 12.412 7.44401 12.4743 7.50639L20.5132 15.5453C20.639 15.6711 20.7097 15.8417 20.7097 16.0196C20.7097 16.1975 20.639 16.3682 20.5132 16.4939C20.3874 16.6197 20.2168 16.6904 20.0389 16.6904C19.861 16.6904 19.6904 16.6197 19.5646 16.4939L12 8.92795L4.43532 16.4939ZM12 9.33856L4.64063 16.6992C4.46039 16.8795 4.21592 16.9807 3.96102 16.9807C3.70613 16.9807 3.46167 16.8795 3.28143 16.6992C3.1012 16.519 2.99994 16.2745 2.99994 16.0196C2.99994 15.7647 3.1012 15.5203 3.28143 15.3401L11.3201 7.30136C11.4093 7.21206 11.5154 7.14094 11.6319 7.09258C11.7486 7.04417 11.8737 7.01926 12 7.01926C12.1263 7.01926 12.2513 7.04417 12.368 7.09258C12.4845 7.14094 12.5904 7.2118 12.6796 7.3011M12.6796 7.3011L20.7185 15.3401C20.8988 15.5203 21 15.7648 21 16.0196C21 16.2745 20.8988 16.519 20.7185 16.6992C20.5383 16.8795 20.2938 16.9807 20.0389 16.9807C19.784 16.9807 19.5396 16.8795 19.3593 16.6992L12 9.33856" fill="#313130" />
                </svg>
                <h1>{props.headertext}</h1>
            </div>
        </Accordion.Header>
    )
}

export default ProductDescriptionAccHeader