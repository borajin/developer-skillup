import React, { memo } from "react";
import Profile from "./Profile";
import { useSetRecoilState } from "recoil";
import { selectedDataState } from "../store/atom";
import { IPhoneData } from "../types/type";

interface DataProps {
  data: IPhoneData;
}

const Data = memo(({ data }: DataProps) => {
  const setSelectedData =
    useSetRecoilState<IPhoneData | null>(selectedDataState);

  return (
    <button
      type="button"
      onClick={() => {
        setSelectedData(data);
      }}
    >
      <Profile profileImg={data.img} profileName={data.name} isDetail={false} />
    </button>
  );
});

export default Data;
