import React from 'react';

const SearchHero = ({ setSearchStr }) => {
    return (
        <div>
            <label className="search-hero-label">Enter hero name: </label>
            <input 
            onChange={(e) => setSearchStr(e.target.value)}
            name="heroname"
            />
        </div>
    )
}

export default SearchHero;