import React, { memo } from "react";
import Profile from "./Profile";
import { useSetRecoilState } from "recoil";
import { selectedDataState, PhoneDataTypes } from "../atoms/atom";

interface DataProps {
  data: PhoneDataTypes;
}

const Data = memo(({ data }: DataProps) => {
  const setSelectedData =
    useSetRecoilState<PhoneDataTypes | null>(selectedDataState);

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
