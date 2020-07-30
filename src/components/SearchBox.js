import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search Scientists"
        className="pa3 f3 ba b--green bg-lightest-blue br-pill fw1 w-50 shadow-5"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
