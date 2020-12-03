import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {
    const [SearchTerms, setSearchTerms] = useState('');

    const onChangeSearch = event => {
        setSearchTerms(event.currentTarget.value);

        props.refreshFunction(event.currentTarget.value);
    };

    return (
        <div>
            <Search
                value={SearchTerms}
                onChange={onChangeSearch}
                placeholder="Search By Typing..."
            />
        </div>
    );
}

export default SearchFeature;

// import React, { useState } from 'react';
// import { Input } from 'antd';

// const { Search } = Input;

// function SearchFeature(props) {
//     const [SearchTerms, setSearchTerms] = useState('');

//     const onChangeSearch = event => {
//         event.preventDefault();
//         setSearchTerms(event.currentTarget.value);

//         props.refreshFunction(event.currentTarget.value);
//     };

//     const onChangeSearchButton = event => {};
//     const onKeyUpHandler = event => {
//         event.preventDefault();
//     };

//     return (
//         <form className="search-box">
//             <input
//                 type="text"
//                 className="search-field"
//                 placeholder="Search By Typing..."
//                 onChange={onChangeSearch}
//                 value={SearchTerms}
//                 onKeyUp={onKeyUpHandler}
//             ></input>
//             <button
//                 type="button"
//                 className="search-btn"
//                 onClick={onChangeSearchButton}
//             >
//                 Search By Typing
//             </button>
//         </form>
//     );
// }

// export default SearchFeature;
