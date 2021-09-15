import React from "react";
import { Header } from "../common";
import MatchManagement from "./matchManagement/MatchManagement";
import MemberManagement from "./memberManagement/MemberManagement";
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
        {/* <MatchManagement/> */}
        <MemberManagement/>
      </section>
    </>
  );
};

export default ClubManagement;
