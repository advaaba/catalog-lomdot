import React from "react";
import "../Css/SearchButton.css";

const SearchButton = ({ searchValue, setSearchValue }) => {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="filter-section">
      <div className="search-container">
        <input
          type="text"
          placeholder="שם הלומדה..."
          className="search-input"
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchButton;
