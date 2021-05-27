import { atom } from "recoil";
import { PhoneData } from "../data/PhoneData.json";

export const searchState = atom({
  key: "searchState",
  default: {
    input: "",
    data: PhoneData,
    allData: PhoneData,
  },
});

export const selectedDataState = atom({
  key: "selectedDataSate",
  default: null,
});
