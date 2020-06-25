import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="md-form mb-3 mt-0">
      <input
        className="form-control"
        type="text"
        name="query"
        placeholder="Search"
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;
