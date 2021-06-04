import React from "react";
import { useSetRecoilState } from "recoil";
import { addTapState } from "../store/atom";

const AddButton = () => {
  const setAddTap = useSetRecoilState(addTapState);

  return (
    <button
      className="addTap-button"
      onClick={() => {
        setAddTap(true);
      }}
    >
      +
    </button>
  );
};

export default AddButton;
