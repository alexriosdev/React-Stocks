import React from 'react';

const SearchBar = ({handleFilter}) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={handleFilter}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={handleFilter}/>
        Price
      </label>
      <br/>
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}


export default SearchBar;
