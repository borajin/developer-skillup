import React from "react";
import Profile from "./Profile";
import { useSetRecoilState } from "recoil";
import { addTapState, selectedDataState } from "../store/atom";
import { IPhoneData } from "../types/type";

interface DataProps {
  data: IPhoneData;
}

const Data = ({ data }: DataProps) => {
  const setSelectedData =
    useSetRecoilState<IPhoneData | null>(selectedDataState);
  const setAddTap = useSetRecoilState(addTapState);

  return (
    <button
      type="button"
      onClick={() => {
        setAddTap(false);
        setSelectedData(data);
      }}
    >
      <Profile profileImg={data.img} profileName={data.name} isDetail={false} />
    </button>
  );
};

export default Data;
