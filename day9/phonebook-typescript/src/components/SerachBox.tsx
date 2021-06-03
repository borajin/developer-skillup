import React, { memo } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchState, selectedDataState, SearchDataTypes } from "../atoms/atom";

const SearchBox = memo(() => {
  const [search, setSearch] = useRecoilState<SearchDataTypes>(searchState);
  const resetSelectedData = useResetRecoilState(selectedDataState);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    resetSelectedData();
    setSearch({ ...search, input: input, searchData: searchContact(input) });
  };

  const searchContact = (searchKeyword: string) => {
    return search.allData.filter(data => {
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
});

export default SearchBox;
