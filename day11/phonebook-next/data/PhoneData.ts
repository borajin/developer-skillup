import { IPhoneData } from "../types/type";

export const getAllData = () => {
  return PhoneData;
};

let PhoneData: IPhoneData[] = [
  {
    id: 1,
    name: "김더존",
    img: "http://placeimg.com/100/100/any",
    birth: "1999-99-99",
    etc: "김씨입니다."
  },
  {
    id: 2,
    name: "이더존",
    img: "http://placeimg.com/100/100/any",
    birth: "1888-88-88",
    etc: "이씨입니다."
  },
  {
    id: 3,
    name: "오더존",
    img: "http://placeimg.com/100/100/any",
    birth: "1000-00-00",
    etc: "오씨입니다."
  },
  {
    id: 4,
    name: "이선규",
    img: "http://placeimg.com/100/100/any",
    birth: "1111-11-11",
    etc: "자상하다"
  },
  {
    id: 5,
    name: "김동혁",
    img: "http://placeimg.com/100/100/any",
    birth: "1222-22-22",
    etc: "재미있다."
  },
  {
    id: 6,
    name: "이창민",
    img: "http://placeimg.com/100/100/any",
    birth: "1333-33-33",
    etc: "잘생겼다"
  },
  {
    id: 7,
    name: "김회준",
    img: "http://placeimg.com/100/100/any",
    birth: "1444-44-44",
    etc: "웃기다"
  },
  {
    id: 8,
    name: "황지훈",
    img: "http://placeimg.com/100/100/any",
    birth: "1555-55-55",
    etc: "이쁘다"
  },
  {
    id: 9,
    name: "임성후",
    img: "http://placeimg.com/100/100/any",
    birth: "1666-66-66",
    etc: "맞습니다"
  }
];

let id = 9;

const createId = () => {
  if (PhoneData.length < 1) return 1;
  else {
    id = id + 1;
    return id;
  }
};

export const addPhoneData = (name: string, birth: string, etc: string) => {
  PhoneData = [
    ...PhoneData,
    {
      id: createId(),
      name,
      img: "http://placeimg.com/100/100/any",
      birth,
      etc
    }
  ];
};

export const removePhoneData = (id: number) => {
  PhoneData = PhoneData.filter(data => {
    return data.id !== id;
  });
};

export const editPhoneData = (
  id: number,
  name: string,
  birth: string,
  etc: string
) => {
  removePhoneData(id);
  PhoneData = [
    ...PhoneData,
    {
      id: id,
      name,
      img: "http://placeimg.com/100/100/any",
      birth,
      etc
    }
  ];
};

export const findPhoneData = (id: number) => {
  return PhoneData.find(data => data.id == id);
};
