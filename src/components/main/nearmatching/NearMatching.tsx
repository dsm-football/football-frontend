import React from "react";
import * as S from "./style";

const Near = () => {
  return (
    <>
      <section>
        <S.ClubManageBanner>
          <b>배너영역</b>
        </S.ClubManageBanner>
        <S.Matching>내 주변 매칭을 찾아보세요</S.Matching>
        <S.Searching>
          <div>
            <S.Target />
            <S.Locate>서울시 노원구 하계동</S.Locate>
            <S.Select>변경</S.Select>
          </div>
          <S.Map>
            <S.Point1 />
          </S.Map>
        </S.Searching>
      </section>
    </>
  );
};

export default Near;
