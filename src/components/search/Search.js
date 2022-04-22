import React from 'react';
import './search.css';
const Search = ({handleChange}) => {
  return (
    <div>
        <input type="text" onChange={handleChange} placeholder="Search Your NFT's" id="search" className="search"/>
    </div>
  )
}

export default Search