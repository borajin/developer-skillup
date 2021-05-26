import React from "react";
import Profile from "./Profile";

function ContactList({ phoneData, onContactClick }) {
  return (
    <div className="contact-list">
      {phoneData.map((data) => (
        <button
          type="button"
          key={data.id}
          onClick={() => {
            onContactClick(data.id);
          }}
        >
          <Profile profileImg={data.img} profileName={data.name} />
        </button>
      ))}
    </div>
  );
}

export default ContactList;
