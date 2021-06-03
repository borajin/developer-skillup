import { atom } from "recoil";
import { PhoneData } from "../data/PhoneData.json";

export interface PhoneDataTypes {
  id: number;
  name: string;
  img?: string;
  birth: string;
  etc?: string;
}

export interface SearchDataTypes {
  input: string | "";
  searchData: PhoneDataTypes[];
  allData: PhoneDataTypes[];
}

export const searchState = atom<SearchDataTypes>({
  key: "searchState",
  default: {
    input: "",
    searchData: PhoneData,
    allData: PhoneData
  }
});

export const selectedDataState = atom<PhoneDataTypes | null>({
  key: "selectedDataSate",
  default: null
});
