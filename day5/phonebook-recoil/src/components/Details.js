import React from "react";
import { useRecoilValue } from "recoil";
import { selectedDataState } from "../atoms/atom";
import Profile from "./Profile";

function Details() {
  const selectedData = useRecoilValue(selectedDataState);

  return (
    <div className="details">
      {selectedData ? (
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
      ) : (
        <div className="emptyset">정보가 없습니다.</div>
      )}
    </div>
  );
}

export default Details;
