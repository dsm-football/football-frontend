import React from "react";
import Header from "../header/Header";
import ApllicationMatching from "./matchRequst/ApplicationMatching";
import * as S from "./style";

const ClubManagement = () => {
  return (
    <>
      <Header></Header>
      <section>
        <S.ClubManageBanner>
          <b>동호회 관리</b>
        </S.ClubManageBanner>
        <S.ClubManageList>
          <ul>
            <li>매칭관리</li>
            <li>회원관리</li>
            <li>동호회정보</li>
          </ul>
        </S.ClubManageList>
        <S.MatchingList>
          <S.MatchRequest>
            <h3>매치 요청</h3>
            <S.MatchingApplicationList>
              <ApllicationMatching/>
              <ApllicationMatching/>
              <ApllicationMatching/>
              <ApllicationMatching/>
            </S.MatchingApplicationList>
          </S.MatchRequest>
        </S.MatchingList>
      </section>
    </>
  );
};

export default ClubManagement;
