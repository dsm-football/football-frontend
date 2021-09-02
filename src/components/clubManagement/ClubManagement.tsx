import React from "react";
import { Header, MatchCard } from "../common";
import ApllicationMatching from "./matchRequst/ApplicationMatching";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
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
          <S.MatchContainer>
            <h3>매치 요청</h3>
            <S.MatchingApplicationList>
              <ApllicationMatching />
              <ApllicationMatching />
              <ApllicationMatching />
              <ApllicationMatching />
            </S.MatchingApplicationList>
          </S.MatchContainer>
          <S.MatchContainer>
            <h3>작성한 매치</h3>
            <S.MatchSlideList>
              <ScrollMenu>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </ScrollMenu>
            </S.MatchSlideList>
          </S.MatchContainer>
          <S.MatchContainer>
            <h3>신청한 매치</h3>
            <S.MatchSlideList>
              <ScrollMenu>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </ScrollMenu>
            </S.MatchSlideList>
          </S.MatchContainer>
        </S.MatchingList>
      </section>
    </>
  );
};

export default ClubManagement;
