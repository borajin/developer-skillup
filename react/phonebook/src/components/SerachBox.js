import React from "react";

function SearchBox({ value, onInputChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        className="inp-sch"
        placeholder="검색어를 입력하세요."
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}

export default SearchBox;
