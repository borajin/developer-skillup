import React from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { filteredListState } from "../store/atom";
import { tapState } from "../store/atom";
import { IPhoneData } from "../types/type";
import Data from "./Data";

const ContactList = () => {
  const filteredList = useRecoilValueLoadable<IPhoneData[]>(filteredListState);
  const setTap = useSetRecoilState<"details" | "add" | "edit">(tapState);

  switch (filteredList.state) {
    case "hasValue":
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
            {filteredList.contents.map(data => (
              <li key={data.id}>
                <Data data={data} />
              </li>
            ))}
          </ul>
        </div>
      );
    case "loading":
      return <div>Loading..</div>;
    case "hasError":
      throw filteredList.contents;
  }
};

export default ContactList;
