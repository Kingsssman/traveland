import React, { useState } from 'react';

function PriceFeature(props) {
    const [Value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.currentTarget.value);
        props.handleFilters(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                className="filter-field price"
                placeholder="Price"
                onChange={handleChange}
                value={Value}
            ></input>
        </>
    );
}

export default PriceFeature;
