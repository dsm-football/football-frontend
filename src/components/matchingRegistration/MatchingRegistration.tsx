import React from "react";
import * as S from "./style";
import SelectSoccerKind from "./SelectSoccerKind";
import MatchingInfo from "./MatchingInfo";

const MatchingRegistration = () => {
  return (
    <>
      <S.MatchingRegistrationHeader>매칭 생성하기</S.MatchingRegistrationHeader>
      {/* <SelectSoccerKind /> */}
      <MatchingInfo />
    </>
  );
};

export default MatchingRegistration;
