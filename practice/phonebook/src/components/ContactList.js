import React from "react";
import Profile from "./Profile";

function ContactList({ phoneData, onContactClick }) {
  return (
    <div className="contact-list">
      <ul>
        {phoneData.map((data) => (
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
