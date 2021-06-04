import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { addPhoneData, getAllData } from "../data/PhoneData";
import { searchInputState, searchListState } from "../store/atom";

const AddTap = () => {
  const setSearchList = useSetRecoilState(searchListState);
  const setSearchInput = useSetRecoilState(searchInputState);

  const [inputValues, setInputValues] = useState({
    name: "",
    birth: "",
    etc: ""
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const add = () => {
    if (inputValues.name == "") {
      alert("이름을 입력해주세요.");
    } else {
      alert("추가하였습니다.");
      addPhoneData(inputValues.name, inputValues.birth, inputValues.etc);
      setSearchList(getAllData());
      setSearchInput("");
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
      <button className="add-btn" onClick={add}>
        추가하기
      </button>
    </div>
  );
};

export default AddTap;
