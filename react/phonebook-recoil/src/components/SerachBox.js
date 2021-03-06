import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchState, selectedDataState } from "../atoms/atom";

function SearchBox() {
  const [search, setSearch] = useRecoilState(searchState);
  const resetSelectedData = useResetRecoilState(selectedDataState);

  const onInputChange = (e) => {
    const input = e.target.value;

    resetSelectedData();
    setSearch({ ...search, input: input, data: searchContact(input) });
  };

  const searchContact = (searchKeyword) => {
    return search.allData.filter((data) => {
      if (data.name.indexOf(searchKeyword) > -1) {
        return true;
      }

      return false;
    });
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="inp-sch"
        placeholder="검색어를 입력하세요."
        value={search.input}
        onChange={onInputChange}
      />
    </div>
  );
}

export default SearchBox;
