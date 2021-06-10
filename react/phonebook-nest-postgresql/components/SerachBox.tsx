import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { selectedDataState, searchInputState } from "../store/atom";

const SearchBox = () => {
  const [searchInput, setSearchInput] =
    useRecoilState<string>(searchInputState);
  const resetSelectedData = useResetRecoilState(selectedDataState);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    resetSelectedData();
    setSearchInput(input);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="inp-sch"
        placeholder="검색어를 입력하세요."
        value={searchInput}
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchBox;
