import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import { selectedDataState } from "../store/atom";
import { IPhoneData } from "../types/type";
import Profile from "./Profile";

const Details = () => {
  const selectedData = useRecoilValue<IPhoneData | null>(selectedDataState);

  if (selectedData == null) {
    return <div className="emptyset">정보가 없습니다.</div>;
  } else {
    return (
      <div className="details">
        <ul className="info">
          <li>
            <Profile
              profileImg={selectedData.img}
              profileName={selectedData.name}
              isDetail={true}
            />
          </li>
          <li>생일 : {selectedData.birth}</li>
          <li>기타 : {selectedData.etc}</li>
        </ul>
      </div>
    );
  }
};

export default Details;
