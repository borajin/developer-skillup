import { atom, selector } from "recoil";
import { getAllData } from "./PhoneData";
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

export const filteredListState = selector<IPhoneData[]>({
  key: "filteredListState",
  get: ({ get }) => {
    const searchInput = get(searchInputState);
    const searchList = get(searchListState);

    return searchList
      .filter(data => data.name.includes(searchInput))
      .sort((a: IPhoneData, b: IPhoneData) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
  }
});

export const tapState = atom<"details" | "add" | "edit">({
  key: "tapState",
  default: "details"
});
