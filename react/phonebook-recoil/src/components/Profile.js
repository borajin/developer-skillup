import React from "react";

function Profile({ profileImg, profileName, isDetail }) {
  return (
    <div className={isDetail ? "profile flex-column" : "profile flex-row"}>
      <img className="profile-img" src={profileImg} alt="프로필이미지" />
      <div className="profile-name">{profileName}</div>
    </div>
  );
}

export default Profile;
