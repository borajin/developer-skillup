import React from "react";
import { useRecoilValue } from "recoil";
import { filteredListState } from "../store/atom";
import { IPhoneData } from "../types/type";
import AddTapButton from "./AddTapButton";
import Data from "./Data";

const ContactList = () => {
  const filteredList = useRecoilValue<IPhoneData[]>(filteredListState);

  return (
    <div className="contact-list">
      <AddTapButton />
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
