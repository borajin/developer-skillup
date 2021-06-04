import React, { memo } from "react";
import Profile from "./Profile";

const Contact = memo(({ data, onContactClick }) => {
  return (
    <button
      type="button"
      onClick={() => {
        onContactClick(data);
      }}
    >
      <Profile profileImg={data.img} profileName={data.name} isDetail={false} />
    </button>
  );
});

export default Contact;
