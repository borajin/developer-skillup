import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  searchInputState,
  searchListState,
  selectedDataState
} from "../store/atom";
import { IPhoneData } from "../types/type";
import Profile from "./Profile";
import { getAllData, removePhoneData } from "../data/PhoneData";

const Details = () => {
  const selectedData = useRecoilValue<IPhoneData | null>(selectedDataState);

  const setSearchInput = useSetRecoilState(searchInputState);
  const setSearchList = useSetRecoilState(searchListState);
  const setSelectedData = useSetRecoilState(selectedDataState);

  return (
    <div className="details">
      {selectedData != null ? (
        <>
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
          <button
            className="remove-btn"
            onClick={() => {
              alert("삭제하였습니다.");
              removePhoneData(selectedData.id);
              setSearchInput("");
              setSearchList(getAllData());
              setSelectedData(null);
            }}
          >
            삭제
          </button>
        </>
      ) : (
        <div className="emptyset">정보가 없습니다.</div>
      )}
    </div>
  );
};

export default Details;
