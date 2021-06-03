import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import { searchState, SearchDataTypes } from "../atoms/atom";
import Data from "./Data";

memo(function ContactList() {
  const search = useRecoilValue<SearchDataTypes>(searchState);

  return (
    <div className="contact-list">
      <ul>
        {search.searchData.map(data => (
          <li key={data.id}>
            <Data data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ContactList;
