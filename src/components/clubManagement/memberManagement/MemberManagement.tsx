import React, { useEffect, useState } from "react";
import * as S from "./style";
import AppliedMember from "./appliedMember/AppliedMember";
import MemberContainer from "./memberContainer/MemberContainer";
import UseClubManagement from "../../../util/hooks/clubManagement";

const MemberManagement = () => {
  const [applicationStatus, setApplicationStatus] = useState<boolean>(false);
  const { state, setState } = UseClubManagement();
  
  return (
    <>
      <S.MainContainer>
        <S.AllowSubscription>
          <span>동호회 가입 신청 받기</span>
          <S.SwitchContainer
            applicationStatus={applicationStatus}
            onClick={() => {
              setApplicationStatus(!applicationStatus);
            }}
          >
            <S.Switch applicationStatus={applicationStatus} />
          </S.SwitchContainer>
        </S.AllowSubscription>
        <S.AppliedMemberContainer>
          <b>
            <span>가입을 요청한 회원</span>
          </b>
          <S.AppliedMemberList>
            {Array(3)
              .fill(0)
              .map((v, i) => {
                return <AppliedMember key={i} />;
              })}
          </S.AppliedMemberList>
        </S.AppliedMemberContainer>
        <S.MemberListContainer>
          <b>
            <span>회원목록(20)</span>
          </b>
          <S.MemberList>
            <S.MemberAttribute>
              <span>회원정보</span>
              <div>
                <S.MemberBackNumber>등번호</S.MemberBackNumber>
                <S.MemberPosition>포지션</S.MemberPosition>
              </div>
            </S.MemberAttribute>
            {state.memberList.map((v, i) => {
              return <MemberContainer key={i} {...v} />;
            })}
          </S.MemberList>
        </S.MemberListContainer>
      </S.MainContainer>
    </>
  );
};

export default MemberManagement;
