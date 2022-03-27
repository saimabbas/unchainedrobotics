import React from 'react'

const ProductModalSelect = () => {
    return (
        <div className="ds-select">
            <label htmlFor="model">Model</label>
            <select name="model" id="model">
                <option value="">Choose an option</option>
                <option value="">Model 1</option>
                <option value="">Model 2</option>
                <option value="">Model 3</option>
            </select>
        </div>
    )
}

export default ProductModalSelect