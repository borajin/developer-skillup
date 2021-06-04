import { atom, selector } from "recoil";
import { getAllData } from "../data/PhoneData";
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
  default: getAllData()
});

export const filteredListState = selector({
  key: "filteredList",
  get: ({ get }) => {
    const searchInput = get(searchInputState);
    const searchList = get(searchListState);

    return searchList.filter(data => data.name.includes(searchInput));
  }
});
