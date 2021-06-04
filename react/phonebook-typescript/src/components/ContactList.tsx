import React from "react";
import { useRecoilValue } from "recoil";
import { filteredListState } from "../store/atom";
import { IPhoneData } from "../types/type";
import Data from "./Data";

const ContactList = () => {
  const filteredList = useRecoilValue<IPhoneData[]>(filteredListState);

  console.log(filteredList);

  return (
    <div className="contact-list">
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
