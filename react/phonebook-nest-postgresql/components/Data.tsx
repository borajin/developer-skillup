import React from "react";
import Profile from "./Profile";
import { useSetRecoilState } from "recoil";
import { tapState, selectedDataState } from "../store/atom";
import { IPhoneData } from "../types/type";

interface DataProps {
  data: IPhoneData;
}

const Data = ({ data }: DataProps) => {
  const setSelectedData =
    useSetRecoilState<IPhoneData | null>(selectedDataState);
  const setAddTap = useSetRecoilState<"details" | "add" | "edit">(tapState);

  return (
    <button
      type="button"
      onClick={() => {
        setSelectedData(data);
        setAddTap("details");
      }}
    >
      <Profile profileImg={data.img} profileName={data.name} isDetail={false} />
    </button>
  );
};

export default Data;
