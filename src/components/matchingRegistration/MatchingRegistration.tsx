import React from "react";
import * as S from "./style";
import SelectSoccerKind from "./SelectSoccerKind";
import MatchingInfo from "./MatchingInfo";
import MatchingOtherInfo from "./MatchingOtherInfo";
import NoticeModal from "../common/noticeModal/NoticeModal";

const MatchingRegistration = () => {
  return (
    <>
      <NoticeModal />
      <S.MatchingRegistrationHeader>매칭 생성하기</S.MatchingRegistrationHeader>
      {/* <SelectSoccerKind /> */}
      {/* <MatchingInfo /> */}
      <MatchingOtherInfo />
    </>
  );
};

export default MatchingRegistration;
