import React from "react";
import * as S from "./style";
import { gps, Locate, LocatePin } from "../../../assets";

const Near = () => {
  return (
    <>
      <S.Section>
        <S.ClubManageBanner />
        <S.Matching>내 주변 매칭을 찾아보세요</S.Matching>
        <S.Searching>
          <div>
            <S.Target>
              <img src={Locate} alt="" />
            </S.Target>
            <S.Locate>서울시 노원구 하계동</S.Locate>
            <S.Select>변경</S.Select>
          </div>
          <S.Map src={gps} alt="지도"></S.Map>
        </S.Searching>
      </S.Section>
    </>
  );
};

export default Near;
