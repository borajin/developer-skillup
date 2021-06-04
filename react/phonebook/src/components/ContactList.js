import React from "react";
import Contact from "./Contact";

function ContactList({ phoneData, onContactClick }) {
  return (
    <div className="contact-list">
      <ul>
        {phoneData.map((data) => (
          <li key={data.id}>
            <Contact onContactClick={onContactClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
