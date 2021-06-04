import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  addPhoneData,
  getAllData,
  editPhoneData,
  findPhoneData
} from "../store/PhoneData";
import {
  tapState,
  searchInputState,
  searchListState,
  selectedDataState
} from "../store/atom";
import { IPhoneData } from "../types/type";

const AddTap = () => {
  const setSearchList = useSetRecoilState(searchListState);
  const setSearchInput = useSetRecoilState(searchInputState);
  const [selectedData, setSelectedData] =
    useRecoilState<IPhoneData>(selectedDataState);
  const [tap, setTap] = useRecoilState<string>(tapState);

  const [inputValues, setInputValues] = useState({
    name: tap == "add" ? "" : selectedData ? selectedData.name : "",
    birth: tap == "add" ? "" : selectedData ? selectedData.birth : "",
    etc: tap == "add" ? "" : selectedData ? selectedData.etc : ""
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const init = () => {
    setSearchList(getAllData());
    setSearchInput("");
    setTap("details");
  };

  const checkVal = () => {
    if (inputValues.name == "") {
      alert("이름을 입력해주세요.");

      return false;
    }

    return true;
  };

  const add = () => {
    if (checkVal()) {
      alert("추가하였습니다.");
      addPhoneData(inputValues.name, inputValues.birth, inputValues.etc);
      init();
    }
  };

  const edit = () => {
    if (checkVal()) {
      alert("수정하였습니다.");
      editPhoneData(
        selectedData.id,
        inputValues.name,
        inputValues.birth,
        inputValues.etc
      );
      setSelectedData(findPhoneData(selectedData.id));
      init();
    }
  };

  const input = (name: string, value: string) => {
    return (
      <div>
        <span>{name}</span>
        <input name={name} value={value || ""} onChange={onInputChange}></input>
      </div>
    );
  };

  return (
    <div className="add-container">
      <div className="add-inputs">
        {input("name", inputValues.name)}
        {input("birth", inputValues.birth)}
        {input("etc", inputValues.etc)}
      </div>
      {tap == "add" ? (
        <button className="add-btn" onClick={add}>
          추가하기
        </button>
      ) : (
        <button className="add-btn" onClick={edit}>
          수정하기
        </button>
      )}
    </div>
  );
};

export default AddTap;
