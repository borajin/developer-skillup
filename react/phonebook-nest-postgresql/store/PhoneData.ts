import { IPhoneData } from "../types/type";
import axios, { AxiosResponse } from "axios";

export const getAllData = async (): Promise<IPhoneData[]> => {
  const { data: result } = await axios.get<IPhoneData[]>(
    "http://localhost:3001/contacts/contacts"
  );

  return result;
};

export const addPhoneData = async (
  name: string,
  birth: string,
  etc: string
): Promise<AxiosResponse<any>> => {
  return await axios.post("http://localhost:3001/contacts", {
    name: name,
    img: "http://placeimg.com/100/100/any",
    birth: birth,
    etc: etc
  });
};

export const removePhoneData = async (
  id: number
): Promise<AxiosResponse<any>> => {
  return await axios.delete(`http://localhost:3001/contacts/${id}`);
};

export const editPhoneData = async (
  id: number,
  name: string,
  birth: string,
  etc: string
): Promise<AxiosResponse<any>> => {
  return await axios.patch(`http://localhost:3001/contacts/${id}`, {
    name: name,
    birth: birth,
    etc: etc
  });
};

export const findPhoneData = async (id: number): Promise<IPhoneData> => {
  const { data: result } = await axios.get<IPhoneData>(
    `http://localhost:3001/contacts/${id}`
  );
  return result;
};

export const searchPhoneData = async (name: string): Promise<IPhoneData> => {
  const { data: result } = await axios.get<IPhoneData>(
    `http://localhost:3001/contacts/search?name=${name}`
  );

  return result;
};
