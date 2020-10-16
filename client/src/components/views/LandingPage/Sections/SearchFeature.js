import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {
    const [SearchTerms, setSearchTerms] = useState('');

    const onChangeSearch = event => {
        event.preventDefault();
        setSearchTerms(event.currentTarget.value);

        props.refreshFunction(event.currentTarget.value);
    };

    const onChangeSearchButton = event => {};
    const onKeyUpHandler = event => {
        event.preventDefault();
    };

    return (
        <form className="search-box">
            <input
                type="text"
                className="search-field"
                placeholder="Search Tour..."
                onChange={onChangeSearch}
                value={SearchTerms}
                onKeyUp={onKeyUpHandler}
            ></input>
            <button
                type="button"
                className="search-btn"
                onClick={onChangeSearchButton}
            >
                Search
            </button>
        </form>
    );
}

export default SearchFeature;
