import React from "react";

function Profile({ profileImg, profileName }) {
  return (
    <div className="profile">
      <img className="profile-img" src={profileImg} />
      <div className="profile-name">{profileName}</div>
    </div>
  );
}

export default Profile;
