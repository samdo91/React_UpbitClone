import { atom } from "jotai";

export const dailyRecord = atom({
  //한번에 불러온 캔들의 전체 데이터
  date: [],
  //하루의 OHLC를 각각의 배열을 만들어서 관리
  OHLC: [],
  //  전일 종가 대비 변화 금액
  changePrice: "",
});
