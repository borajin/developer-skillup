import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredListState } from "../store/atom";
import { IPhoneData } from "../types/type";
import { tapState } from "../store/atom";
import Data from "./Data";

const ContactList = () => {
  const filteredList = useRecoilValue<IPhoneData[]>(filteredListState);
  const setTap = useSetRecoilState(tapState);
  return (
    <div className="contact-list">
      <button
        className="addTap-button"
        onClick={() => {
          setTap("add");
        }}
      >
        +
      </button>
      <ul>
        {filteredList.map(data => (
          <li key={data.id}>
            <Data data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
