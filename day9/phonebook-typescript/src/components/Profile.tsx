import React, { memo } from "react";

interface ProfileProps {
  profileImg?: string;
  profileName: string;
  isDetail: Boolean;
}

const Profile = memo(({ profileImg, profileName, isDetail }: ProfileProps) => {
  return (
    <div className={isDetail ? "profile flex-column" : "profile flex-row"}>
      <img className="profile-img" src={profileImg} alt="프로필이미지" />
      <div className="profile-name">{profileName}</div>
    </div>
  );
});

export default Profile;
