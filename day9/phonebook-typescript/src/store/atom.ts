import { atom, selector } from "recoil";
import { PhoneData } from "../data/PhoneData.json";
import { IPhoneData } from "../types/type";

export const selectedDataState = atom<IPhoneData | null>({
  key: "selectedDataState",
  default: null
});

export const searchInputState = atom<string>({
  key: "searchInputState",
  default: ""
});

export const searchListState = atom<IPhoneData[]>({
  key: "searchListState",
  default: PhoneData
});

export const filteredListState = selector({
  key: "filteredListState",
  get: ({ get }) => {
    const searchInput = get(searchInputState);
    const searchList = get(searchListState);

    console.log("as");

    return searchList.filter(data => data.name.includes(searchInput));
  }
});
