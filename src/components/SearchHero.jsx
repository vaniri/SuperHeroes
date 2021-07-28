import React from 'react';

const SearchHero = ({ setSearchStr }) => {
    return (
        <div>
            <input
                className="search-hero"
                placeholder="Enter hero name"
                onChange={(e) => setSearchStr(e.target.value)}
                name="heroname"
            />
        </div>
    )
}

export default SearchHero;