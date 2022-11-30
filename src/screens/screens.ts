import { EPageType, IScreen } from "../types/types";

interface IProp {
  [key: string]: IScreen;
}

const screens: IProp = {
  d1a: { link: "1A.htm", type: EPageType.file },
  d2abc: { link: "2ABC.htm", type: EPageType.file },
  d2d: { link: "2D.htm", type: EPageType.file },
  d5a1: { link: "5ABC.htm", type: EPageType.file },
  d5a2: { link: "5ABC_2.htm", type: EPageType.file },
  d6a: { link: "6A.htm", type: EPageType.file },
  d6b: { link: "6B.htm", type: EPageType.file },
  d8a: { link: "8AB.htm", type: EPageType.file },
  d8c: { link: "8C.htm", type: EPageType.file },
  d9c: { link: "9C.htm", type: EPageType.file },
  d18: { link: "18A.htm", type: EPageType.file },
  d10_12: { link: "10.htm", type: EPageType.file },
  d13: { link: "13.htm", type: EPageType.file },
  d14: { link: "14.htm", type: EPageType.file },
};

export default screens;
