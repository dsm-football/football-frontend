import React from "react";
import Header from "../header/Header";
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
          <div>
            <h3>수락 대기중인 매치</h3>
            <S.WaitAcceptList>
              <S.MatchingCardContainer>
                <p>asdas</p>
              </S.MatchingCardContainer>
            </S.WaitAcceptList>
          </div>
        </S.MatchingList>
      </section>
    </>
  );
};

export default ClubManagement;
