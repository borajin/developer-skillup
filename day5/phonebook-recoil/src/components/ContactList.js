import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { searchState, selectedDataState } from "../atoms/atom";
import Profile from "./Profile";

function ContactList() {
  const search = useRecoilValue(searchState);
  const setSelectedData = useSetRecoilState(selectedDataState);

  const onContactClick = (id) => {
    setSelectedData(searchContact(id));
  };

  const searchContact = (id) => {
    return search.allData.find((data) => {
      if (data.id === Number(id)) {
        return true;
      }

      return false;
    });
  };

  return (
    <div className="contact-list">
      <ul>
        {search.data.map((data) => (
          <li key={data.id}>
            <button
              type="button"
              onClick={() => {
                onContactClick(data.id);
              }}
            >
              <Profile
                profileImg={data.img}
                profileName={data.name}
                isDetail={false}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
