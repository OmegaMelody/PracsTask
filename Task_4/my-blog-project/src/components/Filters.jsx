import React from "react";
import '../App';

const Filters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortType,
  setSortType,
  categories
}) => {
  return (
    <div className="filters container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button">🔍</button>
      </div>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="recent">Most recent</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
};

export default Filters;
