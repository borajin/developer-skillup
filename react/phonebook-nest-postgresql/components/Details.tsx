import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  tapState,
  searchInputState,
  searchListState,
  selectedDataState
} from "../store/atom";
import { IPhoneData } from "../types/type";
import Profile from "./Profile";
import { getAllData, removePhoneData } from "../store/PhoneData";

const Details = () => {
  const selectedData = useRecoilValue<IPhoneData | null>(selectedDataState);
  const setSearchInput = useSetRecoilState<string>(searchInputState);
  const setSearchList = useSetRecoilState<IPhoneData[]>(searchListState);
  const setSelectedData = useSetRecoilState<IPhoneData>(selectedDataState);
  const setTap = useSetRecoilState<"details" | "add" | "edit">(tapState);

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
          <div className="details-buttons">
            <button
              className="remove-btn"
              onClick={async () => {
                alert("삭제하였습니다.");
                await removePhoneData(selectedData.id);
                const allData = await getAllData();
                setSearchList(allData);
                setSearchInput("");
                setSelectedData(null);
              }}
            >
              삭제
            </button>
            <button
              className="remove-btn"
              onClick={() => {
                setTap("edit");
              }}
            >
              수정
            </button>
          </div>
        </>
      ) : (
        <div className="emptyset">정보가 없습니다.</div>
      )}
    </div>
  );
};

export default Details;
