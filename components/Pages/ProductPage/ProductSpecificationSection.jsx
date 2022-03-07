import React from 'react'
import st from "../../../styles/components/Pages/ProductPage/ProductSpecificationSection.module.css"
import ProductSpecificationTable from './ProductSpecificationTable'
const ProductSpecificationSection = () => {
    return (
        <div className={st.technicalDataContent}>
            <ProductSpecificationTable>
                <thead>
                    <tr>
                        <th colSpan={2}>Arm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Reach</td>
                        <td>1.500 mm</td>
                    </tr>
                    <tr>
                        <td>Max Payload</td>
                        <td>25.000 g</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>72.000 g</td>
                    </tr>
                </tbody>
            </ProductSpecificationTable>
            <ProductSpecificationTable>

                <thead>
                    <tr>
                        <th colSpan={2}>Performance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Repeatability</td>
                        <td>0,1 mm</td>
                    </tr>
                    <tr>
                        <td>Linear Speed</td>
                        <td>1 m/s</td>
                    </tr>
                    <tr>
                        <td>Temperature</td>
                        <td>0-45° C</td>
                    </tr>
                </tbody>
            </ProductSpecificationTable>

            <ProductSpecificationTable>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            Joint Movement (Range: ° / Max Speed : ° /s)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>J1</td>
                        <td> ±360° / 100° /s</td>
                    </tr>
                    <tr>
                        <td>J2</td>
                        <td> ±130° / 80° /s</td>
                    </tr>
                    <tr>
                        <td>J3</td>
                        <td> ±160° / 100° /s</td>
                    </tr>
                    <tr>
                        <td>J4</td>
                        <td> ±360° / 180° /s</td>
                    </tr>
                    <tr>
                        <td>J5</td>
                        <td> ±360° / 180° /s</td>
                    </tr>
                    <tr>
                        <td>J6</td>
                        <td> ±360° / 180° /s</td>
                    </tr>
                </tbody>
            </ProductSpecificationTable>
            <ProductSpecificationTable>
                <thead>
                    <tr>
                        <th colSpan={2}>Software & Teaching</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dart Studio</td>
                    </tr>
                    <tr>
                        <td>Windows-based</td>
                    </tr>
                    <tr>
                        <td>Online and offline programming</td>
                    </tr>
                    <tr>
                        <td>Teach cockpit - Hand guidance</td>
                    </tr>
                </tbody>
            </ProductSpecificationTable>
            <ProductSpecificationTable>
                <thead>
                    <tr>
                        <th colSpan={2}>Other Features</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Installation Position</td>
                        <td>Only Floor</td>
                    </tr>
                    <tr>
                        <td>Protection Rating</td>
                        <td>IP 54</td>
                    </tr>
                    <tr>
                        <td>Flange Interfaces</td>
                        <td>Digital I/O 6 In / 6 Out</td>
                    </tr>
                    <tr>
                        <td>I/O Power Supply</td>
                        <td>DC 24 V / Max. 3A</td>
                    </tr>
                </tbody>
            </ProductSpecificationTable>
        </div>
    )
}

export default ProductSpecificationSection